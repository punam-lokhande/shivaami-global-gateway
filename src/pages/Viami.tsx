import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetStartedDialog from "@/components/GetStartedDialog";
import { 
  MessageSquare, 
  Users, 
  Video, 
  Smartphone, 
  Shield, 
  Key,
  BarChart3,
  Settings,
  Brain,
  Rocket,
  Lock,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Link,
  HelpCircle
} from "lucide-react";
import viamiBanner from "@/assets/banners/viami-banner.jpg";
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
          style={{ backgroundImage: `url(${viamiBanner})` }}
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
          >  Viami: Unified Digital<br />
            <span className="text-[#38B6FF]"> Workplace Platform</span>

         
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Viami is a unified digital workplace platform integrating email, messaging, video conferencing, and productivity apps into one secure environment. Shivaami partners with Viami to deploy and manage integrated workplace solutions for Indian enterprises.
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
    icon: MessageSquare,
    title: "Unified Communication Hub",
    description: "A Centralized platform that connects email, chat, voice, and video in one interface. Context switching reduces as all conversations happen in one place. Search capabilities span across all communication channels."
  },
  {
    icon: Users,
    title: "Collaboration Workspace",
    description: "Document sharing and co-editing happen within an integrated workspace. Project channels organize team discussions and files. Task management tracks work progress and assignments."
  },
  {
    icon: Video,
    title: "Video Conferencing Integration",
    description: "HD video meetings launch directly from chat or calendar. Screen sharing and recording capabilities come standard. Participant controls manage large meetings effectively."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Native mobile apps provide full functionality on smartphones and tablets. Offline mode ensures productivity during connectivity gaps. Push notifications keep users engaged and responsive."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption protects communications across all channels. Role-based access controls limit feature availability by user type. Compliance logging supports audit and governance requirements."
  },
  {
    icon: Key,
    title: "Directory Integration",
    description: "SSingle sign-on connects with existing identity providers. User provisioning syncs automatically with your directory. Group membership determines access and permissions."
  },
  {
    icon: BarChart3,
    title: "Analytics and Insights",
    description: "Usage dashboards show adoption patterns and engagement metrics. Communication analytics identify collaboration bottlenecks. Storage reports track capacity and growth trends."
  },
  {
    icon: Settings,
    title: "Customization Options",
    description: "White-label capabilities match your corporate branding. API access enables integration with business applications. Custom workflows automate routine communication tasks."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What Viami Delivers
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
    description: "We assess your current tool landscape and identify consolidation opportunities. Our team designs a unified platform architecture aligned with business needs. You get a roadmap for reducing complexity and improving user experience."
  },
  {
    image: technicalDeployment,
    icon: Rocket,
    title: "Deployment and Integration",
    description: "Shivaami configures Viami to integrate with your existing systems. We migrate data from legacy platforms and establish connectivity. Your teams start working in the unified environment with minimal disruption."
  },
  {
    image: securityConfig,
    icon: Lock,
    title: "Security and Compliance",
    description: "Our security experts implement encryption, access controls, and audit logging. We configure data retention policies and compliance settings. Integration with your identity provider ensures secure authentication."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We deliver training programs that demonstrate the benefits of unified communication. Change management support addresses resistance and builds momentum. Quick reference materials accelerate learning and adoption."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami provides managed services with ongoing platform optimization. We monitor performance, resolve issues, and implement updates. Regular reviews identify opportunities to enhance functionality and adoption."
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

const Viami = () => {
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
      question: "What is Viami, and how does it help businesses with cybersecurity?",
      answer: "Viami is a comprehensive security software offering essential cybersecurity features like custom login pages, 2FA, password policies, IP/device restrictions, and access control. It's designed as the first line of defense for SMBs and startups managing sensitive data in India and globally."
    },
    {
      question: "What are Viami's pricing plans and features?",
      answer: "Viami offers three plans: Free Plan (up to 10 users, basic features), Individual Features at ₹240/user/year per feature (choose up to 3, ₹240/year renewal), and Complete Security Package at ₹880/user/year for the first year, saving ₹10,400 compared to individual features."
    },
    {
      question: "Does Viami support two-factor authentication (2FA) for businesses?",
      answer: "Yes, Viami includes built-in 2FA (Two-Factor Authentication) to add an extra security layer beyond passwords. This significantly reduces unauthorized access risks, even if credentials are compromised, essential for remote teams and data-sensitive businesses in India and APAC."
    },
    {
      question: "How does Viami's IP and device restriction feature work?",
      answer: "Viami allows you to whitelist specific IP addresses and register approved devices for network access. This ensures only authorized devices and locations can connect to your systems, preventing unauthorized access, critical for distributed teams and compliance requirements in India."
    },
    {
      question: "Can Viami block personal Gmail access on company devices?",
      answer: "Yes, Viami's Personal Gmail Block feature prevents employees from accessing personal Gmail during work hours on company devices/networks. This maintains productivity and reduces data leak risks through personal email, valuable for Indian enterprises with BYOD and remote work policies."
    },
    {
      question: "How quickly can I implement Viami in my organization?",
      answer: "Viami can be implemented within 24-48 hours with guided setup and technical support. The platform integrates easily with existing systems, offering fast deployment for SMBs and startups. Priority support is available for complete package customers across India and APAC."
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




const faqSchema =
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Viami, and how does it help businesses with cybersecurity?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Viami is a comprehensive security software offering essential cybersecurity features like custom login pages, 2FA, password policies, IP/device restrictions, and access control. It's designed as the first line of defense for SMBs and startups managing sensitive data in India and globally."
    }
  },{
    "@type": "Question",
    "name": "What are Viami's pricing plans and features?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Viami offers three plans: Free Plan (up to 10 users, basic features), Individual Features at ₹240/user/year per feature (choose up to 3, ₹240/year renewal), and Complete Security Package at ₹880/user/year for the first year, saving ₹10,400 compared to individual features."
    }
  },{
    "@type": "Question",
    "name": "Does Viami support two-factor authentication (2FA) for businesses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Viami includes built-in 2FA (Two-Factor Authentication) to add an extra security layer beyond passwords. This significantly reduces unauthorized access risks, even if credentials are compromised, essential for remote teams and data-sensitive businesses in India and APAC."
    }
  },{
    "@type": "Question",
    "name": "How does Viami's IP and device restriction feature work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Viami allows you to whitelist specific IP addresses and register approved devices for network access. This ensures only authorized devices and locations can connect to your systems, preventing unauthorized access, critical for distributed teams and compliance requirements in India."
    }
  },{
    "@type": "Question",
    "name": "Can Viami block personal Gmail access on company devices?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Viami's Personal Gmail Block feature prevents employees from accessing personal Gmail during work hours on company devices/networks. This maintains productivity and reduces data leak risks through personal email, valuable for Indian enterprises with BYOD and remote work policies."
    }
  },{
    "@type": "Question",
    "name": "How quickly can I implement Viami in my organization?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Viami can be implemented within 24-48 hours with guided setup and technical support. The platform integrates easily with existing systems, offering fast deployment for SMBs and startups. Priority support is available for complete package customers across India and APAC."
    }
  }]
}






  return (
    <>   <Helmet>
<title>Google AI Ultra for Business - Most Powerful AI | Shivaami</title>
 <meta name="description" content="Unleash Google AI Ultra's full potential with Shivaami. Get exclusive access to the Gemini app, Veo 3 video generation, Deep Research, and 30TB storage. Transform your enterprise." />
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

export default Viami;
