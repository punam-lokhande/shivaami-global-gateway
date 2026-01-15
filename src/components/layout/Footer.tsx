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
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  industries: {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/about-us' },
      { label: 'Financial Services', href: '/about-us' },
      { label: 'Retail', href: '/about-us' },
      { label: 'Technology', href: '/about-us' },
    ],
  },
  company: {
    title: 'About Us',
    links: [
      { label: 'Our Story', href: '/about-us' },
      { label: 'Leadership', href: '/leadership' },
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
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest cloud insights and industry news delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground w-full md:w-64"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Contact - Both Regions */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
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
                  <Phone className="w-4 h-4" />
                  +91 775 784 1333
                </a>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080</span>
                </p>
              </div>
              
              {/* USA Office */}
              <div className="space-y-2">
                <h5 className="font-semibold text-foreground text-xs uppercase tracking-wide">USA</h5>
                <a href="tel:+14083334844" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 408 333 4844
                </a>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>33 S Wood Avenue, Suite 439, Iselin, New Jersey - 08830</span>
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
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
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
