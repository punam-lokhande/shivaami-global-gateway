import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Brain, Sparkles, Video, Image, Code, BookOpen, Coins, Youtube, HardDrive,
  CheckCircle2, ArrowRight, Play, Calendar,
  Zap, Shield, Users, HeadphonesIcon, TrendingUp, Settings,
  Mail, Terminal,
  HelpCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
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
          alt="Google AI Ultra"
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
            Google AI Ultra<br />
            <span className="text-[#38B6FF]">for Business</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
           Google AI Ultra delivers enterprise-grade AI across Gmail, Docs, Sheets, and Meet, automating workflows. As a certified Google Cloud partner, Shivaami enables seamless deployment and adoption across organizations.
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
      desc: "Create professional cinematic video content with Flow, custom-designed for Google DeepMind's Veo 3.1, Imagen, and Gemini models. Generate high-quality video clips using simple prompts, maintain visual consistency across scenes with Integration to Video. Export the video in 1080p resolution with advanced camera controls for broadcast-ready content.",
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
      title: 'YouTube Premium',
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
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What's Inside Google AI Ultra
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      desc: 'We configure your environment for maximum security: data encryption, access controls, audit logs, and compliance alignment for your industry.',
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
      question: "What is Google AI Ultra?",
      answer: "Google AI Ultra is Google's most advanced AI subscription plan, providing access to cutting-edge AI models, including Gemini Ultra. It includes 30 TB of storage, enhanced AI capabilities, and premium features across Google Workspace apps."
    },
    {
      question: "How does Google AI Ultra integrate with Google Workspace? ",
      answer: "Google AI Ultra works seamlessly within Gmail, Docs, Sheets, Slides, Meet, and other Workspace apps. Users can draft emails, generate documents, analyze data, and create presentations with AI assistance integrated directly into their workflow."
    },
    {
      question: "Do I need a special license to access Google AI Ultra? ",
      answer: "Yes, Google AI Ultra requires a specific subscription plan. It is available as part of Google's AI-powered Workspace offerings and can be deployed for organizations through authorized partners."
    },
    {
      question: "Is Google AI Ultra secure? ",
      answer: "Yes, Google AI Ultra follows enterprise-grade security and compliance standards. All data remains encrypted and private within your organization's Workspace environment with comprehensive compliance controls."
    },
    {
      question: "What makes Google AI Ultra different from other AI assistants? ",
      answer: "Google AI Ultra offers advanced multimodal AI capabilities with native integration across all Google Workspace apps. It functions as an intelligent assistant built directly into your daily workflow rather than as a separate tool."
    },
    {
      question: "Who should use Google AI Ultra? ",
      answer: "Google AI Ultra is ideal for teams requiring advanced AI capabilities, including content creators, data analysts, developers, researchers, and organizations seeking the highest level of AI functionality for competitive advantage."
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

// Main Page Component
export default function GoogleAIUltra() {
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
        "name": "What is Google AI Ultra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google AI Ultra is Google's most advanced AI subscription plan, providing access to cutting-edge AI models, including Gemini Ultra. It includes 30 TB of storage, enhanced AI capabilities, and premium features across Google Workspace apps."
        }
      },
      {
        "@type": "Question",
        "name": "How does Google AI Ultra integrate with Google Workspace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google AI Ultra works seamlessly within Gmail, Docs, Sheets, Slides, Meet, and other Workspace apps. Users can draft emails, generate documents, analyze data, and create presentations with AI assistance integrated directly into their workflow."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a special license to access Google AI Ultra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Google AI Ultra requires a specific subscription plan. It is available as part of Google's AI-powered Workspace offerings and can be deployed for organizations through authorized partners."
        }
      },
      {
        "@type": "Question",
        "name": "Is Google AI Ultra secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Google AI Ultra follows enterprise-grade security and compliance standards. All data remains encrypted and private within your organization's Workspace environment with comprehensive compliance controls."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Google AI Ultra different from other AI assistants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google AI Ultra offers advanced multimodal AI capabilities with native integration across all Google Workspace apps. It functions as an intelligent assistant built directly into your daily workflow rather than as a separate tool."
        }
      },
      {
        "@type": "Question",
        "name": "Who should use Google AI Ultra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google AI Ultra is ideal for teams requiring advanced AI capabilities, including content creators, data analysts, developers, researchers, and organizations seeking the highest level of AI functionality for competitive advantage."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Google AI Ultra for Business - Most Powerful AI | Shivaami</title>
        <meta name="description" content="Unleash Google AI Ultra's full potential with Shivaami. Get exclusive access to the Gemini app, Veo 3 video generation, Deep Research, and 30TB storage. Transform your enterprise." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://www.shivaami.com/google-ai-ultra" />
      </Helmet>
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
      </div>
    </>
  );
}
