import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { useRegion } from '@/contexts/RegionContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { content, region } = useRegion();

  // Double testimonials for seamless loop
  const allTestimonials = [...content.testimonials, ...content.testimonials];

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C4594] mb-4">
            What Our <span className="text-[#010203]">Clients Say</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Real stories from organizations we've helped transform
          </p>
        </motion.div>

        {/* Testimonials - Auto-scrolling for India, Static for USA */}
        <div className="relative overflow-hidden mb-12">
          {/* Gradient masks - only show for scrolling (India) */}
          {region === 'india' && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />
            </>
          )}

          <motion.div
            className={`flex gap-6 ${region === 'usa' ? 'justify-center flex-wrap max-w-5xl mx-auto' : ''}`}
            animate={region === 'india' ? { x: [0, -1600] } : {}}
            transition={region === 'india' ? {
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            } : {}}
          >
            {(region === 'india' ? allTestimonials : content.testimonials).map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[400px]"
              >
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 h-full flex flex-col shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
                  <Quote className="w-10 h-10 text-[#38B6FF]/30 mb-4" />
                  <p className="text-[#334155] mb-6 flex-grow italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-[#e2e8f0]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0C4594]">{testimonial.name}</div>
                      <div className="text-sm text-[#64748b]">
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
          <Link to="/case-studies">
            <Button className="bg-[#0C4594] hover:bg-[#0C4594]/90 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              Read More Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
