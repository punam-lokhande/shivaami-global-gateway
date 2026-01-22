import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Shield, Lock, Users, HeadphonesIcon, CheckCircle2, ArrowRight, 
  MessageSquare, FileCheck, Database, RefreshCw, Scale, Clock, Network, Banknote
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import GetStartedDialog from '@/components/GetStartedDialog';
import CTASection from '@/components/sections/CTASection';
import financialImage from '@/assets/industries/financial.jpg';

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
    <section ref={ref} className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={financialImage}
          alt="Financial Services IT Solutions"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            Where Trust, Security,<br />
            <span className="text-[#38B6FF]">and Performance Converge.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
            Financial institutions operate in high-risk, high-regulation environments. Shivaami helps finance organizations safeguard data, streamline operations, and maintain trust across every digital interaction.
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

// Powering Secure Financial Operations Section
function TechnologySection() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Secure Collaboration',
      desc: 'Secure collaboration for finance, audit, and compliance teams with encrypted communication channels.',
    },
    {
      icon: FileCheck,
      title: 'Identity-Based Access',
      desc: 'Identity-based access to financial systems and sensitive data with granular permission controls.',
    },
    {
      icon: Shield,
      title: 'Advanced Protection',
      desc: 'Advanced protection against phishing, fraud, and data leaks targeting financial institutions.',
    },
    {
      icon: Database,
      title: 'Disaster Recovery',
      desc: 'Reliable backup and disaster recovery for critical financial records ensuring business continuity.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Powering Secure Financial Operations
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Protect financial data, ensure compliance, and secure digital operations with robust IT solutions built for banking and financial services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={financialImage}
                alt="Financial technology solutions"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#38B6FF]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0C4594]/10 rounded-xl -z-10" />
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="bg-white rounded-2xl p-5 border border-[#e2e8f0] hover:shadow-xl hover:border-[#38B6FF]/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Built for Compliance Section
function TrustSection() {
  const benefits = [
    {
      icon: Lock,
      title: 'Access Governance',
      desc: 'Strong access governance and identity controls for regulatory compliance.',
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      desc: 'Reduced risk of cyber fraud and unauthorized access to sensitive financial data.',
    },
    {
      icon: Clock,
      title: 'Operational Continuity',
      desc: 'Improved operational continuity and resilience during critical operations.',
    },
    {
      icon: Network,
      title: 'Scalable Foundation',
      desc: 'Secure digital foundation for expanding financial services and growth.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Built for Compliance. Designed for Growth.
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Our solutions are designed with financial regulations in mind, ensuring your organization stays compliant while growing.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="relative bg-gradient-to-br from-[#0C4594] to-[#082d61] rounded-2xl p-6 text-white group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


export default function FinancialServices() {
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
        <TechnologySection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
