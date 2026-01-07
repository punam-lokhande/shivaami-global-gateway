import { motion } from 'framer-motion';
import { 
  Brain, Mail, Shield, Server, Cloud, Lock, Monitor, 
  Zap, Users, FileCheck, Headphones, Code,
  Megaphone, Leaf, ShoppingCart, Cpu, Banknote, Heart, Hotel, Factory, Truck,
  BookOpen, FileText, Newspaper, Video,
  Award, Users2, Trophy, Briefcase
} from 'lucide-react';

interface MegaMenuProps {
  activeKey: string;
  onClose: () => void;
}

const menuContent = {
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
          { icon: Monitor, label: 'Chrome Enterprise', desc: 'Chromebook, Chromebox, ChromeOS Flex' },
          { icon: Video, label: 'Meet Hardware', desc: 'Conference room solutions' },
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
  const menu = menuContent[activeKey as keyof typeof menuContent];
  
  if (!menu) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-elevated"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menu.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-display font-semibold text-sm text-primary mb-4 uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <li key={itemIdx}>
                      <a
                        href="#"
                        className="group flex items-start gap-3 p-2 -m-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </a>
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
