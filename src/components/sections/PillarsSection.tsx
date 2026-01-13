import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, ArrowRight, Sparkles, Lock, Rocket, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    accentIcon: Sparkles,
    title: 'Smarter',
    subtitle: 'Intelligence that drives productivity',
    description: 'AI-powered tools and intelligent collaboration platforms that transform how your teams work, communicate, and innovate.',
    items: ['Google Workspace', 'Microsoft 365', 'Gemini Enterprise', 'Glean AI Search'],
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    lightGradient: 'from-blue-50 to-cyan-50',
    accentColor: 'blue',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
  },
  {
    icon: Shield,
    accentIcon: Lock,
    title: 'Safer',
    subtitle: 'Protection you can trust',
    description: 'Enterprise-grade security from identity management to cloud infrastructure, keeping your data and operations secure.',
    items: ['JumpCloud', 'Palo Alto Networks', 'Chrome Enterprise', 'SSL & DMARC'],
    gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
    lightGradient: 'from-emerald-50 to-teal-50',
    accentColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
  },
  {
    icon: Zap,
    accentIcon: Rocket,
    title: 'Smoother',
    subtitle: 'Operations without friction',
    description: 'Expert migration, ongoing support, and continuous optimization services that ensure your technology works seamlessly.',
    items: ['SwiftMove Migration', 'Pulse360 Support', 'ChangePath Training', '24/7 Help Desk'],
    gradient: 'from-violet-500 via-purple-500 to-violet-600',
    lightGradient: 'from-violet-50 to-purple-50',
    accentColor: 'violet',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
  },
];

export default function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">Our Framework</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Shivaami <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3S Advantage</span>
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
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`relative h-full bg-card rounded-3xl border border-border/50 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2`}>
                  {/* Image Header */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pillar.gradient} opacity-60`} />
                    
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 left-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg ring-4 ring-background`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-10">
                    {/* Title & Subtitle */}
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent mb-4`}>
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {pillar.description}
                    </p>

                    {/* Items with checkmarks */}
                    <ul className="space-y-2.5 mb-6">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                            pillar.accentColor === 'blue' ? 'text-blue-500' :
                            pillar.accentColor === 'emerald' ? 'text-emerald-500' :
                            'text-violet-500'
                          }`} />
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
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover/link:translate-x-1 ${
                        pillar.accentColor === 'blue' ? 'text-blue-500' :
                        pillar.accentColor === 'emerald' ? 'text-emerald-500' :
                        'text-violet-500'
                      }`} />
                    </a>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t ${pillar.lightGradient} mix-blend-overlay`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 group"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
