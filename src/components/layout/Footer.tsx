import { useRef } from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import shivaamiLogo from '@/assets/shivaami-logo.png';

// Social media icons as inline SVGs for proper branding
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socialLinks = [
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/shivaami/', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/shivaamicloudservices/', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/shivaamicloudservices', label: 'Facebook' },
  { icon: XIcon, href: 'https://twitter.com/shivaami', label: 'X' },
  { icon: YouTubeIcon, href: 'https://www.youtube.com/channel/UC_OaXTk92jPn_u1ewMA5Frg', label: 'YouTube' },
];

const footerLinks = {
  smarter: {
    title: 'Smarter',
    links: [
      { label: 'Gemini Enterprise', href: '/gemini-enterprise' },
      { label: 'Google AI Ultra', href: '/google-ai-ultra' },
      { label: 'Glean', href: '/glean' },
      { label: 'Google Workspace', href: '/google-workspace' },
      { label: 'Microsoft 365', href: '/microsoft-365' },
      { label: 'Zoho Mail', href: '/zoho-mail' },
    ],
  },
  safer: {
    title: 'Safer Security',
    links: [
      { label: 'JumpCloud', href: '/jumpcloud' },
      { label: 'Scalefusion', href: '/scalefusion' },
      { label: 'Jamf', href: '/jamf' },
      { label: 'Okta', href: '/okta' },
      { label: 'Palo Alto', href: '/paloalto' },
      { label: 'Chrome Enterprise', href: '/chrome-enterprise' },
      { label: 'Cloud Capabilities', href: '/cloud-capabilities' },
    ],
  },
  smoother: {
    title: 'Smoother Services',
    links: [
      { label: 'SwiftMove', href: '/swiftmove' },
      { label: 'Pulse360', href: '/pulse360' },
      { label: 'ChangePath', href: '/changepath' },
      { label: 'SecureSight', href: '/securesight' },
      { label: 'Apps Script', href: '/apps-script' },
    ],
  },
  industries: {
    title: 'Industries',
    links: [
      { label: 'Advertising & Media', href: '/advertising-media' },
      { label: 'Retail', href: '/retail' },
      { label: 'Software & Technology', href: '/software-technology' },
      { label: 'Financial Services', href: '/financial-services' },
      { label: 'Healthcare & Pharma', href: '/healthcare-pharma' },
      { label: 'Hospitality', href: '/hospitality' },
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Transportation & Logistics', href: '/transportation-logistics' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: 'https://www.shivaami.com/blog/', external: true },
      { label: 'Webinar', href: '/on-demand-webinars' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
  company: {
    title: 'About Us',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Careers', href: '/careers' },
    ],
  },
};

export default function Footer() {
  const ref = useRef(null);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-6 xl:gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <img src={shivaamiLogo} alt="Shivaami" className="h-10 w-auto" />
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
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
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
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
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
