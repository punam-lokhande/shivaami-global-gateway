import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useRegion } from '@/contexts/RegionContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileMenuData = [
  {
    key: 'solutions',
    label: 'Solutions & Services',
    sections: [
      {
        title: 'Smarter Solutions',
        items: [
          { 
            name: 'AI Solutions', 
            subItems: [
              { label: 'Gemini Enterprise', href: '/gemini-enterprise' },
              { label: 'Google AI Ultra', href: '/google-ai-ultra' },
              { label: 'Glean', href: '/glean' },
            ]
          },
          { 
            name: 'Email & Collaboration', 
            subItems: [
              { label: 'Google Workspace', href: '/google-workspace' },
              { label: 'Microsoft 365', href: '/microsoft-365' },
              { label: 'Zoho Mail', href: '/zoho-mail' },
            ]
          },
        ],
      },
      {
        title: 'Safer Security',
        items: [
          { 
            name: 'Identity & Device', 
            subItems: [
              { label: 'JumpCloud', href: '/jumpcloud' },
              { label: 'Viami', href: '/viami' },
              { label: 'Scalefusion', href: '/scalefusion' },
              { label: 'Jamf', href: '/jamf' },
              { label: 'Okta', href: '/okta' },
              { label: 'miniOrange', href: '/miniorange' },
            ]
          },
          { 
            name: 'Endpoint Management', 
            subItems: [
              { label: 'SuperOps', href: '/superops' },
              { label: 'Atera', href: '/atera' },
            ]
          },
          { 
            name: 'Cloud Infrastructure', 
            subItems: [
              { label: 'Google Cloud Platform', href: '/google-cloud-platform' },
              { label: 'AWS', href: '/aws' },
              { label: 'Microsoft Azure', href: '/azure' },
              { label: 'JioCloud', href: '/jiocloud' },
            ]
          },
          { 
            name: 'Cyber Security', 
            subItems: [
              { label: 'Palo Alto', href: '/paloalto' },
              { label: 'Wiz', href: '/wiz' },
              { label: 'Check Point', href: '/checkpoint' },
              { label: 'Tenable', href: '/tenable' },
            ]
          },
          { 
            name: 'Cloud Security', 
            subItems: [
              { label: 'SSL Certificates', href: '/ssl-certificates' },
              { label: 'GoSimulator', href: '/gosimulator' },
              { label: 'GoDmarc', href: '/godmarc' },
              { label: 'VMC', href: '/vmc' },
            ]
          },
          { 
            name: 'Chrome Solutions', 
            subItems: [
              { label: 'Chromebook', href: '/chromebook' },
              { label: 'Chromebox', href: '/chromebox' },
              { label: 'ChromeOS Flex', href: '/chromeos-flex' },
              { label: 'Chrome Enterprise', href: '/chrome-enterprise' },
            ]
          },
          { label: 'Cloud Capabilities', href: '/cloud-capabilities' },
        ],
      },
      {
        title: 'Smoother Services',
        items: [
          { label: 'SwiftMove', href: '/swiftmove' },
          { label: 'Pulse360', href: '/pulse360' },
          { label: 'ChangePath', href: '/changepath' },
          { label: 'SecureSight', href: '/securesight' },
          { label: 'TalentEdge', href: '/talentedge' },
          { label: 'Apps Script', href: '/apps-script' },
        ],
      },
    ],
  },
  {
    key: 'industries',
    label: 'Industries',
    sections: [
      {
        title: 'Industries We Serve',
        items: [
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
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    sections: [
      {
        title: 'Learn & Explore',
        items: [
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Blog', href: 'https://www.shivaami.com/blog/', external: true },
          { label: 'Webinar', href: '/on-demand-webinars' },
          { label: 'Newsletter', href: '/newsletter' },
        ],
      },
    ],
  },
  {
    key: 'about',
    label: 'About Us',
    sections: [
      {
        title: 'Our Company',
        items: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Leadership', href: '/leadership' },
          { label: 'Certifications', href: '/certifications' },
          { label: 'Achievements', href: '/achievements' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { content } = useRegion();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null);

  // Generate menu data with dynamic shop URL
  const mobileMenuWithShop = [
    ...mobileMenuData,
    {
      key: 'shop',
      label: 'Shop',
      href: content.shopUrl,
      external: true,
    },
  ];

  const toggleMenu = (key: string) => {
    setExpandedMenu(expandedMenu === key ? null : key);
    setExpandedSection(null);
    setExpandedSubItem(null);
  };

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
    setExpandedSubItem(null);
  };

  const toggleSubItem = (name: string) => {
    setExpandedSubItem(expandedSubItem === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden bg-card border-b border-border overflow-hidden"
        >
          <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
            {mobileMenuWithShop.map((menuItem: any) => (
              <div key={menuItem.key} className="border-b border-border/50 last:border-b-0">
                {menuItem.external ? (
                  <a
                    href={menuItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-3 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <span>{menuItem.label}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => toggleMenu(menuItem.key)}
                    className="flex items-center justify-between w-full py-3 text-foreground font-medium"
                  >
                    <span>{menuItem.label}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        expandedMenu === menuItem.key ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                )}
                {!menuItem.external && (
                <AnimatePresence>
                  {expandedMenu === menuItem.key && menuItem.sections && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pb-3"
                    >
                      {menuItem.sections.map((section: any) => (
                        <div key={section.title} className="ml-3 mt-2">
                          <button
                            onClick={() => toggleSection(section.title)}
                            className="flex items-center justify-between w-full py-2 text-sm text-primary font-semibold uppercase tracking-wide"
                          >
                            <span>{section.title}</span>
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                expandedSection === section.title ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {expandedSection === section.title && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                                className="ml-3"
                              >
                                {section.items.map((item: any, idx: number) => {
                                  // Simple link item (has label and href directly)
                                  if (item.label && item.href) {
                                    const isExternal = item.external || item.href.startsWith('http');
                                    return (
                                      <a
                                        key={idx}
                                        href={item.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                      >
                                        {item.label}
                                      </a>
                                    );
                                  }
                                  
                                  // Category with subItems
                                  if (item.name && item.subItems) {
                                    return (
                                      <div key={idx}>
                                        <button
                                          onClick={() => toggleSubItem(item.name)}
                                          className="flex items-center justify-between w-full py-2 text-sm text-foreground"
                                        >
                                          <span>{item.name}</span>
                                          <ChevronRight 
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                              expandedSubItem === item.name ? 'rotate-90' : ''
                                            }`} 
                                          />
                                        </button>
                                        
                                        <AnimatePresence>
                                          {expandedSubItem === item.name && (
                                            <motion.div
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: 'auto' }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.15 }}
                                              className="ml-4 border-l-2 border-primary/20 pl-3"
                                            >
                                              {item.subItems.map((subItem: any, subIdx: number) => {
                                                const isExternal = subItem.external || subItem.href?.startsWith('http');
                                                return (
                                                  <a
                                                    key={subIdx}
                                                    href={subItem.href || '#'}
                                                    target={isExternal ? "_blank" : undefined}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                    className="block py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                                                  >
                                                    {subItem.label}
                                                  </a>
                                                );
                                              })}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    );
                                  }
                                  
                                  return null;
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                )}
              </div>
            ))}
            
            <Link to="/contact" onClick={onClose}>
              <Button 
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Let's Connect
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
