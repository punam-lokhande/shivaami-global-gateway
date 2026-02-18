import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Laptop, Settings, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Calendar,
  Cloud, Lock, Printer, BarChart3, Monitor, Tv,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from "@/components/GetStartedDialog";
import heroImage from '@/assets/banners/chrome-enterprise-banner.jpg';
import strategicPlanningImg from '@/assets/activation/strategic-planning.jpg';
import technicalDeploymentImg from '@/assets/activation/technical-deployment.jpg';
import securityConfigImg from '@/assets/activation/security-config.jpg';
import teamTrainingImg from '@/assets/activation/team-training.jpg';
import ongoingSupportImg from '@/assets/activation/ongoing-support.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Chrome Enterprise Device Management"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
          
            <span className="text-[#38B6FF]">Chrome Enterprise: Enterprise</span> Device Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
           Chrome Enterprise provides centralised management and security for ChromeOS devices & browsers through cloud-based policy control. Shivaami, a Chrome Enterprise partner, implements device management for organisations in India and the US.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
}

function FeaturesSection() {
  const features = [
    {
      icon: Settings,
      title: 'Centralized Policy Management',
      desc: 'Control device settings from the cloud-based admin console. Policies apply automatically when devices connect. No on-premises infrastructure required for management.',
    },
    {
      icon: Monitor,
      title: 'Chrome Browser Management',
      desc: 'Extend policies to Chrome browser on Windows, Mac, and Linux. Consistent security across all platforms. Control extensions, bookmarks, and browser features.',
    },
    {
      icon: Cloud,
      title: 'Application Control',
      desc: 'Push web and Android applications to managed devices. Force-install required apps and block unauthorized software. Enterprise app store simplifies distribution.',
    },
    {
      icon: Lock,
      title: 'Network Configuration',
      desc: 'Pre-configure WiFi, VPN, and certificate settings. Devices connect to corporate networks automatically. Secure connectivity without user intervention.',
    },
    {
      icon: Printer,
      title: 'Printing Management',
      desc: 'Cloud printing eliminates the need for printer drivers. Users access any managed printer from any device. Centralized control simplifies printer fleet management.',
    },
    {
      icon: Tv,
      title: 'Kiosk and Signage',
      desc: 'Lock devices to a single application or auto-launch content. Session management for shared devices and public kiosks. Scheduled content updates for digital signage.',
    },
    {
      icon: BarChart3,
      title: 'Reporting and Analytics',
      desc: 'Device inventory shows hardware specifications and status. Application usage reports identify adoption patterns. Security reports demonstrate compliance posture.',
    },
    {
      icon: Users,
      title: 'User and Device Policies',
      desc: 'Separate policies for different user groups or device types. Organizational unit structure matches the company hierarchy. Granular control enables precise management.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Chrome Enterprise Delivers
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-xl hover:border-[#38B6FF]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FlipCard({ title, description, image, icon: Icon }: { title: string; description: string; image: string; icon: React.ComponentType<{ className?: string }> }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[280px] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/70 to-[#0C4594]/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="w-10 h-10 rounded-lg bg-[#38B6FF] flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            <div className="mt-2 flex items-center gap-2 text-white/70 text-xs">
              <span>Hover to learn more</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-[#0C4594] to-[#082d61] p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute inset-0 opacity-20">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-lg bg-[#38B6FF] flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 text-xs leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Laptop,
      title: 'Strategy and Planning',
      desc: 'We assess your device management requirements and design an organizational structure. Our team identifies policies and applications for deployment. You get Chrome Enterprise architecture aligned with business needs.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'Deployment and Integration',
      desc: 'Shivaami configures Chrome Enterprise and establishes device enrollment. We create policies, configure applications, and test workflows. Your management console controls devices effectively.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts implement security policies and access controls. We configure device restrictions and data protection settings. Audit capabilities support governance requirements.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'Admin Training',
      desc: 'We train IT administrators on console features and best practices. Documentation supports ongoing device management. Procedures ensure consistent policy application.',
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      desc: 'Shivaami provides ongoing management guidance and policy optimization. We adjust configurations as requirements evolve. Regular reviews identify opportunities for improvement.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed
          </h2>
        </motion.div>

        <motion.div 
          {...staggerContainer} 
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-8xl mx-auto"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 }
              }}
            >
              <FlipCard 
                title={step.title}
                description={step.desc}
                image={step.image}
                icon={step.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { Helmet } from 'react-helmet-async';

export default function ChromeEnterprise() {
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
      question: "What is Chrome Enterprise?",
      answer: "Chrome Enterprise is a comprehensive solution that includes the Chrome browser, ChromeOS devices, and cloud-based management tools. It integrates seamlessly with Google Workspace and Google Cloud Platform for secure business operations."
    },
    {
      question: "Can we use Chrome Enterprise from any device?",
      answer: "Yes, Chrome Enterprise allows users to access their browser profile, bookmarks, and settings from any device. The single sign-on feature automatically syncs user data across all Chrome Enterprise devices."
    },
    {
      question: "Is it safe to use Chrome Enterprise?",
      answer: "Yes, Chrome Enterprise is highly secure with built-in malware protection, automatic security updates, data encryption, and advanced admin controls to protect company data and manage device access."
    },
    {
      question: "How productive is Chrome Enterprise?",
      answer: "Chrome Enterprise enhances employee productivity through fast performance, seamless device synchronization, centralized management, and integration with business tools and applications."
    },
    {
      question: "Can we get support for legacy applications?",
      answer: "Yes, Chrome Enterprise supports legacy applications through the Chrome Legacy Browser Support extension, allowing users to seamlessly access older web apps and browsers when needed."
    },
    {
      question: "What management capabilities does Chrome Enterprise offer?",
      answer: "Chrome Enterprise provides centralized cloud-based management through the Google Admin console, allowing IT administrators to configure policies, deploy apps, manage users, and monitor devices from a single dashboard."
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
                    className="bg-white border border-[#e2e8f0] rounded-xl px-4 overflow-hidden hover:border-[#38B6FF]/30 transition-colors">
                    <AccordionTrigger className="text-[#0C4594] hover:text-[#38B6FF] text-left py-4 hover:no-underline text-sm">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#64748b] pb-4 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Link to="/contact" className="inline-block mt-6">
                <Button className="bg-[#0C4594] hover:bg-[#0a3d80] text-white font-medium px-6 py-3 rounded-xl">
                  Have more questions? Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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
    "name": "What is Chrome Enterprise?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chrome Enterprise is a comprehensive solution that includes the Chrome browser, ChromeOS devices, and cloud-based management tools. It integrates seamlessly with Google Workspace and Google Cloud Platform for secure business operations."
    }
  },{
    "@type": "Question",
    "name": "Can we use Chrome Enterprise from any device?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Chrome Enterprise allows users to access their browser profile, bookmarks, and settings from any device. The single sign-on feature automatically syncs user data across all Chrome Enterprise devices."
    }
  },{
    "@type": "Question",
    "name": "Is it safe to use Chrome Enterprise?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Chrome Enterprise is highly secure with built-in malware protection, automatic security updates, data encryption, and advanced admin controls to protect company data and manage device access."
    }
  },{
    "@type": "Question",
    "name": "How productive is Chrome Enterprise?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chrome Enterprise enhances employee productivity through fast performance, seamless device synchronization, centralized management, and integration with business tools and applications."
    }
  },{
    "@type": "Question",
    "name": "Can we get support for legacy applications?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Chrome Enterprise supports legacy applications through the Chrome Legacy Browser Support extension, allowing users to seamlessly access older web apps and browsers when needed."
    }
  },{
    "@type": "Question",
    "name": "What management capabilities does Chrome Enterprise offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chrome Enterprise provides centralized cloud-based management through the Google Admin console, allowing IT administrators to configure policies, deploy apps, manage users, and monitor devices from a single dashboard."
    }
  }]
}






  return (
<>
 <Helmet>
<title>Chrome Enterprise Partner India | Device Management by Shivaami</title>
 <meta name="description" content="Deploy Chrome Enterprise with Shivaami. Centralized management for Chromebook, Chromebox, and Chrome browser. Expert implementation and support." />
<link rel="canonical" href="https://www.shivaami.com/chrome-enterprise" />
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
}