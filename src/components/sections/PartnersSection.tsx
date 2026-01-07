import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'Google Cloud', logo: 'https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png' },
  { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png' },
  { name: 'Palo Alto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Palo_Alto_Networks_logo.svg/512px-Palo_Alto_Networks_logo.svg.png' },
  { name: 'JumpCloud', logo: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0e5d2c2fdab53a9c83b05e55cc4f59bb/jumpcloud-directory-platform.png' },
  { name: 'Okta', logo: 'https://www.okta.com/sites/default/files/Okta_Logo_BrightBlue_Medium.png' },
  { name: 'Jamf', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Jamf_logo.svg/512px-Jamf_logo.svg.png' },
  { name: 'Scalefusion', logo: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_3c72f8e1a4f27f31c8faf8e93f914e86/scalefusion.png' },
  { name: 'MiniOrange', logo: 'https://www.miniorange.com/images/logos/miniorange-logo.webp' },
  { name: 'SuperOps', logo: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d9e7c3dc8a5c30c1fd27d95f9ca5a47b/superops-ai.png' },
  { name: 'Atera', logo: 'https://www.atera.com/wp-content/uploads/2023/03/atera-logo.svg' },
  { name: 'Wiz', logo: 'https://www.wiz.io/wp-content/themes/flavor/assets/img/wiz-logo.svg' },
  { name: 'Check Point', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Check_Point_logo_2022.svg/512px-Check_Point_logo_2022.svg.png' },
  { name: 'Tenable', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tenable_logo.svg/512px-Tenable_logo.svg.png' },
  { name: 'Zoho', logo: 'https://www.zoho.com/images/logo/zoho-logo.svg' },
  { name: 'Glean', logo: 'https://www.glean.com/hubfs/logo.svg' },
  { name: 'Chrome Enterprise', logo: 'https://www.gstatic.com/images/branding/product/2x/chrome_96dp.png' },
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
            className="flex gap-8 items-center"
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
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors flex items-center justify-center min-w-[140px] h-[70px]"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-10 max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-sm font-medium text-foreground/70 whitespace-nowrap">${partner.name}</span>`;
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
