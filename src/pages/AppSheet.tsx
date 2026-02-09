import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Brain, Smartphone, Database, Camera, Workflow, MessageSquare,
  Briefcase, Users, Clock, Headphones, Package, Building, UserCheck,
  Search, Lightbulb, Rocket, Link2, GraduationCap, Shield, Settings,
  HelpCircle, ArrowRight
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { Helmet } from 'react-helmet-async';

// Banner
import heroImage from '@/assets/banners/appsheet-banner.jpg';

// Images for flip cards
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

// Hero Section
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
          alt="AppSheet No-Code Development Platform"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            AppSheet:<br />
            <span className="text-[#38B6FF]">No-Code App Development Platform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            AppSheet enables no-code development of custom mobile and web applications using existing data sources. Shivaami helps organisations deploy AppSheet solutions to digitalize workflows, automate processes, and increase productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-white hover:text-[#0C4594] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

// What AppSheet Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Gemini-Powered Development',
      desc: "Build apps by simply describing your needs in plain English. Gemini AI suggests data structures and automations, allowing anyone in your organisation to become a creator.",
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Apps',
      desc: 'Deploy apps that work seamlessly on iOS, Android, and web browsers. A single build creates a consistent experience across all devices, online or offline.',
    },
    {
      icon: Database,
      title: 'Next-Gen Data Integration',
      desc: 'Connect to Google Sheets, Excel, and SQL, or use the native AppSheet Database for high-performance, large-scale data management without external setup.',
    },
    {
      icon: Camera,
      title: 'AI-Driven Data Capture',
      desc: 'Beyond signatures and GPS, use AI to automatically extract data from receipts, invoices, and IDs. Information syncs instantly when devices reconnect.',
    },
    {
      icon: Workflow,
      title: 'Intelligent Workflow Automation',
      desc: 'Build custom rules that trigger actions automatically. Use Gemini to summarize reports, categorize tickets, or send smart notifications based on business conditions.',
    },
    {
      icon: MessageSquare,
      title: 'Unified Workspace Integration',
      desc: 'Run your apps directly within Google Chat and Gmail. Users can complete tasks without ever leaving their communication tools.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What AppSheet Delivers
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

// AppSheet Solutions We Build Section
function SolutionsSection() {
  const solutions = [
    {
      icon: Briefcase,
      title: 'Project Management',
      desc: 'Manage projects, assign tasks, and calculate budgets with interactive dashboards. Role-based access provides management visibility through real-time progress tracking and comprehensive reports.',
    },
    {
      icon: Users,
      title: 'Talent Acquisition System',
      desc: "Streamline hiring requests through approval workflows. Approved positions automatically post to your organisation's social media platforms for broader reach.",
    },
    {
      icon: Clock,
      title: 'Timesheets',
      desc: 'Track employee productivity and time allocation across projects. Generate reports that provide management with clear insights into resource utilization.',
    },
    {
      icon: Headphones,
      title: 'Helpdesk Ticketing Solution',
      desc: 'Centralize support requests with automated assignment and notifications. Track issues, improve response times, and gain data insights for continuous service improvement.',
    },
    {
      icon: Package,
      title: 'Product Improvement System',
      desc: 'Document product feedback across teams with approval workflows. Upload images of product issues and route them through internal review for refund, replacement, or update decisions.',
    },
    {
      icon: Building,
      title: 'Vendor Management System',
      desc: 'Streamline vendor onboarding with document collection and approval workflows. Automatically organize vendor documents in dedicated Google Drive folders.',
    },
    {
      icon: UserCheck,
      title: 'Visitor Management System',
      desc: 'Track visitor check-ins with automated notifications. Maintain historical records of frequent visitors for enhanced security and convenience.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            AppSheet Solutions We Build
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg hover:border-[#38B6FF]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0C4594]/10 flex items-center justify-center mb-4 group-hover:bg-[#38B6FF]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#0C4594]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{solution.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{solution.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Flip Card Component
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

// How Shivaami Helps Section
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Search,
      title: 'Discovery and Planning',
      desc: 'We analyse your business processes and identify automation opportunities. Our team documents workflow requirements and data sources. You receive a roadmap for app development aligned with priorities.',
    },
    {
      image: technicalDeploymentImg,
      icon: Rocket,
      title: 'App Development and Deployment',
      desc: 'Shivaami builds custom AppSheet applications tailored to your needs. We configure data connections, design interfaces, and implement business logic. Your apps launch with thorough testing and validation.',
    },
    {
      image: securityConfigImg,
      icon: Link2,
      title: 'Data Integration and Migration',
      desc: 'Our experts connect AppSheet to your existing systems and databases. We structure data for optimal app performance. Clean migration ensures accuracy and reliability.',
    },
    {
      image: teamTrainingImg,
      icon: GraduationCap,
      title: 'User Training and Enablement',
      desc: 'We provide comprehensive training for app users and citizen developers. Hands-on workshops cover app usage and basic development skills. Support materials include guides, videos, and quick reference cards.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Governance and Security',
      desc: 'Shivaami establishes policies for app development and deployment. We configure access controls and data permissions appropriately. Regular audits maintain security and compliance standards.',
    },
    {
      image: ongoingSupportImg,
      icon: Settings,
      title: 'Ongoing Support and Optimisation',
      desc: 'Our team monitors app performance and user adoption metrics. We handle updates, enhancements, and troubleshooting. Continuous improvement keeps apps aligned with evolving needs.',
    },
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed
          </h2>
        </motion.div>

        <motion.div 
          {...staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
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

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is AppSheet used for?",
      answer: "AppSheet is a no-code development platform that allows anyone to build powerful mobile and web applications without writing code. It is primarily used to digitize manual processes, such as field inspections, inventory tracking, and project management, by connecting directly to data sources like Google Sheets, Excel, SQL, and Salesforce."
    },
    {
      question: 'Is AppSheet really "no-code"?',
      answer: 'Yes. AppSheet uses a declarative interface, meaning you describe what the app should do rather than writing scripts. With the integration of Gemini AI, you can even build apps by simply describing your business process in natural language (e.g., "Build an app to track construction site safety inspections"), and AppSheet will generate the data structure and views for you.'
    },
    {
      question: "Is AppSheet free for Google Workspace users?",
      answer: "AppSheet Core is included at no additional cost in most Google Workspace editions (including Business Starter, Standard, Plus, and Enterprise versions). This means most Shivaami customers already have access to build and deploy apps within their organization without purchasing separate licenses."
    },
    {
      question: "Can I use AppSheet for free if I don't have Workspace?",
      answer: 'Yes. AppSheet offers a free prototyping tier that allows you to use nearly all features—including advanced automation—while you are building and testing your app. You can invite up to 10 test users at no cost. You only need to pay for a subscription when you are ready to officially "deploy" the app to a larger audience.'
    },
    {
      question: 'What are the "Gemini in AppSheet" features?',
      answer: "Google has supercharged AppSheet with Gemini AI to make development faster: App Creation - Describe your app idea in plain English to generate a starting framework. AI Automations - Use Gemini to automatically extract data from receipts or IDs, summarize long text fields, or categorize support tickets based on their content. Chat Apps - Deploy your AppSheet apps directly into Google Chat as interactive \"Chat Apps\" to streamline workflows."
    },
    {
      question: "Is AppSheet limited to mobile devices?",
      answer: 'No. While AppSheet excels on mobile (iOS and Android) with offline capabilities, it also runs natively in web browsers. It automatically adjusts its layout for desktops and tablets, making it a "build once, deploy anywhere" solution for your entire team.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0C4594]/20 to-[#38B6FF]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop" 
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
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 overflow-hidden hover:border-[#38B6FF]/30 transition-colors"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function AppSheet() {
  const [showGetStartedDialog, setShowGetStartedDialog] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setShowGetStartedDialog(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AppSheet used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AppSheet is a no-code development platform that allows anyone to build powerful mobile and web applications without writing code. It is primarily used to digitize manual processes, such as field inspections, inventory tracking, and project management, by connecting directly to data sources like Google Sheets, Excel, SQL, and Salesforce."
        }
      },
      {
        "@type": "Question",
        "name": "Is AppSheet really \"no-code\"?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AppSheet uses a declarative interface, meaning you describe what the app should do rather than writing scripts. With the integration of Gemini AI, you can even build apps by simply describing your business process in natural language."
        }
      },
      {
        "@type": "Question",
        "name": "Is AppSheet free for Google Workspace users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AppSheet Core is included at no additional cost in most Google Workspace editions (including Business Starter, Standard, Plus, and Enterprise versions)."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AppSheet No-Code App Development | Custom Business Apps – Shivaami</title>
        <meta name="description" content="Build custom mobile and web apps without code using AppSheet. Shivaami helps organisations deploy AppSheet solutions to digitalize workflows and automate processes." />
        <link rel="canonical" href="https://www.shivaami.com/appsheet" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <SolutionsSection />
          <ActivationSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
      </div>
    </>
  );
}
