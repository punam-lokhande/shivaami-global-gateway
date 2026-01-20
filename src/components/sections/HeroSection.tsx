import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-team-collaboration.jpg';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden">
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
        {/* Blue transparent gradient overlay - matching product pages */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(12, 69, 148, 0.85) 0%, rgba(12, 69, 148, 0.7) 30%, rgba(12, 69, 148, 0.5) 60%, rgba(12, 69, 148, 0.3) 100%)'
          }}
        />
      </motion.div>

      {/* Content - Left aligned with proper spacing from nav */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-32 lg:pt-40 xl:pt-44 pb-12 sm:pb-16">
        <div className="max-w-2xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 sm:mb-8 leading-[1.15] tracking-tight"
          >
            Make Your Ecosystem<br />
            <span className="text-sky-300">Smarter</span>, <span className="text-teal-300">Safer</span>, <span className="bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">Smoother</span><br />
            with Shivaami
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-body"
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
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-primary font-semibold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 bg-white/10 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
