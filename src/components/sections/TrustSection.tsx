import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Calendar, Award, Building, Globe, Heart } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Users, value: 20000, suffix: '+', label: 'Happy Customers' },
  { icon: Calendar, value: 21, suffix: '+', label: 'Years of Excellence' },
  { icon: Award, value: 250, suffix: '+', label: 'Certified Specialists' },
  { icon: Building, value: 10, suffix: '+', label: 'Years Google Partner' },
  { icon: Globe, value: 6, suffix: '', label: 'Global Offices' },
  { icon: Heart, value: 80, suffix: '%', label: 'Women-Led Workforce' },
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f1f5f9]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C4594] mb-4">
            Trusted. Experienced. <span className="text-[#38B6FF]">Global.</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#0C4594]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#0C4594]" />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-[#0C4594]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <p className="text-sm text-[#64748b] mt-2 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
