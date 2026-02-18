import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Layers, RefreshCw, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Calendar,
  Zap, Cloud, Leaf, Settings, Monitor, Lock,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from "@/components/GetStartedDialog";
import heroImage from '@/assets/banners/chromeos-flex-banner.jpg';
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
          alt="ChromeOS Flex PC Modernization"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-24 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
          
            <span className="text-[#38B6FF]">ChromeOS Flex : Device </span><br /> Modernization Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
           ChromeOS Flex brings ChromeOS to existing PCs and Macs, turning ageing hardware into fast, secure devices. Shivaami helps enterprises in India and the US deploy ChromeOS Flex and manage migration.
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
      icon: RefreshCw,
      title: 'Hardware Reuse',
      desc: 'Install on existing Windows or Mac computers. Extend the useful life of older devices by years. Avoid premature hardware replacement costs.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      desc: 'Lightweight operating system runs efficiently on older hardware. Boot times improve dramatically compared to Windows. Consistent performance without slowdowns.',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Management',
      desc: 'Same Chrome Enterprise management as Chromebook. Centralized policies control all devices uniformly. No local infrastructure required.',
    },
    {
      icon: Settings,
      title: 'Automatic Updates',
      desc: 'Security patches and features update automatically. No user intervention or IT deployment needed. Devices stay current and protected.',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      desc: 'Verified boot prevents malware persistence. Sandboxing isolates applications and processes. Reduced attack surface compared to traditional operating systems.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Simplified Support',
      desc: 'Fewer moving parts reduce troubleshooting complexity. Cloud-based tools enable remote management. The IT burden decreases significantly.',
    },
    {
      icon: Monitor,
      title: 'User Familiarity',
      desc: 'Same Chrome browser and web applications as before. Google Workspace integration works identically. Minimal learning curve for users.',
    },
    {
      icon: Leaf,
      title: 'Sustainability Benefits',
      desc: 'Reduce electronic waste by extending device lifecycles. Lower carbon footprint than manufacturing new devices. Supports corporate sustainability initiatives.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Chrome OS Flex Delivers
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
      icon: Layers,
      title: 'Strategy and Planning',
      desc: 'We inventory your device fleet and assess Chrome OS Flex compatibility. Our team identifies suitable devices and migration priorities. You get a deployment plan with a phased rollout approach.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'Deployment and Integration',
      desc: 'Shivaami creates installation media and configures automated deployment. We migrate users, back up data, and install Chrome OS Flex. Your devices transform to Chrome OS with minimal disruption.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts implement Chrome Enterprise policies on converted devices. We configure security settings and access controls. Management ensures consistent protection across the fleet.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'User Enablement',
      desc: 'We communicate changes to affected users with clear guidance. Training addresses workflow differences and new features. Support resources help users adapt successfully.',
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      desc: 'Shivaami manages Chrome OS Flex devices alongside Chromebooks. We handle policy updates and troubleshooting. Regular reviews identify additional conversion candidates.',
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

export default function ChromeOSFlex() {
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
      question: "What is Chrome OS Flex?",
      answer: "Chrome OS Flex is a free, cloud-based operating system that can be installed on older Mac and PC devices. It provides a fast, secure computing experience and extends the life of existing hardware."
    },
    {
      question: "Why use Chrome OS Flex?",
      answer: "Chrome OS Flex helps organizations modernize their existing devices by converting them into secure, fast Chrome OS machines. This reduces e-waste, saves costs on new hardware, and improves device performance."
    },
    {
      question: "Are Google Play and Android apps supported by Chrome OS Flex?",
      answer: "No, Chrome OS Flex does not support Google Play or Android apps. However, users can access web-based applications and progressive web apps through the Chrome browser."
    },
    {
      question: "Will CloudReady customers have to pay for Chrome OS Flex?",
      answer: "CloudReady Home Edition users can upgrade to Chrome OS Flex for free. CloudReady Enterprise customers will need to migrate to Chrome OS Flex Enterprise Edition, which requires a license."
    },
    {
      question: "What are the system requirements for Chrome OS Flex?",
      answer: "Chrome OS Flex requires at least an Intel or AMD processor, 4 GB of RAM, and 16 GB of internal storage. A full list of certified devices is available on Google's official website."
    },
    {
      question: "Can I dual-boot Chrome OS Flex with another operating system?",
      answer: "No, Chrome OS Flex does not support dual booting. Installing Chrome OS Flex will replace the existing operating system on the device completely."
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
    "name": "What is Chrome OS Flex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chrome OS Flex is a free, cloud-based operating system that can be installed on older Mac and PC devices. It provides a fast, secure computing experience and extends the life of existing hardware."
    }
  },{
    "@type": "Question",
    "name": "Why use Chrome OS Flex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chrome OS Flex helps organizations modernize their existing devices by converting them into secure, fast Chrome OS machines. This reduces e-waste, saves costs on new hardware, and improves device performance."
    }
  },{
    "@type": "Question",
    "name": "Are Google Play and Android apps supported by Chrome OS Flex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No, Chrome OS Flex does not support Google Play or Android apps. However, users can access web-based applications and progressive web apps through the Chrome browser."
    }
  },{
    "@type": "Question",
    "name": "Will CloudReady customers have to pay for Chrome OS Flex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "CloudReady Home Edition users can upgrade to Chrome OS Flex for free. CloudReady Enterprise customers will need to migrate to Chrome OS Flex Enterprise Edition, which requires a license."
    }
  },{
    "@type": "Question",
    "name": "What are the system requirements for Chrome OS Flex?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chrome OS Flex requires at least an Intel or AMD processor, 4 GB of RAM, and 16 GB of internal storage. A full list of certified devices is available on Google's official website."
    }
  },{
    "@type": "Question",
    "name": "Can I dual-boot Chrome OS Flex with another operating system?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No, Chrome OS Flex does not support dual booting. Installing Chrome OS Flex will replace the existing operating system on the device completely."
    }
  }]
}





  return (

<>
  <Helmet>
<title>Chrome OS Flex Partner | PC Modernization by Shivaami</title>
 <meta name="description" content="Deploy Chrome OS Flex with Shivaami. Modernize old PCs and Macs with a cloud-based operating system. Expert implementation and management." />
<link rel="canonical" href="https://www.shivaami.com/chromeos-flex" />
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