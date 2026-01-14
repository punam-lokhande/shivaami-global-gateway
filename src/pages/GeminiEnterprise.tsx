import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Brain, Search, Shield, 
  Users, HeadphonesIcon, CheckCircle2, ArrowRight, Play, Calendar, Clock,
  Zap, Settings, Blocks, Workflow
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] max-h-[600px] flex items-center overflow-hidden">
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
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-24 lg:pt-28">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-[1.15] tracking-tight"
          >
            Gemini Enterprise:<br />
            <span className="text-[#38B6FF]">The Future</span> of<br />
            Enterprise AI
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl mb-8 leading-relaxed font-body"
          >
            Gemini Enterprise is Google's agentic AI platform built to automate business operations across every department. As an official onboarding partner, Shivaami helps organizations deploy AI agents that integrate with your workflow.
          </motion.p>

          {/* CTA */}
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
                <Play className="w-5 h-5 mr-2" />
                Book a Live Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
      desc: 'Access a single, intelligent search experience across your entire organization. Gemini Enterprise securely connects you to various tools, enabling employees to find the right information instantly.',
    },
    {
      icon: Brain,
      title: "Access to Google's Latest AI Models",
      desc: "Empower your workforce with Google's most advanced AI capabilities, including Gemini 3 and Flash, NotebookLM Enterprise, Deep Research, Imagen, and Veo.",
    },
    {
      icon: Blocks,
      title: 'Comprehensive AI Agent Ecosystem',
      desc: 'Build custom agents using the no-code Agent Designer, integrate third-party agents from Box, Salesforce, and ServiceNow, or use Google-built agents from the Agent Gallery.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security & Compliance',
      desc: 'Built with world-class security features such as VPC Security Controls, CMEK, Access Transparency, tenant isolation, and role-based access control.',
    },
    {
      icon: Zap,
      title: 'No-Code AI Agent Development',
      desc: 'Create enterprise-grade AI agents that understand natural language, automate workflows, and deliver insights, without writing any code.',
    },
    {
      icon: Workflow,
      title: 'Seamlessly Integrated Into Your Workflow',
      desc: 'Enable AI agents directly within Gmail, Docs, Sheets, and Drive, where your teams already work every day.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Gemini Enterprise Delivers
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

// Flip Card Component
function FlipCard({ title, description, image }: { title: string; description: string; image: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Image with title */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/30 to-transparent" />
          
          {/* Title on front */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
            <div className="mt-3 flex items-center gap-2 text-white/80 text-sm">
              <span>Hover to learn more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Back Side - Description */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-[#0C4594] to-[#082d61] p-6 flex flex-col justify-center"
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
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{description}</p>
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
      title: 'Strategic AI Agent Planning',
      desc: 'We start by understanding your business processes, identifying high-impact automation opportunities. We design an AI agent roadmap that delivers measurable ROI within 90 days. Every agent we build solves a real problem.',
    },
    {
      image: technicalDeploymentImg,
      title: 'Zero-Friction Technical Deployment',
      desc: 'We handle the complete technical setup: platform configuration, security controls, integration with your existing tools (Salesforce, Jira, Slack, SharePoint), and access management. Your team logs in to AI agents ready to work.',
    },
    {
      image: securityConfigImg,
      title: 'Enterprise Security Configuration',
      desc: "We implement VPC Security Controls, CMEK encryption, Access Transparency, role-based access controls, and audit logging. Your deployment meets compliance requirements from the start.",
    },
    {
      image: teamTrainingImg,
      title: 'Team Enablement & Agent Training',
      desc: "We train your teams on how to use prebuilt agents, build their own with no-code tools, and integrate AI into daily workflows. Hands-on workshops and department-specific use cases ensure adoption.",
    },
    {
      image: ongoingSupportImg,
      title: 'Ongoing Support & Updates',
      desc: 'Google releases new AI models and agent capabilities monthly. We keep your platform updated, help you leverage new features, and provide 24/7 technical support with 4-minute response times.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            How Shivaami Activates Gemini Enterprise Across Your Organization
          </h2>
        </motion.div>

        <motion.div 
          {...staggerContainer} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {steps.slice(0, 3).map((step, idx) => (
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
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - 2 cards centered */}
        <motion.div 
          {...staggerContainer} 
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6"
        >
          {steps.slice(3).map((step, idx) => (
            <motion.div
              key={idx + 3}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 }
              }}
            >
              <FlipCard 
                title={step.title}
                description={step.desc}
                image={step.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Calendar CTA Section
function CalendarCTASection() {
  const demoPoints = [
    'Live AI agents in action — watch them automate real tasks from your business',
    'ROI projections — see exactly how much time and money you\'ll save',
    'Custom agent roadmap — which processes to automate first for maximum impact',
    'Security walkthrough — how we keep your data protected and compliant',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book a 30-minute strategy session
          </h2>
          <p className="text-lg text-white/80 mb-8">We'll show you:</p>

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
              Book Your Live AI Agent Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function GeminiEnterprise() {
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
