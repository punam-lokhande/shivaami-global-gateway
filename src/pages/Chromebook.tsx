import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Laptop, Zap, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Calendar,
  Clock, Cloud, Battery, RefreshCw, Wifi, Settings,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from "@/components/GetStartedDialog";
import heroImage from '@/assets/banners/chromebook-banner.jpg';
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
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] max-h-[700px] flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Chromebook Enterprise Devices"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
             <span className="text-[#38B6FF]">Chromebook: Modern</span> Computing Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
          Chromebook devices run ChromeOS, offering fast boot times, automatic updates, built-in security, and seamless Google Workspace integration. Shivaami, an authorised reseller, helps deploy and manage fleets in India and the US.
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
      icon: Zap,
      title: 'Fast Performance',
      desc: 'Boot in seconds and resume instantly from sleep. Cloud-first architecture eliminates startup delays. Consistent performance without slowdowns over time.',
    },
    {
      icon: RefreshCw,
      title: 'Automatic Updates',
      desc: 'Security patches and feature updates install automatically. No IT intervention required for operating system maintenance. Devices stay current without user disruption.',
    },
    {
      icon: Shield,
      title: 'Built-In Security',
      desc: 'Verified boot checks system integrity at every startup. Sandboxing isolates applications and browser tabs. Data encryption protects information at rest.',
    },
    {
      icon: Battery,
      title: 'Long Battery Life',
      desc: 'Most models run 10-12 hours on a single charge. Efficient architecture maximizes productivity without power concerns. Mobile workers stay productive throughout the day.',
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      desc: 'Seamless connection with Google Workspace applications. Files sync automatically to Google Drive. Access work from any Chromebook instantly.',
    },
    {
      icon: Settings,
      title: 'Easy Management',
      desc: 'Chrome Enterprise licenses enable centralized device control. Cloud-based console manages policies and applications. No on-premises infrastructure required.',
    },
    {
      icon: Wifi,
      title: 'Offline Capabilities',
      desc: 'Core applications work without internet connectivity. Gmail, Drive, and Docs sync when the connection returns. Productivity continues during connectivity gaps.',
    },
    {
      icon: Clock,
      title: 'Affordable Devices',
      desc: 'Wide range of models at different price points. Lower total cost compared to traditional laptops. Budget-friendly without compromising capabilities.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Chromebook Delivers
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
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
       className="w-full h-full relative preserve-3d transition-transform duration-500"
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
      desc: 'We assess your computing needs and recommend appropriate Chromebook models. Our team evaluates application compatibility and cloud readiness. You get device selection guidance aligned with requirements.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'Deployment and Integration',
      desc: 'Shivaami handles device procurement and Chrome Enterprise licensing. We configure policies, install applications, and prepare devices for users. Your team receives ready-to-use Chromebooks.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts implement security policies and access controls. We configure device settings and application permissions. Management ensures ongoing security and compliance.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'User Enablement',
      desc: 'We provide training on Chrome OS features and workflows. Quick start guides help users transition smoothly. Support resources address common questions and scenarios.',
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      desc: 'Shivaami manages your Chromebook fleet with policy updates. We handle device troubleshooting and warranty coordination. Regular reviews optimize configurations and identify opportunities.',
    },
  ];

  return (
   <section className="py-20 bg-white">
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

export default function Chromebook() {
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
      question: "Does Microsoft Office work on Chromebooks?",
      answer: "Users can open, edit, download, and save Microsoft Office files on Chromebooks using Office Online or the Microsoft 365 web apps."
    },
    {
      question: "Does iTunes work on a Chromebook?",
      answer: "iTunes does not work on a Chromebook. However, users can upload music from their iTunes library to YouTube Music or other cloud-based music services."
    },
    {
      question: "What's the difference between Chromebooks and other laptops, like Windows or Mac?",
      answer: "Chromebooks are lightweight, fast-booting devices that run on Chrome OS and rely primarily on web-based applications. They typically offer longer battery life and built-in virus protection compared to Windows and Mac laptops."
    },
    {
      question: "How do I listen to music and watch videos on a Chromebook?",
      answer: "Users can stream music through services like YouTube Music, Spotify, or other web-based music players. For videos and movies, YouTube, Netflix, and other streaming platforms are available through the Chrome browser."
    },
    {
      question: "Can I use a Chromebook offline?",
      answer: "Yes, Chromebooks can be used offline for many tasks. Users can access Gmail, Google Docs, Sheets, Slides, and other Google apps offline by enabling offline mode in their settings."
    },
    {
      question: "How much storage does a Chromebook have?",
      answer: "Most Chromebooks come with 32 GB to 128 GB of local storage. However, Chromebooks are designed to store files in the cloud using Google Drive, where users typically receive 15 GB of free storage with their Google account."
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
    "name": "Does Microsoft Office work on Chromebooks?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Users can open, edit, download, and save Microsoft Office files on Chromebooks using Office Online or the Microsoft 365 web apps."
    }
  },{
    "@type": "Question",
    "name": "Does iTunes work on a Chromebook?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "iTunes does not work on a Chromebook. However, users can upload music from their iTunes library to YouTube Music or other cloud-based music services."
    }
  },{
    "@type": "Question",
    "name": "What's the difference between Chromebooks and other laptops, like Windows or Mac?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Chromebooks are lightweight, fast-booting devices that run on Chrome OS and rely primarily on web-based applications. They typically offer longer battery life and built-in virus protection compared to Windows and Mac laptops."
    }
  },{
    "@type": "Question",
    "name": "How do I listen to music and watch videos on a Chromebook?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Users can stream music through services like YouTube Music, Spotify, or other web-based music players. For videos and movies, YouTube, Netflix, and other streaming platforms are available through the Chrome browser."
    }
  },{
    "@type": "Question",
    "name": "Can I use a Chromebook offline?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Chromebooks can be used offline for many tasks. Users can access Gmail, Google Docs, Sheets, Slides, and other Google apps offline by enabling offline mode in their settings."
    }
  },{
    "@type": "Question",
    "name": "How much storage does a Chromebook have?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most Chromebooks come with 32 GB to 128 GB of local storage. However, Chromebooks are designed to store files in the cloud using Google Drive, where users typically receive 15 GB of free storage with their Google account."
    }
  }]
}




  return (

    <>
  <Helmet>
<title>Chromebook Reseller in India | Enterprise Devices by Shivaami</title>
 <meta name="description" content="Deploy Chromebooks with Shivaami. Fast, secure, and easy-to-manage laptops for enterprises. Authorized Chromebook partner in India." />
<link rel="canonical" href="https://www.shivaami.com/chromebook" />
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