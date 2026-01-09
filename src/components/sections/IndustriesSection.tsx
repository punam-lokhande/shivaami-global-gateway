import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Heart, Banknote, ShoppingCart, Factory, 
  Megaphone, Cpu, Hotel, Truck,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  { 
    icon: Heart, 
    name: 'Healthcare', 
    description: 'HIPAA-compliant cloud solutions for patient care excellence',
  },
  { 
    icon: Banknote, 
    name: 'Financial Services', 
    description: 'Secure fintech infrastructure with regulatory compliance',
  },
  { 
    icon: ShoppingCart, 
    name: 'Retail', 
    description: 'Omnichannel commerce and customer experience platforms',
  },
  { 
    icon: Factory, 
    name: 'Manufacturing', 
    description: 'Industry 4.0 enablement with connected operations',
  },
  { 
    icon: Megaphone, 
    name: 'Advertising & Media', 
    description: 'Creative collaboration and digital content delivery',
  },
  { 
    icon: Cpu, 
    name: 'Technology', 
    description: 'Developer-first infrastructure and DevOps solutions',
  },
  { 
    icon: Hotel, 
    name: 'Hospitality', 
    description: 'Guest experience platforms and property management',
  },
  { 
    icon: Truck, 
    name: 'Logistics', 
    description: 'Supply chain optimization and fleet management',
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C4594] mb-4">
            Your Industry, <span className="text-[#010203]">Our Expertise</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-3xl mx-auto">
            Every industry has unique challenges. We bring deep domain expertise combined 
            with cutting-edge technology to deliver solutions that drive real business outcomes.
          </p>
        </motion.div>

        {/* Bento Grid */}
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
                  bg-white border border-[#e2e8f0] rounded-2xl h-full cursor-pointer relative overflow-hidden p-6
                  transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                  ${isHovered ? 'border-[#38B6FF]/50 shadow-[0_8px_30px_rgba(56,182,255,0.15)]' : 'hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'}
                `}>
                  <div className={`
                    w-12 h-12 rounded-xl bg-[#0C4594]/10
                    flex items-center justify-center mb-4
                    transition-all duration-300 ${isHovered ? 'scale-110 bg-gradient-to-br from-[#0C4594] to-[#38B6FF]' : ''}
                  `}>
                    <Icon className={`w-6 h-6 transition-colors ${isHovered ? 'text-white' : 'text-[#0C4594]'}`} />
                  </div>

                  <h3 className="font-display font-semibold text-[#0C4594] mb-2 relative z-10">
                    {industry.name}
                  </h3>

                  <p className={`
                    text-sm text-[#64748b] transition-all duration-300 relative z-10
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
          <Button className="bg-[#0C4594] hover:bg-[#0C4594]/90 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
            Get Industry-Specific Solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}