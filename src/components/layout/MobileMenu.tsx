import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
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
        titleHref: '/smarter-solutions',
        items: [
          { 
            name: 'AI Solutions',
            href: '/smarter-solutions?category=ai-solutions',
            subItems: [
              { label: 'Gemini Enterprise', href: '/gemini-enterprise' },
              { label: 'Google AI Ultra', href: '/google-ai-ultra' },
              { label: 'Glean', href: '/glean' },
            ]
          },
          { 
            name: 'Email & Collaboration',
            href: '/smarter-solutions?category=email-collaboration',
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
        titleHref: '/safer-security',
        items: [
          { 
            name: 'Identity & Device',
            href: '/safer-security?category=identity-device',
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
            href: '/safer-security?category=endpoint-management',
            subItems: [
              { label: 'SuperOps', href: '/superops' },
              { label: 'Atera', href: '/atera' },
            ]
          },
          { 
            name: 'Cloud Infrastructure',
            href: '/safer-security?category=cloud-infrastructure',
            subItems: [
              { label: 'Google Cloud Platform', href: '/google-cloud-platform' },
              { label: 'AWS', href: '/aws' },
              { label: 'Microsoft Azure', href: '/azure' },
              { label: 'JioCloud', href: '/jiocloud' },
            ]
          },
          { 
            name: 'Cyber Security',
            href: '/safer-security?category=cyber-security',
            subItems: [
              { label: 'Palo Alto', href: '/paloalto' },
              { label: 'Wiz', href: '/wiz' },
              { label: 'Check Point', href: '/checkpoint' },
              { label: 'Tenable', href: '/tenable' },
            ]
          },
          { 
            name: 'Cloud Security',
            href: '/safer-security?category=cloud-security',
            subItems: [
              { label: 'SSL Certificates', href: '/ssl-certificates' },
              { label: 'GoSimulator', href: '/gosimulator' },
              { label: 'GoDmarc', href: '/godmarc' },
              { label: 'VMC', href: '/vmc' },
              { label: 'Book a Domain', href: '/book-domain' },
            ]
          },
          { 
            name: 'Chrome Solutions',
            href: '/safer-security?category=chrome-solutions',
            subItems: [
              { label: 'Chromebook', href: '/chromebook' },
              { label: 'Chromebox', href: '/chromebox' },
              { label: 'ChromeOS Flex', href: '/chromeos-flex' },
              { label: 'Chrome Enterprise', href: '/chrome-enterprise' },
              { label: 'Google Meet Hardware', href: '/google-meet-hardware' },
            ]
          },
          { label: 'Cloud Capabilities', href: '/cloud-capabilities' },
        ],
      },
      {
        title: 'Smoother Services',
        titleHref: '/smoother-services',
        items: [
          { 
            name: 'Migration Services',
            href: '/smoother-services?category=migration-services',
            subItems: [
              { label: 'SwiftMove', href: '/swiftmove' },
            ]
          },
          { 
            name: 'Managed Services',
            href: '/smoother-services?category=managed-services',
            subItems: [
              { label: 'Pulse360', href: '/pulse360' },
              { label: 'Support Packages', href: '/support-packages' },
            ]
          },
          { 
            name: 'Change Management',
            href: '/smoother-services?category=change-management',
            subItems: [
              { label: 'ChangePath', href: '/changepath' },
            ]
          },
          { 
            name: 'Security Services',
            href: '/smoother-services?category=security-services',
            subItems: [
              { label: 'SecureSight', href: '/securesight' },
            ]
          },
          { 
            name: 'Staffing Services',
            href: '/smoother-services?category=staffing-services',
            subItems: [
              { label: 'TalentEdge', href: '/talentedge' },
            ]
          },
          { 
            name: 'Development Services',
            href: '/smoother-services?category=development-services',
            subItems: [
              { label: 'Apps Script', href: '/apps-script' },
            ]
          },
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
          { label: 'Webinar', href: '/webinar' },
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
  const navigate = useNavigate();
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

  const handleNavigation = (href: string) => {
    navigate(href);
    onClose();
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
                          {/* Section Title - with optional link */}
                          <div className="flex items-center justify-between">
                            {section.titleHref ? (
                              <button
                                onClick={() => handleNavigation(section.titleHref)}
                                className="flex-1 text-left py-2 text-sm text-primary font-semibold uppercase tracking-wide hover:text-accent transition-colors"
                              >
                                {section.title}
                              </button>
                            ) : (
                              <span className="flex-1 py-2 text-sm text-primary font-semibold uppercase tracking-wide">
                                {section.title}
                              </span>
                            )}
                            <button
                              onClick={() => toggleSection(section.title)}
                              className="p-2"
                            >
                              <ChevronDown 
                                className={`w-4 h-4 text-primary transition-transform duration-200 ${
                                  expandedSection === section.title ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                          </div>
                          
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
                                        <div className="flex items-center justify-between">
                                          {/* Category name as link */}
                                          <button
                                            onClick={() => item.href && handleNavigation(item.href)}
                                            className="flex-1 text-left py-2 text-sm text-foreground hover:text-primary transition-colors"
                                          >
                                            {item.name}
                                          </button>
                                          <button
                                            onClick={() => toggleSubItem(item.name)}
                                            className="p-2"
                                          >
                                            <ChevronRight 
                                              className={`w-4 h-4 transition-transform duration-200 ${
                                                expandedSubItem === item.name ? 'rotate-90' : ''
                                              }`} 
                                            />
                                          </button>
                                        </div>
                                        
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
