import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { useRegion } from '@/contexts/RegionContext';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { content, region } = useRegion();

  return (
    <section ref={ref} className="py-24 bg-secondary/30 tech-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Customer Stories • {region === 'india' ? '🇮🇳 India' : '🇺🇸 USA'}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from organizations we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card-enterprise p-8 h-full flex flex-col">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground/90 mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
