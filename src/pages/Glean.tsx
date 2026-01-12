import { motion } from 'framer-motion';
import { Search, Brain, Users, Bot, Shield, Zap, Target, Settings, Lock, GraduationCap, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0C4594] via-[#1a5cb8] to-[#0C4594]">
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
    
    <div className="container mx-auto px-4 py-20 relative z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
            Enterprise AI Search Platform
          </span>
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Glean: Unified Enterprise Knowledge Search
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
          Glean is an enterprise AI platform that helps teams find answers, knowledge, and context across all their work tools from one place. It connects to the apps your teams already use, understands natural language, and delivers the right information at the right time.
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
          As an official enterprise technology partner, Shivaami helps organizations deploy Glean securely, drive adoption, and turn internal knowledge into real business impact.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-[#0C4594] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
            Book a Live Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Unified enterprise search across all your tools",
      description: "Glean connects to tools like Google Workspace, Slack, Jira, Confluence, Salesforce, GitHub, and more. Employees can search once and find documents, conversations, tickets, and files without switching between apps."
    },
    {
      icon: Brain,
      title: "AI-powered answers, not just links",
      description: "Instead of returning a long list of results, Glean understands questions in natural language and provides direct answers, summaries, and relevant context based on your company's data."
    },
    {
      icon: Users,
      title: "Personalized results for every employee",
      description: "Glean uses a knowledge graph to understand roles, teams, and projects. Results are personalized so each user sees what matters most to them while respecting existing permissions."
    },
    {
      icon: Bot,
      title: "Built-in AI assistant for daily work",
      description: "Employees can ask Glean to summarize documents, find experts, answer onboarding questions, and surface key information instantly, helping teams move faster with less effort."
    },
    {
      icon: Shield,
      title: "Enterprise-grade security and permissions",
      description: "Glean enforces your existing access controls in real time. Employees only see what they are authorized to see. Data remains secure, encrypted, and fully governed."
    },
    {
      icon: Zap,
      title: "Fast time to value",
      description: "Most organizations go live within days. As employees search and work, Glean continuously improves relevance and accuracy without manual training."
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Glean Delivers
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ActivationSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Knowledge and search strategy planning",
      description: "We start by understanding how your teams work, where knowledge gets stuck, and which tools matter most. We then design a Glean deployment plan that delivers measurable productivity gains within the first 90 days."
    },
    {
      icon: Settings,
      title: "End-to-end technical deployment",
      description: "We manage connector setup, indexing, access controls, and integrations with your existing systems. Your teams log in and start finding answers immediately without disruption."
    },
    {
      icon: Lock,
      title: "Security and compliance configuration",
      description: "We align Glean with your enterprise security requirements, including access policies, audit readiness, and data governance. This is especially critical for regulated industries."
    },
    {
      icon: GraduationCap,
      title: "User enablement and adoption support",
      description: "We train teams on how to search smarter, ask better questions, and use Glean's AI assistant in daily workflows. Role-based sessions and real use cases ensure adoption across departments."
    },
    {
      icon: Headphones,
      title: "Ongoing optimization and support",
      description: "We track usage, identify gaps, and help you improve search relevance over time. Our certified engineers provide 24/7 support with fast response and resolution times."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Shivaami Activates Glean Across Your Organization
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0C4594] to-[#1a5cb8] rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CalendarCTASection = () => {
  const benefits = [
    "Live Glean search and AI assistant use cases from real enterprises",
    "Productivity and ROI estimates based on your team size",
    "A tailored rollout plan for your tools and departments",
    "Security and access control setup explained clearly"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#1a5cb8] to-[#0C4594] relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book a 30-minute strategy session
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8">
            We will walk you through:
          </motion.p>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Button size="lg" className="bg-white text-[#0C4594] hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all">
              Schedule a meeting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Glean = () => {
  return (
    <div className="min-h-screen">
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

export default Glean;
