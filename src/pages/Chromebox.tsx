import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Box, Monitor, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Calendar,
  Cpu, Lock, Settings, Tv, Video, Presentation,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from "@/components/GetStartedDialog";
import heroImage from '@/assets/banners/chromebox-banner.jpg';
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
    <section ref={ref} className="relative flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Chromebox Desktop Solutions"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
         
            <span className="text-[#38B6FF]">Chromebox: Efficient</span> <br />Desktop Computing

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
           Chromebox is a compact desktop running ChromeOS, delivering speed, security, and manageability for offices and kiosks. Shivaami, an authorised reseller, helps enterprises in India and the US deploy and manage solutions.
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
      icon: Box,
      title: 'Compact Design',
      desc: 'Small footprint saves desk space and simplifies deployment. Fanless models operate silently in office environments. Wall-mounting options support flexible installations.',
    },
    {
      icon: Monitor,
      title: 'Multiple Display Support',
      desc: 'Drive two or more monitors from a single device. Ideal for productivity workstations and data analysis roles. HDMI and DisplayPort outputs provide connectivity options.',
    },
    {
      icon: Cpu,
      title: 'High Performance',
      desc: ' Intel processors handle demanding web applications and multitasking. Sufficient power for office productivity and business applications. Consistent performance without degradation over time.',
    },
    {
      icon: Settings,
      title: 'Centralized Management',
      desc: 'Chrome Enterprise management applies policies across all devices. Remote configuration eliminates the need for physical access. Cloud-based console simplifies fleet management.',
    },
    {
      icon: Shield,
      title: 'Security Features',
      desc: 'Same verified boot and sandboxing as Chromebook. Automatic security updates protect against threats. Tamper-resistant hardware prevents unauthorised modifications.',
    },
    {
      icon: Lock,
      title: 'Kiosk Mode',
      desc: 'Lock the device to a single application for dedicated use cases. Perfect for reception areas, retail, and public access. Restricted access prevents unauthorised usage.',
    },
    {
      icon: Tv,
      title: 'Digital Signage',
      desc: 'Display presentations, dashboards, or promotional content. Scheduling capabilities rotate content automatically. Remote content updates from the central console.',
    },
    {
      icon: Video,
      title: 'Meeting Room Integration',
      desc: 'Power video conferencing and presentation displays. Connect with Google Meet hardware for complete solutions. Simple setup reduces meeting start delays.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Chromebox Delivers
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
      icon: Box,
      title: 'Strategy and Planning',
      desc: 'We assess your desktop computing requirements and recommend appropriate models. Our team identifies use cases and deployment locations. You get device and configuration recommendations aligned with needs.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'Deployment and Integration',
      desc: 'Shivaami handles device procurement and Chrome Enterprise licensing. We configure policies, install peripherals, and prepare workstations. Your desktops are deploy-ready for immediate use.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts implement security policies and access restrictions. We configure kiosk mode for dedicated-use devices. Management ensures consistent security across all locations.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'User Enablement',
      desc: 'We provide training on Chrome OS for desktop users. Setup guides help IT teams deploy and maintain devices. Support resources address troubleshooting and common issues.',
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      desc: 'Shivaami manages your Chromebox fleet with policy updates. We handle device issues and coordinate warranty service. Regular reviews optimize configurations and usage.',
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
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"
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

export default function Chromebox() {
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
      question: "Is Chromebox safe to use?",
      answer: "Yes, Chromebox is safe to use and features built-in security with automatic updates, sandboxing, and verified boot. User accounts are easily switchable, keeping all data private and secure."
    },
    {
      question: "Is Chromebox easy to use?",
      answer: "Chromebox is easy to use with a simple, intuitive interface. It boots up in seconds and requires minimal setup, making it ideal for both personal and business use."
    },
    {
      question: "Is Chromebox a portable device?",
      answer: "Chromebox is a compact desktop device, not a portable laptop. However, its small size makes it easy to move between workspaces or transport when needed."
    },
    {
      question: "How to check the Chromebox serial number?",
      answer: "Users can check the serial number on the label located on the bottom of the Chromebox unit or by accessing the device settings under About Chrome OS."
    },
    {
      question: "Is Chromebox a secure device?",
      answer: "Yes, Chromebox is a secure device with multiple layers of protection, including automatic security updates, data encryption, and verified boot to prevent malware."
    },
    {
      question: "Can I connect multiple monitors to a Chromebox?",
      answer: "Yes, most Chromebox models support dual monitor setups through HDMI or DisplayPort connections, allowing users to expand their workspace for enhanced productivity."
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
    "name": "Is Chromebox safe to use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Chromebox is safe to use and features built-in security with automatic updates, sandboxing, and verified boot. User accounts are easily switchable, keeping all data private and secure."
    }
  },{
    "@type": "Question",
    "name": "Is Chromebox easy to use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chromebox is easy to use with a simple, intuitive interface. It boots up in seconds and requires minimal setup, making it ideal for both personal and business use."
    }
  },{
    "@type": "Question",
    "name": "Is Chromebox a portable device?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chromebox is a compact desktop device, not a portable laptop. However, its small size makes it easy to move between workspaces or transport when needed."
    }
  },{
    "@type": "Question",
    "name": "How to check the Chromebox serial number?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Users can check the serial number on the label located on the bottom of the Chromebox unit or by accessing the device settings under \"About Chrome OS."
    }
  },{
    "@type": "Question",
    "name": "Is Chromebox a secure device?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Chromebox is a secure device with multiple layers of protection, including automatic security updates, data encryption, and verified boot to prevent malware."
    }
  },{
    "@type": "Question",
    "name": "Can I connect multiple monitors to a Chromebox?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, most Chromebox models support dual monitor setups through HDMI or DisplayPort connections, allowing users to expand their workspace for enhanced productivity."
    }
  }]
}




  return (

<>
  <Helmet>
<title>Chromebox Reseller in India | Desktop Solutions by Shivaami</title>
 <meta name="description" content="Deploy Chromebox desktops with Shivaami. Compact, secure, and managed desktop computing. Authorised Chromebox partner in India." />
<link rel="canonical" href="https://www.shivaami.com/chromebox" />
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