import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Banknote, ShoppingCart, Factory, 
  Megaphone, Cpu, Hotel, Truck,
  ArrowRight, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

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
    icon: Megaphone, 
    name: 'Advertising & Media', 
    description: 'Advertising and media organizations thrive on collaboration and content velocity. Shivaami ensures creative freedom without compromising data security.',
    image: mediaImg,
    href: '/advertising-media',
  },
  { 
    icon: ShoppingCart, 
    name: 'Retail', 
    description: 'Fast and always-on, because customers don\'t wait. Traffic spikes on sale days? No problem. Checkouts stay smooth when shoppers are ready to buy.',
    image: retailImg,
    href: '/retail',
  },
  { 
    icon: Cpu, 
    name: 'Software & Technology', 
    description: 'Your platform keeps other businesses running. Downtime hurts everyone. We handle the infrastructure, so your users stay happy. Systems scale when you need them to.',
    image: technologyImg,
    href: '/software-technology',
  },
  { 
    icon: Banknote, 
    name: 'Financial Services', 
    description: 'One data breach can cost millions. Downtime and compliance issues add more risk. We keep your systems secure, compliant, and always running.',
    image: financialImg,
    href: '/financial-services',
  },
  { 
    icon: Heart, 
    name: 'Healthcare & Pharma', 
    description: 'Patient records must stay completely secure. Systems must work all day, every day. We handle compliance and protection. You focus on patient care.',
    image: healthcareImg,
    href: '/healthcare-pharma',
  },
  { 
    icon: Hotel, 
    name: 'Hospitality', 
    description: 'Guests notice when tech fails. Bookings, check-ins, and services must work perfectly. We keep systems running in the background. You focus on creating great experiences.',
    image: hospitalityImg,
    href: '/hospitality',
  },
  { 
    icon: Factory, 
    name: 'Manufacturing', 
    description: 'Connected operations working in perfect sync. Machines, inventory, and teams run smoothly with no delays or guesswork. Real-time data drives smarter decisions.',
    image: manufacturingImg,
    href: '/manufacturing',
  },
  { 
    icon: Truck, 
    name: 'Transportation & Logistics', 
    description: 'Shipments run on tight schedules. Delays cost money and damage trust. We keep tracking and routing systems connected. Goods arrive when and where they should.',
    image: logisticsImg,
    href: '/transportation-logistics',
  },
];

function IndustryCard({ industry, index, isInView, hoveredIndex, setHoveredIndex }: {
  industry: typeof industries[0];
  index: number;
  isInView: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const Icon = industry.icon;
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group h-full"
    >
      <Link to={industry.href} className="block h-full">
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-500/30 to-transparent" />
            </div>
            
            {/* Floating Icon */}
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
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-accent/5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDot, setSelectedDot] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedDot(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  const dotCount = emblaApi?.scrollSnapList().length || 0;

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Industry, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every industry has unique challenges. We bring deep domain expertise combined 
            with cutting-edge technology to deliver solutions that drive real business outcomes.
          </p>
        </motion.div>

        {/* Desktop Grid - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              industry={industry}
              index={index}
              isInView={isInView}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Mobile Slider - shown only on mobile */}
        <div className="md:hidden mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {industries.map((industry, index) => (
                <div key={industry.name} className="flex-[0_0_80%] min-w-0">
                  <IndustryCard
                    industry={industry}
                    index={index}
                    isInView={isInView}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots + Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={scrollPrev} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${i === selectedDot ? 'w-6 bg-primary' : 'w-2 bg-primary/30'}`}
                />
              ))}
            </div>
            <button onClick={scrollNext} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
