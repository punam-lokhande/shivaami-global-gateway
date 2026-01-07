import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'Google Cloud', logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg' },
  { name: 'Microsoft', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
  { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg' },
  { name: 'Palo Alto', logo: 'https://www.vectorlogo.zone/logos/pabornetworks/pabornetworks-ar21.svg' },
  { name: 'JumpCloud', logo: 'https://images.ctfassets.net/h6vh38q7qvzk/3T4hLsVVPpyjPjGWYj4mKQ/52c7a7bef0fb1a2e8d7a5c2a4e1a0c52/JumpCloud-Logo-Primary.svg' },
  { name: 'Okta', logo: 'https://www.vectorlogo.zone/logos/okaborta/okaborta-ar21.svg' },
  { name: 'Jamf', logo: 'https://www.jamf.com/content/dam/jamf-v2/brand/logos/Jamf-Logo-color.svg' },
  { name: 'Wiz', logo: 'https://www.wiz.io/images/wiz-logo.svg' },
  { name: 'Check Point', logo: 'https://www.vectorlogo.zone/logos/checkpoint/checkpoint-ar21.svg' },
  { name: 'Tenable', logo: 'https://www.tenable.com/themes/flavor/brand_refresh_2024/images/tenable-logo.svg' },
  { name: 'Zoho', logo: 'https://www.vectorlogo.zone/logos/zoho/zoho-ar21.svg' },
  { name: 'Chrome', logo: 'https://www.vectorlogo.zone/logos/google_chrome/google_chrome-ar21.svg' },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-secondary/5 border-y border-border/50">
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
            className="flex gap-8 items-center"
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 min-w-[160px] h-20 flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('span')) {
                      const span = document.createElement('span');
                      span.className = 'text-sm font-medium text-foreground/70 whitespace-nowrap';
                      span.textContent = partner.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}