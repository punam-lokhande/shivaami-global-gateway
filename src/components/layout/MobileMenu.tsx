import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            subItems: ['Gemini Enterprise', 'Google AI Ultra', 'Glean'] 
          },
          { 
            name: 'Email & Collaboration', 
            subItems: ['Google Workspace', 'Microsoft 365', 'Zoho Mail'] 
          },
        ],
      },
      {
        title: 'Safer Solutions',
        items: [
          { 
            name: 'Identity & Device', 
            subItems: ['JumpCloud', 'Viami', 'Scalefusion', 'Jamf', 'Okta', 'miniOrange'] 
          },
          { 
            name: 'Endpoint Management', 
            subItems: ['SuperOps', 'Atera'] 
          },
          { 
            name: 'Cloud Infrastructure', 
            subItems: ['Google Cloud Platform', 'AWS', 'Microsoft Azure', 'JioCloud'] 
          },
          { 
            name: 'Cyber Security', 
            subItems: ['Palo Alto', 'Wiz', 'Check Point', 'Tenable'] 
          },
          { 
            name: 'Cloud Security', 
            subItems: ['SSL Certificates', 'GoSimulator', 'GoDmarc', 'VMC'] 
          },
          { 
            name: 'Chrome Enterprise', 
            subItems: ['Chromebook', 'Chromebox', 'ChromeOS Flex', 'Chrome Browser Cloud', 'Chrome Enterprise Premium'] 
          },
          { 
            name: 'Google Meet Hardware', 
            subItems: ['Meet Series One', 'Meet Board', 'Meet Desk', 'Meet Compute System'] 
          },
          { 
            name: 'Cloud Capabilities', 
            isPageLink: true 
          },
        ],
      },
      {
        title: 'Smoother Solutions',
        items: ['SwiftMove', 'Pulse360', 'ChangePath', 'SecureSight', 'Support Packages', 'AppScript'],
      },
    ],
  },
  {
    key: 'industries',
    label: 'Industries',
    sections: [
      {
        title: 'Industries We Serve',
        items: ['Advertising & Media', 'Agritech', 'Retail', 'Software & Technology', 'Financial Services', 'Healthcare', 'Hospitality', 'Manufacturing', 'Transportation & Logistics'],
      },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    sections: [
      {
        title: 'Learn & Explore',
        items: ['Case Studies', 'Blogs', 'Newsletter', 'On-Demand Webinars'],
      },
    ],
  },
  {
    key: 'about',
    label: 'About Us',
    sections: [
      {
        title: 'Our Company',
        items: ['Certifications', 'Leadership', 'Achievements', 'Careers'],
      },
    ],
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null);

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
            {mobileMenuData.map((menuItem) => (
              <div key={menuItem.key} className="border-b border-border/50 last:border-b-0">
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
                
                <AnimatePresence>
                  {expandedMenu === menuItem.key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pb-3"
                    >
                      {menuItem.sections.map((section) => (
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
                                {section.items.map((item, idx) => {
                                  if (typeof item === 'string') {
                                    return (
                                      <a
                                        key={idx}
                                        href="#"
                                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                      >
                                        {item}
                                      </a>
                                    );
                                  } else if (item.isPageLink) {
                                    return (
                                      <a
                                        key={idx}
                                        href="/cloud-capabilities"
                                        className="flex items-center gap-2 py-2 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                                      >
                                        <span>{item.name}</span>
                                        <ChevronRight className="w-4 h-4" />
                                      </a>
                                    );
                                  } else {
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
                                          {expandedSubItem === item.name && item.subItems && (
                                            <motion.div
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: 'auto' }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.15 }}
                                              className="ml-4 border-l-2 border-primary/20 pl-3"
                                            >
                                              {item.subItems.map((subItem, subIdx) => (
                                                <a
                                                  key={subIdx}
                                                  href="#"
                                                  className="block py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                  {subItem}
                                                </a>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    );
                                  }
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Button 
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={onClose}
            >
              Let's Connect
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
