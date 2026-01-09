import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { useRegion } from '@/contexts/RegionContext';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { content, region } = useRegion();

  // Double testimonials for seamless loop
  const allTestimonials = [...content.testimonials, ...content.testimonials];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Customer Stories • {region === 'india' ? '🇮🇳 India' : '🇺🇸 USA'}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Real stories from organizations we've helped transform
          </p>
        </motion.div>

        {/* Auto-scrolling testimonials */}
        <div className="relative overflow-hidden mb-12">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1600] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[400px]"
              >
                <div className="bg-gradient-to-b from-secondary/5 to-accent/5 border border-border/30 rounded-xl p-8 h-full flex flex-col">
                  <Quote className="w-10 h-10 text-accent/40 mb-4" />
                  <p className="text-primary/80 mb-6 flex-grow italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-primary/60">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" className="border-primary/20 hover:border-primary">
            Read More Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
