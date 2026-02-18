import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Search, Brain, Users, Bot, Shield, Zap, Target, Settings, Lock, GraduationCap, Headphones, ArrowRight, CheckCircle2, Calendar, Play, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/glean-banner.jpg';
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
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Glean Enterprise Search"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-24 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            Glean: <span className="text-[#38B6FF]">Enterprise AI </span><br />
           Knowledge Assistant

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
           Glean is an enterprise AI platform that connects your entire digital workspace, enabling instant search across all tools, apps, and documents while building custom AI assistants. Shivaami partners with organizations to deploy Glean securely. 

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

// What Glean Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Unified enterprise search across all your tools",
      desc: "Glean connects to tools like Google Workspace, Slack, Jira, Confluence, Salesforce, GitHub, and more. Employees can search once and find documents, conversations, tickets, and files without switching between apps."
    },
    {
      icon: Brain,
      title: "AI-powered answers, not just links",
      desc: " Instead of returning a long list of results, Glean understands questions in natural language and provides direct answers, summaries, and relevant context based on your company’s data."
    },
    {
      icon: Users,
      title: "Personalized results for every employee",
      desc: "Glean uses a knowledge graph to understand roles, teams, and projects. Results are personalized so each user sees what matters most to them while respecting existing permissions."
    },
    {
      icon: Bot,
      title: "Built-in AI assistant for daily work",
      desc: "Employees can ask Glean to summarize documents, find experts, answer onboarding questions, and surface key information instantly, helping teams move faster with less effort."
    },
    {
      icon: Shield,
      title: "Enterprise-grade security and permissions",
      desc: "Glean enforces your existing access controls in real time. Employees only see what they are authorized to see. Data remains secure, encrypted, and fully governed."
    },
    {
      icon: Zap,
      title: "Fast time to value",
      desc: " Most organizations live within days. As employees search and work, Glean continuously improves relevance and accuracy without manual training."
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Glean Delivers
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

// How Shivaami Activates Glean Section - Flip Cards
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Target,
      title: 'Knowledge & Search Strategy',
      desc: 'We start by understanding how your teams work, where knowledge gets stuck, and which tools matter most. We then design a Glean deployment plan that delivers measurable productivity gains within the first 90 days.',
    },
    {
      image: technicalDeploymentImg,
      icon: Settings,
      title: 'End-to-End Technical Deployment',
      desc: 'We manage connector setup, indexing, access controls, and integrations with your existing systems. Your teams log in and start finding answers immediately without disruption.',
    },
    {
      image: securityConfigImg,
      icon: Lock,
      title: 'Security & Compliance',
      desc: 'We align Glean with your enterprise security requirements, including access policies, audit readiness, and data governance. This is especially critical for regulated industries.',
    },
    {
      image: teamTrainingImg,
      icon: GraduationCap,
      title: 'User Enablement & Adoption',
      desc: 'We train teams on how to search smarter, ask better questions, and use Glean’s AI assistant in daily workflows. Role-based sessions and real use cases ensure adoption across departments.',
    },
    {
      image: ongoingSupportImg,
      icon: Headphones,
      title: 'Ongoing Optimization & Support',
      desc: 'We track usage, identify gaps, and help you improve search relevance over time. Our certified engineers provide 24/7 support with fast response and resolution times.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Activates Glean Across Your Organization
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
// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is Glean, and how does it help enterprises manage knowledge?",
      answer: "Glean is an AI-powered enterprise search platform that connects all company apps (Slack, Drive, SharePoint, Salesforce) into one unified search experience. It delivers personalized, contextual answers from across your knowledge base, reducing search time and improving productivity for teams in India and globally."
    },
    {
      question: "How to choose a knowledge management system for a mid-sized business?",
      answer: "Choose a system offering AI-powered search, seamless integration with existing tools (Slack, Drive, SharePoint), a user-friendly interface, and scalability. Glean's unified search platform connects all knowledge sources, reducing search time and improving productivity, perfect for growing Indian mid-market companies."
    },
    {
      question: "Pricing models for enterprise knowledge management software in India?",
      answer: "Enterprise knowledge management platforms like Glean typically offer subscription-based pricing (per user/month or annual contracts). Pricing varies by features, integrations, and user count. Contact Glean for India-specific pricing with local billing, implementation support, and scalability options for enterprises."
    },
    {
      question: "Best platforms for integrating AI with company knowledge repositories?",
      answer: "Glean leads with AI-powered enterprise search that integrates across 100+ apps (Google Workspace, Microsoft 365, Slack, Salesforce). Its generative AI delivers contextual answers from company knowledge, reducing information silos, trusted by enterprises in India, APAC, and globally for intelligent knowledge access."
    },
    {
      question: "Where to buy subscription plans for knowledge management tools?",
      answer: "You can purchase Glean subscriptions directly through their website or authorized partners. Enterprise plans include custom integrations, security compliance (SOC 2, GDPR), and dedicated support. Indian businesses benefit from regional onboarding, training, and scalable pricing for distributed teams."
    },
    {
      question: "What are the top AI-powered knowledge management platforms available?",
      answer: "Top platforms include Glean, Microsoft Viva, Notion AI, and Guru. Glean excels with personalized AI search across all company apps, auto-generated answers, and role-based permissions. It's designed for enterprises prioritizing secure, scalable knowledge access, widely adopted across India and APAC markets."
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


import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { Helmet } from 'react-helmet-async';

const Glean = () => {
  const [showGetStartedDialog, setShowGetStartedDialog] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setShowGetStartedDialog(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Glean, and how does it help enterprises manage knowledge?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Glean is an AI-powered enterprise search platform that connects all company apps (Slack, Drive, SharePoint, Salesforce) into one unified search experience. It delivers personalized, contextual answers from across your knowledge base, reducing search time and improving productivity for teams in India and globally."
    }
  },{
    "@type": "Question",
    "name": "How to choose a knowledge management system for a mid-sized business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Choose a system offering AI-powered search, seamless integration with existing tools (Slack, Drive, SharePoint), a user-friendly interface, and scalability. Glean's unified search platform connects all knowledge sources, reducing search time and improving productivity, perfect for growing Indian mid-market companies."
    }
  },{
    "@type": "Question",
    "name": "Pricing models for enterprise knowledge management software in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enterprise knowledge management platforms like Glean typically offer subscription-based pricing (per user/month or annual contracts). Pricing varies by features, integrations, and user count. Contact Glean for India-specific pricing with local billing, implementation support, and scalability options for enterprises."
    }
  },{
    "@type": "Question",
    "name": "Best platforms for integrating AI with company knowledge repositories?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Glean leads with AI-powered enterprise search that integrates across 100+ apps (Google Workspace, Microsoft 365, Slack, Salesforce). Its generative AI delivers contextual answers from company knowledge, reducing information silos, trusted by enterprises in India, APAC, and globally for intelligent knowledge access."
    }
  },{
    "@type": "Question",
    "name": "Where to buy subscription plans for knowledge management tools?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can purchase Glean subscriptions directly through their website or authorized partners. Enterprise plans include custom integrations, security compliance (SOC 2, GDPR), and dedicated support. Indian businesses benefit from regional onboarding, training, and scalable pricing for distributed teams."
    }
  },{
    "@type": "Question",
    "name": "What are the top AI-powered knowledge management platforms available?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Top platforms include Glean, Microsoft Viva, Notion AI, and Guru. Glean excels with personalized AI search across all company apps, auto-generated answers, and role-based permissions. It's designed for enterprises prioritizing secure, scalable knowledge access, widely adopted across India and APAC markets."
    }
  }]
}


  return (
    <>
      <Helmet>
<title>Glean Partner | Enterprise AI for Faster Decisions & Work | Shivaami</title>
 <meta name="description" content="Transform how work gets done with Glean’s enterprise AI. Shivaami helps enterprises deploy secure, connected AI that answers questions, accelerates decisions, and powers everyday work." />
<link rel="canonical" href="https://www.shivaami.com/glean" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

    <div className="min-h-screen">
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
};

export default Glean;
