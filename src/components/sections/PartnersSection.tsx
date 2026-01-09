import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  'Google Cloud',
  'Microsoft',
  'AWS',
  'Palo Alto',
  'JumpCloud',
  'Okta',
  'Jamf',
  'Scalefusion',
  'MiniOrange',
  'SuperOps',
  'Atera',
  'Wiz',
  'Check Point',
  'Tenable',
  'Zoho',
  'Glean',
  'Chrome Enterprise',
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-[#e2e8f0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0C4594] mb-2">
            Technology Partners
          </h2>
          <p className="text-[#64748b]">
            Partnering with industry leaders to deliver best-in-class solutions
          </p>
        </motion.div>

        {/* Auto-scrolling logo strip */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#38B6FF]/40 hover:shadow-md transition-all flex items-center justify-center min-w-[140px] h-[60px]"
              >
                <span className="text-sm font-semibold text-[#0C4594] whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
