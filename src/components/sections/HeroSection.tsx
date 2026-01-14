import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-dark-enterprise.jpg';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Enterprise cloud and AI solutions"
          className="w-full h-full object-cover object-center sm:object-center md:object-[70%_center] lg:object-center"
          loading="eager"
        />
        {/* Soft localized gradient - only behind text area, blends smoothly into image */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0) 55%)'
          }}
        />
        {/* Subtle blue/teal tint behind text for brand consistency */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, rgba(14,165,233,0.08) 0%, rgba(20,184,166,0.05) 30%, transparent 50%)'
          }}
        />
      </motion.div>

      {/* Content - Left aligned with proper spacing from nav */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-32 lg:pt-40 xl:pt-44 pb-16">
        <div className="max-w-2xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-[1.08] tracking-tight"
          >
            Make Your Ecosystem{' '}
            <span className="text-primary">Smarter</span>,{' '}
            <span className="text-accent">Safer</span>,{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Smoother</span>{' '}
            with Shivaami
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-body"
          >
            Empower your teams with secure cloud and AI solutions. We combine the right solutions with expert
            services to simplify your productivity, security, and automation challenges.
          </motion.p>

          {/* Single CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/lets-connect">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2 bg-background/30 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
