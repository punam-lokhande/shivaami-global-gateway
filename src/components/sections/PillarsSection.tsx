import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Smarter Solutions',
    description: 'AI-powered productivity with Gemini Enterprise, Google AI Ultra, and intelligent collaboration tools.',
    items: ['Google Workspace', 'Microsoft 365', 'Gemini AI', 'Glean'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Safer Solutions',
    description: 'Enterprise-grade security from identity management to cloud infrastructure protection.',
    items: ['JumpCloud', 'Palo Alto', 'Chrome Enterprise', 'SSL & DMARC'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Smoother Services',
    description: 'Expert services that ensure seamless migration, ongoing support, and continuous optimization.',
    items: ['SwiftMove', 'Pulse360', 'ChangePath', '24/7 Support'],
    gradient: 'from-primary to-sky',
  },
];

export default function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-background tech-pattern">
      <div className="container mx-auto px-4">
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

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="card-enterprise p-8 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {pillar.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2 mb-6">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
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
