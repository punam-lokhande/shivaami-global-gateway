import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useRegion } from '@/contexts/RegionContext';
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Key, 
  Lock, 
  BarChart3, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  FileCheck,
  Brain,
  Settings,
  GraduationCap,
  HeadphonesIcon,
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import goDmarcBanner from "@/assets/banners/godmarc-banner.jpg";
import strategicPlanning from "@/assets/activation/strategic-planning.jpg";
import technicalDeployment from "@/assets/activation/technical-deployment.jpg";
import securityConfig from "@/assets/activation/security-config.jpg";
import teamTraining from "@/assets/activation/team-training.jpg";
import ongoingSupport from "@/assets/activation/ongoing-support.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${goDmarcBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/90 via-[#0C4594]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full px-8 lg:px-16 xl:px-24"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Protect Your Email Domain with <span className="text-[#38B6FF]">GoDMARC</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Email authentication platform implementing DMARC, SPF, and DKIM protocols. Protect your domain from spoofing, improve deliverability, and protect brand reputation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Secure Your Email Domain
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    icon: Shield,
    title: "DMARC Implementation",
    description: "Authenticate emails sent from your domain with industry-standard protocol. Prevent attackers from spoofing your domain in phishing attacks."
  },
  {
    icon: Key,
    title: "SPF Configuration",
    description: "Specify which mail servers can send email for your domain. Simple validation prevents basic spoofing attempts."
  },
  {
    icon: Lock,
    title: "DKIM Signing",
    description: "Cryptographic signatures verify email integrity and authenticity. Prevents message tampering during transmission."
  },
  {
    icon: BarChart3,
    title: "Monitoring and Reporting",
    description: "Track all email sent using your domain. Identify unauthorized sending sources quickly with aggregate reports."
  },
  {
    icon: AlertTriangle,
    title: "Policy Enforcement",
    description: "Gradually move from monitoring to enforcement with confidence. Quarantine or reject unauthenticated emails at recipient servers."
  },
  {
    icon: TrendingUp,
    title: "Deliverability Improvement",
    description: "Authenticated emails bypass spam filters more reliably. Major email providers prioritize properly authenticated messages."
  },
  {
    icon: Zap,
    title: "Threat Intelligence",
    description: "Identify phishing campaigns targeting your domain. Receive alerts when spoofing attempts occur."
  },
  {
    icon: FileCheck,
    title: "Compliance Support",
    description: "Meet regulatory requirements for email security. Documentation supports audit and compliance processes."
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          What GoDMARC Delivers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Prevent phishing attacks, improve deliverability, and protect brand reputation
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        {...staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#0C4594] to-[#1E88E5] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

interface FlipCardProps {
  image: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const FlipCard = ({ image, icon: Icon, title, description }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[280px] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/90 via-[#0C4594]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0C4594] to-[#1E88E5] p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const activationSteps = [
  {
    image: strategicPlanning,
    icon: Brain,
    title: "Strategy and Planning",
    description: "We audit your current email authentication configuration. Our team identifies all legitimate email sources for your domain."
  },
  {
    image: technicalDeployment,
    icon: Settings,
    title: "Deployment and Integration",
    description: "Shivaami configures SPF, DKIM, and DMARC records correctly. We work with email service providers to enable authentication."
  },
  {
    image: securityConfig,
    icon: Shield,
    title: "Security and Compliance",
    description: "Our experts monitor authentication reports and identify issues. We gradually enforce policies as confidence grows."
  },
  {
    image: teamTraining,
    icon: GraduationCap,
    title: "User Enablement and Adoption",
    description: "We explain email authentication to stakeholders clearly. Communication addresses any concerns about email deliverability."
  },
  {
    image: ongoingSupport,
    icon: HeadphonesIcon,
    title: "Ongoing Optimization and Support",
    description: "Shivaami monitors your DMARC environment continuously. We add new email sources as your business evolves."
  }
];

const ActivationSection = () => (
  <section className="py-20 bg-white">
    <div className="w-full px-8 lg:px-16 xl:px-24">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
          How Shivaami Helps You Succeed?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our email security expertise ensures successful DMARC implementation
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        {...staggerContainer}
      >
        {activationSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 }
            }}
          >
            <FlipCard {...step} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CalendarCTASection = () => {
  const { region } = useRegion();
  const consultationLink = region === 'india' 
    ? 'https://calendar.app.google/gV1KaLLVkPR32C1p9'
    : 'https://app.apollo.io/#/meet/40u-obp-ihl/30-min';

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#1565C0] to-[#0D47A1]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
          <Calendar className="w-16 h-16 text-[#38B6FF] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Implement Email Authentication with GoDMARC
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule a consultation with our email security specialists
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {[
              "Email authentication audit",
              "SPF/DKIM/DMARC configuration",
              "Policy enforcement planning",
              "Deliverability monitoring",
              "Threat intelligence alerts",
              "Compliance documentation"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a href={consultationLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const GoDmarc = () => {
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
};

export default GoDmarc;
