import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from './AnimatedBackground';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Trusted by 20,000+ Organizations Worldwide
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Smarter, Safer, Smoother{' '}
          <span className="text-gradient">Work with Shivaami</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
        >
          Empower your teams with secure cloud and AI solutions. We combine the right 
          technology with expert services to simplify your IT challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
          >
            Let's Connect
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary/20 hover:border-primary hover:bg-secondary font-semibold px-8 py-6 text-lg group"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book a Meeting
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
