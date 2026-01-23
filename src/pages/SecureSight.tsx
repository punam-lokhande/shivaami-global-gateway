import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useRegion } from '@/contexts/RegionContext';
import { 
  ArrowRight, Calendar, CheckCircle2,
  Search, Target, Settings, FileCheck, Users, AlertTriangle, FileText
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from '@/components/GetStartedDialog';
import heroImage from '@/assets/banners/securesight-banner.jpg';
// Feature images
import riskScanningImg from '@/assets/securesight/risk-scanning.jpg';
import pentestImg from '@/assets/securesight/pentest.jpg';
import configReviewImg from '@/assets/securesight/config-review.jpg';
import complianceImg from '@/assets/securesight/compliance.jpg';
import accessAuditImg from '@/assets/securesight/access-audit.jpg';
import incidentResponseImg from '@/assets/securesight/incident-response.jpg';
import executiveReportImg from '@/assets/securesight/executive-report.jpg';

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
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="SecureSight Security Assessment"
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
            SecureSight:<br />
            <span className="text-[#38B6FF]">Find & Fix</span><br />
            Vulnerabilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
            Shivaami shows you exactly where your security needs attention. We test your systems like an attacker would and report what we find. You get a prioritized list of fixes with clear explanations. Our assessments help you meet compliance requirements and sleep better at night.
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
      icon: Search,
      title: 'Risk Scanning',
      desc: 'We check all your systems for known security weaknesses. You receive a detailed report with risk ratings for each finding.',
      image: riskScanningImg,
    },
    {
      icon: Target,
      title: 'Penetration Testing',
      desc: 'Our experts attempt to breach your defenses ethically. This reveals how attackers might exploit your infrastructure.',
      image: pentestImg,
    },
    {
      icon: Settings,
      title: 'Configuration Review',
      desc: 'We examine your security settings against industry standards. Misconfigurations get documented with remediation steps.',
      image: configReviewImg,
    },
    {
      icon: FileCheck,
      title: 'Compliance Mapping',
      desc: 'We show how your security aligns with regulations. This helps you meet requirements for ISO, SOC, or GDPR.',
      image: complianceImg,
    },
    {
      icon: Users,
      title: 'User Access Audit',
      desc: 'We review who has access to what systems. This identifies excessive permissions that create unnecessary risk.',
      image: accessAuditImg,
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response Planning',
      desc: 'We evaluate your readiness to handle security breaches. You get recommendations for improving your response capabilities.',
      image: incidentResponseImg,
    },
    {
      icon: FileText,
      title: 'Executive Summary Reports',
      desc: 'We translate technical findings into business language. Decision makers understand risks without needing security expertise.',
      image: executiveReportImg,
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What We Handle for You
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Comprehensive security assessment to identify and prioritize your vulnerabilities.
          </p>
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
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/80 to-[#0C4594]/50 group-hover:from-[#0C4594] group-hover:via-[#0C4594]/85 group-hover:to-[#0C4594]/60 transition-all duration-300" />
                
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

// Calendar CTA Section
function CalendarCTASection() {
  const { region } = useRegion();
  const consultationLink = region === 'india' 
    ? 'https://calendar.app.google/gV1KaLLVkPR32C1p9'
    : 'https://app.apollo.io/#/meet/40u-obp-ihl/30-min';

  const demoPoints = [
    'Security posture overview — understand your current vulnerability landscape',
    'Risk prioritization — know which issues to fix first for maximum protection',
    'Compliance gap analysis — see where you stand against industry requirements',
    'Remediation roadmap — get a clear action plan with timelines and resources',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book Your Assessment Now
          </h2>
          <p className="text-lg text-white/80 mb-8">In our consultation, you'll receive:</p>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-10">
            {demoPoints.map((point, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{point}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
                size="lg" 
                onClick={() => document.dispatchEvent(new CustomEvent('openGetStartedDialog'))}
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            <a href={consultationLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function SecureSight() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handler);
    return () => document.removeEventListener('openGetStartedDialog', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CalendarCTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
