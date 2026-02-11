import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Mail, Globe, Calendar, Smartphone, Users, Database, Shield, Lock,
  Settings, CheckCircle2, ArrowRight, Play, Phone,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/zoho-mail-banner.jpg';
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

// Hero Section with Banner Image
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Zoho Mail"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            Zoho Mail:<br />
            <span className="text-[#38B6FF]">Professional</span> Business Email
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Zoho Mail is a secure, privacy-focused email platform offering custom domain hosting, calendars, and collaboration tools. Shivaami, a certified Zoho partner, helps businesses deploy and manage Zoho Mail seamlessly across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// What Zoho Mail Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: 'Custom Domain Email',
      desc: ' Use your company domain for all email addresses. Professional branding builds trust with customers and partners. Multiple domain support for businesses with different brands.',
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
      desc: ' Generous mailbox storage per user with flexible plans. Large attachment support through integrated cloud storage. Archive old emails without losing access.',
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
      icon: Lock,
      title: 'Privacy Focused',
      desc: 'Flexible mailbox storage options and large attachment support via integrated cloud storage ensure your email system scales as your business grows.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Zoho Mail Delivers?
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
        {/* Front Side */}
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

        {/* Back Side */}
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

// How Shivaami Helps You Succeed Section - Flip Cards
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Settings,
      title: 'Strategy and Planning',
      desc: 'We evaluate your email requirements and recommend the right Zoho Mail plan. Our team assesses migration complexity from your current email system. You get a clear implementation plan with a timeline and milestones.',
    },
    {
      image: technicalDeploymentImg,
      icon: Globe,
      title: 'Deployment and Integration',
      desc: 'Shivaami configures your domain DNS settings for email delivery. We create user accounts and set up organizational structure. Your team gets working email addresses quickly and reliably.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security and Compliance',
      desc: 'Our experts enable two-factor authentication and security policies. We configure spam filtering and data retention rules. Backup procedures protect against data loss.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'User Enablement and Adoption',
      desc: 'We provide training on email features, calendar, and collaboration tools. Quick start guides help users transition smoothly. Ongoing support addresses questions and issues promptly.',
    },
    {
      image: ongoingSupportImg,
      icon: Phone,
      title: 'Ongoing Optimization and Support',
      desc: 'Shivaami manages your Zoho Mail environment with proactive monitoring. We handle user additions, storage upgrades, and technical issues. Regular reviews ensure optimal performance and cost efficiency.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed?
          </h2>
        </motion.div>

        <motion.div 
          {...staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
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

import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

// Main Page Component
export default function ZohoMail() {
  const [showGetStartedDialog, setShowGetStartedDialog] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setShowGetStartedDialog(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How do I set up a professional email address for my business?",
      answer: "Zoho Mail offers secure, ad-free business email hosting with custom domain support. The free plan includes 5GB storage for up to 5 users. Setup involves simple domain verification, with enterprise-grade encryption and mobile access included."
    },
    {
      question: "What is the best email hosting provider for small businesses in India?",
      answer: "Zoho Mail is ideal for Indian SMBs, offering affordable, secure email hosting with local data residency. It includes integrated productivity tools and GDPR/ISO compliance, making it cost-effective compared to Google Workspace and Microsoft 365."
    },
    {
      question: "What are Zoho Mail's pricing plans and collaboration features?",
      answer: "Zoho Mail offers three plans: Mail Lite (₹59/user/month), Workplace Standard (₹99/user/month with collaboration tools), Mail Premium (₹199/user/month), and Workplace Professional (₹399/user/month with advanced features). All include email, storage, and productivity apps, billed annually."
    },
    {
      question: "How do I enable two-factor authentication (2FA) on Zoho Mail?",
      answer: "Go to My Account > Security, click Enable under Two-Factor Authentication, choose your verification method (app/SMS/email), and complete setup. This protects your business email from unauthorized access, critical for compliance in India and APAC."
    },
    {
      question: "Does Zoho Mail offer a free trial or free plan for businesses?",
      answer: "Yes, Zoho Mail has a forever-free plan for up to 5 users with custom domain hosting. Paid plans include a 15-day free trial with collaboration tools like chat and video meetings, ideal for Indian startups evaluating business email."
    },
    {
      question: "Why choose Zoho Mail for business email in India and APAC?",
      answer: "Zoho Mail offers affordable, secure email with local data centers, GDPR/ISO compliance, and integration with Zoho's suite (CRM, Projects). Ad-free experience and 24/7 support make it perfect for privacy-focused SMBs across APAC markets."
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0C4594]/20 to-[#38B6FF]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/faq.jpg" 
                  alt="FAQ Support"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Need Help?</p>
                      <p className="text-white/80 text-sm">We're here 24x7</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - FAQ */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-6">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-white border border-[#e2e8f0] rounded-xl px-4 overflow-hidden hover:border-[#38B6FF]/30 transition-colors"
                  >
                    <AccordionTrigger className="text-[#0C4594] hover:text-[#38B6FF] text-left py-4 hover:no-underline text-sm">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#64748b] pb-4 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* <Link to="/contact" className="inline-block mt-6">
                <Button className="bg-[#0C4594] hover:bg-[#0a3d80] text-white font-medium px-6 py-3 rounded-xl">
                  Have more questions? Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}





const faqSchema = 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I set up a professional email address for my business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoho Mail offers secure, ad-free business email hosting with custom domain support. The free plan includes 5GB storage for up to 5 users. Setup involves simple domain verification, with enterprise-grade encryption and mobile access included."
    }
  },{
    "@type": "Question",
    "name": "What is the best email hosting provider for small businesses in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoho Mail is ideal for Indian SMBs, offering affordable, secure email hosting with local data residency. It includes integrated productivity tools and GDPR/ISO compliance, making it cost-effective compared to Google Workspace and Microsoft 365."
    }
  },{
    "@type": "Question",
    "name": "What are Zoho Mail's pricing plans and collaboration features?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoho Mail offers three plans: Mail Lite (₹59/user/month), Workplace Standard (₹99/user/month with collaboration tools), Mail Premium (₹199/user/month), and Workplace Professional (₹399/user/month with advanced features). All include email, storage, and productivity apps, billed annually."
    }
  },{
    "@type": "Question",
    "name": "How do I enable two-factor authentication (2FA) on Zoho Mail?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Go to My Account > Security, click Enable under Two-Factor Authentication, choose your verification method (app/SMS/email), and complete setup. This protects your business email from unauthorized access, critical for compliance in India and APAC."
    }
  },{
    "@type": "Question",
    "name": "Does Zoho Mail offer a free trial or free plan for businesses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Zoho Mail has a forever-free plan for up to 5 users with custom domain hosting. Paid plans include a 15-day free trial with collaboration tools like chat and video meetings, ideal for Indian startups evaluating business email."
    }
  },{
    "@type": "Question",
    "name": "Why choose Zoho Mail for business email in India and APAC?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Zoho Mail offers affordable, secure email with local data centers, GDPR/ISO compliance, and integration with Zoho's suite (CRM, Projects). Ad-free experience and 24/7 support make it perfect for privacy-focused SMBs across APAC markets."
    }
  }]
}




  return (
    <>
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
    </div></>
  );
}
