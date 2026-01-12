import { motion } from 'framer-motion';
import { 
  Mail, Globe, Calendar, Smartphone, Users, Database, Shield, Lock,
  Settings, CheckCircle2, ArrowRight, Play, Phone, Clock
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

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
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#38B6FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#38B6FF]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Mail className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">Business Email Solution</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Zoho Mail: Professional Business Email
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Zoho Mail is a professional email platform designed for privacy and productivity. It focuses on secure delivery, strong administrative control, and dependable uptime. It has email hosting with custom domains, calendars, contacts, and collaboration tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Shivaami is a certified Zoho partner helping businesses deploy and manage Zoho Mail. We handle domain setup, email migration, and user training for seamless adoption. Our team ensures your business email runs reliably and securely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8">
              <Mail className="w-4 h-4 mr-2" />
              Switch to Secure Mail
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// What Zoho Mail Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: 'Custom Domain Email',
      desc: 'Use your company domain for all email addresses. Professional branding builds trust with customers and partners. Multiple domain support for businesses with different brands.',
    },
    {
      icon: Calendar,
      title: 'Integrated Calendar and Contacts',
      desc: 'Schedule meetings and manage contacts within the same platform. Calendar sharing enables team coordination and availability tracking. Contact groups simplify bulk communication.',
    },
    {
      icon: Smartphone,
      title: 'Mobile and Desktop Access',
      desc: 'Native apps for iOS, Android, Windows, and macOS. Offline access ensures productivity without internet connectivity. Push notifications keep you updated in real time.',
    },
    {
      icon: Users,
      title: 'Collaboration Tools',
      desc: 'The Streams feature enables team discussions and file sharing. Task management integrates with email and calendar. Notes capture ideas and meeting minutes.',
    },
    {
      icon: Database,
      title: 'Storage and Attachments',
      desc: 'Generous mailbox storage per user with flexible plans. Large attachment support through integrated cloud storage. Archive old emails without losing access.',
    },
    {
      icon: Shield,
      title: 'Security Features',
      desc: 'Two-factor authentication protects accounts from unauthorized access. Email encryption secures messages in transit. Spam and virus filtering block threats automatically.',
    },
    {
      icon: Settings,
      title: 'Admin Controls',
      desc: 'Centralized management console for user accounts and settings. Email retention policies support compliance requirements. Usage reports track storage and activity patterns.',
    },
    {
      icon: Database,
      title: 'Scalable Storage and Attachments',
      desc: 'Flexible mailbox storage options and large attachment support via integrated cloud storage ensure your email system scales as your business grows.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Zoho Mail Delivers?
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

// How Shivaami Helps You Succeed Section
function ActivationSection() {
  const steps = [
    {
      icon: Settings,
      title: 'Strategy and Planning',
      desc: 'We evaluate your email requirements and recommend the right Zoho Mail plan. Our team assesses migration complexity from your current email system. You get a clear implementation plan with a timeline and milestones.',
    },
    {
      icon: Globe,
      title: 'Deployment and Integration',
      desc: 'Shivaami configures your domain DNS settings for email delivery. We create user accounts and set up organizational structure. Your team gets working email addresses quickly and reliably.',
    },
    {
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts enable two-factor authentication and security policies. We configure spam filtering and data retention rules. Backup procedures protect against data loss.',
    },
    {
      icon: Users,
      title: 'User Enablement and Adoption',
      desc: 'We provide training on email features, calendar, and collaboration tools. Quick start guides help users transition smoothly. Ongoing support addresses questions and issues promptly.',
    },
    {
      icon: Phone,
      title: 'Ongoing Optimization and Support',
      desc: 'Shivaami manages your Zoho Mail environment with proactive monitoring. We handle user additions, storage upgrades, and technical issues. Regular reviews ensure optimal performance and cost efficiency.',
      additionalText: 'As a Zoho partner, we streamline licensing, billing, and renewals. Our team provides direct support without lengthy vendor escalations. You get responsive service from people who know your environment.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{step.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
                    {step.additionalText && (
                      <p className="text-[#475569] text-sm leading-relaxed mt-3">{step.additionalText}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Calendar CTA Section
function CalendarCTASection() {
  const demoPoints = [
    'Email migration plan from your current provider',
    'Domain configuration and DNS setup requirements',
    'User account structure and permission design',
    'Security and backup recommendations',
    'Pricing and licensing options for your team size',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Switch to professional email with Zoho Mail
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Schedule a consultation with our email specialists. In this 30-minute session, you'll discover:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-10">
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

          <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8">
            Book a Call Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ZohoMail() {
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
