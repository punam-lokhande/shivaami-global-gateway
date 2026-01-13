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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#e8f4ff]" />
      
      {/* Subtle accent glow */}
      <motion.div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#38B6FF]/5 blur-[100px] z-[1]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Content Container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C4594]/5 text-sm font-medium text-[#0C4594] border border-[#0C4594]/10">
                Trusted by 20,000+ Organizations Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#010203] mb-6 leading-[1.1]"
            >
              Make Your Ecosystem{' '}
              <span className="text-[#0C4594]">Smarter</span>,{' '}
              <span className="text-[#38B6FF]">Safer</span>,{' '}
              <span className="bg-gradient-to-r from-[#0C4594] to-[#38B6FF] bg-clip-text text-transparent">Smoother</span>{' '}
              with Shivaami
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-[#010203]/70 max-w-xl mb-10 leading-relaxed font-body"
            >
              Empower your teams with secure cloud and AI solutions. We combine the right 
              solutions with expert services to simplify your productivity, security, and automation challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/lets-connect">
                <Button 
                  size="lg" 
                  className="bg-[#0C4594] hover:bg-[#0C4594]/90 text-white font-semibold px-8 py-6 text-lg group rounded-xl shadow-lg shadow-[#0C4594]/20 hover:shadow-xl hover:shadow-[#0C4594]/30 transition-all duration-300"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#38B6FF]/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0C4594]/10 rounded-full blur-xl" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0C4594]/10 border border-[#0C4594]/5">
                <img 
                  src={heroImage} 
                  alt="Enterprise technology solutions - global network and cloud infrastructure" 
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0C4594]/20 via-transparent to-[#38B6FF]/10" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#38B6FF]/10 flex items-center justify-center">
                    <span className="text-[#0C4594] font-bold text-lg">20K+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#010203]">Organizations</p>
                    <p className="text-xs text-[#010203]/60">Trust Shivaami</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-xl border border-gray-100"
              >
                <p className="text-sm font-semibold text-[#0C4594]">Enterprise Ready</p>
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
        <div className="w-6 h-10 rounded-full border-2 border-[#0C4594]/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#38B6FF]"
          />
        </div>
      </motion.div>
    </section>
  );
}
