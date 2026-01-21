import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, Lock, Users, HeadphonesIcon, CheckCircle2, ArrowRight, 
  MessageSquare, FileCheck, Database, Megaphone, Clock, Network, RefreshCw
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import mediaImage from '@/assets/industries/media.jpg';

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
          src={mediaImage}
          alt="Advertising & Media IT Solutions"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            Create Faster. Collaborate Freely.<br />
            <span className="text-[#38B6FF]">Stay Secure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Advertising and media organizations thrive on collaboration and content velocity. Shivaami ensures creative freedom without compromising data security.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 28 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="block w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto whitespace-normal text-center group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Connect with Media Technology Specialists
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Powering Creative Collaboration Section
function TechnologySection() {
  const features = [
    {
      icon: FileCheck,
      title: 'Secure File Sharing',
      desc: 'Secure file sharing for large media and creative assets with advanced encryption.',
    },
    {
      icon: Users,
      title: 'Controlled Access',
      desc: 'Controlled access for freelancers, agencies, and partners with granular permissions.',
    },
    {
      icon: Shield,
      title: 'Data Leak Protection',
      desc: 'Protection against data leaks and account compromise targeting creative assets.',
    },
    {
      icon: Database,
      title: 'Creative Backup',
      desc: 'Backup of critical creative and campaign data ensuring project continuity.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Powering Creative Collaboration
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Protect creative assets and client data with secure collaboration, access control, and reliable backup for media and advertising teams.
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
                src={mediaImage}
                alt="Media technology solutions"
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

// Built for Fast-Moving Creative Teams Section
function TrustSection() {
  const benefits = [
    {
      icon: MessageSquare,
      title: 'Seamless Collaboration',
      desc: 'Secure collaboration without workflow disruptions for creative teams.',
    },
    {
      icon: Lock,
      title: 'IP Protection',
      desc: 'Protection of client data and creative IP from unauthorized access.',
    },
    {
      icon: Users,
      title: 'Simple Access Control',
      desc: 'Simplified access control across distributed teams and contractors.',
    },
    {
      icon: RefreshCw,
      title: 'Content Recovery',
      desc: 'Reliable recovery of valuable content and campaign assets.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Built for Fast-Moving Creative Teams
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Our solutions enable creative teams to work at speed while maintaining security and control.
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
    'Secure collaboration for creative teams',
    'Asset protection and backup solutions',
    'Access control for external partners',
    '24/7 support for media operations',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <HeadphonesIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Creative Ecosystem
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Keep creativity flowing while safeguarding your digital assets.
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
              Connect with Shivaami's Media Technology Specialists
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function AdvertisingMedia() {
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
