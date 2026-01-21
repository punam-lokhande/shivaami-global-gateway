import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Laptop, Settings, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Calendar,
  Cloud, Lock, Printer, BarChart3, Monitor, Tv
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/chrome-enterprise-banner.jpg';
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
          alt="Chrome Enterprise Device Management"
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
            Enterprise Device Management<br />
            <span className="text-[#38B6FF]">with Chrome Enterprise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl mb-8 leading-relaxed font-body"
          >
            Chrome Enterprise provides centralized management and security for Chrome OS devices and Chrome browser. It delivers cloud-based policy control, application management, and reporting. Organizations choose it for simplified administration, enhanced security, and reduced IT overhead.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 28 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/lets-connect">
              <Button
                size="lg"
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-base group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Laptop className="w-5 h-5 mr-2" />
                Talk to a Specialist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Settings,
      title: 'Centralized Policy Management',
      desc: 'Control device settings from cloud-based admin console. Policies apply automatically when devices connect. No on-premises infrastructure required for management.',
    },
    {
      icon: Monitor,
      title: 'Chrome Browser Management',
      desc: 'Extend policies to Chrome browser on Windows, Mac, and Linux. Consistent security across all platforms. Control extensions, bookmarks, and browser features.',
    },
    {
      icon: Cloud,
      title: 'Application Control',
      desc: 'Push web and Android applications to managed devices. Force-install required apps and block unauthorized software. Enterprise app store simplifies distribution.',
    },
    {
      icon: Lock,
      title: 'Network Configuration',
      desc: 'Pre-configure WiFi, VPN, and certificate settings. Devices connect to corporate networks automatically. Secure connectivity without user intervention.',
    },
    {
      icon: Printer,
      title: 'Printing Management',
      desc: 'Cloud printing eliminates need for printer drivers. Users access any managed printer from any device. Centralized control simplifies printer fleet management.',
    },
    {
      icon: Tv,
      title: 'Kiosk and Signage',
      desc: 'Lock devices to single application or auto-launch content. Session management for shared devices and public kiosks. Scheduled content updates for digital signage.',
    },
    {
      icon: BarChart3,
      title: 'Reporting and Analytics',
      desc: 'Device inventory shows hardware specifications and status. Application usage reports identify adoption patterns. Security reports demonstrate compliance posture.',
    },
    {
      icon: Users,
      title: 'User and Device Policies',
      desc: 'Separate policies for different user groups or device types. Organizational unit structure matches company hierarchy. Granular control enables precise management.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Chrome Enterprise Delivers
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

function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Laptop,
      title: 'Strategy and Planning',
      desc: 'We assess your device management requirements and design organizational structure. Our team identifies policies and applications for deployment.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'Deployment and Integration',
      desc: 'Shivaami configures Chrome Enterprise and establishes device enrollment. We create policies, configure applications, and test workflows.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts implement security policies and access controls. We configure device restrictions and data protection settings for governance.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'Admin Training',
      desc: 'We train IT administrators on console features and best practices. Documentation supports ongoing device management and policy application.',
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      desc: 'Shivaami provides ongoing management guidance and policy optimization. We adjust configurations as requirements evolve and identify improvements.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed
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

function CalendarCTASection() {
  const demoPoints = [
    'Chrome Enterprise licensing options and pricing',
    'Policy configuration and organizational structure design',
    'Application management and deployment strategies',
    'Integration with existing IT infrastructure',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implement Chrome Enterprise device management
          </h2>
          <p className="text-lg text-white/80 mb-8">Schedule a consultation with our management specialists:</p>

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
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ChromeEnterprise() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <CalendarCTASection />
      </main>
      <Footer />
    </div>
  );
}