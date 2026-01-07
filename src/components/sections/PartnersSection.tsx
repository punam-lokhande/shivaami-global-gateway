import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  'Google Cloud',
  'Microsoft',
  'AWS',
  'Palo Alto',
  'JumpCloud',
  'Viami',
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
  'JioCloud',
  'Glean',
  'Chrome',
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Technology Partners
          </h2>
          <p className="text-muted-foreground">
            Partnering with industry leaders to deliver best-in-class solutions
          </p>
        </motion.div>

        {/* Auto-scrolling logo strip */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
