import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Brain, Sparkles, Video, Image, Code, BookOpen, Coins, Youtube, HardDrive,
  CheckCircle2, ArrowRight, Play, Calendar,
  Zap, Shield, Users, HeadphonesIcon, TrendingUp, Settings,
  Mail, Terminal
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/google-ai-ultra-banner.jpg';
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

  return (
    <section ref={ref} className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Google AI Ultra"
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
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            Google AI Ultra<br />
            <span className="text-[#38B6FF]">for Business</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl leading-relaxed font-body"
          >
            Google's most powerful AI engine, built directly into the apps your team already uses every day. Shivaami architects your AI transformation, trains your people, and delivers real business results.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// What's Inside Google AI Ultra Section
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Gemini App',
      desc: "Access Google's most advanced AI models, including Gemini 3 Pro and Gemini 2.5. Ask complex questions, conduct deep research, and analyze large documents.",
    },
    {
      icon: Mail,
      title: 'Gemini in Gmail, Docs, Vids, and More',
      desc: 'Experience AI assistance natively embedded across all Google Workspace apps. Boost productivity with intelligent writing in Gmail, automated document creation in Docs.',
    },
    {
      icon: Video,
      title: 'Flow',
      desc: "Create professional cinematic video content with Flow, custom-designed for Google DeepMind's Veo 3.1, Imagen, and Gemini models.",
    },
    {
      icon: Image,
      title: 'Whisk',
      desc: 'Generate creative visuals instantly with Whisk, a Google Labs experimental tool for rapid visual ideation. Create custom images by combining prompts.',
    },
    {
      icon: Code,
      title: 'Jules',
      desc: 'Meet Jules, an advanced AI-powered coding agent built on Gemini 2.5 Pro. Jules independently handles complex coding tasks and integrates with GitHub.',
    },
    {
      icon: Terminal,
      title: 'Gemini Code Assist and Gemini CLI',
      desc: 'Accelerate development with enterprise-grade AI coding assistance. Intelligent code completions and codebase understanding in VS Code and JetBrains IDEs.',
    },
    {
      icon: BookOpen,
      title: 'NotebookLM',
      desc: 'Transform documents and research into a powerful AI knowledge management system. Generates insights, creates summaries, and produces audio overviews.',
    },
    {
      icon: Coins,
      title: 'Monthly AI Credits',
      desc: 'Receive 25,000 AI credits each month for your creative projects. Use credits across Flow and Whisk to produce unlimited creative content.',
    },
    {
      icon: Youtube,
      title: 'YouTube Premium',
      desc: 'Enjoy ad-free entertainment with YouTube Premium included at no extra cost. Watch videos ad-free, enable background playback.',
    },
    {
      icon: HardDrive,
      title: 'Enhanced Storage',
      desc: 'Secure your digital assets with 30 TB of premium cloud storage across Google Drive, Gmail, and Google Photos.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What's Inside Google AI Ultra
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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

// How Shivaami Helps Section - Flip Cards
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Zap,
      title: 'Zero-Friction Deployment',
      desc: 'We handle the entire technical setup. Your team logs in, and AI is ready to use. No IT headaches. No downtime.',
    },
    {
      image: teamTrainingImg,
      icon: Users,
      title: 'Team Enablement That Sticks',
      desc: 'Live training sessions, hands-on workshops, and role-specific use cases. Your people learn by doing, not watching videos.',
    },
    {
      image: securityConfigImg,
      icon: Shield,
      title: 'Security & Compliance Lock-In',
      desc: 'We configure your environment for maximum security: data encryption, access controls, audit logs, and compliance alignment.',
    },
    {
      image: technicalDeploymentImg,
      icon: TrendingUp,
      title: 'Adoption Tracking & Optimization',
      desc: "We measure what's working. Which teams are using AI? Where's the ROI? We give you dashboards and insights to maximize your investment.",
    },
    {
      image: ongoingSupportImg,
      icon: HeadphonesIcon,
      title: '24/7 Expert Support',
      desc: 'Our Google-certified engineers are standing by to help you anytime you want. You are basically just a call away.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps Your Business to Get AI Ultra Ready?
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
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See What AI Ultra Can Do for Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Book a 30-minute AI strategy session with our team. We'll show you:
          </p>

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
              Book Your AI Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
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
