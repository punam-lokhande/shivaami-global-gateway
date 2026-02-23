import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductHeroSectionProps {
  title: ReactNode;
  description: string;
  backgroundImage: string;
  altText: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  showScheduleDemo?: boolean;
}

const ProductHeroSection = ({
  title,
  description,
  backgroundImage,
  altText,
  showCTA = true,
  ctaText = "Get a Quote",
  ctaLink = "/contact",
  showScheduleDemo = true
}: ProductHeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative flex items-center overflow-hidden"
    >
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={backgroundImage}
          alt={altText}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div 
        style={{ opacity }} 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-[7.5rem] sm:pt-32 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16"
      >
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.15] tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link to={ctaLink}>
                <Button
                  size="lg"
                  className="bg-[#1b9dd8] hover:bg-[#0C4594] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              {showScheduleDemo && (
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold w-full sm:w-auto"
                  >
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Schedule Demo
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductHeroSection;
