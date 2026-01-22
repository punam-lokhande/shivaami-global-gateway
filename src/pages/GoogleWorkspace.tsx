import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Shield, Cloud, Video, Mail, Smartphone, Settings, Puzzle, Target, Rocket, Lock, GraduationCap, Headphones, ArrowRight, CheckCircle2, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/google-workspace-banner.jpg';
import strategicPlanningImg from '@/assets/activation/strategic-planning.jpg';
import technicalDeploymentImg from '@/assets/activation/technical-deployment.jpg';
import securityConfigImg from '@/assets/activation/security-config.jpg';
import teamTrainingImg from '@/assets/activation/team-training.jpg';
import ongoingSupportImg from '@/assets/activation/ongoing-support.jpg';
import techButtonsBg from '@/assets/banners/tech-buttons-bg.jpg';
import TransferSubscriptionDialog from '@/components/TransferSubscriptionDialog';

// Badge paths (using public folder)
const gcPpSell = '/badges/gc-pp-sell.png';
const gcInfrastructure = '/badges/gc-infrastructure.png';
const gcSecurity = '/badges/gc-security.png';
const gcWorkTransformationEnterprise = '/badges/gc-work-transformation-enterprise.png';
const gcWorkTransformation = '/badges/gc-work-transformation.png';
const gwsPpSellService = '/badges/gws-pp-sell-service.png';
const sixXAward = '/badges/6x-award.png';
const diamondCosellPartner = '/badges/diamond-cosell-partner.png';

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
    window.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Google Workspace"
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
            Transform Work with<br />
            <span className="text-[#38B6FF]">Google Workspace</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Google Workspace is a cloud productivity suite built for modern teams. Shivaami is a certified Google Workspace reseller and implementation partner in India helping enterprises migrate, secure, and scale.
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

