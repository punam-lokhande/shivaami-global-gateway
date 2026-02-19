import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useRegion } from '@/contexts/RegionContext';
import { 
  ArrowRight, Calendar, CheckCircle2,
  FileCheck, Clock, Database, Cloud, Shield, Settings, 
  Headphones, Map, Zap, Server, RefreshCw
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from '@/components/GetStartedDialog';
import heroImage from '@/assets/banners/swiftmove-banner.jpg';
import strategicPlanningImg from '@/assets/activation/strategic-planning.jpg';
import technicalDeploymentImg from '@/assets/activation/technical-deployment.jpg';
import securityConfigImg from '@/assets/activation/security-config.jpg';
import teamTrainingImg from '@/assets/activation/team-training.jpg';
import ongoingSupportImg from '@/assets/activation/ongoing-support.jpg';
// Feature images
import planningImg from '@/assets/migration/planning.jpg';
import zeroDowntimeImg from '@/assets/migration/zero-downtime.jpg';
import dataIntegrityImg from '@/assets/migration/data-integrity.jpg';
import cloudPlatformsImg from '@/assets/migration/cloud-platforms.jpg';
import appTestingImg from '@/assets/migration/app-testing.jpg';
import rollbackImg from '@/assets/migration/rollback.jpg';
import supportImg from '@/assets/migration/support.jpg';
import securityImg from '@/assets/migration/security.jpg';
import CTASection from '@/components/sections/CTASection';
import { Helmet } from 'react-helmet-async';

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

  return (
<section ref={ref} className="relative flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="SwiftMove Migration Services"
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
        
            <span className="text-[#38B6FF]">SwiftMove: Seamless </span>IT Migration Services

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
           Shivaami enables seamless business system migrations without disruption. We manage data, applications, and cloud moves with precision, ensuring smooth operations, clear timelines, and end-to-end support.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={() => document.dispatchEvent(new CustomEvent('openGetStartedDialog'))}
              size="lg"
              className="bg-[#38B6FF] hover:bg-[#0C4594] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

// What We Handle For You Section
function FeaturesSection() {
  const features = [
    {
      icon: Map,
      title: 'Complete Migration Planning',
      desc: 'We map out your entire migration before we begin. This prevents surprises and keeps your project on track.',
      image: planningImg,
    },
    {
      icon: Clock,
      title: 'Zero Downtime Transitions',
      desc: 'Your business stays online while we move your systems. We schedule work during off-peak hours to avoid interruptions.',
      image: zeroDowntimeImg,
    },
    {
      icon: Database,
      title: 'Data Integrity Checks',
      desc: 'We verify every file and database after migration. Your information arrives complete and accurate every time.',
      image: dataIntegrityImg,
    },
    {
      icon: Cloud,
      title: 'Cloud and On-Premise Moves',
      desc: 'We handle migrations to AWS, Azure, Google Cloud, or your servers. Our team works with all major platforms and technologies.',
      image: cloudPlatformsImg,
    },
    {
      icon: FileCheck,
      title: 'Application Compatibility Testing',
      desc: 'We test all your software before going live. This ensures everything works perfectly in the new environment.',
      image: appTestingImg,
    },
    {
      icon: RefreshCw,
      title: 'Rollback Protection',
      desc: 'We keep your old system ready as backup. If issues arise, we can restore quickly and safely.',
      image: rollbackImg,
    },
    {
      icon: Headphones,
      title: 'Post-Migration Support',
      desc: 'We stay with you after the move is complete. Our team monitors performance and fixes any problems that appear.',
      image: supportImg,
    },
    {
      icon: Shield,
      title: 'Security Throughout',
      desc: 'Data protection at every stage of migration. Encrypted transfers and secure handling of sensitive information.',
      image: securityImg,
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What We Handle for You
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
                className="relative rounded-2xl overflow-hidden group h-[320px] cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/80 to-[#0C4594]/50 group-hover:from-[#0C4594] group-hover:via-[#0C4594]/85 group-hover:to-[#0C4594]/60 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
                </div>
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

// How Shivaami Helps You Succeed Section
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Map,
      title: 'Assessment & Planning',
      desc: 'We analyze your current infrastructure, identify dependencies, and create a detailed migration roadmap with clear timelines and milestones.',
    },
    {
      image: technicalDeploymentImg,
      icon: Server,
      title: 'Environment Setup',
      desc: 'We prepare your target environment, configure necessary services, and establish secure connectivity between source and destination.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Secure Data Transfer',
      desc: 'We execute the migration with encrypted transfers, real-time monitoring, and comprehensive validation at each stage.',
    },
    {
      image: teamTrainingImg,
      icon: Settings,
      title: 'Testing & Validation',
      desc: 'We thoroughly test all applications, verify data integrity, and ensure everything works perfectly before final cutover.',
    },
    {
      image: ongoingSupportImg,
      icon: Headphones,
      title: 'Go-Live & Support',
      desc: 'We manage the final transition, provide 24/7 support during stabilization, and remain available for ongoing optimization.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Delivers Successful Migrations
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Our proven methodology ensures smooth transitions with minimal risk and zero surprises.
          </p>
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


// Main Page Component
export default function SwiftMove() {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Listen for custom event to open dialog
  useState(() => {
    const handler = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handler);
    return () => document.removeEventListener('openGetStartedDialog', handler);
  });

  return (

<>
 <Helmet>
<title>Migration Services | Seamless IT System Transitions</title>
 <meta name="description" content="Plan and execute hassle-free IT migrations with Shivaami. We move your data, apps, and infrastructure with zero downtime in India and the US." />
<link rel="canonical" href="https://www.shivaami.com/swiftmove" />

 </Helmet>

    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
         <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div></>
  );
}
