import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveGlobeBackground from './InteractiveGlobeBackground';

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
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#001020] via-[#001a35] to-[#000d1a]" />
      
      {/* Interactive globe background with particles */}
      <InteractiveGlobeBackground />
      
      {/* Gradient overlay for text readability on left */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#001020]/90 via-[#001020]/60 to-transparent pointer-events-none" />
      
      {/* Bottom gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-[5]" />
      
      {/* Animated glow effect at bottom */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-accent/10 blur-[120px] z-[4]"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

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
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card-subtle text-sm font-medium mb-8 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-foreground/90">Trusted by 20,000+ Organizations Worldwide</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 text-balance leading-tight"
        >
          Smarter, Safer, Smoother{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient-glow">Work with Shivaami</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
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
            className="btn-glow bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group rounded-xl"
          >
            Let's Connect
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-outline-glow font-semibold px-8 py-6 text-lg group rounded-xl text-foreground"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book a Meeting
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-7 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent shadow-glow"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
