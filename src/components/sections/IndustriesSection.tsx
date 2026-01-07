import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Heart, Banknote, ShoppingCart, Factory, 
  Megaphone, Cpu, Hotel, Truck, Leaf,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  { 
    icon: Heart, 
    name: 'Healthcare', 
    description: 'HIPAA-compliant cloud solutions for patient care excellence',
    color: 'from-rose-500 to-pink-500'
  },
  { 
    icon: Banknote, 
    name: 'Financial Services', 
    description: 'Secure fintech infrastructure with regulatory compliance',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: ShoppingCart, 
    name: 'Retail', 
    description: 'Omnichannel commerce and customer experience platforms',
    color: 'from-orange-500 to-amber-500'
  },
  { 
    icon: Factory, 
    name: 'Manufacturing', 
    description: 'Industry 4.0 enablement with connected operations',
    color: 'from-slate-500 to-zinc-500'
  },
  { 
    icon: Megaphone, 
    name: 'Advertising & Media', 
    description: 'Creative collaboration and digital content delivery',
    color: 'from-violet-500 to-purple-500'
  },
  { 
    icon: Cpu, 
    name: 'Technology', 
    description: 'Developer-first infrastructure and DevOps solutions',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Hotel, 
    name: 'Hospitality', 
    description: 'Guest experience platforms and property management',
    color: 'from-amber-500 to-yellow-500'
  },
  { 
    icon: Truck, 
    name: 'Logistics', 
    description: 'Supply chain optimization and fleet management',
    color: 'from-indigo-500 to-blue-500'
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Industry, <span className="text-gradient">Our Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every industry has unique challenges. We bring deep domain expertise combined 
            with cutting-edge technology to deliver solutions that drive real business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`
                  relative p-6 rounded-2xl border border-border/50 bg-card 
                  transition-all duration-300 cursor-pointer overflow-hidden
                  ${isHovered ? 'shadow-elevated border-primary/30' : 'hover:shadow-card'}
                `}>
                  {/* Background gradient on hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0
                    transition-opacity duration-300 ${isHovered ? 'opacity-5' : ''}
                  `} />

                  <div className={`
                    w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} 
                    flex items-center justify-center mb-4
                    transition-transform duration-300 ${isHovered ? 'scale-110' : ''}
                  `}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {industry.name}
                  </h3>

                  <p className={`
                    text-sm text-muted-foreground transition-all duration-300
                    ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}
                  `}>
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Industry-Specific Solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
