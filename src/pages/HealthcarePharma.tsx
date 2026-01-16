import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, Lock, Users, HeadphonesIcon, CheckCircle2, ArrowRight, 
  MessageSquare, FileCheck, Database, RefreshCw, Scale, Clock, Network
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import healthcareBanner from '@/assets/banners/healthcare-pharma-banner.jpg';

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
    <section ref={ref} className="relative h-[70vh] min-h-[500px] max-h-[600px] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={healthcareBanner}
          alt="Healthcare & Pharma IT Solutions"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-24 lg:pt-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">Healthcare & Pharma</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-[1.15] tracking-tight"
          >
            Secure Care.<br />
            <span className="text-[#38B6FF]">Smarter Collaboration.</span><br />
            Always Compliant.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl mb-8 leading-relaxed font-body"
          >
            Empowering healthcare teams to protect patient & research data while working seamlessly.
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-base group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Our Healthcare IT Specialists
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Where Technology Meets Care Delivery Section
function TechnologySection() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Secure Communication',
      desc: 'Secure communication between doctors, labs, pharmacies, and administration teams with encrypted channels.',
    },
    {
      icon: FileCheck,
      title: 'Role-Based Access',
      desc: 'Role-based access to patient records, research data, and clinical documentation with granular permissions.',
    },
    {
      icon: Shield,
      title: 'Ransomware Protection',
      desc: 'Protection against ransomware and data breaches targeting healthcare systems with advanced threat detection.',
    },
    {
      icon: Database,
      title: 'Automated Backup',
      desc: 'Automated backup and recovery for critical medical and regulatory data ensuring business continuity.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Where Technology Meets Care Delivery
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Modern healthcare requires modern IT infrastructure. We provide solutions that enable secure, efficient, and compliant operations.
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

// Why Healthcare Leaders Trust Shivaami Section
function TrustSection() {
  const benefits = [
    {
      icon: Lock,
      title: 'Enhanced Data Security',
      desc: 'Advanced security measures for patient and research information with end-to-end encryption.',
    },
    {
      icon: Scale,
      title: 'Compliance-Ready',
      desc: 'Built-in access controls and audit visibility for regulatory compliance requirements.',
    },
    {
      icon: Clock,
      title: 'Uninterrupted Access',
      desc: 'High availability systems ensuring access during emergencies when it matters most.',
    },
    {
      icon: Network,
      title: 'Scalable Infrastructure',
      desc: 'IT infrastructure that grows with your healthcare network and adapts to changing needs.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Why Healthcare Leaders Trust Shivaami
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Our proven track record with healthcare organizations demonstrates our commitment to security, compliance, and reliability.
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

// CTA Section
function CTASection() {
  const points = [
    'Secure collaboration tools for healthcare teams',
    'Compliance-ready infrastructure and controls',
    'Data protection and backup solutions',
    '24/7 support for critical healthcare systems',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <HeadphonesIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build a Safer Digital Foundation for Healthcare
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Enable secure, compliant, and reliable healthcare operations with Shivaami's industry-focused expertise.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-10">
            {points.map((point, idx) => (
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

          <Link to="/contact">
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Talk to Our Healthcare IT Specialists
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function HealthcarePharma() {
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
    </div>
  );
}
