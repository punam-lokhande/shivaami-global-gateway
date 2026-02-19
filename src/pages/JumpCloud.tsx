import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  FolderSync, Monitor, KeyRound, ShieldCheck, UserCog, Lock, 
  Wifi, Brain, Settings, Shield, Users, HeadphonesIcon, 
  CheckCircle2, ArrowRight, Play, Calendar, Blocks,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/jumpcloud-banner.jpg';
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

// Hero Section
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
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="JumpCloud Identity & Device Management"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            JumpCloud:<br />
            <span className="text-[#38B6FF]">Unified Identity Control</span> 
          
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Modern organisations need more than disconnected tools and legacy directories. JumpCloud gives you a single cloud platform to manage identities, devices, access, and security across your entire workforce.
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

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: FolderSync,
      title: 'Unified Cloud Directory',
      desc: 'Create a single source of truth for users, devices, and access. Replace fragmented directories and reduce identity sprawl while improving visibility and control.',
    },
    {
      icon: Monitor,
      title: 'Cross-Platform Device Management',
      desc: 'Manage Windows, macOS, Linux, iOS, and Android devices from one console. Enforce security policies, automate updates, and maintain compliance without manual effort',
    },
    {
      icon: KeyRound,
      title: 'Single Sign-On for Cloud Applications',
      desc: 'Enable secure access to thousands of applications with one identity. Reduce login fatigue, improve productivity, and cut down password-related support tickets.',
    },
    {
      icon: ShieldCheck,
      title: 'Multi-Factor Authentication',
      desc: 'Protect every login with strong authentication that balances security and user experience. Reduce the risk of breaches caused by compromised credentials.',
    },
    {
      icon: UserCog,
      title: 'Automated User Lifecycle Management',
      desc: 'Provision and de-provision users automatically based on role changes. Save time, reduce errors, and ensure access is always aligned with employment status.',
    },
    {
      icon: Lock,
      title: 'Zero Trust and Conditional Access',
      desc: 'Control access based on user, device, and context. Minimise attack surfaces and meet compliance requirements without slowing teams down.',
    },
    {
      icon: Wifi,
      title: 'Cloud LDAP and RADIUS',
      desc: 'Modernise network authentication without maintaining on-prem infrastructure. Secure Wi-Fi, VPN, and legacy systems using cloud-based identity services.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            JumpCloud Features That Drive Real Business Outcomes
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        {/* Front Side - Image with title and icon */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/70 to-[#0C4594]/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/40 to-transparent" />
          
          {/* Icon and Title on front */}
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

        {/* Back Side - Description */}
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

// How Shivaami Helps Section
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Brain,
      title: 'Identity Strategy & Architecture',
      desc: 'We start with your business priorities and risk posture. Our architects design an identity and device management blueprint that supports scale, security, and future growth.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'End-to-End JumpCloud Deployment',
      desc: 'From initial setup to phased rollout, we ensure JumpCloud is configured correctly, securely, and ready for real-world use across teams and locations.',
    },
    {
      image: securityConfigImg,
      icon: Blocks,
      title: 'System & Application Integrations',
      desc: 'We integrate JumpCloud with HR systems, Google Workspace, cloud platforms, and existing IT tools to eliminate silos and enable automation.',
    },
    {
      image: teamTrainingImg,
      icon: Shield,
      title: 'Security & Compliance Enablement',
      desc: 'We harden your environment with strong authentication, access policies, and audit-ready configurations aligned to global security standards.',
    },
    {
      image: ongoingSupportImg,
      icon: Users,
      title: 'User Adoption & Enablement',
      desc: 'We help teams adopt new workflows through training, documentation, and guided onboarding so value is realised quickly.',
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

// Main Page Component
export default function JumpCloud() {
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
      question: "How can I remotely manage cloud-based directory services for my enterprise?",
      answer: "JumpCloud's Directory-as-a-Service (DaaS) platform lets you manage user identities, devices (Windows, Mac, Linux), and application access from one cloud interface. It supports LDAP, SAML, OAuth, and Kerberos with MFA and zero-trust security, accessible remotely worldwide."
    },
    {
      question: "What are the best cloud identity management platforms for Indian businesses?",
      answer: "JumpCloud, miniOrange, Okta, Microsoft Entra ID, and Scalefusion are top choices for Indian enterprises in 2025. JumpCloud stands out for scalable, compliance-ready identity management with local support, cost-effectiveness, and integration across hybrid environments."
    },
    {
      question: "How do I set up secure access for remote employees using cloud directory services?",
      answer: "JumpCloud centralizes identity and access management with MFA, conditional access, and single sign-on (SSO) for cloud and on-premises apps. Remote device management and zero-trust policies ensure secure, seamless access for distributed teams across India and APAC."
    },
    {
      question: "Which cloud directory service supports LDAP and RADIUS protocols?",
      answer: "JumpCloud supports both LDAP and RADIUS protocols, enabling secure authentication for apps, servers, and network devices from a single cloud platform. It eliminates on-premises infrastructure while providing SSO, MFA, device management, and identity governance, ideal for hybrid IT environments."
    },
    {
      question: "Does JumpCloud offer multi-factor authentication (MFA) for enterprises?",
      answer: "Yes, JumpCloud includes built-in MFA with support for TOTP apps, push notifications, and hardware tokens. It integrates seamlessly with SSO and conditional access policies, strengthening security for user logins, device access, and application authentication, critical for compliance in India and globally."
    },
    {
      question: "What devices and operating systems does JumpCloud support?",
      answer: "JumpCloud supports Windows, Mac, Linux, iOS, and Android devices from a unified cloud directory. IT admins can remotely manage endpoints, enforce security policies, and control user access across heterogeneous environments, perfect for diverse, distributed teams in Indian and APAC enterprises."
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
    "name": "How can I remotely manage cloud-based directory services for my enterprise?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JumpCloud's Directory-as-a-Service (DaaS) platform lets you manage user identities, devices (Windows, Mac, Linux), and application access from one cloud interface. It supports LDAP, SAML, OAuth, and Kerberos with MFA and zero-trust security, accessible remotely worldwide."
    }
  },{
    "@type": "Question",
    "name": "What are the best cloud identity management platforms for Indian businesses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JumpCloud, miniOrange, Okta, Microsoft Entra ID, and Scalefusion are top choices for Indian enterprises in 2025. JumpCloud stands out for scalable, compliance-ready identity management with local support, cost-effectiveness, and integration across hybrid environments."
    }
  },{
    "@type": "Question",
    "name": "How do I set up secure access for remote employees using cloud directory services?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JumpCloud centralizes identity and access management with MFA, conditional access, and single sign-on (SSO) for cloud and on-premises apps. Remote device management and zero-trust policies ensure secure, seamless access for distributed teams across India and APAC."
    }
  },{
    "@type": "Question",
    "name": "Which cloud directory service supports LDAP and RADIUS protocols?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JumpCloud supports both LDAP and RADIUS protocols, enabling secure authentication for apps, servers, and network devices from a single cloud platform. It eliminates on-premises infrastructure while providing SSO, MFA, device management, and identity governance, ideal for hybrid IT environments."
    }
  },{
    "@type": "Question",
    "name": "Does JumpCloud offer multi-factor authentication (MFA) for enterprises?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, JumpCloud includes built-in MFA with support for TOTP apps, push notifications, and hardware tokens. It integrates seamlessly with SSO and conditional access policies, strengthening security for user logins, device access, and application authentication, critical for compliance in India and globally."
    }
  },{
    "@type": "Question",
    "name": "What devices and operating systems does JumpCloud support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JumpCloud supports Windows, Mac, Linux, iOS, and Android devices from a unified cloud directory. IT admins can remotely manage endpoints, enforce security policies, and control user access across heterogeneous environments, perfect for diverse, distributed teams in Indian and APAC enterprises."
    }
  }]
}




  return (
    <>
      <Helmet>
<title>JumpCloud Identity & Device Management Partner in India & USA | Shivaami</title>
 <meta name="description" content="Unleash Google AI Ultra's full potential with Shivaami. Get exclusive access to the Gemini app, Veo 3 video generation, Deep Research, and 30TB storage. Transform your enterprise." />
<link rel="canonical" href="https://www.shivaami.com/jumpcloud" />
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
}
