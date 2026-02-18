import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Briefcase, Users, Building2, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'solution' | 'service' | 'industry' | 'resource';
  link: string;
}

// Sample searchable content - in a real app, this would come from a CMS or API
const searchableContent: SearchResult[] = [
  // Solutions
  { id: '1', title: 'Google Workspace', description: 'Collaborate smarter with Gmail, Docs, Drive, Calendar, and Meet', category: 'solution', link: '/google-workspace' },
  { id: '2', title: 'Chrome Enterprise', description: 'Secure, manage, and get more from your Chrome browser fleet', category: 'solution', link: '/chrome-enterprise' },
  { id: '3', title: 'Google Cloud Platform', description: 'Build, deploy, and scale applications on Google infrastructure', category: 'solution', link: '/google-cloud-platform' },
  { id: '4', title: 'AppSheet', description: 'Build custom apps without coding using AppSheet no-code platform', category: 'solution', link: '/appsheet' },
  { id: '5', title: 'Gemini AI', description: 'Transform work with Google AI-powered Gemini for Workspace', category: 'solution', link: '/gemini-enterprise' },
  { id: '6', title: 'Microsoft 365', description: 'Productivity suite with Word, Excel, PowerPoint, and Teams', category: 'solution', link: '/microsoft-365' },
  { id: '7', title: 'Zoho Mail', description: 'Secure business email hosting with Zoho Mail', category: 'solution', link: '/zoho-mail' },
  { id: '8', title: 'Glean', description: 'AI-powered enterprise search and knowledge management', category: 'solution', link: '/glean' },
  { id: '9', title: 'Google AI Ultra', description: 'Advanced AI capabilities for enterprise', category: 'solution', link: '/google-ai-ultra' },
  { id: '10', title: 'JumpCloud', description: 'Cloud directory and identity management platform', category: 'solution', link: '/jumpcloud' },
  { id: '11', title: 'Okta', description: 'Identity and access management solution', category: 'solution', link: '/okta' },
  { id: '12', title: 'Palo Alto', description: 'Next-generation cybersecurity platform', category: 'solution', link: '/paloalto' },
  { id: '13', title: 'Wiz', description: 'Cloud security platform', category: 'solution', link: '/wiz' },
  { id: '14', title: 'AWS', description: 'Amazon Web Services cloud computing platform', category: 'solution', link: '/aws' },
  { id: '15', title: 'Azure', description: 'Microsoft Azure cloud services', category: 'solution', link: '/azure' },
  { id: '16', title: 'Chromebook', description: 'Chrome OS powered laptops for business', category: 'solution', link: '/chromebook' },
  { id: '17', title: 'SSL Certificates', description: 'Secure your website with trusted SSL certificates', category: 'solution', link: '/ssl-certificates' },
  { id: '18', title: 'Book Domain', description: 'Register and manage your domain names', category: 'solution', link: '/book-domain' },
  { id: '19', title: 'Apps Script', description: 'Automate and extend Google Workspace', category: 'solution', link: '/apps-script' },

  // Services
  { id: '30', title: 'SwiftMove - Cloud Migration', description: 'Seamless migration to cloud with SwiftMove methodology', category: 'service', link: '/swiftmove' },
  { id: '31', title: 'ChangePath - Change Management', description: 'Drive user adoption with structured change management', category: 'service', link: '/changepath' },
  { id: '32', title: 'Pulse360 - Managed Services', description: 'Round-the-clock expert support for your cloud infrastructure', category: 'service', link: '/pulse360' },
  { id: '33', title: 'SecureSight - Security Assessment', description: 'Comprehensive security assessment and implementation', category: 'service', link: '/securesight' },
  { id: '34', title: 'TalentEdge - Training & Adoption', description: 'Drive user adoption with customized training programs', category: 'service', link: '/talentedge' },
  { id: '35', title: 'Support Packages', description: 'Flexible support packages tailored to your needs', category: 'service', link: '/support-packages' },
  { id: '36', title: 'Smarter Solutions', description: 'Intelligent cloud solutions for modern business', category: 'service', link: '/smarter-solutions' },
  { id: '37', title: 'Safer Security', description: 'Enterprise-grade security solutions', category: 'service', link: '/safer-security' },
  { id: '38', title: 'Smoother Services', description: 'Seamless IT services and support', category: 'service', link: '/smoother-services' },

  // Industries
  { id: '40', title: 'Healthcare & Pharma', description: 'Compliant cloud solutions for healthcare providers', category: 'industry', link: '/healthcare-pharma' },
  { id: '41', title: 'Financial Services', description: 'Secure, compliant solutions for banks and fintech', category: 'industry', link: '/financial-services' },
  { id: '42', title: 'Manufacturing', description: 'Industry 4.0 solutions for modern manufacturing', category: 'industry', link: '/manufacturing' },
  { id: '43', title: 'Retail', description: 'Omnichannel solutions for retail transformation', category: 'industry', link: '/retail' },
  { id: '44', title: 'Hospitality', description: 'Cloud solutions for hospitality industry', category: 'industry', link: '/hospitality' },
  { id: '45', title: 'Transportation & Logistics', description: 'Cloud solutions for logistics and transport', category: 'industry', link: '/transportation-logistics' },

  // Resources
  { id: '50', title: 'Case Studies', description: 'See how leading organizations transformed with our solutions', category: 'resource', link: '/case-studies' },
  { id: '51', title: 'On-Demand Webinars', description: 'On-demand and upcoming webinars and events', category: 'resource', link: '/on-demand-webinars' },
  { id: '52', title: 'About Us', description: 'Learn about Shivaami and our mission', category: 'resource', link: '/about-us' },
  { id: '53', title: 'Leadership', description: 'Meet the leadership team at Shivaami', category: 'resource', link: '/leadership' },
  { id: '54', title: 'Certifications', description: 'Our industry certifications and credentials', category: 'resource', link: '/certifications' },
  { id: '55', title: 'Contact Us', description: 'Get in touch with our team', category: 'resource', link: '/contact' },
  { id: '56', title: 'Google Workspace Pricing India', description: 'Google Workspace plans and pricing for India', category: 'resource', link: '/google-workspace-pricing-india' },
];

const categoryIcons = {
  solution: Briefcase,
  service: FileText,
  industry: Building2,
  resource: Users,
};

const categoryLabels = {
  solution: 'Solution',
  service: 'Service',
  industry: 'Industry',
  resource: 'Resource',
};

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return searchableContent.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 8);
  }, [query]);

  // Reset query when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          // This would need to be handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 bg-card border-border overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">Search</DialogTitle>
        
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search solutions, services, industries..."
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded-md hover:bg-muted transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-2">
          <AnimatePresence mode="wait">
            {query.trim() === '' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center text-muted-foreground"
              >
                <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Start typing to search...</p>
                <p className="text-sm mt-1 opacity-70">
                  Find solutions, services, industries, and resources
                </p>
              </motion.div>
            ) : results.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center text-muted-foreground"
              >
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-1 opacity-70">
                  Try different keywords
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-1"
              >
                {results.map((result, index) => {
                  const Icon = categoryIcons[result.category];
                  return (
                    <motion.div
                      key={result.id}
                      onClick={() => { navigate(result.link); onClose(); }}
                      style={{ cursor: 'pointer' }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">
                            {result.title}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {categoryLabels[result.category]}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
