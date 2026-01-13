import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Heart, Banknote, ShoppingCart, Factory, 
  Megaphone, Cpu, Hotel, Truck,
  ArrowRight, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import industry images
import healthcareImg from '@/assets/industries/healthcare.jpg';
import financialImg from '@/assets/industries/financial.jpg';
import retailImg from '@/assets/industries/retail.jpg';
import manufacturingImg from '@/assets/industries/manufacturing.jpg';
import mediaImg from '@/assets/industries/media.jpg';
import technologyImg from '@/assets/industries/technology.jpg';
import hospitalityImg from '@/assets/industries/hospitality.jpg';
import logisticsImg from '@/assets/industries/logistics.jpg';

const industries = [
  { 
    icon: Heart, 
    name: 'Healthcare', 
    description: 'HIPAA-compliant cloud solutions for patient care excellence',
    image: healthcareImg,
  },
  { 
    icon: Banknote, 
    name: 'Financial Services', 
    description: 'Secure fintech infrastructure with regulatory compliance',
    image: financialImg,
  },
  { 
    icon: ShoppingCart, 
    name: 'Retail', 
    description: 'Omnichannel commerce and customer experience platforms',
    image: retailImg,
  },
  { 
    icon: Factory, 
    name: 'Manufacturing', 
    description: 'Industry 4.0 enablement with connected operations',
    image: manufacturingImg,
  },
  { 
    icon: Megaphone, 
    name: 'Advertising & Media', 
    description: 'Creative collaboration and digital content delivery',
    image: mediaImg,
  },
  { 
    icon: Cpu, 
    name: 'Technology', 
    description: 'Developer-first infrastructure and DevOps solutions',
    image: technologyImg,
  },
  { 
    icon: Hotel, 
    name: 'Hospitality', 
    description: 'Guest experience platforms and property management',
    image: hospitalityImg,
  },
  { 
    icon: Truck, 
    name: 'Logistics', 
    description: 'Supply chain optimization and fleet management',
    image: logisticsImg,
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration - matching Pillars section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">Industry Solutions</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Industry, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every industry has unique challenges. We bring deep domain expertise combined 
            with cutting-edge technology to deliver solutions that drive real business outcomes.
          </p>
        </motion.div>

        {/* Bento Grid with Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div className={`
                  bg-card border border-border/50 rounded-2xl h-full cursor-pointer relative overflow-hidden
                  transition-all duration-500 shadow-soft hover:shadow-elevated hover:-translate-y-2
                  ${isHovered ? 'border-primary/30' : ''}
                `}>
                  {/* Industry Image */}
                  <div className="relative h-36 overflow-visible">
                    <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />
                      {/* Gradient overlay matching Pillars style */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-500/30 to-transparent" />
                    </div>
                    
                    {/* Floating Icon - matching Pillars style */}
                    <div className="absolute -bottom-5 left-4 z-10">
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-background
                        transition-all duration-300
                        ${isHovered ? 'bg-gradient-to-br from-primary to-accent scale-110' : 'bg-gradient-to-br from-blue-600 to-sky-500'}
                      `}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 pt-7">
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {industry.name}
                    </h3>

                    <p className={`
                      text-sm text-muted-foreground transition-all duration-300 leading-relaxed
                      ${isHovered ? 'opacity-100' : 'opacity-80'}
                    `}>
                      {industry.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-accent/5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 group"
          >
            Get Industry-Specific Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