// What Google Workspace Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Real-Time Collaboration",
      desc: "Teams work together on documents, spreadsheets, and presentations simultaneously. Changes sync instantly across all devices."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      desc: "Built-in protection includes phishing defense, malware scanning, and data loss prevention. Two-factor authentication and endpoint management."
    },
    {
      icon: Cloud,
      title: "Cloud Storage and Access",
      desc: "Every user gets secure cloud storage with Drive. Files are accessible from any device, anywhere with advanced search and AI-powered suggestions."
    },
    {
      icon: Video,
      title: "Video Conferencing Built In",
      desc: "Google Meet supports HD video calls for up to 500 participants. Screen sharing, live captions, and recording come standard."
    },
    {
      icon: Mail,
      title: "Seamless Email Management",
      desc: "Gmail for business includes a custom domain email with powerful spam filtering. Smart compose and priority inbox boost productivity."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      desc: "All apps work fully on iOS and Android devices. Offline mode ensures productivity without connectivity."
    },
    {
      icon: Settings,
      title: "Admin Controls and Insights",
      desc: "Centralized dashboard manages users, devices, and security policies. Usage reports show adoption trends and storage needs."
    },
    {
      icon: Puzzle,
      title: "Third-Party Integration",
      desc: "Connect with thousands of business apps through the Workspace Marketplace. APIs enable custom integrations."
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Google Workspace Delivers
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

// Workspace Action Buttons Section
function WorkspaceActionsSection({ onTransferClick }: { onTransferClick: () => void }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Technology Background Image */}
      <div className="absolute inset-0">
        <img 
          src={techButtonsBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a7a]/80 via-[#0C4594]/70 to-[#0a3a7a]/80" />
      </div>
      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#38B6FF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          {...fadeInUp} 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10"
        >
          {/* Google Workspace Pricing Button */}
          <Link to="/google-workspace-pricing-india">
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#38B6FF] via-white to-[#38B6FF] rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-1 bg-white rounded-2xl opacity-90" />
              {/* Button content */}
              <div className="relative flex items-center gap-4 bg-gradient-to-r from-white to-slate-50 text-[#0C4594] font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transition-all duration-300 border-2 border-[#38B6FF]">
                <div className="w-4 h-4 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] rounded-full animate-pulse shadow-lg shadow-[#38B6FF]/50" />
                <span className="tracking-wide">Google Workspace Pricing</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </Link>

          {/* Transfer Subscription Button */}
          <motion.div
            onClick={onTransferClick}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0C4594] via-[#38B6FF] to-[#0C4594] rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38B6FF] to-[#2da8f0] rounded-2xl opacity-90" />
            {/* Button content */}
            <div className="relative flex items-center gap-4 bg-gradient-to-r from-[#38B6FF] to-[#2da8f0] text-white font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transition-all duration-300 border-2 border-white/30 group-hover:border-white/60">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
              <span className="tracking-wide">Transfer Google Workspace Subscription</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
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
      desc: 'We assess your current infrastructure and design a migration roadmap. Our team identifies security requirements and compliance needs upfront.',
    },
    {
      image: technicalDeploymentImg,
      icon: Rocket,
      title: 'Deployment and Integration',
      desc: 'Shivaami handles the complete migration from legacy systems. We configure domain settings, user accounts, and organizational structures.',
    },
    {
      image: securityConfigImg,
      icon: Lock,
      title: 'Security and Compliance',
      desc: 'Our experts implement data loss prevention policies and access controls. We configure mobile device management and endpoint security.',
    },
    {
      image: teamTrainingImg,
      icon: GraduationCap,
      title: 'User Enablement and Adoption',
      desc: 'We deliver customized training sessions for end-users and administrators. Change management support ensures teams adopt new workflows smoothly.',
    },
    {
      image: ongoingSupportImg,
      icon: Headphones,
      title: 'Ongoing Optimization and Support',
      desc: 'Shivaami provides dedicated technical support for your Google Workspace environment. We monitor performance and optimize configurations.',
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

// Recognized Leader Section
function RecognizedLeaderSection() {
  const badges = [
    { image: gcPpSell, alt: "Google Cloud Premier Partner - Sell" },
    { image: gcInfrastructure, alt: "Google Cloud Infrastructure Specialization" },
    { image: gcSecurity, alt: "Google Cloud Security Specialization" },
    { image: gcWorkTransformationEnterprise, alt: "Google Cloud Work Transformation Enterprise Specialization" },
    { image: gcWorkTransformation, alt: "Google Cloud Work Transformation Specialization" },
    { image: gwsPpSellService, alt: "Google Workspace Premier Partner - Sell & Service" },
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            Recognized Leader in the Google Cloud Ecosystem
          </h2>
        </motion.div>

        <motion.div 
          {...staggerContainer}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 }
              }}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center"
            >
              <img 
                src={badge.image} 
                alt={badge.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Proven Excellence Section
function ProvenExcellenceSection() {
  const handleGetStarted = () => {
    window.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            Proven Excellence, Recognized Leadership
          </h2>
          <p className="text-[#475569] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We're a 6X Google Workspace Partner of the Year with Diamond Co-Sell and Services Partner recognition. We deliver proven expertise across security, infrastructure, and work transformation. Our solutions help organizations maximize their Google Cloud investment.
          </p>
        </motion.div>

        <motion.div 
          {...staggerContainer}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16 max-w-4xl mx-auto mb-10"
        >
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 }
            }}
            className="w-48 sm:w-56 md:w-64 flex items-center justify-center"
          >
            <img 
              src={sixXAward} 
              alt="6X Google Workspace Partner of the Year"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 }
            }}
            className="w-48 sm:w-56 md:w-64 flex items-center justify-center"
          >
            <img 
              src={diamondCosellPartner} 
              alt="Google Workspace Diamond Co-sell & Services Partner"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div {...fadeInUp} className="text-center">
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
    </section>
  );
}

// Calendar CTA Section
function CalendarCTASection() {
  const benefits = [
    "Migration strategy tailored to your current environment",
    "Security and compliance requirements for your industry",
    "User adoption approach that minimizes disruption",
    "Total cost comparison with licensing optimization",
    "Timeline and resource planning for deployment"
  ];

  const handleGetStarted = () => {
    window.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl text-white/90 mb-4">
            Ready to modernize your workplace with Google Workspace?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule a consultation with our certified specialists
          </h2>
          <p className="text-lg text-white/80 mb-8">
            In this 30-minute session, you'll discover:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-10">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a 
              href="https://app.apollo.io/#/meet/40u-obp-ihl/30-min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Session Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const GoogleWorkspace = () => {
  const [transferDialogOpen, setTransferDialogOpen] = useState(false);
  const [getStartedDialogOpen, setGetStartedDialogOpen] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setGetStartedDialogOpen(true);
    window.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => window.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkspaceActionsSection onTransferClick={() => setTransferDialogOpen(true)} />
        <ActivationSection />
        <RecognizedLeaderSection />
        <ProvenExcellenceSection />
        <CalendarCTASection />
      </main>
      <Footer />
      <TransferSubscriptionDialog 
        open={transferDialogOpen} 
        onOpenChange={setTransferDialogOpen} 
      />
      <GetStartedDialog 
        open={getStartedDialogOpen} 
        onOpenChange={setGetStartedDialogOpen} 
      />
    </div>
  );
};

export default GoogleWorkspace;
