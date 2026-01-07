import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Mail, Shield, Server, Cloud, Lock, Monitor, 
  Zap, Users, FileCheck, Headphones, Code,
  Megaphone, Leaf, ShoppingCart, Cpu, Banknote, Heart, Hotel, Factory, Truck,
  BookOpen, FileText, Newspaper, Video,
  Award, Users2, Trophy, Briefcase,
  ChevronRight, Laptop, Box, Smartphone, Layers, Settings
} from 'lucide-react';

interface MegaMenuProps {
  activeKey: string;
  onClose: () => void;
}

interface SubMenuItem {
  icon: React.ElementType;
  label: string;
  desc: string;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  desc: string;
  subItems?: SubMenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuContent {
  title: string;
  sections: MenuSection[];
}

const menuContent: Record<string, MenuContent> = {
  solutions: {
    title: 'Solutions & Services',
    sections: [
      {
        title: 'Smarter Solutions',
        items: [
          { icon: Brain, label: 'AI Solutions', desc: 'Gemini Enterprise, Google AI Ultra, Glean' },
          { icon: Mail, label: 'Email & Collaboration', desc: 'Google Workspace, Microsoft 365, Zoho' },
        ],
      },
      {
        title: 'Safer Solutions',
        items: [
          { icon: Shield, label: 'Identity & Device', desc: 'JumpCloud, Viami, Scalefusion, Jamf, Okta' },
          { icon: Server, label: 'Endpoint Management', desc: 'SuperOps, Atera' },
          { icon: Cloud, label: 'Cloud Infrastructure', desc: 'GCP, AWS, Azure, JioCloud' },
          { icon: Lock, label: 'Cyber Security', desc: 'Palo Alto, Wiz, Check Point, Tenable' },
        ],
      },
      {
        title: 'Cloud Capabilities',
        items: [
          { 
            icon: Laptop, 
            label: 'Chrome Enterprise', 
            desc: 'Complete Chrome solutions',
            subItems: [
              { icon: Laptop, label: 'Chromebook', desc: 'Enterprise-grade laptops' },
              { icon: Box, label: 'Chromebox', desc: 'Desktop computing solutions' },
              { icon: Layers, label: 'ChromeOS Flex', desc: 'Transform existing devices' },
              { icon: Settings, label: 'Chrome Browser Cloud', desc: 'Browser management' },
              { icon: Shield, label: 'Chrome Enterprise Premium', desc: 'Advanced security features' },
            ]
          },
          { 
            icon: Video, 
            label: 'Google Meet Hardware', 
            desc: 'Conference room solutions',
            subItems: [
              { icon: Monitor, label: 'Meet Series One', desc: 'All-in-one meeting rooms' },
              { icon: Video, label: 'Meet Board', desc: 'Interactive whiteboard' },
              { icon: Smartphone, label: 'Meet Desk', desc: 'Personal video conferencing' },
              { icon: Cpu, label: 'Meet Compute System', desc: 'Room controller hardware' },
            ]
          },
        ],
      },
      {
        title: 'Smoother Solutions',
        items: [
          { icon: Zap, label: 'SwiftMove', desc: 'Seamless cloud migration' },
          { icon: Users, label: 'Pulse360', desc: 'Employee engagement platform' },
          { icon: FileCheck, label: 'ChangePath', desc: 'Change management' },
          { icon: Shield, label: 'SecureSight', desc: 'Security assessment' },
          { icon: Headphones, label: 'Support Packages', desc: '24/7 enterprise support' },
          { icon: Code, label: 'AppScript', desc: 'Custom automation' },
        ],
      },
    ],
  },
  industries: {
    title: 'Industries',
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
    sections: [
      {
        title: 'Learn & Explore',
        items: [
          { icon: BookOpen, label: 'Case Studies', desc: 'Customer success stories' },
          { icon: FileText, label: 'Blogs', desc: 'Insights and best practices' },
          { icon: Newspaper, label: 'Newsletter', desc: 'Monthly cloud updates' },
          { icon: Video, label: 'On-Demand Webinars', desc: 'Expert sessions' },
        ],
      },
    ],
  },
  about: {
    title: 'About Us',
    sections: [
      {
        title: 'Our Company',
        items: [
          { icon: Award, label: 'Certifications', desc: 'ISO, SOC, and partner badges' },
          { icon: Users2, label: 'Leadership', desc: 'Meet our executive team' },
          { icon: Trophy, label: 'Achievements', desc: 'Awards and recognition' },
          { icon: Briefcase, label: 'Careers', desc: 'Join our growing team' },
        ],
      },
    ],
  },
};

export default function MegaMenu({ activeKey, onClose }: MegaMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menu = menuContent[activeKey];
  
  if (!menu) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-elevated z-50"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menu.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-display font-semibold text-sm text-primary mb-4 uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const itemKey = `${section.title}-${item.label}`;
                  const isHovered = hoveredItem === itemKey;
                  
                  return (
                    <li 
                      key={itemIdx} 
                      className="relative"
                      onMouseEnter={() => setHoveredItem(itemKey)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle click navigation here
                          console.log('Navigating to:', item.label);
                        }}
                        className="group flex items-start gap-3 p-2.5 -m-1 rounded-lg hover:bg-accent transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group-hover:scale-105">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                            {hasSubItems && (
                              <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isHovered ? 'translate-x-0.5 text-primary' : ''}`} />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
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
                            className="absolute left-full top-0 ml-2 w-64 bg-card rounded-xl border border-border shadow-elevated p-3 z-50"
                            onMouseEnter={() => setHoveredItem(itemKey)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-3 px-2">
                              {item.label}
                            </div>
                            <ul className="space-y-1">
                              {item.subItems?.map((subItem, subIdx) => {
                                const SubIcon = subItem.icon;
                                return (
                                  <li key={subIdx}>
                                    <a
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        console.log('Navigating to:', subItem.label);
                                      }}
                                      className="group flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-all duration-200"
                                    >
                                      <div className="w-8 h-8 rounded-md bg-secondary/70 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                                        <SubIcon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                          {subItem.label}
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                          {subItem.desc}
                                        </p>
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
    </motion.div>
  );
}
