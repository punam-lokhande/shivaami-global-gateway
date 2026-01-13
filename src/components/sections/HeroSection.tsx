import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/global-network-bg.jpg';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Light enterprise background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary/40 to-accent/10" />
      <div className="absolute inset-0 z-0 noise-overlay" />

      {/* Accent glow on the right */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[110px] z-[1]"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left: copy + CTA */}
          <div className="order-2 lg:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 text-sm font-medium text-primary border border-border">
                Trusted by 20,000+ Organizations Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
            >
              Make Your Ecosystem{' '}
              <span className="text-primary">Smarter</span>,{' '}
              <span className="text-accent">Safer</span>,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Smoother</span>{' '}
              with Shivaami
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-body"
            >
              Empower your teams with secure cloud and AI solutions. We combine the right solutions with expert
              services to simplify your productivity, security, and automation challenges.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Link to="/lets-connect">
                <Button
                  size="lg"
                  className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group rounded-xl shadow-glow"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border bg-card">
                <img
                  src={heroImage}
                  alt="Enterprise technology solutions — global network and cloud infrastructure"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">20K+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Organizations</p>
                    <p className="text-xs text-muted-foreground">Trust Shivaami</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-card rounded-xl px-4 py-2 shadow-card border border-border"
              >
                <p className="text-sm font-semibold text-primary">Enterprise Ready</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2 bg-background/50 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
