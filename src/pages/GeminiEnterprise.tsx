import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, FileText, BarChart3, Mail, Video, Shield, Lock, 
  Users, Briefcase, TrendingUp, HeadphonesIcon, Megaphone, Code, LineChart,
  CheckCircle2, ArrowRight, Play, Calendar, Phone, Building2, Award, Globe, Clock
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
            Gemini Enterprise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Unlock the power of enterprise-grade AI across Google Workspace. Transform productivity, 
            enhance collaboration, and drive innovation with intelligent assistance in every app you use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8">
              <Play className="w-4 h-4 mr-2" />
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Meeting
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
              <Phone className="w-4 h-4 mr-2" />
              Talk to Sales
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Overview Section
function OverviewSection() {
  const integrations = [
    { name: 'Gmail', icon: Mail },
    { name: 'Docs', icon: FileText },
    { name: 'Sheets', icon: BarChart3 },
    { name: 'Meet', icon: Video },
    { name: 'Drive', icon: Building2 },
    { name: 'Slides', icon: Sparkles },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-6">
            What is Gemini Enterprise?
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            Gemini Enterprise is Google's most advanced AI assistant, purpose-built for businesses. 
            It seamlessly integrates across your entire Google Workspace, enhancing productivity, 
            automating workflows, and enabling smarter decision-making at enterprise scale.
          </p>
          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
            <h3 className="text-lg font-semibold text-[#0C4594] mb-6">Works Seamlessly Across</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {integrations.map((app, idx) => {
                const Icon = app.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-[#475569]">{app.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Brain, title: 'AI-Powered Intelligence', desc: 'Advanced language understanding and generation capabilities that adapt to your business context.' },
            { icon: Shield, title: 'Enterprise-Grade Security', desc: 'Built on Google\'s secure infrastructure with data protection, compliance, and admin controls.' },
            { icon: Globe, title: 'Cloud-Native Architecture', desc: 'Seamlessly scales with your organization, from startups to global enterprises.' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{item.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Key Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      desc: 'Create documents, presentations, and emails in seconds. Generate first drafts, refine tone, and translate across languages.',
      highlights: ['Smart drafting', 'Tone adjustment', 'Multi-language support']
    },
    {
      icon: BarChart3,
      title: 'Smart Data Insights',
      desc: 'Transform raw data into actionable insights. Ask questions in natural language and get visualizations instantly.',
      highlights: ['Natural language queries', 'Auto-generated charts', 'Trend analysis']
    },
    {
      icon: Mail,
      title: 'AI-Powered Email & Communication',
      desc: 'Summarize long threads, draft contextual replies, and prioritize your inbox with intelligent assistance.',
      highlights: ['Email summaries', 'Smart replies', 'Priority inbox']
    },
    {
      icon: Video,
      title: 'Meeting Notes & Summaries',
      desc: 'Never miss a detail. Get AI-generated meeting notes, action items, and follow-up reminders automatically.',
      highlights: ['Auto transcription', 'Action item extraction', 'Meeting highlights']
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Governance',
      desc: 'Maintain complete control with admin policies, data residency options, and comprehensive audit logs.',
      highlights: ['Admin controls', 'Data residency', 'Audit logging']
    },
    {
      icon: Lock,
      title: 'Workspace Integration',
      desc: 'Seamlessly works across all Google Workspace apps, providing consistent AI assistance everywhere.',
      highlights: ['Cross-app intelligence', 'Context awareness', 'Unified experience']
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Key Features & Capabilities
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Discover how Gemini Enterprise transforms every aspect of your work
          </p>
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
                <p className="text-[#475569] text-sm leading-relaxed mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1 text-xs bg-[#0C4594]/5 text-[#0C4594] px-2 py-1 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Use Cases Section
function UseCasesSection() {
  const useCases = [
    {
      icon: Briefcase,
      role: 'Leadership',
      desc: 'Get executive summaries, strategic insights, and data-driven decision support across all business operations.',
      benefits: ['Board deck creation', 'Performance dashboards', 'Strategic planning']
    },
    {
      icon: TrendingUp,
      role: 'Sales',
      desc: 'Accelerate deal cycles with AI-powered proposals, customer insights, and personalized communication.',
      benefits: ['Proposal generation', 'CRM insights', 'Follow-up automation']
    },
    {
      icon: Users,
      role: 'Operations',
      desc: 'Streamline processes with intelligent workflow automation and real-time operational analytics.',
      benefits: ['Process optimization', 'Resource planning', 'Compliance tracking']
    },
    {
      icon: HeadphonesIcon,
      role: 'Support',
      desc: 'Resolve issues faster with AI-assisted ticket handling, knowledge base search, and response drafting.',
      benefits: ['Ticket summarization', 'Knowledge search', 'Response templates']
    },
    {
      icon: Megaphone,
      role: 'Marketing',
      desc: 'Create compelling content at scale, analyze campaign performance, and personalize customer journeys.',
      benefits: ['Content creation', 'Campaign analysis', 'Audience insights']
    },
    {
      icon: Code,
      role: 'Engineering & IT',
      desc: 'Enhance development workflows with code assistance, documentation generation, and incident analysis.',
      benefits: ['Code review', 'Documentation', 'Incident response']
    },
    {
      icon: LineChart,
      role: 'Analysts & Data Teams',
      desc: 'Unlock data potential with natural language queries, automated reporting, and predictive analytics.',
      benefits: ['Data exploration', 'Report automation', 'Trend forecasting']
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Use Cases by Role
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Real-world enterprise value for every team in your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] hover:bg-white hover:shadow-lg hover:border-[#38B6FF]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0C4594]">{useCase.role}</h3>
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">{useCase.desc}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#38B6FF] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const tiers = [
    {
      name: 'Gemini Business',
      price: '$20',
      period: '/user/month',
      desc: 'AI assistant for growing teams',
      features: [
        'AI in Gmail, Docs, Sheets, Slides, Meet',
        '1TB cloud storage per user',
        'Standard security controls',
        'Email & chat support',
      ],
      highlighted: false
    },
    {
      name: 'Gemini Enterprise',
      price: '$30',
      period: '/user/month',
      desc: 'Advanced AI for large organizations',
      features: [
        'Everything in Business, plus:',
        'Enhanced AI capabilities',
        'Advanced security & compliance',
        'Admin controls & audit logs',
        'Priority 24/7 support',
        'Data residency options',
      ],
      highlighted: true
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Flexible Pricing for Every Organization
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Choose the plan that fits your needs. Volume discounts available for large organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                tier.highlighted 
                  ? 'bg-gradient-to-br from-[#0C4594] to-[#0a3a7a] border-[#38B6FF] text-white' 
                  : 'bg-white border-[#e2e8f0] text-[#0C4594]'
              }`}
            >
              {tier.highlighted && (
                <div className="inline-block bg-[#38B6FF] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  RECOMMENDED
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-[#0C4594]'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-4 ${tier.highlighted ? 'text-white/80' : 'text-[#475569]'}`}>
                {tier.desc}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-[#0C4594]'}`}>
                  {tier.price}
                </span>
                <span className={tier.highlighted ? 'text-white/70' : 'text-[#475569]'}>
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-[#38B6FF]' : 'text-[#38B6FF]'}`} />
                    <span className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-[#475569]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  tier.highlighted 
                    ? 'bg-[#38B6FF] hover:bg-[#2da8f0] text-white' 
                    : 'bg-[#0C4594] hover:bg-[#0a3a7a] text-white'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="text-center">
          <p className="text-[#475569] mb-4">
            Need a custom solution? Enterprise pricing varies by organization size.
          </p>
          <Button variant="outline" className="border-[#0C4594] text-[#0C4594] hover:bg-[#0C4594] hover:text-white">
            <Phone className="w-4 h-4 mr-2" />
            Contact Sales for Enterprise Pricing
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Trust & Security Section
function TrustSecuritySection() {
  const securityFeatures = [
    { icon: Shield, title: 'Enterprise-Grade Compliance', desc: 'SOC 2, ISO 27001, GDPR, HIPAA compliant infrastructure' },
    { icon: Lock, title: 'Data Protection', desc: 'Your data is encrypted at rest and in transit, never used to train AI' },
    { icon: Users, title: 'Admin Controls', desc: 'Granular access controls, user management, and policy enforcement' },
    { icon: Globe, title: 'Data Residency', desc: 'Choose where your data is stored to meet regional requirements' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Enterprise Trust & Security
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Built on Google's world-class security infrastructure with comprehensive compliance certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C4594]/10 to-[#38B6FF]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#0C4594]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#475569]">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Why Buy From Shivaami Section
function WhyShivaamiSection() {
  const benefits = [
    { icon: Award, title: 'Google Premier Partner', desc: 'Top-tier partnership with direct Google support and early access to features' },
    { icon: Clock, title: '20+ Years Experience', desc: 'Two decades of enterprise cloud transformation expertise' },
    { icon: Users, title: 'Full Deployment Support', desc: 'End-to-end migration, deployment, and onboarding assistance' },
    { icon: Globe, title: 'Local + Global Support', desc: '24/7 support across time zones with local expertise' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] to-[#0a3a7a]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Buy From Shivaami?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get more than just a product — partner with India's leading Google Cloud specialist
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeInUp} className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            {['Deployment', 'Migration', 'Support', 'Training', 'AI Onboarding'].map((service, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Bottom CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-6">
            Ready to Transform Your Workplace with AI?
          </h2>
          <p className="text-lg text-[#475569] mb-8 max-w-2xl mx-auto">
            Join thousands of enterprises already using Gemini Enterprise to boost productivity and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0C4594] hover:bg-[#0a3a7a] text-white font-semibold px-8">
              Request Pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#0C4594] text-[#0C4594] hover:bg-[#0C4594] hover:text-white font-semibold px-8">
              <Phone className="w-4 h-4 mr-2" />
              Talk to Sales
            </Button>
            <Button size="lg" variant="outline" className="border-[#0C4594] text-[#0C4594] hover:bg-[#0C4594] hover:text-white font-semibold px-8">
              <Calendar className="w-4 h-4 mr-2" />
              Book Demo
            </Button>
          </div>
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
        <OverviewSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <TrustSecuritySection />
        <WhyShivaamiSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
