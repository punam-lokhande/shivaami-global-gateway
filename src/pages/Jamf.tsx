import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { 
  Rocket, 
  Monitor, 
  Smartphone, 
  Tv, 
  AppWindow, 
  Shield, 
  RefreshCw, 
  Headphones,
  Brain,
  Settings,
  Lock,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Link,
  HelpCircle
} from "lucide-react";
import jamfBanner from "@/assets/banners/jamf-banner.jpg";
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
          style={{ backgroundImage: `url(${jamfBanner})` }}
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
          > Jamf: Manage Apple<br />
            <span className="text-[#38B6FF]"> Devices at Scale</span>
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Jamf is the leading Apple device management platform for Mac, iPad, iPhone, and Apple TV, offering seamless deployment and security. Shivaami partners with Jamf to deploy Apple solutions for enterprises across India.
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
    icon: Rocket,
    title: "Zero-Touch Deployment",
    description: "Devices enroll automatically when users first power them on. Pre-configured settings and apps install without IT intervention. Users start working immediately with corporate resources ready."
  },
  {
    icon: Monitor,
    title: "Comprehensive Mac Management",
    description: "Deploy macOS updates, security patches, and software remotely. FileVault encryption and firmware passwords enforce security standards. User and computer groups enable targeted management."
  },
  {
    icon: Smartphone,
    title: "iPad and iPhone Control",
    description: "Supervised mode provides advanced management capabilities. App distribution happens through managed app store or volume licensing. Shared iPad supports multiple users on single devices."
  },
  {
    icon: Tv,
    title: "Apple TV Management",
    description: "Configure Apple TV devices for conference rooms and digital signage. Push apps, wallpapers, and settings remotely. AirPlay restrictions control screen mirroring permissions."
  },
  {
    icon: AppWindow,
    title: "Self Service Portal",
    description: "Users install approved apps and perform basic troubleshooting independently. IT curates available options by department or role. Reduces helpdesk tickets and empowers users."
  },
  {
    icon: Shield,
    title: "Security and Compliance",
    description: "Enforce security baselines aligned with CIS benchmarks. Detect jailbroken or compromised devices automatically. Compliance reports demonstrate security posture to auditors."
  },
  {
    icon: RefreshCw,
    title: "Application Patching",
    description: "Automate updates for third-party applications beyond Apple software. Patch management reduces vulnerabilities and security risks. Flexible scheduling minimizes user disruption."
  },
  {
    icon: Headphones,
    title: "Remote Support Tools",
    description: "Screen sharing and remote commands accelerate troubleshooting. Lock, wipe, or locate lost devices remotely. Inventory data provides detailed device information for support tickets."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Jamf Delivers
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
    description: "We assess your Apple device strategy and define management goals. Our team designs enrollment workflows, policies, and organizational structure. You get a Jamf implementation plan aligned with Apple best practices."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami configures Jamf Pro with your Apple Business Manager or Apple School Manager. We create policies, packages, and configuration profiles. Your Apple devices enroll and configure automatically."
  },
  {
    image: securityConfig,
    icon: Lock,
    title: "Security and Compliance",
    description: "Our experts implement security baselines and compliance policies. We configure encryption, password requirements, and access controls. Audit reporting supports governance and compliance needs."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We train IT teams on Jamf administration and troubleshooting. Self Service portal design empowers users while reducing IT burden. Documentation supports ongoing operations."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed Jamf services with proactive monitoring. We handle policy updates, application patching, and issue resolution. Regular reviews optimize your Apple management strategy."
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

const Jamf = () => {
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
      question: "How can I manage Apple devices remotely in an enterprise environment?",
      answer: "Jamf enables centralized remote management of Mac, iPhone, iPad, and Apple TV devices. Deploy apps, enforce security policies, configure settings, and troubleshoot remotely from one cloud console. Available in India through authorized partners like Shivaami for seamless implementation and support."
    },
    {
      question: "What are the top device management solutions for macOS and iOS in India?",
      answer: "Jamf is the leading Apple-specific MDM solution trusted by enterprises in India and globally. Shivaami, an authorized Jamf partner, provides deployment, training, and local support. Jamf offers superior macOS/iOS management compared to generic MDM platforms, with Apple-native features and seamless integration."
    },
    {
      question: "Which companies offer cloud-based mobile device management for Apple products?",
      answer: "Jamf provides cloud-based MDM exclusively for Apple ecosystems (Mac, iPhone, iPad). In India, Shivaami is an authorized Jamf reseller offering complete solutions, including Jamf Pro, Jamf Now, and Jamf School, with implementation support, training, and ongoing technical assistance for enterprises."
    },
    {
      question: "What are Jamf's pricing plans for enterprise Apple device management?",
      answer: "Jamf pricing varies by product: Jamf Now (SMBs), Jamf Pro (enterprises), and Jamf School (education). Pricing is per-device annually with tiered discounts. Contact Shivaami for India-specific pricing, volume discounts, and bundled services, including deployment support and training for your organization."
    },
    {
      question: "Does Jamf support zero-touch deployment for Apple devices?",
      answer: "Yes, Jamf integrates with Apple Business Manager for zero-touch deployment. Devices automatically enroll, configure, and receive apps/policies upon activation, with no manual IT intervention. Shivaami helps Indian enterprises set up automated workflows, reducing deployment time and ensuring consistent security configurations across all Apple devices."
    },
    {
      question: "Why choose Jamf with Shivaami for Apple device management in India?",
      answer: "Jamf offers Apple-native MDM with superior macOS/iOS control, security, and user experience. Shivaami, as an authorized Jamf partner, provides end-to-end support, from license procurement and implementation to training and ongoing technical assistance, ensuring smooth Apple fleet management for Indian enterprises and APAC markets."
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
    "name": "How can I manage Apple devices remotely in an enterprise environment?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Jamf enables centralized remote management of Mac, iPhone, iPad, and Apple TV devices. Deploy apps, enforce security policies, configure settings, and troubleshoot remotely from one cloud console. Available in India through authorized partners like Shivaami for seamless implementation and support."
    }
  },{
    "@type": "Question",
    "name": "What are the top device management solutions for macOS and iOS in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Jamf is the leading Apple-specific MDM solution trusted by enterprises in India and globally. Shivaami, an authorized Jamf partner, provides deployment, training, and local support. Jamf offers superior macOS/iOS management compared to generic MDM platforms, with Apple-native features and seamless integration."
    }
  },{
    "@type": "Question",
    "name": "Which companies offer cloud-based mobile device management for Apple products?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Jamf provides cloud-based MDM exclusively for Apple ecosystems (Mac, iPhone, iPad). In India, Shivaami is an authorized Jamf reseller offering complete solutions, including Jamf Pro, Jamf Now, and Jamf School, with implementation support, training, and ongoing technical assistance for enterprises."
    }
  },{
    "@type": "Question",
    "name": "What are Jamf's pricing plans for enterprise Apple device management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Jamf pricing varies by product: Jamf Now (SMBs), Jamf Pro (enterprises), and Jamf School (education). Pricing is per-device annually with tiered discounts. Contact Shivaami for India-specific pricing, volume discounts, and bundled services, including deployment support and training for your organization."
    }
  },{
    "@type": "Question",
    "name": "Does Jamf support zero-touch deployment for Apple devices?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Jamf integrates with Apple Business Manager for zero-touch deployment. Devices automatically enroll, configure, and receive apps/policies upon activation, with no manual IT intervention. Shivaami helps Indian enterprises set up automated workflows, reducing deployment time and ensuring consistent security configurations across all Apple devices."
    }
  },{
    "@type": "Question",
    "name": "Why choose Jamf with Shivaami for Apple device management in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Jamf offers Apple-native MDM with superior macOS/iOS control, security, and user experience. Shivaami, as an authorized Jamf partner, provides end-to-end support, from license procurement and implementation to training and ongoing technical assistance, ensuring smooth Apple fleet management for Indian enterprises and APAC markets."
    }
  }]
}




  return (
    <>  <Helmet>
<title>Jamf Partner in India & USA | Apple Device Management by Shivaami</title>
 <meta name="description" content="Deploy Jamf for Apple device management with Shivaami. Expert implementation for Mac, iPad, iPhone, and Apple TV. Certified Jamf partner in India & USA." />
<link rel="canonical" href="https://www.shivaami.com/jamf" />
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

export default Jamf;
