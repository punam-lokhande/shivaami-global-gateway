import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Link } from 'react-router-dom';

const footerLinks = {
  smarter: {
    title: 'Smarter',
    links: [
      { label: 'Google Workspace', href: '/google-workspace' },
      { label: 'Microsoft 365', href: '/microsoft-365' },
      { label: 'Gemini AI', href: '/gemini-enterprise' },
      { label: 'Glean', href: '/glean' },
    ],
  },
  safer: {
    title: 'Safer',
    links: [
      { label: 'Cloud Capabilities', href: '/cloud-capabilities' },
      { label: 'Google Cloud Platform', href: '/google-cloud-platform' },
      { label: 'JumpCloud', href: '/jumpcloud' },
      { label: 'Chrome Enterprise', href: '/chrome-enterprise' },
      { label: 'Palo Alto', href: '/paloalto' },
      { label: 'SecureSight', href: '/securesight' },
    ],
  },
  smoother: {
    title: 'Smoother',
    links: [
      { label: 'SwiftMove', href: '/swiftmove' },
      { label: 'Pulse360', href: '/pulse360' },
      { label: 'ChangePath', href: '/changepath' },
      { label: 'Apps Script', href: '/apps-script' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Webinar', href: '/on-demand-webinars' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
  industries: {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/healthcare-pharma' },
      { label: 'Financial Services', href: '/financial-services' },
      { label: 'Retail', href: '/retail' },
      { label: 'Technology', href: '/software-technology' },
    ],
  },
  company: {
    title: 'About Us',
    links: [
      { label: 'Our Story', href: '/about-us' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Careers', href: '/careers' },
      { label: 'Become Partner', href: '/become-partner' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="bg-background text-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Get the latest cloud insights and industry news delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground w-full sm:w-64"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 xl:gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">Shivaami</span>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              {/* India Office */}
              <div className="space-y-2">
                <h5 className="font-semibold text-foreground text-xs uppercase tracking-wide">India</h5>
                <a href="tel:+917757841333" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 775 784 1333</span>
                </a>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm leading-relaxed">1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080</span>
                </p>
              </div>
              
              {/* USA Office */}
              <div className="space-y-2">
                <h5 className="font-semibold text-foreground text-xs uppercase tracking-wide">USA</h5>
                <a href="tel:+14083334844" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+1 408 333 4844</span>
                </a>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm leading-relaxed">33 S Wood Avenue, Suite 439, Iselin, New Jersey - 08830</span>
                </p>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-muted-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Shivaami Cloud Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
