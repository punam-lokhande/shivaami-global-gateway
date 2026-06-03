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
import SecureSightAccessDialog from '@/components/SecureSightAccessDialog';
import extensionPreview from '@/assets/securesight/extension-preview.png';
import { DollarSign, Infinity as InfinityIcon, LayoutGrid, ShieldCheck, EyeOff, Smartphone, Download, PiggyBank, FileCheck2, Chrome, LogIn, ScanLine, Wrench } from 'lucide-react';
// Feature images
import riskScanningImg from '@/assets/securesight/risk-scanning.jpg';
import pentestImg from '@/assets/securesight/pentest.jpg';
import configReviewImg from '@/assets/securesight/config-review.jpg';
import complianceImg from '@/assets/securesight/compliance.jpg';
import accessAuditImg from '@/assets/securesight/access-audit.jpg';
import incidentResponseImg from '@/assets/securesight/incident-response.jpg';
import executiveReportImg from '@/assets/securesight/executive-report.jpg';
import { Helmet } from 'react-helmet-async';
import CTASection from '@/components/sections/CTASection';

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

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
           
            <span className="text-[#38B6FF]">SecureSight: Find</span> and Fix Vulnerabilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
            Shivaami reveals critical security gaps through attacker-style assessments, offering clear reports, prioritized fixes, and compliance-ready insights to strengthen security and ensure peace of mind.
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



// Brochure Section (SecureSight Chrome Extension)
function BrochureSection({ onRequestAccess }: { onRequestAccess: () => void }) {
  const valueProps = [
    { icon: DollarSign, title: 'Stop Paying $1,000s for Security Audits', desc: 'Google Workspace security assessments cost $3K–$10K+ each. SecureSight delivers continuous expert-level insight — at zero cost.', color: 'bg-red-500' },
    { icon: InfinityIcon, title: 'Check Your Score Anytime, Instantly', desc: 'Live Trust Score (0–100) from 30+ automated checks. Full security posture in seconds — not weeks.', color: 'bg-[#1b9dd8]' },
    { icon: LayoutGrid, title: 'Security Checks, Simplified', desc: 'Everything you actually need, without the clutter. Trust Score, Shadow IT, and compliance in one sleek extension.', color: 'bg-green-500' },
  ];

  const covers = [
    { icon: ShieldCheck, title: 'Trust Score', desc: 'Dynamic 0–100 score — 2SV, DNS, admin health & data sharing events', color: 'bg-red-500' },
    { icon: EyeOff, title: 'Shadow IT', desc: 'Identify and manage unauthorized AI tools and apps used by your team without IT oversight.', color: 'bg-orange-500' },
    { icon: Smartphone, title: 'Identity & Mobile', desc: 'Ghost admin detection, 2SV coverage & unencrypted device alerts', color: 'bg-[#1b9dd8]' },
    { icon: Download, title: 'Data Exfiltration', desc: 'Detects mass deletions, external downloads & sensitive file shares', color: 'bg-green-500' },
    { icon: PiggyBank, title: 'Cost Optimization', desc: 'Flags dormant users on paid licenses with monthly savings estimate', color: 'bg-[#0C4594]' },
    { icon: FileCheck2, title: 'Compliance', desc: 'HIPAA / ISO 27001 / GDPR audit modules built in', color: 'bg-purple-600' },
  ];

  const steps = [
    { icon: Chrome, title: 'Install for Free', desc: 'Chrome Web Store' },
    { icon: LogIn, title: 'Sign In', desc: 'Google Workspace Super Admin' },
    { icon: ScanLine, title: 'Instant Scan', desc: '30+ checks in < 60s' },
    { icon: Wrench, title: 'Resolve', desc: 'One-click fix links' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-3">
            <span className="text-[#0C4594]">Secure</span><span className="text-red-500">Sight</span> Chrome Extension
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            The first-of-its-kind Google Workspace Security Chrome Extension that cuts through the noise — see the only alerts that matter, always visible, completely free.
          </p>
        </motion.div>

        {/* Value props */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {valueProps.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={i} {...fadeInUp} className="rounded-2xl border-2 border-[#e5e7eb] p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-full ${v.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0C4594] mb-2">{v.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* What it Covers + Extension Preview */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-6">What SecureSight Covers For You</h3>
            <div className="space-y-3">
              {covers.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div key={i} {...fadeInUp} className="flex gap-4 p-4 rounded-lg border-l-4 bg-[#f8fafc]" style={{ borderLeftColor: c.color.includes('red') ? '#ef4444' : c.color.includes('orange') ? '#f97316' : c.color.includes('1b9dd8') ? '#1b9dd8' : c.color.includes('green') ? '#22c55e' : c.color.includes('0C4594') ? '#0C4594' : '#9333ea' }}>
                    <div className={`w-10 h-10 rounded-lg ${c.color} flex-shrink-0 flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0C4594] mb-1">{c.title}</h4>
                      <p className="text-sm text-[#475569]">{c.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div {...fadeInUp} className="lg:sticky lg:top-24">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-6 text-center">Extension Preview</h3>
            <div className="rounded-2xl border border-[#e5e7eb] shadow-xl p-3 sm:p-4 bg-white flex items-center justify-center overflow-hidden">
              <img
                src={extensionPreview}
                alt="SecureSight Extension Preview"
                className="w-auto max-w-full max-h-[320px] sm:max-h-[400px] md:max-h-[480px] lg:max-h-[500px] object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* How it Works */}
        <motion.div {...fadeInUp} className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0C4594]">How It Works</h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                {...fadeInUp}
                className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#0C4594] text-white text-sm font-bold flex items-center justify-center mb-3 mx-auto">
                  {i + 1}
                </div>
                <div className="flex flex-col items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#1b9dd8]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1b9dd8]" />
                  </div>
                  <h4 className="font-bold text-[#0C4594] text-base sm:text-lg leading-tight">{s.title}</h4>
                </div>
                <p className="text-sm text-[#475569]">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div {...fadeInUp} className="text-center">
          <Button
            onClick={onRequestAccess}
            size="lg"
            className="bg-[#0C4594] hover:bg-[#1a5ab8] text-white px-8 py-6 text-base font-semibold shadow-lg"
          >
            Get your free scan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function SecureSight() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [accessDialogOpen, setAccessDialogOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handler);
    return () => document.removeEventListener('openGetStartedDialog', handler);
  }, []);

  return (


    <>
    <Helmet>
<title>Security Assessment | Fix Vulnerabilities with Shivaami</title>
 <meta name="description" content="Discover security gaps before attackers do. SecureSight reveals risks and provides clear action plans. Serving India and the US." />
<link rel="canonical" href="https://www.shivaami.com/securesight" />

 </Helmet>

    
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BrochureSection onRequestAccess={() => setAccessDialogOpen(true)} />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <SecureSightAccessDialog open={accessDialogOpen} onOpenChange={setAccessDialogOpen} />
    </div></>
  );
}
