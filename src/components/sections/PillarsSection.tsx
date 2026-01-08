import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Smarter Solutions',
    description: 'AI-powered productivity with Gemini Enterprise, Google AI Ultra, and intelligent collaboration tools.',
    items: ['Google Workspace', 'Microsoft 365', 'Gemini AI', 'Glean'],
  },
  {
    icon: Shield,
    title: 'Safer Solutions',
    description: 'Enterprise-grade security from identity management to cloud infrastructure protection.',
    items: ['JumpCloud', 'Palo Alto', 'Chrome Enterprise', 'SSL & DMARC'],
  },
  {
    icon: Zap,
    title: 'Smoother Services',
    description: 'Expert services that ensure seamless migration, ongoing support, and continuous optimization.',
    items: ['SwiftMove', 'Pulse360', 'ChangePath', '24/7 Support'],
  },
];

export default function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 section-dark relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="floating-orb w-72 h-72 bg-accent/10 top-10 right-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Shivaami <span className="text-gradient">Pillars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three integrated pillars that form the foundation of modern IT excellence
          </p>
        </motion.div>

        {/* Equal Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card h-full glow-border relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon with glow */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 icon-glow group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2.5 mb-6">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all link-underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}