import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { 
  Monitor, 
  Lock, 
  AppWindow, 
  Shield, 
  MapPin, 
  FileText,
  Headphones,
  BarChart3,
  Brain,
  Rocket,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Link,
  HelpCircle
} from "lucide-react";
import scalefusionBanner from "@/assets/banners/scalefusion-banner.jpg";
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
   className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${scalefusionBanner})` }}
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
          >  Scalefusion: Unified <br />
            <span className="text-[#38B6FF]">Endpoint Security Management</span>
          
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Scalefusion is a unified endpoint management platform that secures and manages Android, iOS, Windows, and macOS devices from one console. Shivaami, a certified Scalefusion partner, helps enterprises deploy device security solutions across India.
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
    title: "Multi-Platform Device Management",
    description: "Manage Android, iOS, Windows, and macOS devices from one dashboard. A single pane of glass reduces administrative complexity. Unified policies apply across different device types."
  },
  {
    icon: Lock,
    title: "Kiosk and Lockdown Mode",
    description: "Transform devices into dedicated kiosks for specific applications. Lock down features to prevent unauthorized usage. Perfect for retail, healthcare, and field operations."
  },
  {
    icon: AppWindow,
    title: "Application Management",
    description: "Push, update, and remove apps remotely across all managed devices. App blacklisting prevents the installation of unauthorized software. Enterprise app stores simplify the distribution of internal applications."
  },
  {
    icon: Shield,
    title: "Security and Compliance",
    description: "Enforce password policies, encryption, and screen lock requirements. Remote wipe protects data on lost or stolen devices. Compliance reporting demonstrates adherence to security standards."
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description: "Real-time GPS tracking shows device locations on a map. Geofencing triggers alerts when devices enter or exit defined areas. Historical location data supports audit and compliance needs."
  },
  {
    icon: FileText,
    title: "Content Management",
    description: "Distribute documents, videos, and media to devices remotely. Content updates push automatically to targeted device groups. Secure file sharing eliminates email attachments."
  },
  {
    icon: Headphones,
    title: "Remote Support and Control",
    description: "View device screens and provide remote assistance. Troubleshoot issues without physical access to devices. Remote commands restart devices or clear caches."
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Monitor app usage, data consumption, and battery performance. Reports identify devices needing attention or replacement. Insights optimize device lifecycle management."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Scalefusion Delivers
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
    description: "We assess your device landscape and define management requirements. Our team recommends policies for security, compliance, and operational needs. You get a deployment plan aligned with your business objectives."
  },
  {
    image: technicalDeployment,
    icon: Rocket,
    title: "Deployment and Integration",
    description: "Shivaami configures Scalefusion policies and organizational structure. We handle device enrollment using bulk methods or self-service options. Your devices come under management quickly and efficiently."
  },
  {
    image: securityConfig,
    icon: Settings,
    title: "Security and Compliance",
    description: "Our experts implement security policies, app controls, and compliance settings. We configure location tracking, geofencing, and content distribution. Audit capabilities support governance requirements."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train IT administrators on platform features and best practices. End-user guides explain device enrollment and usage policies. Support procedures address common device management scenarios."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides ongoing management and policy optimization. We monitor device health, resolve issues, and implement updates. Regular reviews ensure your MDM strategy evolves with business needs."
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
          As a Scalefusion partner, we handle licensing, renewals, and technical escalations
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

const Scalefusion = () => {
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
      question: "Can I integrate Scalefusion with my existing IT infrastructure?",
      answer: "Yes, Scalefusion integrates seamlessly with existing IT systems, including Active Directory, Azure AD, G Suite, and MDM/EMM platforms. It supports APIs for custom integrations, enabling unified device management across Android, iOS, Windows, and macOS—ideal for Indian enterprises with hybrid infrastructure."
    },
    {
      question: "Which device management service offers remote app installation and updates?",
      answer: "Scalefusion enables remote app installation, updates, and removal across Android, iOS, Windows, and macOS devices from a centralized dashboard. IT admins can push enterprise apps, configure settings, and automate updates—essential for managing distributed teams across India and APAC regions."
    },
    {
      question: "Where can I find cloud-based mobile device management tools?",
      answer: "Scalefusion is a cloud-based MDM/UEM platform available globally, including India and APAC markets. It offers device enrollment, security policies, kiosk mode, and remote management for Android, iOS, Windows, and macOS, accessible via web console or mobile app with local support."
    },
    {
      question: "How do I set up kiosk mode on corporate tablets using Scalefusion?",
      answer: "Scalefusion's kiosk mode locks tablets to specific apps or websites. Enroll devices, create a kiosk profile in the dashboard, select allowed apps/URLs, configure settings (disable home/power buttons), and deploy remotely. Ideal for retail, healthcare, and education sectors in India."
    },
    {
      question: "What are Scalefusion's pricing plans for device management?",
      answer: "Scalefusion offers flexible pricing starting at $2/device/month for essential MDM features. Plans include Growth ($3/device/month), business ($5/device/month), and Enterprise ($6/device/month) with advanced security, kiosk mode, and app management. Annual billing available. Contact for India-specific pricing with local billing and volume discounts."
    },
    {
      question: "Does Scalefusion support multi-OS device management for enterprises?",
      answer: "Yes, Scalefusion is a Unified Endpoint Management (UEM) platform supporting Android, iOS, Windows, macOS, Linux, and Wear OS from one console. Manage BYOD, corporate-owned devices, and rugged hardware with unified policies—perfect for diverse IT environments across Indian and APAC enterprises."
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

              {/* <Link to="/contact" className="inline-block mt-6">
                <Button className="bg-[#0C4594] hover:bg-[#0a3d80] text-white font-medium px-6 py-3 rounded-xl">
                  Have more questions? Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link> */}
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
    "name": "Can I integrate Scalefusion with my existing IT infrastructure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Scalefusion integrates seamlessly with existing IT systems, including Active Directory, Azure AD, G Suite, and MDM/EMM platforms. It supports APIs for custom integrations, enabling unified device management across Android, iOS, Windows, and macOS—ideal for Indian enterprises with hybrid infrastructure."
    }
  },{
    "@type": "Question",
    "name": "Which device management service offers remote app installation and updates?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Scalefusion enables remote app installation, updates, and removal across Android, iOS, Windows, and macOS devices from a centralized dashboard. IT admins can push enterprise apps, configure settings, and automate updates—essential for managing distributed teams across India and APAC regions."
    }
  },{
    "@type": "Question",
    "name": "Where can I find cloud-based mobile device management tools?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Scalefusion is a cloud-based MDM/UEM platform available globally, including India and APAC markets. It offers device enrollment, security policies, kiosk mode, and remote management for Android, iOS, Windows, and macOS, accessible via web console or mobile app with local support."
    }
  },{
    "@type": "Question",
    "name": "How do I set up kiosk mode on corporate tablets using Scalefusion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Scalefusion's kiosk mode locks tablets to specific apps or websites. Enroll devices, create a kiosk profile in the dashboard, select allowed apps/URLs, configure settings (disable home/power buttons), and deploy remotely. Ideal for retail, healthcare, and education sectors in India."
    }
  },{
    "@type": "Question",
    "name": "What are Scalefusion's pricing plans for device management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Scalefusion offers flexible pricing starting at $2/device/month for essential MDM features. Plans include Growth ($3/device/month), business ($5/device/month), and Enterprise ($6/device/month) with advanced security, kiosk mode, and app management. Annual billing available. Contact for India-specific pricing with local billing and volume discounts."
    }
  },{
    "@type": "Question",
    "name": "Does Scalefusion support multi-OS device management for enterprises?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Scalefusion is a Unified Endpoint Management (UEM) platform supporting Android, iOS, Windows, macOS, Linux, and Wear OS from one console. Manage BYOD, corporate-owned devices, and rugged hardware with unified policies—perfect for diverse IT environments across Indian and APAC enterprises."
    }
  }]
}

return (
    <>
     <Helmet>
<title>Scalefusion MDM Partner India | Device Management by Shivaami</title>
 <meta name="description" content="Deploy Scalefusion mobile device management with Shivaami. Secure and manage Android, iOS, Windows, and macOS devices. Expert MDM implementation and support." />
<link rel="canonical" href="https://www.shivaami.com/scalefusion" />
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

export default Scalefusion;
