import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Brain, Search, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Play, Calendar, Clock,
  Zap, Settings, Blocks, Workflow,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/gemini-enterprise-banner.jpg';
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

// Hero Section - Reduced height with different banner
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
          alt="Gemini Enterprise AI Solutions"
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
            Gemini Enterprise:<br />
            <span className="text-[#38B6FF]">Enterprise-Ready AI</span> 
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Gemini Enterprise is Google's agentic AI platform built to automate business operations across every department.
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

// What Gemini Enterprise Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Unified Enterprise Search',
      desc: 'Access a single, intelligent search experience across your entire organization. Gemini Enterprise securely connects you to various tools, enabling employees to find the right information instantly. No more switching between apps or searching through folders to find what you need.',
    },
    {
      icon: Brain,
      title: "Access to Google's Latest AI Models",
      desc: "Empower your workforce with Google’s most advanced AI capabilities, including Gemini 3 and Flash, NotebookLM Enterprise, Deep Research, Imagen, and Veo. All models are delivered through a secure, enterprise-ready, and compliant framework.",
    },
    {
      icon: Blocks,
      title: 'Comprehensive AI Agent Ecosystem',
      desc: 'Build custom agents using the no-code Agent Designer, integrate third-party agents from Box, Salesforce, and ServiceNow, or use Google-built agents from the Agent Gallery. Gemini Enterprise centralizes management through Workbench, creating one of the most powerful AI agent ecosystems for enterprises.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security & Compliance',
      desc: 'Built with world-class security features such as VPC Security Controls, CMEK, Access Transparency, tenant isolation, and role-based access control. Shivaami ensures your AI agents operate in a fully governed, compliant environment following least-privilege principles.',
    },
    {
      icon: Zap,
      title: 'No-Code AI Agent Development',
      desc: 'Create enterprise-grade AI agents that understand natural language, automate workflows, and deliver insights, without writing any code. Agent Designer enables business users to build tailored automation without dependency on development teams.',
    },
    {
      icon: Workflow,
      title: 'Seamlessly Integrated Into Your Workflow',
      desc: 'Enable AI agents directly within Gmail, Docs, Sheets, and Drive, where your teams already work every day. As a standalone Google Cloud platform, Gemini Enterprise delivers complete AI agent infrastructure beyond just a Workspace add-on.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Gemini Enterprise Delivers
          </h2>
          Gemini Enterprise is Google's agentic AI platform built to automate business operations across every department. As an official onboarding partner, Shivaami helps organizations deploy AI agents that integrate with your workflow.
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
        {/* Front Side - Image with title and icon */}
        <div 
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/70 to-[#0C4594]/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/40 to-transparent" />
          
          {/* Icon and Title on front */}
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

        {/* Back Side - Description */}
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

// How Shivaami Activates Gemini Enterprise Section - 3 Column Flip Cards
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Brain,
      title: 'Strategic AI Agent Planning',
      desc: 'We understand your business processes and identify high-impact automation opportunities with an AI agent roadmap that delivers measurable ROI. No generic deployment. Every agent we build solves a real problem.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'Zero-Friction Deployment',
      desc: 'Complete technical setup: platform configuration, security controls, and integration with your existing tools like Salesforce, Jira, and Slack. Your team logs in to AI agents that are ready to work from day one.  ',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Enterprise Security',
      desc: 'VPC Security Controls, CMEK encryption, Access Transparency, role-based access controls, and audit logging from day one.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'Team Enablement & Agent Training',
      desc: 'We dont just hand over technology. We train your teams on how to use prebuilt agents, build their own with no-code tools, and integrate AI into daily workflows. Hands-on workshops, department-specific use cases, and ongoing support ensure adoption.',
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: 'Ongoing Support & Updates',
      desc: 'Google releases new AI models and agent capabilities monthly. We keep your platform updated, help you leverage new features, and provide 24/7 technical support. Average response time: 4 minutes. Resolution time: under 40 minutes.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Activates Gemini Enterprise Across Your Organization?
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

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is Gemini Enterprise?",
      answer: "Gemini Enterprise is Google's advanced AI agent platform that transforms how organizations leverage artificial intelligence. It provides enterprise-grade AI capabilities, enabling businesses to deploy intelligent agents across teams without complex infrastructure management or technical expertise."
    },
    {
      question: "Is Gemini Enterprise the same as Gemini for Google Workspace? ",
      answer: "No. Gemini Enterprise is a standalone Google Cloud AI platform with comprehensive agent-building capabilities and enterprise features. It differs from Gemini for Google Workspace, which is an add-on for productivity apps like Gmail, Docs, and Sheets."
    },
    {
      question: "Do I need technical expertise to build AI agents in Gemini Enterprise? ",
      answer: "No technical expertise is required. Gemini Enterprise features a no-code visual Agent Designer that allows anyone to create custom AI agents without programming knowledge. Authorized partners like Shivaami also provide implementation support and training."
    },
    {
      question: "How does Gemini Enterprise ensure enterprise data security and compliance?",
      answer: "Gemini Enterprise includes enterprise-grade security features such as VPC Security Controls, Customer-Managed Encryption Keys (CMEK), Access Transparency, tenant isolation, and role-based access control (RBAC) to meet industry compliance standards."
    },
    {
      question: "Can Gemini Enterprise integrate with existing business tools and applications?",
      answer: "Yes. Gemini Enterprise integrates seamlessly with popular enterprise tools, including Salesforce, Jira, SharePoint, Outlook, Slack, Google Workspace, and supports third-party integrations from partners like Box and ServiceNow for unified workflows."
    },
    {
      question: "What prebuilt AI agents are available in Gemini Enterprise?",
      answer: "Gemini Enterprise offers ready-to-deploy prebuilt agents for common business functions, including data analysis, content generation, code assistance, customer support, and research. These agents can be implemented immediately without custom development or configuration."
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

              <Link to="/contact" className="inline-block mt-6">
                <Button className="bg-[#0C4594] hover:bg-[#0a3d80] text-white font-medium px-6 py-3 rounded-xl">
                  Have more questions? Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

// Main Page Component
export default function GeminiEnterprise() {
  const [showGetStartedDialog, setShowGetStartedDialog] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setShowGetStartedDialog(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivationSection />
        <FAQSection/>
        <CTASection />
       
      </main>
      <Footer />
      <GetStartedDialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog} />
    </div>
  );
}
