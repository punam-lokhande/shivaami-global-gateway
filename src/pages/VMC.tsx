import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRegion } from '@/contexts/RegionContext';
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Image, 
  Shield, 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  Globe, 
  Settings as SettingsIcon, 
  Heart,
  Brain,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import vmcBanner from "@/assets/banners/vmc-banner.jpg";
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
          style={{ backgroundImage: `url(${vmcBanner})` }}
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <span className="text-[#38B6FF]">VMC: Verified</span> Brand Display
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Verified Mark Certificates display brand logos beside authenticated emails, requiring DMARC enforcement and trademark verification for trust. Shivaami helps organisations obtain and deploy VMCs in India and the US.
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
    icon: Image,
    title: "Brand Logo Display",
    description: "Your registered trademark logo appears in email clients supporting BIMI. Increased visibility differentiates legitimate emails from phishing. Visual recognition builds immediate trust with recipients."
  },
  {
    icon: Shield,
    title: "Email Authentication Requirement",
    description: "VMCs require DMARC enforcement at reject or quarantine policy. Ensures only authenticated emails display your logo. Combined security and branding benefit."
  },
  {
    icon: Award,
    title: "Trademark Verification",
    description: "Certificate authorities verify your legal trademark ownership. Prevents unauthorized use of your brand in email. Legal protection complements technical security."
  },
  {
    icon: TrendingUp,
    title: "Improved Engagement",
    description: "Branded emails receive higher open rates than generic messages. Logo recognition encourages recipients to interact with content. Marketing and transactional emails benefit equally."
  },
  {
    icon: AlertTriangle,
    title: "Phishing Protection",
    description: " Absence of logo signals potential phishing to recipients. Visual indicator helps users identify legitimate communications. Reduces successful phishing attacks against your customers."
  },
  {
    icon: Globe,
    title: "Cross-Platform Support",
    description: "Major email providers, including Gmail, Apple Mail, and Yahoo, support BIMI. Growing adoption increases brand visibility over time. Future-proof investment in email branding."
  },
  {
    icon: SettingsIcon,
    title: "Simplified Management",
    description: "Single VMC publishes logo across all supporting email clients. No need to configure each platform separately. A centralized approach simplifies brand consistency."
  },
  {
    icon: Heart,
    title: "Compliance and Trust",
    description: "Demonstrates commitment to email security and authentication. Builds credibility with security-conscious recipients. Supports brand reputation protection initiatives."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Verified Mark Certificates Deliver
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Increase brand visibility, build trust, and improve email engagement
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
    description: "We assess your DMARC readiness for VMC requirements. Our team guides the trademark verification process. You get clear steps to achieve logo display in inboxes."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami implements DMARC enforcement if not already in place. We prepare logo files meeting technical specifications. Certificate procurement and DNS configuration complete the process."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts ensure DMARC enforcement meets VMC requirements. We verify trademark documentation completeness. Legal and technical requirements align properly."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We explain VMC benefits to marketing and security teams. Communication addresses timeline and requirements. Stakeholders understand value and process."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami monitors VMC validity and email authentication. We handle renewals and maintain proper configuration. Your brand remains visible in customers' inboxes consistently."
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
          Our email security and branding expertise ensures VMC success
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
            Display Your Brand in Email Inboxes with VMC
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule a consultation with our email specialists
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {[
              "DMARC readiness assessment",
              "Trademark verification guidance",
              "Logo preparation support",
              "Certificate procurement",
              "DNS configuration",
              "Ongoing monitoring"
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

const VMC = () => {
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
      question: "What are the key functions of Verified Mark Certificates (VMC)?",
      answer: "Verified Mark Certificates protect and authenticate your organization's brand identity in email communications. They display your official logo next to sent emails, prevent spammers from misusing your brand, and build recipient trust by visually confirming the legitimacy of your emails."
    },
    {
      question: "How many VMCs are required for multiple domains?",
      answer: "A single VMC can cover all domains under one organization, provided you use the same logo across all email channels. However, if you wish to display different logos for different domains, you will need to purchase a separate VMC for each unique logo."
    },
    {
      question: "Is a registered trademark required to obtain a VMC?",
      answer: "Yes, a registered trademark is a mandatory requirement for obtaining a Verified Mark Certificate. Organizations must provide valid trademark registration documentation before a VMC can be issued and activated."
    },
    {
      question: "How does VMC work with DMARC authentication?",
      answer: "VMCs work in conjunction with DMARC, SPF, and DKIM email authentication protocols. Once your domain passes DMARC authentication, the VMC enables your registered logo to be displayed in the recipient's email inbox automatically."
    },
    {
      question: "What are the benefits of VMC for email marketing?",
      answer: "VMCs significantly improve email marketing performance by increasing brand visibility, boosting recipient trust, and improving email open rates. Displaying your authenticated logo helps distinguish legitimate emails from phishing attempts and strengthens brand recognition."
    },
    {
      question: "How long does it take to obtain a Verified Mark Certificate?",
      answer: "The VMC issuance process typically takes 3-5 business days after submitting all required documentation including trademark registration proof and domain validation. Shivaami assists organizations throughout the application process to ensure quick and hassle-free VMC deployment."
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
    "name": "What are the key functions of Verified Mark Certificates (VMC)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Verified Mark Certificates protect and authenticate your organization's brand identity in email communications. They display your official logo next to sent emails, prevent spammers from misusing your brand, and build recipient trust by visually confirming the legitimacy of your emails."
    }
  },{
    "@type": "Question",
    "name": "How many VMCs are required for multiple domains?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A single VMC can cover all domains under one organization, provided you use the same logo across all email channels. However, if you wish to display different logos for different domains, you will need to purchase a separate VMC for each unique logo."
    }
  },{
    "@type": "Question",
    "name": "Is a registered trademark required to obtain a VMC?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, a registered trademark is a mandatory requirement for obtaining a Verified Mark Certificate. Organizations must provide valid trademark registration documentation before a VMC can be issued and activated."
    }
  },{
    "@type": "Question",
    "name": "How does VMC work with DMARC authentication?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "VMCs work in conjunction with DMARC, SPF, and DKIM email authentication protocols. Once your domain passes DMARC authentication, the VMC enables your registered logo to be displayed in the recipient's email inbox automatically."
    }
  },{
    "@type": "Question",
    "name": "What are the benefits of VMC for email marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "VMCs significantly improve email marketing performance by increasing brand visibility, boosting recipient trust, and improving email open rates. Displaying your authenticated logo helps distinguish legitimate emails from phishing attempts and strengthens brand recognition."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to obtain a Verified Mark Certificate?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The VMC issuance process typically takes 3-5 business days after submitting all required documentation including trademark registration proof and domain validation. Shivaami assists organizations throughout the application process to ensure quick and hassle-free VMC deployment."
    }
  }]
}




  return (
    <>

  <Helmet>
<title>VMC Certificates Provider | Brand Indicators by Shivaami</title>
 <meta name="description" content="Get Verified Mark Certificates from Shivaami. Display your logo in email inboxes. Build trust and improve email engagement with VMC." />
<link rel="canonical" href="https://www.shivaami.com/vmc" />
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

export default VMC;
