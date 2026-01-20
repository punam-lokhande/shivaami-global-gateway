import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import partner logos
import googleCloudLogo from '@/assets/partners/google-cloud.png';
import microsoftLogo from '@/assets/partners/microsoft.svg';
import awsLogo from '@/assets/partners/aws.svg';
import jamfLogo from '@/assets/partners/jamf.png';
import zohoLogo from '@/assets/partners/zoho.png';
import googleLogo from '@/assets/partners/google.svg';
import oktaLogo from '@/assets/partners/okta.svg';
import chromeLogo from '@/assets/partners/chrome.png';
import paloaltoLogo from '@/assets/partners/paloalto.png';
import scalefusionLogo from '@/assets/partners/scalefusion.png';
import miniorangeLogo from '@/assets/partners/miniorange.webp';
import superopsLogo from '@/assets/partners/superops.png';
import wizLogo from '@/assets/partners/wiz.webp';
import jiocloudLogo from '@/assets/partners/jiocloud.png';
import viamiLogo from '@/assets/partners/viami.png';
import checkpointLogo from '@/assets/partners/checkpoint.png';
import jumpcloudLogo from '@/assets/partners/jumpcloud.png';
import ateraLogo from '@/assets/partners/atera.png';
import tenableLogo from '@/assets/partners/tenable.svg';
import gleanLogo from '@/assets/partners/glean.png';

const partners = [
  { name: 'Google Cloud', logo: googleCloudLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Palo Alto', logo: paloaltoLogo },
  { name: 'JumpCloud', logo: jumpcloudLogo },
  { name: 'Okta', logo: oktaLogo },
  { name: 'Jamf', logo: jamfLogo },
  { name: 'Scalefusion', logo: scalefusionLogo },
  { name: 'MiniOrange', logo: miniorangeLogo },
  { name: 'SuperOps', logo: superopsLogo },
  { name: 'Atera', logo: ateraLogo },
  { name: 'Wiz', logo: wizLogo },
  { name: 'Check Point', logo: checkpointLogo },
  { name: 'Tenable', logo: tenableLogo },
  { name: 'Zoho', logo: zohoLogo },
  { name: 'Glean', logo: gleanLogo },
  { name: 'Chrome Enterprise', logo: chromeLogo },
  { name: 'JioCloud', logo: jiocloudLogo },
  { name: 'Viami', logo: viamiLogo },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-border/30">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Technology <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-muted-foreground">
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
            animate={{ x: [0, -2200] }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-8 py-5 rounded-xl bg-white border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all flex items-center justify-center min-w-[180px] h-[90px] shadow-sm"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-10 w-auto object-contain max-w-[140px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
