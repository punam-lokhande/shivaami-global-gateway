import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import globalNetworkBg from '@/assets/global-network-bg.jpg';

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
      {/* Animated Background Image with rotation */}
      <motion.div 
        className="absolute inset-0 z-0 scale-125"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 120, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: 'center 150%' }}
      >
        <img 
          src={globalNetworkBg} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      {/* Animated dots overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 50}%`,
              boxShadow: '0 0 10px 2px hsl(var(--accent))',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Animated vertical lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-[1px] bg-gradient-to-t from-accent to-transparent"
            style={{
              left: `${20 + Math.random() * 60}%`,
              bottom: `${30 + Math.random() * 20}%`,
              height: `${30 + Math.random() * 50}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40 z-[2]" />
      
      {/* Animated glow effect */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/20 blur-[100px] z-[2]"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 4, 
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