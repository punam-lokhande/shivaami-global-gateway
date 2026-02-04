import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { 
  KeyRound, 
  ShieldCheck, 
  UserCog, 
  Brain as BrainIcon, 
  Lock, 
  FolderSync, 
  Code, 
  BarChart3,
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
import miniOrangeBanner from "@/assets/banners/miniorange-banner.jpg";
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
      className="relative w-full min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${miniOrangeBanner})` }}
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
            <span className="text-[#38B6FF]">miniOrange: Flexible </span> Identity Security Solutions
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          miniOrange is an identity and access management platform offering single sign-on, multi-factor authentication, and adaptive authentication at competitive pricing. Shivaami partners with miniOrange to implement and support secure IAM solutions for businesses across India.
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
    icon: KeyRound,
    title: "Single Sign-On",
    description: " Connect cloud and on-premises applications with unified authentication. Pre-built connectors support popular business applications. Custom integrations use SAML, OAuth, or LDAP protocols."
  },
  {
    icon: ShieldCheck,
    title: "Multi-Factor Authentication",
    description: "Layer additional security with OTP, push notifications, or biometrics. Flexible MFA options match user preferences and device capabilities. Adaptive authentication adjusts based on risk context."
  },
  {
    icon: UserCog,
    title: "User Provisioning",
    description: "Automate account creation and updates across connected applications. Directory sync keeps user profiles consistent. Deprovisioning removes access when employees leave."
  },
  {
    icon: BrainIcon,
    title: "Adaptive Authentication",
    description: "Risk-based policies trigger additional verification for suspicious logins. Location, device, and behavior analysis detect anomalies. Smart authentication reduces friction for trusted access."
  },
  {
    icon: Lock,
    title: "Password Management",
    description: "Self-service password reset reduces helpdesk burden. Password policies enforce strength requirements automatically. Password vaults secure credentials for shared accounts."
  },
  {
    icon: FolderSync,
    title: "Directory Integration",
    description: "Sync with Active Directory, Azure AD, or Google Workspace. Cloud directory provides centralized user management. LDAP support connects legacy systems."
  },
  {
    icon: Code,
    title: "API Security",
    description: "OAuth and JWT protect API endpoints and microservices. Token management controls access to backend resources. Developer tools simplify secure integration."
  },
  {
    icon: BarChart3,
    title: "Reporting and Compliance",
    description: "Audit logs track authentication events and user activity. Compliance reports support regulatory requirements. Security dashboards identify access patterns and risks."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What miniOrange Delivers
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
    description: "We evaluate your identity requirements and application landscape. Our team designs SSO architecture and authentication policies. You get a practical implementation plan within your budget."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami configures miniOrange and connects your applications. We integrate with existing directories and identity sources. Your users gain secure access with minimal disruption."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts implement MFA policies and adaptive authentication rules. We configure user provisioning and lifecycle automation. Audit capabilities support governance needs."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We provide clear communication about authentication changes. Training materials help users enroll in MFA successfully. Support resources address common access questions."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami manages your miniOrange environment with proactive support. We add new integrations and adjust policies as needs change. Regular reviews optimize security and user experience."
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

const MiniOrange = () => {
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
      question: "What is miniOrange used for?",
      answer: "miniOrange is used for identity and access management (IAM) to secure user access across applications and systems. Organizations use miniOrange for single sign-on (SSO), multi-factor authentication (MFA), user provisioning, and adaptive authentication in cloud, on-premises, and hybrid environments."
    },
    {
      question: "How does miniOrange single sign-on work?",
      answer: "miniOrange Single Sign-On allows users to access multiple applications with one set of credentials. It connects applications using standards such as SAML, OAuth, LDAP, and OpenID Connect, providing centralized authentication while reducing password fatigue and login-related security risks."
    },
    {
      question: "What types of multi-factor authentication does miniOrange support?",
      answer: "miniOrange supports multiple MFA methods including one-time passwords (OTP), push notifications, email-based verification, SMS, biometrics, and authenticator apps. Organizations can apply adaptive MFA based on user location, device, or behavior to balance security and usability."
    },
    {
      question: "How does miniOrange support user provisioning and lifecycle management?",
      answer: "miniOrange automates user provisioning by syncing identities across connected applications and directories. It ensures new users receive the right access immediately and automatically deprovisions accounts when employees leave, reducing security gaps caused by orphaned accounts."
    },
    {
      question: "How is miniOrange different from Okta or Microsoft Entra ID?",
      answer: "miniOrange offers similar IAM capabilities such as SSO, MFA, and directory integration, but is often chosen for its flexibility, customization options, and cost-effective pricing. It is well-suited for small to mid-sized enterprises and organizations looking for strong IAM controls within budget constraints."
    },
    {
      question: "How can businesses in India implement miniOrange?",
      answer: "Businesses in India can implement miniOrange by working with an authorized partner like Shivaami. The engagement includes IAM assessment, application integration, SSO and MFA deployment, directory synchronization, policy configuration, and ongoing managed support for secure and scalable identity management."
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


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is miniOrange used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "miniOrange is used for identity and access management (IAM) to secure user access across applications and systems. Organizations use miniOrange for single sign-on (SSO), multi-factor authentication (MFA), user provisioning, and adaptive authentication in cloud, on-premises, and hybrid environments."
    }
  },{
    "@type": "Question",
    "name": "How does miniOrange single sign-on work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "miniOrange Single Sign-On allows users to access multiple applications with one set of credentials. It connects applications using standards such as SAML, OAuth, LDAP, and OpenID Connect, providing centralized authentication while reducing password fatigue and login-related security risks."
    }
  },{
    "@type": "Question",
    "name": "What types of multi-factor authentication does miniOrange support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "miniOrange supports multiple MFA methods including one-time passwords (OTP), push notifications, email-based verification, SMS, biometrics, and authenticator apps. Organizations can apply adaptive MFA based on user location, device, or behavior to balance security and usability."
    }
  },{
    "@type": "Question",
    "name": "How does miniOrange support user provisioning and lifecycle management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "miniOrange automates user provisioning by syncing identities across connected applications and directories. It ensures new users receive the right access immediately and automatically deprovisions accounts when employees leave, reducing security gaps caused by orphaned accounts."
    }
  },{
    "@type": "Question",
    "name": "How is miniOrange different from Okta or Microsoft Entra ID?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "miniOrange offers similar IAM capabilities such as SSO, MFA, and directory integration, but is often chosen for its flexibility, customization options, and cost-effective pricing. It is well-suited for small to mid-sized enterprises and organizations looking for strong IAM controls within budget constraints."
    }
  },{
    "@type": "Question",
    "name": "How can businesses in India implement miniOrange?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Businesses in India can implement miniOrange by working with an authorized partner like Shivaami. The engagement includes IAM assessment, application integration, SSO and MFA deployment, directory synchronization, policy configuration, and ongoing managed support for secure and scalable identity management."
    }
  }]
}



  return (
    <>
      <Helmet>
<title>miniOrange Partner in India & USA | IAM Solutions by Shivaami</title>
 <meta name="description" content="Deploy miniOrange identity and access management with Shivaami. Single sign-on, MFA, and user provisioning. Cost-effective IAM for enterprises." />
<link rel="canonical" href="https://www.shivaami.com/miniorange" />
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

export default MiniOrange;
