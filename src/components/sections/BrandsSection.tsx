import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  'Zepto',
  'Hurix',
  'BigBasket',
  'Swiggy',
  'Razorpay',
  'PhonePe',
  'Dream11',
  'CRED',
  'Groww',
  'Meesho',
  'Lenskart',
  'Urban Company',
];

export default function BrandsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
            Trusted by Leaders Across Industries
          </h2>
          <p className="text-primary/70">
            From startups to enterprises, we power digital transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 rounded-xl bg-white border border-border/30 hover:border-accent/30 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-primary/70">{brand}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
