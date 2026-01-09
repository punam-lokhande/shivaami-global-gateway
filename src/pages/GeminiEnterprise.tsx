import { motion } from 'framer-motion';
import { 
  Brain, Search, Shield, Lock, 
  Users, Briefcase, TrendingUp, HeadphonesIcon, Megaphone, Code, LineChart,
  CheckCircle2, ArrowRight, Play, Calendar, Phone, Building2, Award, Globe, Clock,
  Zap, Settings, Blocks, Workflow
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
            <Brain className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">Enterprise AI Solution</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Gemini Enterprise: The Future of Enterprise AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Gemini Enterprise is Google's agentic AI platform built to automate business operations across every department. As an official Gemini Enterprise onboarding partner, Shivaami helps organizations deploy AI agents for business that integrate with Google Workspace, Salesforce, Jira, and Slack.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Shivaami makes it happen. We architect your AI agent deployment, build custom agents, and train your teams to work smarter from day one. Every minute you wait is productivity you'll never get back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8">
              <Play className="w-4 h-4 mr-2" />
              Book a Live Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
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
      desc: 'Empower your workforce with Google\'s most advanced AI capabilities, including Gemini 3 and Flash, NotebookLM Enterprise, Deep Research, Imagen, and Veo. All models are delivered through a secure, enterprise-ready, and compliant framework.',
    },
    {
      icon: Blocks,
      title: 'Comprehensive AI Agent Ecosystem',
      desc: 'Build custom agents using the no-code Agent Designer, integrate third-party agents from Box, Salesforce, and ServiceNow, or use Google-built agents from the Agent Gallery. Gemini Enterprise centralizes management through Workbench, creating one of the most powerful AI agent ecosystems for enterprises.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security & Compliance',
      desc: 'Gemini Enterprise is built with world-class security features such as VPC Security Controls, CMEK, Access Transparency, tenant isolation, and role-based access control. Shivaami ensures your AI agents operate in a fully governed, compliant environment following least-privilege principles.',
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
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Gemini Enterprise Delivers
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

// How Shivaami Activates Gemini Enterprise Section
function ActivationSection() {
  const steps = [
    {
      icon: Settings,
      title: 'Strategic AI Agent Planning',
      desc: 'We start by understanding your business processes, identifying high-impact automation opportunities. We then design an AI agent roadmap that delivers measurable ROI within 90 days. No generic deployment. Every agent we build solves a real problem.',
    },
    {
      icon: Zap,
      title: 'Zero-Friction Technical Deployment',
      desc: 'We handle the complete technical setup: platform configuration, security controls, integration with your existing tools (Salesforce, Jira, Slack, SharePoint), and access management. Your team logs in to AI agents that are ready to work from day one.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security Configuration',
      desc: 'We implement VPC Security Controls, CMEK encryption, Access Transparency, role-based access controls, and audit logging. Your Gemini Enterprise deployment meets your compliance requirements from the start, whether you\'re in healthcare, finance, or any regulated industry.',
    },
    {
      icon: Users,
      title: 'Team Enablement & Agent Training',
      desc: "We don't just hand over technology. We train your teams on how to use prebuilt agents, build their own with no-code tools, and integrate AI into daily workflows. Hands-on workshops, department-specific use cases, and ongoing support ensure adoption.",
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support & Updates',
      desc: 'Google releases new AI models and agent capabilities monthly. We keep your platform updated, help you leverage new features, and provide 24/7 technical support.',
      stats: [
        { label: 'Average response time', value: '4 minutes' },
        { label: 'Resolution time', value: 'under 40 minutes' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            How Shivaami Activates Gemini Enterprise Across Your Organization
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
                    {step.stats && (
                      <div className="flex flex-wrap gap-6 mt-4">
                        {step.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#38B6FF]" />
                            <span className="text-[#475569] text-sm">
                              {stat.label}: <span className="text-[#38B6FF] font-semibold">{stat.value}</span>
                            </span>
                          </div>
                        ))}
                      </div>
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
    'Live AI agents in action — watch them automate real tasks from your business',
    'ROI projections — see exactly how much time and money you\'ll save',
    'Custom agent roadmap — which processes to automate first for maximum impact',
    'Security walkthrough — how we keep your data protected and compliant',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book a 30-minute strategy session
          </h2>
          <p className="text-lg text-white/80 mb-8">We'll show you:</p>

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
            Book Your Live AI Agent Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
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
