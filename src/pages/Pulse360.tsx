import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowRight, Calendar, CheckCircle2,
  Monitor, FileText, Database, Shield, Headphones, TrendingUp, Users
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/pulse360-banner.jpg';
// Feature images
import monitoringImg from '@/assets/pulse360/monitoring.jpg';
import reportsImg from '@/assets/pulse360/reports.jpg';
import backupImg from '@/assets/pulse360/backup.jpg';
import patchesImg from '@/assets/pulse360/patches.jpg';
import helpdeskImg from '@/assets/pulse360/helpdesk.jpg';
import capacityImg from '@/assets/pulse360/capacity.jpg';
import vendorImg from '@/assets/pulse360/vendor.jpg';

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
          src={heroImage}
          alt="Pulse360 Managed Services"
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
            Pulse360:<br />
            <span className="text-[#38B6FF]">24/7</span> System<br />
            Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Shivaami gives you a complete IT team without the overhead. We monitor your systems around the clock and fix issues before they impact your business. Our experts handle updates, security, and performance tuning. You get predictable costs and reliable technology every day.
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
}

// What We Handle For You Section
function FeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: '24/7 System Monitoring',
      desc: 'We watch your infrastructure continuously using advanced tools. Problems get detected and resolved before users notice them.',
      image: monitoringImg,
    },
    {
      icon: FileText,
      title: 'Monthly Performance Reports',
      desc: 'You receive clear reports showing system health and improvements. These insights help you plan better technology investments.',
      image: reportsImg,
    },
    {
      icon: Database,
      title: 'Automated Backup Management',
      desc: 'We schedule and verify your backups daily. Your data stays protected and recoverable at all times.',
      image: backupImg,
    },
    {
      icon: Shield,
      title: 'Security Patch Deployment',
      desc: 'We apply critical updates across all your systems. This keeps vulnerabilities closed and compliance requirements met.',
      image: patchesImg,
    },
    {
      icon: Headphones,
      title: 'Help Desk Support',
      desc: 'Your team gets direct access to our technicians. We respond quickly to questions and technical issues.',
      image: helpdeskImg,
    },
    {
      icon: TrendingUp,
      title: 'Capacity Planning',
      desc: 'We track your resource usage and predict future needs. This prevents slowdowns and helps you budget effectively.',
      image: capacityImg,
    },
    {
      icon: Users,
      title: 'Vendor Coordination',
      desc: 'We manage relationships with your technology suppliers. This saves you time and ensures faster issue resolution.',
      image: vendorImg,
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
            Complete IT management so you can focus on growing your business.
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
  const demoPoints = [
    'Infrastructure assessment — we evaluate your current systems and identify improvement areas',
    'Custom service proposal — get a tailored managed services plan for your business',
    'Transparent pricing — understand exactly what you\'re getting with no hidden costs',
    'Implementation timeline — see how quickly we can take over your IT management',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Talk to Our Experts
          </h2>
          <p className="text-lg text-white/80 mb-8">Schedule a consultation and we'll provide:</p>

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

          <Link to="/lets-connect">
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Pulse360() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CalendarCTASection />
      </main>
      <Footer />
    </div>
  );
}
