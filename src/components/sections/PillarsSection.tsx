import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, ArrowRight, Sparkles, Lock, Rocket, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    accentIcon: Sparkles,
    title: 'Smarter Solutions',
    subtitle: 'Intelligence that drives productivity',
    description: 'AI-powered tools and intelligent collaboration platforms that transform how your teams work, communicate, and innovate.',
    items: [
      { name: 'Artificial Intelligence', desc: 'Data-driven decisions with Gemini Enterprise & Glean' },
      { name: 'Email & Collaboration', desc: 'Secure teamwork from anywhere' },
    ],
    gradient: 'from-blue-600 via-blue-500 to-sky-500',
    lightGradient: 'from-blue-500/10 to-sky-500/10',
    iconColor: 'text-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
  },
  {
    icon: Shield,
    accentIcon: Lock,
    title: 'Safer Security',
    subtitle: 'Protection you can trust',
    description: 'Enterprise-grade security from identity management to cloud infrastructure, keeping your data and operations secure.',
    items: [
      { name: 'Identity & Device Management', desc: 'Complete access control across your organization' },
      { name: 'Cloud Security', desc: 'Enterprise-grade protection you can trust' },
      { name: 'Cloud Infrastructure', desc: 'Scalable foundations that grow with you' },
      { name: 'Endpoint Management', desc: 'Every device is monitored and secured' },
      { name: 'Cloud Capabilities', desc: 'Modern services built for speed and scale' },
      { name: 'Cyber Security', desc: 'Proactive defense against emerging threats' },
      { name: 'Chrome Solutions', desc: 'Enterprise-grade Chrome devices and management' },
    ],
    gradient: 'from-blue-700 via-blue-600 to-blue-500',
    lightGradient: 'from-blue-600/10 to-blue-400/10',
    iconColor: 'text-blue-600',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
  },
  {
    icon: Zap,
    accentIcon: Rocket,
    title: 'Smoother Services',
    subtitle: 'Operations without friction',
    description: 'Expert migration, ongoing support, and continuous optimization services that ensure your technology works seamlessly.',
    items: [
      { name: 'SwiftMove – Migration Services', desc: 'Fast, smooth migration service' },
      { name: 'Managed Services – Pulse360', desc: 'Holistic managed services with constant monitoring' },
      { name: 'Change Management – ChangePath', desc: 'Guiding teams through change effortlessly' },
      { name: 'Security Assessment – SecureSight', desc: 'Insights and clarity on risks' },
      { name: 'Staff Augmentation – TalentEdge', desc: 'Strengthening teams with a dedicated Shivaami expert' },
      { name: 'Support Packages & AppScript', desc: 'Custom solutions for unique needs' },
    ],
    gradient: 'from-sky-600 via-blue-500 to-indigo-500',
    lightGradient: 'from-sky-500/10 to-indigo-500/10',
    iconColor: 'text-sky-500',
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
                  {/* Image Header - Added padding-bottom to prevent icon cutoff */}
                  <div className="relative h-48 overflow-visible">
                    <div className="absolute inset-0 overflow-hidden rounded-t-3xl">
                      <img 
                        src={pillar.image} 
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${pillar.gradient} opacity-60`} />
                    </div>
                    
                    {/* Floating Icon - positioned to not get cut off */}
                    <div className="absolute -bottom-7 left-6 z-10">
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
                    <ul className="space-y-3 mb-6">
                      {pillar.items.map((item) => (
                        <li key={item.name} className="text-sm">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pillar.iconColor}`} />
                            <div>
                              <span className="font-medium text-foreground">{item.name}</span>
                              <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Hover glow effect - subtle blue tint that doesn't affect text readability */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                    <div className={`absolute inset-0 bg-gradient-to-t ${pillar.lightGradient}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
