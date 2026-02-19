import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useRegion } from '@/contexts/RegionContext';
import { 
  ArrowRight, Calendar, CheckCircle2,
  Users, BookOpen, MessageSquare, BarChart3, Heart, Award, FileSearch
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from '@/components/GetStartedDialog';
import heroImage from '@/assets/banners/changepath-banner.jpg';
// Feature images
import stakeholderImg from '@/assets/changepath/stakeholder-analysis.jpg';
import trainingImg from '@/assets/changepath/training-programs.jpg';
import communicationImg from '@/assets/changepath/communication.jpg';
import adoptionImg from '@/assets/changepath/adoption-tracking.jpg';
import resistanceImg from '@/assets/changepath/resistance-management.jpg';
import championImg from '@/assets/changepath/champion-network.jpg';
import postReviewImg from '@/assets/changepath/post-review.jpg';
import CTASection from '@/components/sections/CTASection';
import { Helmet } from 'react-helmet-async';

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="ChangePath Change Management"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
       
            <span className="text-[#38B6FF]">ChangePath: Smooth </span> Technology Transitions
          
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
           Shivaami makes technology adoption effortless for your team. We create training programs and communication plans that reduce resistance and accelerate adoption. You get measurable results and a team that embraces change.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={() => document.dispatchEvent(new CustomEvent('openGetStartedDialog'))}
              size="lg"
              className="bg-[#38B6FF] hover:bg-[#0C4594] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

// What We Handle For You Section
function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: 'Stakeholder Impact Analysis',
      desc: 'We identify who will be affected by changes. This helps us create targeted support for each group.',
      image: stakeholderImg,
    },
    {
      icon: BookOpen,
      title: 'Custom Training Programs',
      desc: 'We develop role-specific training for your team. Everyone learns what they need in a way that makes sense.',
      image: trainingImg,
    },
    {
      icon: MessageSquare,
      title: 'Communication Planning',
      desc: 'We craft clear messages about why changes are happening. This builds trust and reduces uncertainty across your organization.',
      image: communicationImg,
    },
    {
      icon: BarChart3,
      title: 'Adoption Tracking',
      desc: 'We measure how well people are using new systems. These metrics help us adjust our approach for better results.',
      image: adoptionImg,
    },
    {
      icon: Heart,
      title: 'Resistance Management',
      desc: 'We work with employees who struggle with new processes. Our support turns skeptics into advocates over time.',
      image: resistanceImg,
    },
    {
      icon: Award,
      title: 'Champion Network Development',
      desc: 'We train internal advocates who support their colleagues. This creates sustainable change beyond our engagement.',
      image: championImg,
    },
    {
      icon: FileSearch,
      title: 'Post-Implementation Review',
      desc: 'We evaluate what worked and what needs improvement. These insights make your next change initiative even stronger.',
      image: postReviewImg,
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            What We Handle for You
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            From stakeholder analysis to post-implementation review, we guide your organization through every step of change.
          </p>
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
                className="relative rounded-2xl overflow-hidden group h-[320px] cursor-pointer"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/80 to-[#0C4594]/50 group-hover:from-[#0C4594] group-hover:via-[#0C4594]/85 group-hover:to-[#0C4594]/60 transition-all duration-300" />
                
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


// Main Page Component
export default function ChangePath() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handler);
    return () => document.removeEventListener('openGetStartedDialog', handler);
  }, []);

  return (
<>
<Helmet>
<title>Change Management | Smooth Technology Transitions by Shivaami</title>
 <meta name="description" content="Implement new systems without disrupting your team. ChangePath guides your organization through technology changes with training, planning, and ongoing support." />
<link rel="canonical" href="https://www.shivaami.com/changepath" />
 </Helmet>


    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
       <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div></>
  );
}
