import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, Video, Image, Code, BookOpen, Coins, Youtube, HardDrive,
  CheckCircle2, ArrowRight, Play, Calendar, Phone, Clock,
  Zap, Shield, Users, HeadphonesIcon, TrendingUp, Settings,
  Mail, FileText, Wand2, Terminal
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
            <Sparkles className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">Google's Most Powerful AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Google AI Ultra for Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            This isn't just another AI tool. It's Google's most powerful AI engine, built directly into the apps your team already uses every day. From writing emails to creating videos, analyzing data to building code, AI Ultra makes every person on your team 10x more capable.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Shivaami makes it happen. We don't just sell you a license. We architect your AI transformation, train your people, and make sure every dollar you invest delivers real business results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 font-semibold mb-8 max-w-3xl mx-auto"
          >
            The question isn't whether to use AI. It's whether you'll lead or follow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// What's Inside Google AI Ultra Section
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Gemini App',
      desc: "Access Google's most advanced AI models, including Gemini 3 Pro and Gemini 2.5. Ask complex questions, conduct deep research, and analyze large documents with support for 1,500 pages of file uploads. Experience the multimodal AI that understands text, images, code, and more. Get early access to Veo 3.1, Google's latest video generation model for creating professional-quality content.",
    },
    {
      icon: Mail,
      title: 'Gemini in Gmail, Docs, Vids, and More',
      desc: 'Experience AI assistance natively embedded across all Google Workspace apps. Boost productivity with intelligent writing in Gmail, automated document creation in Docs, dynamic presentations in Slides, video production in Vids, and data analysis in Sheets. Get contextual suggestions and automated formatting right where you work.',
    },
    {
      icon: Video,
      title: 'Flow',
      desc: "Create professional cinematic video content with Flow, custom-designed for Google DeepMind's Veo 3.1, Imagen, and Gemini models. Generate high-quality video clips using simple prompts, maintain visual consistency across scenes with \"Integration to Video.\" Export the video in 1080p resolution with advanced camera controls for broadcast-ready content.",
    },
    {
      icon: Image,
      title: 'Whisk',
      desc: 'Generate creative visuals instantly with Whisk, a Google Labs experimental tool for rapid visual ideation. Create custom images by combining prompts for scene, subject, and style. Transform static images into dynamic 8-second video clips using Whisk Animate, powered by Veo 3, bringing your creative vision to life with cinematic quality.',
    },
    {
      icon: Code,
      title: 'Jules',
      desc: 'Meet Jules, an advanced AI-powered coding agent built on Gemini 2.5 Pro. Jules independently handles complex coding tasks, seamlessly integrates with GitHub repositories, writes production-ready code, debugs issues, and automates routine programming tasks. Experience the highest task limits and priority access to the latest models for maximum development velocity.',
    },
    {
      icon: Terminal,
      title: 'Gemini Code Assist and Gemini CLI',
      desc: 'Accelerate development with enterprise-grade AI coding assistance. Gemini Code Assist provides intelligent code completions and codebase understanding in VS Code and JetBrains IDEs, and Gemini CLI delivers AI-powered terminal assistance for coding and automation. Experience the highest daily request limit with Gemini 2.5 Pro and Flash models.',
    },
    {
      icon: BookOpen,
      title: 'NotebookLM',
      desc: 'Transform documents and research into a powerful AI knowledge management system. NotebookLM analyzes multiple sources, generates insights, creates summaries, and produces audio overviews from your content. Turn static information into interactive knowledge that answers questions, surfaces patterns, and accelerates decision-making across your organization.',
    },
    {
      icon: Coins,
      title: 'Monthly AI Credits',
      desc: 'Receive 25,000 AI credits each month for your creative projects. Use credits across Flow (AI filmmaking) and Whisk (image generation) to produce unlimited creative content. Credits refresh monthly, enabling your team to create cinematic videos and generate custom visuals without limitations or additional costs for high-volume production.',
    },
    {
      icon: Youtube,
      title: 'YouTube Premium Individual Plan',
      desc: 'Enjoy ad-free entertainment with YouTube Premium included at no extra cost. Watch videos ad-free, enable background playback, download content for offline viewing, and access YouTube Music Premium. Get uninterrupted learning, entertainment, and music streaming as part of your AI Ultra subscription for enhanced work-life integration.',
    },
    {
      icon: HardDrive,
      title: 'Enhanced Storage',
      desc: 'Secure your digital assets with 30 TB of premium cloud storage across Google Drive, Gmail, and Google Photos. Store unlimited files, emails, and high-resolution media with enterprise-grade infrastructure, automatic backup, version history, and seamless access across all devices. Never worry about storage limits or data loss again.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What's Inside Google AI Ultra
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

        <motion.div {...fadeInUp} className="text-center mt-12">
          <Button size="lg" className="bg-[#0C4594] hover:bg-[#0a3a7a] text-white font-semibold px-8">
            See Plans & Pricing
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// How Shivaami Helps Section
function ActivationSection() {
  const steps = [
    {
      icon: Zap,
      title: 'Zero-Friction Deployment',
      desc: 'We handle the entire technical setup. Your team logs in, and AI is ready to use. No IT headaches. No downtime.',
    },
    {
      icon: Users,
      title: 'Team Enablement That Sticks',
      desc: 'Live training sessions, hands-on workshops, and role-specific use cases. Your people learn by doing, not watching videos.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance Lock-In',
      desc: 'We configure your environment for maximum security: data encryption, access controls, audit logs, and compliance alignment for your industry.',
    },
    {
      icon: TrendingUp,
      title: 'Adoption Tracking & Optimization',
      desc: "We measure what's working. Which teams are using AI? Where's the ROI? We give you dashboards and insights to maximize your investment.",
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Expert Support',
      desc: 'Our Google-certified engineers are standing by to help you anytime you want. You are basically just a call away.',
    },
    {
      icon: Settings,
      title: 'Continuous AI Strategy Updates',
      desc: "Google releases new AI features monthly, and we make sure you're always running the latest, most powerful version.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps Your Business to Get AI Ultra Ready?
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            We don't promise you big deals and discounts; we build your AI advantage from the ground up.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mt-12">
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
    'Exactly how AI Ultra works in your specific industry',
    'ROI projections based on your team size',
    'A custom implementation roadmap',
    'Live demos of the most powerful features',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See What AI Ultra Can Do for Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Book a 30-minute AI strategy session with our team. We'll show you:
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
            Book Your AI Strategy Session
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function GoogleAIUltra() {
  return (
    <>
      <head>
        <title>Google AI Ultra for Business - Most Powerful AI | Shivaami</title>
        <meta name="description" content="Unleash Google AI Ultra's full potential with Shivaami. Get exclusive access to the Gemini app, Veo 3 video generation, Deep Research, and 30TB storage. Transform your enterprise." />
      </head>
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
    </>
  );
}
