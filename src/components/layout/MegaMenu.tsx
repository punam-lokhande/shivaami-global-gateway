import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Mail, Shield, Server, Cloud, Lock, Monitor, 
  Zap, Users, FileCheck, Headphones, Code,
  Megaphone, Leaf, ShoppingCart, Cpu, Banknote, Heart, Hotel, Factory, Truck,
  BookOpen, FileText, Newspaper, Video,
  Award, Users2, Trophy, Briefcase,
  ChevronRight, Laptop, Box, Smartphone, Layers, Settings, ArrowRight
} from 'lucide-react';

type AnchorRect = {
  left: number;
  width: number;
  bottom: number;
};

interface MegaMenuProps {
  activeKey: string;
  anchorRect?: AnchorRect | null;
  onClose: () => void;
}

interface SubMenuItem {
  icon: React.ElementType;
  label: string;
  desc: string;
  href?: string;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  desc: string;
  subItems?: SubMenuItem[];
  isPageLink?: boolean;
  href?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuContent {
  title: string;
  sections: MenuSection[];
  image?: string;
  imageAlt?: string;
  cta?: { label: string; href: string };
}

const menuContent: Record<string, MenuContent> = {
  solutions: {
    title: 'Solutions & Services',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    imageAlt: 'Modern office collaboration',
    cta: { label: 'View All Solutions', href: '/solutions' },
    sections: [
      {
        title: 'Smarter Solutions',
        items: [
          { 
            icon: Brain, 
            label: 'AI Solutions', 
            desc: 'Enterprise AI & automation tools',
            subItems: [
              { icon: Brain, label: 'Gemini Enterprise', desc: 'AI-powered productivity', href: '/gemini-enterprise' },
              { icon: Cpu, label: 'Google AI Ultra', desc: 'Advanced AI capabilities', href: '/google-ai-ultra' },
              { icon: Zap, label: 'Glean', desc: 'Enterprise search & knowledge', href: '/glean' },
            ]
          },
          { 
            icon: Mail, 
            label: 'Email & Collaboration', 
            desc: 'Communication & productivity suites',
            subItems: [
              { icon: Mail, label: 'Google Workspace', desc: 'Gmail, Drive, Docs & more', href: '/google-workspace' },
              { icon: Monitor, label: 'Microsoft 365', desc: 'Office apps & Teams', href: '/microsoft-365' },
              { icon: Mail, label: 'Zoho Mail', desc: 'Professional email solution', href: '/zoho-mail' },
            ]
          },
        ],
      },
      {
        title: 'Safer Solutions',
        items: [
          { 
            icon: Shield, 
            label: 'Identity & Device', 
            desc: 'Identity & device management',
            subItems: [
              { icon: Shield, label: 'JumpCloud', desc: 'Directory platform', href: '/jumpcloud' },
              { icon: Users, label: 'Viami', desc: 'Digital workplace platform', href: '/viami' },
              { icon: Smartphone, label: 'Scalefusion', desc: 'Device management', href: '/scalefusion' },
              { icon: Laptop, label: 'Jamf', desc: 'Apple device management', href: '/jamf' },
              { icon: Lock, label: 'Okta', desc: 'Identity provider', href: '/okta' },
              { icon: Settings, label: 'miniOrange', desc: 'SSO & MFA solutions', href: '/miniorange' },
            ]
          },
          { 
            icon: Server, 
            label: 'Endpoint Management', 
            desc: 'Manage all endpoints',
            subItems: [
              { icon: Server, label: 'SuperOps', desc: 'RMM & PSA platform', href: '/superops' },
              { icon: Monitor, label: 'Atera', desc: 'IT management platform', href: '/atera' },
            ]
          },
          { 
            icon: Cloud, 
            label: 'Cloud Infrastructure', 
            desc: 'Enterprise cloud platforms',
            subItems: [
              { icon: Cloud, label: 'Google Cloud Platform', desc: 'GCP services' },
              { icon: Server, label: 'AWS', desc: 'Amazon Web Services', href: '/aws' },
              { icon: Cloud, label: 'Microsoft Azure', desc: 'Azure cloud services', href: '/azure' },
              { icon: Cloud, label: 'JioCloud', desc: 'Jio cloud infrastructure', href: '/jiocloud' },
            ]
          },
          { 
            icon: Lock, 
            label: 'Cyber Security', 
            desc: 'Enterprise security solutions',
            subItems: [
              { icon: Shield, label: 'Palo Alto', desc: 'Network security', href: '/paloalto' },
              { icon: Lock, label: 'Wiz', desc: 'Cloud security platform', href: '/wiz' },
              { icon: Shield, label: 'Check Point', desc: 'Threat prevention', href: '/checkpoint' },
              { icon: Lock, label: 'Tenable', desc: 'Vulnerability management', href: '/tenable' },
            ]
          },
          { 
            icon: Lock, 
            label: 'Cloud Security', 
            desc: 'Secure your cloud assets',
            subItems: [
              { icon: Shield, label: 'SSL Certificates', desc: 'Secure connections', href: '/ssl-certificates' },
              { icon: Lock, label: 'GoSimulator', desc: 'Security simulation', href: '/gosimulator' },
              { icon: Mail, label: 'GoDmarc', desc: 'Email authentication', href: '/godmarc' },
              { icon: Shield, label: 'VMC', desc: 'Verified Mark Certificates', href: '/vmc' },
            ]
          },
          { 
            icon: Laptop, 
            label: 'Chrome Solutions', 
            desc: 'Complete Chrome solutions',
            subItems: [
              { icon: Laptop, label: 'Chromebook', desc: 'Enterprise-grade laptops', href: '/chromebook' },
              { icon: Box, label: 'Chromebox', desc: 'Desktop computing solutions', href: '/chromebox' },
              { icon: Laptop, label: 'Chrome Enterprise', desc: 'Enterprise Chrome management', href: '/chrome-enterprise' },
              { icon: Video, label: 'Google Meet Hardware Kit', desc: 'Conference room solutions' },
              { icon: Layers, label: 'ChromeOS Flex', desc: 'Transform existing devices', href: '/chromeos-flex' },
            ]
          },
          { 
            icon: Layers, 
            label: 'Cloud Capabilities', 
            desc: 'Explore all cloud solutions',
            isPageLink: true,
          },
        ],
      },
      {
        title: 'Smoother Solutions',
        items: [
          { icon: Zap, label: 'SwiftMove', desc: 'Seamless cloud migration', href: '/swiftmove' },
          { icon: Users, label: 'Pulse360', desc: 'Managed IT services', href: '/pulse360' },
          { icon: FileCheck, label: 'ChangePath', desc: 'Change management', href: '/changepath' },
          { icon: Shield, label: 'SecureSight', desc: 'Security assessment', href: '/securesight' },
          { icon: Headphones, label: 'Support Packages', desc: '24/7 enterprise support' },
          { icon: Code, label: 'AppScript', desc: 'Custom automation' },
        ],
      },
    ],
  },
  industries: {
    title: 'Industries',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    imageAlt: 'Modern business buildings',
    cta: { label: 'Explore All Industries', href: '/industries' },
    sections: [
      {
        title: 'Industries We Serve',
        items: [
          { icon: Megaphone, label: 'Advertising & Media', desc: 'Digital transformation solutions' },
          { icon: Leaf, label: 'Agritech', desc: 'Smart farming technology' },
          { icon: ShoppingCart, label: 'Retail', desc: 'Omnichannel commerce' },
          { icon: Cpu, label: 'Software & Technology', desc: 'Developer-first solutions' },
          { icon: Banknote, label: 'Financial Services', desc: 'Secure fintech infrastructure' },
          { icon: Heart, label: 'Healthcare', desc: 'HIPAA-compliant solutions' },
          { icon: Hotel, label: 'Hospitality', desc: 'Guest experience platforms' },
          { icon: Factory, label: 'Manufacturing', desc: 'Industry 4.0 enablement' },
          { icon: Truck, label: 'Transportation & Logistics', desc: 'Supply chain optimization' },
        ],
      },
    ],
  },
  resources: {
    title: 'Resources',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    imageAlt: 'Team collaboration and learning',
    cta: { label: 'Browse Resources', href: '/resources' },
    sections: [
      {
        title: 'Learn & Explore',
        items: [
          { icon: BookOpen, label: 'Case Studies', desc: 'Customer success stories', isPageLink: true, href: '/case-studies' },
          { icon: FileText, label: 'Blogs', desc: 'Insights and best practices' },
          { icon: Newspaper, label: 'Newsletter', desc: 'Monthly cloud updates' },
          { icon: Video, label: 'On-Demand Webinars', desc: 'Expert sessions' },
        ],
      },
    ],
  },
  about: {
    title: 'About Us',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    imageAlt: 'Shivaami team',
    cta: { label: 'Learn About Us', href: '/about-us' },
    sections: [
      {
        title: 'Our Company',
        items: [
          { icon: Award, label: 'Learn About Us', desc: 'Our story and mission', isPageLink: true, href: '/about-us' },
          { icon: Users2, label: 'Leadership', desc: 'Meet our executive team', isPageLink: true, href: '/leadership' },
          { icon: Award, label: 'Certifications', desc: 'ISO, SOC, and partner badges' },
          { icon: Trophy, label: 'Achievements', desc: 'Awards and recognition' },
          { icon: Briefcase, label: 'Careers', desc: 'Join our growing team', isPageLink: true, href: '/careers' },
        ],
      },
    ],
  },
};

export default function MegaMenu({ activeKey, anchorRect, onClose }: MegaMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1440));
  const navigate = useNavigate();
  const menu = menuContent[activeKey];

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (!menu) return null;

  const handleNavigation = (href?: string) => {
    if (href) {
      navigate(href);
      onClose();
    }
  };

  // Calculate position to align menu with the navigation item
  const menuWidth = activeKey === 'solutions' ? 1100 : 700;
  const containerPadding = 16;
  
  let leftPosition = 0;
  if (anchorRect) {
    // Position the menu so it starts from the left edge of the nav item
    leftPosition = anchorRect.left;
    
    // Make sure menu doesn't overflow right edge
    if (leftPosition + menuWidth > viewportWidth - containerPadding) {
      leftPosition = viewportWidth - menuWidth - containerPadding;
    }
    
    // Make sure menu doesn't overflow left edge
    if (leftPosition < containerPadding) {
      leftPosition = containerPadding;
    }
  }
  
  const topPx = Math.max((anchorRect?.bottom ?? 80) - 10, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ left: leftPosition, top: topPx, maxWidth: menuWidth }}
      className="fixed bg-card border border-border rounded-2xl shadow-elevated z-[90] overflow-visible"
      onMouseLeave={onClose}
    >
      <div className="flex">
        {/* Menu Content */}
        <div className="flex-1 px-6 py-6">
          <div className={`grid gap-6 ${menu.sections.length > 2 ? 'grid-cols-3' : menu.sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {menu.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-display font-semibold text-xs text-primary mb-3 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const itemKey = `${section.title}-${item.label}`;
                    const isHovered = hoveredItem === itemKey;
                    
                    // Handle page link items (like Cloud Capabilities)
                    if (item.isPageLink) {
                      return (
                        <li key={itemIdx}>
                          <a
                            href={item.href || "/cloud-capabilities"}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.href || "/cloud-capabilities");
                            }}
                            className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
                          >
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-all duration-200">
                              <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </span>
                            </div>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li 
                        key={itemIdx} 
                        className="relative"
                        onMouseEnter={() => setHoveredItem(itemKey)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <a
                          href={item.href || "#"}
                          onClick={(e) => {
                            e.preventDefault();
                            if (item.href) {
                              handleNavigation(item.href);
                            }
                          }}
                          className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
                        >
                          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-all duration-200">
                            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </span>
                              {hasSubItems && (
                                <ChevronRight className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${isHovered ? 'translate-x-0.5 text-primary' : ''}`} />
                              )}
                            </div>
                          </div>
                        </a>
                        
                        {/* Nested Submenu */}
                        <AnimatePresence>
                          {hasSubItems && isHovered && (
                            <motion.div
                              initial={{ opacity: 0, x: -10, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: -10, scale: 0.95 }}
                              transition={{ duration: 0.15, ease: 'easeOut' }}
                              className="absolute left-full top-0 ml-2 w-56 bg-card rounded-xl border border-border shadow-2xl p-2 z-[100]"
                              onMouseEnter={() => setHoveredItem(itemKey)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 px-2">
                                {item.label}
                              </div>
                              <ul className="space-y-0.5">
                                {item.subItems?.map((subItem, subIdx) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <li key={subIdx}>
                                      <a
                                        href={subItem.href || "#"}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          if (subItem.href) {
                                            handleNavigation(subItem.href);
                                          }
                                        }}
                                        className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
                                      >
                                        <div className="w-7 h-7 rounded-md bg-secondary/70 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-all duration-200">
                                          <SubIcon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                            {subItem.label}
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image Panel */}
        {menu.image && (
          <div className="w-64 bg-gradient-to-br from-primary/5 to-accent/5 p-4 flex flex-col justify-between border-l border-border/50">
            <div>
              <div className="rounded-xl overflow-hidden mb-4 shadow-soft">
                <img 
                  src={menu.image} 
                  alt={menu.imageAlt || menu.title}
                  className="w-full h-36 object-cover"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">
                {menu.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover how Shivaami can transform your business with enterprise-grade solutions.
              </p>
            </div>
            {menu.cta && (
              <a
                href={menu.cta.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(menu.cta?.href);
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors mt-4 group"
              >
                {menu.cta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
