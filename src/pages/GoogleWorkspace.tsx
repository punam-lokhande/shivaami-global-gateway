import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Shield, Cloud, Video, Mail, Smartphone, Settings, Puzzle, Target, Rocket, Lock, GraduationCap, Headphones, ArrowRight, CheckCircle2, Calendar, Award, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedDialog from '@/components/GetStartedDialog';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/google-workspace-banner.jpg';
import strategicPlanningImg from '@/assets/activation/strategic-planning.jpg';
import technicalDeploymentImg from '@/assets/activation/technical-deployment.jpg';
import securityConfigImg from '@/assets/activation/security-config.jpg';
import teamTrainingImg from '@/assets/activation/team-training.jpg';
import ongoingSupportImg from '@/assets/activation/ongoing-support.jpg';
import techButtonsBg from '@/assets/banners/tech-buttons-bg.jpg';
import TransferSubscriptionDialog from '@/components/TransferSubscriptionDialog';

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
          alt="Google Workspace"
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
            Google Workspace:<br />
            <span className="text-[#38B6FF]">Transform Work Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
          Google Workspace delivers cloud productivity via Gmail, Drive, Meet, Docs, and Sheets for secure collaboration. Shivaami, a certified Google Workspace partner in India and USA, helps organizations deploy and scale.

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

