import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  KeyRound, 
  ShieldCheck, 
  FolderSync, 
  UserCog, 
  Lock, 
  Code, 
  Crown, 
  BarChart3,
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
import oktaBanner from "@/assets/banners/okta-banner.jpg";
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
          style={{ backgroundImage: `url(${oktaBanner})` }}
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
          <span className="text-[#38B6FF]">Okta : Secure</span>  Identity Access Management
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >Okta is a cloud identity platform providing single sign-on, multi-factor authentication, and lifecycle management for secure access. Shivaami, a certified Okta partner, designs and implements identity solutions for Indian enterprises with strong security controls.
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
    icon: KeyRound,
    title: "Single Sign-On (SSO)",
    description: " Users access all applications with one set of credentials. Pre-built integrations support thousands of cloud and on-premises apps. Custom SAML and OIDC integrations connect any application."
  },
  {
    icon: ShieldCheck,
    title: "Multi-Factor Authentication",
    description: "Add a security layer with push notifications, SMS, or biometrics. Adaptive MFA adjusts requirements based on risk signals. Users get secure access without excessive friction."
  },
  {
    icon: FolderSync,
    title: "Universal Directory",
    description: " Centralized user store consolidates identity data from multiple sources. Profile attributes sync across connected applications automatically. Group memberships determine access permissions."
  },
  {
    icon: UserCog,
    title: "Lifecycle Management",
    description: "Automate user provisioning and deprovisioning across all applications. New hires get immediate access to required tools. Departing employees lose access instantly."
  },
  {
    icon: Lock,
    title: "Access Policies",
    description: " Context-aware policies enforce security based on user, device, location, and time. Conditional access blocks suspicious login attempts. Granular controls balance security and usability."
  },
  {
    icon: Code,
    title: "API Access Management",
    description: "Secure APIs with OAuth 2.0 and OpenID Connect. Token management controls access to backend services. Developer-friendly tools accelerate integration."
  },
  {
    icon: Crown,
    title: "Privileged Access Management",
    description: "Secure administrative access to critical systems. Just-in-time provisioning limits standing privileges. Session recording supports audit requirements."
  },
  {
    icon: BarChart3,
    title: "Reporting and Analytics",
    description: "Security insights identify anomalous authentication patterns. System logs support compliance and forensic investigations. Usage reports show application adoption trends."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Okta Delivers
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
    description: "We assess your current identity landscape and define target architecture. Our team identifies application integration requirements and access policies. You get a roadmap for centralized identity management."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami configures Okta tenants and connects your applications. We integrate with Active Directory, HR systems, and cloud platforms. Your users gain single sign-on without disrupting existing workflows."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our security experts design access policies and MFA requirements. We implement lifecycle automation to prevent orphaned accounts. Audit capabilities support governance and compliance frameworks."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We communicate changes to users with clear enrollment instructions. Training helps teams understand new authentication methods. Support resources address common access issues."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed identity services with continuous optimization. We add new application integrations and refine access policies. Regular security reviews identify opportunities to strengthen controls."
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

const Okta = () => {
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
      question: "What is Okta used for?",
      answer: "Okta is used for identity and access management (IAM) to securely control user access to applications and systems. Organizations use Okta for single sign-on (SSO), multi-factor authentication (MFA), user lifecycle management, and centralized identity governance across cloud and on-premises environments."
    },
    {
      question: "How does Okta single sign-on work?",
      answer: "Okta Single Sign-On allows users to access multiple applications using one set of credentials. It authenticates users through a centralized identity platform and connects applications using standards like SAML, OAuth 2.0, and OpenID Connect, reducing password fatigue and improving security."
    },
    {
      question: "What is Okta Verify, and how does it work?",
      answer: "Okta Verify is Okta’s authentication app used for multi-factor authentication. It enables secure login through push notifications, one-time passcodes, or biometric verification. Okta Verify strengthens account security while keeping the login experience fast and user-friendly."
    },
    {
      question: "How does Okta improve enterprise security?",
      answer: "Okta improves enterprise security by enforcing strong authentication, adaptive access policies, and automated user lifecycle management. Features like MFA, conditional access, and instant deprovisioning reduce the risk of credential misuse, unauthorized access, and orphaned accounts."
    },
    {
      question: "How is Okta different from Microsoft Entra ID (Azure AD)?",
      answer: "Okta is a vendor-neutral identity platform that integrates with thousands of applications across multiple cloud providers. Microsoft Entra ID is tightly integrated with the Microsoft ecosystem. Many enterprises choose Okta for complex, multi-cloud, or hybrid environments requiring broad application support and flexible identity governance."
    },
    {
      question: "How can businesses in India implement Okta?",
      answer: "Businesses in India can implement Okta by working with a certified Okta partner like Shivaami. The implementation includes identity assessment, application integration, SSO and MFA rollout, lifecycle automation, access policy design, and ongoing managed identity services for secure and scalable access management."
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
    "name": "What is Okta used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Okta is used for identity and access management (IAM) to securely control user access to applications and systems. Organizations use Okta for single sign-on (SSO), multi-factor authentication (MFA), user lifecycle management, and centralized identity governance across cloud and on-premises environments."
    }
  },{
    "@type": "Question",
    "name": "How does Okta single sign-on work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Okta Single Sign-On allows users to access multiple applications using one set of credentials. It authenticates users through a centralized identity platform and connects applications using standards like SAML, OAuth 2.0, and OpenID Connect, reducing password fatigue and improving security."
    }
  },{
    "@type": "Question",
    "name": "What is Okta Verify, and how does it work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Okta Verify is Okta’s authentication app used for multi-factor authentication. It enables secure login through push notifications, one-time passcodes, or biometric verification. Okta Verify strengthens account security while keeping the login experience fast and user-friendly."
    }
  },{
    "@type": "Question",
    "name": "How does Okta improve enterprise security?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Okta improves enterprise security by enforcing strong authentication, adaptive access policies, and automated user lifecycle management. Features like MFA, conditional access, and instant deprovisioning reduce the risk of credential misuse, unauthorized access, and orphaned accounts."
    }
  },{
    "@type": "Question",
    "name": "How is Okta different from Microsoft Entra ID (Azure AD)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Okta is a vendor-neutral identity platform that integrates with thousands of applications across multiple cloud providers. Microsoft Entra ID is tightly integrated with the Microsoft ecosystem. Many enterprises choose Okta for complex, multi-cloud, or hybrid environments requiring broad application support and flexible identity governance."
    }
  },{
    "@type": "Question",
    "name": "How can businesses in India implement Okta?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Businesses in India can implement Okta by working with a certified Okta partner like Shivaami. The implementation includes identity assessment, application integration, SSO and MFA rollout, lifecycle automation, access policy design, and ongoing managed identity services for secure and scalable access management."
    }
  }]
}





  return (
<> <Helmet>
<title>Okta Partner in India & USA | Identity Management Solutions by Shivaami</title>
 <meta name="description" content="Deploy Okta identity and access management with Shivaami. Expert SSO, MFA, and lifecycle management implementation. Certified Okta partner in India & USA." />
<link rel="canonical" href="https://www.shivaami.com/okta" />
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

export default Okta;
