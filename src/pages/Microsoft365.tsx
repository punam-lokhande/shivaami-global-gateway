import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FileText, Users, Mail, FolderOpen, Shield, Lock, Smartphone, Scale, Target, Rocket, ShieldCheck, GraduationCap, Headphones, ArrowRight, CheckCircle2, Calendar, Play, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/microsoft-365-banner.jpg';
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

// Hero Section with Banner Image
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
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Microsoft 365"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            <span className="text-[#38B6FF]">Microsoft 365: Integrated</span><br />
             Productivity Cloud Suite
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Microsoft 365 combines Office apps, Teams, cloud services, and enterprise security for seamless productivity and collaboration. Shivaami, a certified Microsoft partner in India, helps organizations deploy and optimize their Microsoft 365 environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
}

// What Microsoft 365 Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Complete Office Suite",
      desc: " Access Word, Excel, PowerPoint, and Outlook across all devices. Cloud-based collaboration enables real-time co-authoring and commenting. Desktop apps include advanced features with regular updates."
    },
    {
      icon: Users,
      title: "Microsoft Teams Integration",
      desc: "Unified platform for chat, video meetings, and file collaboration. Channels organize conversations by project or department. Integration with Office apps keeps work in one place."
    },
    {
      icon: Mail,
      title: "Enterprise Email and Calendar",
      desc: "Exchange Online delivers reliable email with a 50 GB mailbox per user. Advanced calendar features include scheduling assistants and room booking. Mobile apps provide full functionality on iOS and Android."
    },
    {
      icon: FolderOpen,
      title: "SharePoint and OneDrive",
      desc: "Provide Centralized document management with version control and permissions. One terabyte of cloud storage per user for personal files. SharePoint sites enable team collaboration and intranet publishing."
    },
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      desc: "AI-powered security detects phishing, malware, and suspicious activity. Safe Links and Safe Attachments scan content before delivery. Anti-spam filtering reduces inbox clutter and risks."
    },
    {
      icon: Lock,
      title: "Information Protection",
      desc: "Data loss prevention policies prevent sensitive information from leaving your organization. Encryption and rights management control document access. Compliance tools support regulatory requirements."
    },
    {
      icon: Smartphone,
      title: "Device Management",
      desc: "Intune manages Windows, macOS, iOS, and Android devices from one console. Conditional access policies enforce security requirements. Remote wipe protects data on lost or stolen devices."
    },
    {
      icon: Scale,
      title: "Compliance and Governance",
      desc: "Retention policies and legal hold preserve data for regulatory needs. eDiscovery tools search across email, documents, and conversations. Audit logs track user activity and administrative changes."
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Microsoft 365 Delivers
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

// Flip Card Component with Icon
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
        {/* Front Side */}
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

        {/* Back Side */}
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

// How Shivaami Helps You Succeed Section - Flip Cards
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Target,
      title: 'Strategy and Planning',
      desc: 'We assess your current infrastructure and design a Microsoft 365 migration strategy. Our team identifies licensing requirements and feature needs upfront. You get a phased implementation plan that minimizes disruption.',
    },
    {
      image: technicalDeploymentImg,
      icon: Rocket,
      title: 'Deployment and Integration',
      desc: 'Shivaami handles tenant configuration, domain setup, and user provisioning. We migrate mailboxes, files, and SharePoint content from legacy systems. Your data transfers securely with complete integrity.',
    },
    {
      image: securityConfigImg,
      icon: ShieldCheck,
      title: 'Security and Compliance',
      desc: 'Our security experts configure threat protection, data loss prevention, and access controls. We implement multi-factor authentication and conditional access policies. Compliance settings align with your industry regulations.',
    },
    {
      image: teamTrainingImg,
      icon: GraduationCap,
      title: 'User Enablement and Adoption',
      desc: 'We deliver training programs tailored to different user roles and skill levels. Change management guidance helps teams transition to new workflows. Support resources and quick guides accelerate adoption.',
    },
    {
      image: ongoingSupportImg,
      icon: Headphones,
      title: 'Ongoing Optimization and Support',
      desc: 'Shivaami provides managed services with proactive monitoring and issue resolution. We handle license management, updates, and feature optimization. Regular reviews ensure you maximize your investment.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed?
          </h2>
        </motion.div>

        <motion.div 
          {...staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
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
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

const Microsoft365 = () => {
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
      question: "How much OneDrive storage do I get with Microsoft 365?",
      answer: "Users with an active Microsoft 365 subscription receive an additional 1 TB of OneDrive storage per subscription."
    },
    {
      question: "How can a user send a 1-1 conversation in MS Kaizala through APIs?",
      answer: `All APIs in Kaizala operate within the context of a group. Hence, it is not possible to send a message in a 1-1 conversation using an API.

        The following capabilities are supported:
        - Sending a message to a particular subscriber in a public group
        - Creating a group with the user and sending a message to the group`
    },
    {
      question: "Are documents stored in OneDrive also available offline?",
      answer: "If a user uses Windows 8.1 or Windows 10, OneDrive is preinstalled. To access documents offline, open File Explorer on your PC and go to the OneDrive folder."
    },
    {
      question: "Will Microsoft 365 be identical for each platform and device?",
      answer: "With Microsoft 365, all the apps of Microsoft Office are the same, whether one uses a Mac, Windows, or any other client."
    },
    {
      question: "What data cannot be stored in OneDrive?",
      answer: "One must not store sensitive details such as credit or debit card data in OneDrive. This data is often referred to as PCI Data."
    },
    {
      question: "What is the maximum file size I can upload to OneDrive?",
      answer: "The maximum file size you can upload to OneDrive is 250 GB per file. For uploads through the web interface, the limit is 100 GB per file."
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
                    <AccordionContent className="text-[#64748b] pb-4 text-sm" style={{ whiteSpace: "pre-line" }}>
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



const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much OneDrive storage do I get with Microsoft 365?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Users with an active Microsoft 365 subscription receive an additional 1 TB of OneDrive storage per subscription."
    }
  },{
    "@type": "Question",
    "name": "How can a user send a 1-1 conversation in MS Kaizala through APIs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All APIs in Kaizala operate within the context of a group. Hence, it is not possible to send a message in a 1-1 conversation using an API. The following capabilities are supported: <br>- Sending a message to a particular subscriber in a public group <br> - Creating a group with the user and sending a message to the group"
 
    }
  },{
    "@type": "Question",
    "name": "Are documents stored in OneDrive also available offline?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If a user uses Windows 8.1 or Windows 10, OneDrive is preinstalled. To access documents offline, open File Explorer on your PC and go to the OneDrive folder."
    }
  },{
    "@type": "Question",
    "name": "Will Microsoft 365 be identical for each platform and device?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "With Microsoft 365, all the apps of Microsoft Office are the same, whether one uses a Mac, Windows, or any other client."
    }
  },{
    "@type": "Question",
    "name": "What data cannot be stored in OneDrive?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "One must not store sensitive details such as credit or debit card data in OneDrive. This data is often referred to as PCI Data."
    }
  },{
    "@type": "Question",
    "name": "What is the maximum file size I can upload to OneDrive?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The maximum file size you can upload to OneDrive is 250 GB per file. For uploads through the web interface, the limit is 100 GB per file."
    }
  }]
}





  return (
    <> 
      <Helmet>
<title>Microsoft 365 Partner India & USA | Enterprise Solutions by Shivaami</title>
 <meta name="description" content="Deploy Microsoft 365 with Shivaami. Expert migration, security configuration, and managed services. Certified M365 partner serving Indian & USA enterprises." />
<link rel="canonical" href="https://www.shivaami.com/microsoft-365" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

    <div className="min-h-screen">
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

export default Microsoft365;
