import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, ArrowRight, Sparkles, Lock, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    accentIcon: Sparkles,
    title: 'Smarter',
    subtitle: 'Intelligence that drives productivity',
    description: 'AI-powered tools and intelligent collaboration platforms that transform how your teams work, communicate, and innovate.',
    items: ['Google Workspace', 'Microsoft 365', 'Gemini Enterprise', 'Glean AI Search'],
    color: 'smarter',
    gradient: 'from-blue-500 to-cyan-500',
    bgClass: 'card-3s-smarter',
  },
  {
    icon: Shield,
    accentIcon: Lock,
    title: 'Safer',
    subtitle: 'Protection you can trust',
    description: 'Enterprise-grade security from identity management to cloud infrastructure, keeping your data and operations secure.',
    items: ['JumpCloud', 'Palo Alto Networks', 'Chrome Enterprise', 'SSL & DMARC'],
    color: 'safer',
    gradient: 'from-emerald-500 to-teal-500',
    bgClass: 'card-3s-safer',
  },
  {
    icon: Zap,
    accentIcon: Rocket,
    title: 'Smoother',
    subtitle: 'Operations without friction',
    description: 'Expert migration, ongoing support, and continuous optimization services that ensure your technology works seamlessly.',
    items: ['SwiftMove Migration', 'Pulse360 Support', 'ChangePath Training', '24/7 Help Desk'],
    color: 'smoother',
    gradient: 'from-violet-500 to-purple-500',
    bgClass: 'card-3s-smoother',
  },
];

export default function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 section-light relative">
      {/* Subtle background effects */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="floating-orb w-96 h-96 bg-accent/5 top-20 right-0" />
      <div className="floating-orb w-72 h-72 bg-primary/5 bottom-20 left-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium mb-6">
            <span className="text-primary">Our Framework</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Shivaami <span className="text-gradient">3S Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our integrated framework for accelerating your business with intelligence, 
            security, and efficiency. Three pillars that work together to transform your operations.
          </p>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const AccentIcon = pillar.accentIcon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`card-3s h-full ${pillar.bgClass}`}>
                  {/* Accent decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <AccentIcon className="w-full h-full" />
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent mb-4`}>
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-3 mb-8">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent hover:gap-3 transition-all group/link`}
                  >
                    Learn More
                    <ArrowRight className={`w-4 h-4 text-current group-hover/link:translate-x-1 transition-transform`} style={{ color: pillar.color === 'smarter' ? '#0ea5e9' : pillar.color === 'safer' ? '#10b981' : '#8b5cf6' }} />
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
