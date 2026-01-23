import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRegion } from '@/contexts/RegionContext';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { region } = useRegion();

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  // Dynamic consultation link based on region
  const consultationLink = region === 'india' 
    ? 'https://calendar.app.google/gV1KaLLVkPR32C1p9'
    : 'https://app.apollo.io/#/meet/40u-obp-ihl/30-min';

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#0C4594] to-[#0a3a7a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#38B6FF]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#38B6FF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to make work{' '}
            <span className="text-[#38B6FF]">smarter, safer, and smoother</span>?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Let's discuss how Shivaami can transform your organization's IT infrastructure 
            and empower your teams to do their best work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-[#38B6FF] text-white hover:bg-[#38B6FF]/90 font-semibold px-8 py-6 text-lg group shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-2 border-white text-white hover:border-white hover:bg-white/20 font-semibold px-8 py-6 text-lg bg-white/10"
            >
              <a href={consultationLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
