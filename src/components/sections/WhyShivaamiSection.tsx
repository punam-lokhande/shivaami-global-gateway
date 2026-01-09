import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Building2, Users, Rocket, Shield, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Google & OEM-Backed Expertise',
    description: 'Premier partner with direct access to Google and leading technology vendors.',
  },
  {
    icon: Building2,
    title: 'One-Stop Partner',
    description: 'Complete cloud, AI, security, and support solutions under one roof.',
  },
  {
    icon: Users,
    title: 'Any Size, Any Scale',
    description: 'From startups to enterprises, we support 1 to 10,000+ users seamlessly.',
  },
  {
    icon: Rocket,
    title: 'Seamless Migration',
    description: 'Zero-downtime migrations with our proven SwiftMove methodology.',
  },
  {
    icon: Shield,
    title: 'ISO-Certified Security',
    description: 'Enterprise-grade security practices with ISO 27001 certification.',
  },
  {
    icon: CheckCircle,
    title: '24/7 Expert Support',
    description: 'Round-the-clock assistance from certified cloud specialists.',
  },
];

export default function WhyShivaamiSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Clean minimal background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38B6FF]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0C4594]/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C4594] mb-4">
            Why <span className="text-[#38B6FF]">Shivaami</span>?
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            We don't just implement technology—we transform how businesses work
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-[#e2e8f0] flex items-start gap-4 h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-[#38B6FF]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0C4594] mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {reason.description}
                    </p>
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