// What Google Workspace Delivers Section
function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Real-Time Collaboration",
      desc: " Teams work together on documents, spreadsheets, and presentations simultaneously. Changes sync instantly across all devices. No version conflicts or email attachments needed."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      desc: "Built-in protection includes phishing defense, malware scanning, and data loss prevention. Admin controls let you enforce policies at scale. Two-factor authentication and endpoint management keep data secure."
    },
    {
      icon: Cloud,
      title: "Cloud Storage and Access",
      desc: "Every user gets secure cloud storage with Drive. Files are accessible from any device, anywhere. Advanced search and AI-powered suggestions speed up work."
    },
    {
      icon: Video,
      title: "Video Conferencing Built In",
      desc: "Google Meet supports HD video calls for up to 500 participants. Screen sharing, live captions, and recording come standard. No additional licenses or plugins required."
    },
    {
      icon: Mail,
      title: "Seamless Email Management",
      desc: "Gmail for business includes a custom domain email with powerful spam filtering. Smart compose and priority inbox boost productivity. Integration with Calendar and Tasks keeps teams organized."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      desc: "All apps work fully on iOS and Android devices. Offline mode ensures productivity without connectivity. Device management tools secure mobile access."
    },
    {
      icon: Settings,
      title: "Admin Controls and Insights",
      desc: "Centralized dashboard manages users, devices, and security policies. Usage reports show adoption trends and storage needs. Audit logs track all account activity."
    },
    {
      icon: Puzzle,
      title: "Third-Party Integration",
      desc: "Connect with thousands of business apps through the Workspace Marketplace. APIs enable custom integrations with existing tools. Single sign-on simplifies access across platforms."
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What Google Workspace Delivers
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

// Recognized Leader Section
function RecognizedLeaderSection() {
  const badges = [
    { src: '/badges/GWS-PP-Sell-Service-Outline.png', alt: 'Google Workspace Premier Partner - Sell | Service', label: 'Premier Partner' },
    { src: '/badges/GC-PP-Sell-Outline.png', alt: 'Google Cloud Premier Partner - Sell', label: 'Cloud Partner' },
    { src: '/badges/GC-specialization-Infrastructure-outline.png', alt: 'Google Cloud Specialization - Infrastructure', label: 'Infrastructure' },
    { src: '/badges/GC-specialization-Security-outline.png', alt: 'Google Cloud Specialization - Security', label: 'Security' },
    { src: '/badges/GC-specialization-Work_Transformation-outline.png', alt: 'Google Cloud Specialization - Work Transformation', label: 'Work Transform' },
    { src: '/badges/GC-specialization-Work_Transformation_Enterprise-outline.png', alt: 'Google Cloud Specialization - Work Transformation Enterprise', label: 'Enterprise' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Beautiful light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft colored orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#38B6FF]/8 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#0C4594]/6 to-transparent rounded-full blur-[80px]" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0C4594 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        {/* Decorative lines */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-8 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#38B6FF]/20 to-transparent origin-top"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-8 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#0C4594]/20 to-transparent origin-top"
        />
      </div>
      
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#0C4594]/10 to-[#38B6FF]/10 rounded-full mb-6 border border-[#0C4594]/10"
          >
            <span className="w-2 h-2 bg-[#38B6FF] rounded-full" />
            <span className="text-[#0C4594] text-sm font-semibold tracking-wide">Industry Recognition</span>
          </motion.div> */}
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#0C4594]">Recognized Leader in the</span>{' '}
            <span className="bg-gradient-to-r from-[#38B6FF] to-[#0C4594] bg-clip-text text-transparent">Google Cloud Ecosystem</span>
          </h2>
          
          <p className="text-[#475569] max-w-2xl mx-auto text-lg leading-relaxed">
            Shivaami holds the highest-level Google Cloud Partner certifications, ensuring world-class expertise for your digital transformation.
          </p>
          
          {/* Decorative separator */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#38B6FF]/30 to-[#0C4594]/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(56,182,255,0.15)] transition-all duration-500 border border-[#e2e8f0] hover:border-[#38B6FF]/40 overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C4594] via-[#38B6FF] to-[#0C4594] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer effect */}
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  />
                  
                  {/* Badge image */}
                  <div className="relative z-10 aspect-square flex items-center justify-center mb-3">
                    <img 
                      src={badge.src} 
                      alt={badge.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="text-center">
                    <span className="text-xs font-medium text-[#64748b] group-hover:text-[#0C4594] transition-colors duration-300">{badge.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Workspace Action Buttons Section
function WorkspaceActionsSection({ onTransferClick }: { onTransferClick: () => void }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Technology Background Image */}
      <div className="absolute inset-0">
        <img 
          src={techButtonsBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a7a]/80 via-[#0C4594]/70 to-[#0a3a7a]/80" />
      </div>
      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#38B6FF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          {...fadeInUp} 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10"
        >
          {/* Google Workspace Pricing Button */}
          <Link to="/google-workspace-pricing-india">
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#38B6FF] via-white to-[#38B6FF] rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-1 bg-white rounded-2xl opacity-90" />
              {/* Button content */}
              <div className="relative flex items-center gap-4 bg-gradient-to-r from-white to-slate-50 text-[#0C4594] font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transition-all duration-300 border-2 border-[#38B6FF]">
                <div className="w-4 h-4 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] rounded-full animate-pulse shadow-lg shadow-[#38B6FF]/50" />
                <span className="tracking-wide">Google Workspace Pricing</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </Link>

          {/* Transfer Subscription Button */}
          <motion.div
            onClick={onTransferClick}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0C4594] via-[#38B6FF] to-[#0C4594] rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38B6FF] to-[#2da8f0] rounded-2xl opacity-90" />
            {/* Button content */}
            <div className="relative flex items-center gap-4 bg-gradient-to-r from-[#38B6FF] to-[#2da8f0] text-white font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transition-all duration-300 border-2 border-white/30 group-hover:border-white/60">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
              <span className="tracking-wide">Transfer Google Workspace Subscription</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
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

// How Shivaami Helps You Succeed Section - Flip Cards
function ActivationSection() {
  const steps = [
    {
      image: strategicPlanningImg,
      icon: Target,
      title: 'Strategy and Planning',
      desc: 'We assess your current infrastructure and design a migration roadmap. Our team identifies security requirements and compliance needs upfront. You get a clear deployment plan with timelines and milestones.',
    },
    {
      image: technicalDeploymentImg,
      icon: Rocket,
      title: 'Deployment and Integration',
      desc: 'Shivaami handles the complete migration from legacy systems or competitor platforms. We configure domain settings, user accounts, and organizational structures. Your email, files, and calendars transfer with zero data loss.',
    },
    {
      image: securityConfigImg,
      icon: Lock,
      title: 'Security and Compliance',
      desc: 'Our experts implement data loss prevention policies and access controls. We configure mobile device management and endpoint security. Audit logging and compliance reporting align with your industry standards.',
    },
    {
      image: teamTrainingImg,
      icon: GraduationCap,
      title: 'User Enablement and Adoption',
      desc: 'We deliver customized training sessions for end-users and administrators. Change management support ensures teams adopt new workflows smoothly. Quick reference guides and on-demand resources speed up learning.',
    },
    {
      image: ongoingSupportImg,
      icon: Headphones,
      title: 'Ongoing Optimization and Support',
      desc: 'Shivaami provides dedicated technical support for your Google Workspace environment. We monitor performance, manage updates, and optimize configurations to ensure optimal performance. Regular health checks identify opportunities to improve efficiency and security.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-4">
            How Shivaami Helps You Succeed?
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

// Proven Excellence Section
function ProvenExcellenceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Animated Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#38B6FF] to-[#0ea5e9] rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20 rounded-full blur-[80px]" 
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#38B6FF]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#8b5cf6]/20 to-transparent" />
      </div>
      
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with better alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10"
            >
              <span className="w-2 h-2 bg-[#38B6FF] rounded-full animate-pulse" />
              <span className="text-[#38B6FF] text-sm font-medium tracking-wide">Award-Winning Partnership</span>
            </motion.div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Proven Excellence,{' '}
              <span className="bg-gradient-to-r from-[#38B6FF] via-[#60a5fa] to-[#8b5cf6] bg-clip-text text-transparent">
                Recognized Leadership
              </span>
            </h2>
            
            {/* Description - properly aligned */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                We're a <span className="text-white font-semibold">6X Google Workspace Partner of the Year</span> with 
                Diamond Co-Sell and Services Partner recognition.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                We deliver proven expertise across security, infrastructure, and work transformation. 
                Our solutions help organizations maximize their Google Cloud investment.
              </p>
            </div>
            
            {/* Decorative separator */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-32 h-1 bg-gradient-to-r from-[#38B6FF] to-[#8b5cf6] rounded-full mx-auto mt-10"
            />
          </motion.div>

          {/* Badge Display with Prominent Boxes */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24"
          >
            {/* 6X Award Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div 
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-3 bg-gradient-to-br from-[#38B6FF] via-[#0ea5e9] to-[#38B6FF] rounded-[2rem] blur-xl"
                />
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Shimmer effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  
                  {/* Badge label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#38B6FF] to-[#0ea5e9] rounded-full">
                    <span className="text-white text-xs font-semibold">6X Winner</span>
                  </div>
                  
                  <div className="relative z-10 pt-4">
                    <img 
                      src="/badges/6x-award.png" 
                      alt="6X Google Workspace Partner of the Year APAC 2025"
                      className="w-[240px] sm:w-[280px] md:w-[320px] h-auto object-contain mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Diamond Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div 
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -inset-3 bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#fbbf24] rounded-[2rem] blur-xl"
                />
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Shimmer effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2, delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  
                  {/* Badge label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full">
                    <span className="text-white text-xs font-semibold">Diamond Partner</span>
                  </div>
                  
                  <div className="relative z-10 pt-4">
                    <img 
                      src="/badges/tier_gws_cosell_and_service_diamond.png" 
                      alt="Google Workspace Diamond Co-sell & Services Partner"
                      className="w-[240px] sm:w-[280px] md:w-[320px] h-auto object-contain mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import CTASection from '@/components/sections/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { Helmet } from 'react-helmet-async';

const GoogleWorkspace = () => {
  const [transferDialogOpen, setTransferDialogOpen] = useState(false);
  const [getStartedDialogOpen, setGetStartedDialogOpen] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setGetStartedDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

  // FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is Google Workspace?",
      answer: "Google Workspace (formerly G Suite) is a cloud-based productivity suite that includes professional email (Gmail for Business), document sharing and collaboration tools (Docs, Sheets, Slides), video conferencing (Meet), cloud storage (Drive), and more."
    },
    {
      question: "Why choose Google Workspace with Shivaami?",
      answer: "As a certified Google Workspace reseller, we have extensive expertise in deploying and managing Workspace for businesses of all sizes. We offer personalized support, ensuring a smooth transition and maximizing your return on investment."
    },
    {
      question: "How does Gmail in Google Workspace differ from free Gmail?",
      answer: "Paid Google Workspace provides you with several features and integrations not available in the free consumer version of the apps. It includes custom business email @yourcompany, unlimited group email addresses, 99.9% guaranteed uptime, twice the storage of free Gmail, customized logo branding for your company, zero ads, 24/7 support, Google Workspace Sync for Microsoft Outlook, and more."
    },
    {
      question: "Can I import or migrate my existing email and contacts to Google Workspace?",
      answer: "Yes, while moving to Google Workspace from another application or service, like Microsoft Outlook, you can migrate your old mail, contacts, and calendar data with you. We have a variety of options for migrating data into Google Workspace, depending on the size of the data in your organization."
    },
    {
      question: "Do I need to use third-party tools to keep my data secure within Google?",
      answer: "Without using third-party tools, Google offers the security features required for most customers directly in Google Workspace. Google Workspace’s Business and Enterprise editions offer additional security features, like advanced Google Drive auditing and security key management at scale. In all the plans, Google Workspace admin has control over system configuration and applications from a single dashboard through our Admin console —regardless of the size of the organization."
    },
    {
      question: "Do I need to have a domain to activate a Google Workspace account?",
      answer: "Email service will only work with a valid registered domain and an up-to-date MX record. If you don’t have a domain, we will help you buy the domain of your choice and then set up Google Workspace for you. Domain cost is not included in Google Workspace. For instance, when Emails are sent to an address with an expired domain, they would bounce back to the sender with a notification that the message was undelivered."
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





const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Google Workspace?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google Workspace (formerly G Suite) is a cloud-based productivity suite that includes professional email (Gmail for Business), document sharing and collaboration tools (Docs, Sheets, Slides), video conferencing (Meet), cloud storage (Drive), and more."
    }
  },{
    "@type": "Question",
    "name": "Why choose Google Workspace with Shivaami?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "As a certified Google Workspace reseller, we have extensive expertise in deploying and managing Workspace for businesses of all sizes. We offer personalized support, ensuring a smooth transition and maximizing your return on investment."
    }
  },{
    "@type": "Question",
    "name": "How does Gmail in Google Workspace differ from free Gmail?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Paid Google Workspace provides you with several features and integrations not available in the free consumer version of the apps. It includes custom business email @yourcompany, unlimited group email addresses, 99.9% guaranteed uptime, twice the storage of free Gmail, customized logo branding for your company, zero ads, 24/7 support, Google Workspace Sync for Microsoft Outlook, and more."
    }
  },{
    "@type": "Question",
    "name": "Can I import or migrate my existing email and contacts to Google Workspace?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, while moving to Google Workspace from another application or service, like Microsoft Outlook, you can migrate your old mail, contacts, and calendar data with you. We have a variety of options for migrating data into Google Workspace, depending on the size of the data in your organization."
    }
  },{
    "@type": "Question",
    "name": "Do I need to use third-party tools to keep my data secure within Google?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Without using third-party tools, Google offers the security features required for most customers directly in Google Workspace. Google Workspace’s Business and Enterprise editions offer additional security features, like advanced Google Drive auditing and security key management at scale. In all the plans, Google Workspace admin has control over system configuration and applications from a single dashboard through our Admin console —regardless of the size of the organization."
    }
  },{
    "@type": "Question",
    "name": "Do I need to have a domain to activate a Google Workspace account?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Email service will only work with a valid registered domain and an up-to-date MX record. If you don’t have a domain, we will help you buy the domain of your choice and then set up Google Workspace for you. Domain cost is not included in Google Workspace. For instance, when Emails are sent to an address with an expired domain, they would bounce back to the sender with a notification that the message was undelivered."
    }
  }]
}


  return (
    <>  <Helmet>
<title>Google Workspace Partner in India & USA | Shivaami</title>
 <meta name="description" content="Google Workspace (Formerly G Suite) includes communication, collaboration, and productivity apps. Contact Shivaami, a trusted Google Workspace partner in India & the USA." />
<link rel="canonical" href="https://www.shivaami.com/google-workspace" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 </Helmet>

    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkspaceActionsSection onTransferClick={() => setTransferDialogOpen(true)} />
        <ProvenExcellenceSection />
        
        <ActivationSection />
        <RecognizedLeaderSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <TransferSubscriptionDialog 
        open={transferDialogOpen} 
        onOpenChange={setTransferDialogOpen} 
      />
      <GetStartedDialog 
        open={getStartedDialogOpen} 
        onOpenChange={setGetStartedDialogOpen} 
      />
    </div></>
  );
};

export default GoogleWorkspace;
