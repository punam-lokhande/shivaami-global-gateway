import { useState, useEffect, useMemo } from 'react';
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
  { id: '1', title: 'Google Workspace', description: 'Collaborate smarter with Gmail, Docs, Drive, Calendar, and Meet', category: 'solution', link: '#google-workspace' },
  { id: '2', title: 'Chrome Enterprise', description: 'Secure, manage, and get more from your Chrome browser fleet', category: 'solution', link: '#chrome-enterprise' },
  { id: '3', title: 'Identity & Access Management', description: 'Zero Trust security with Cloud Identity and context-aware access', category: 'solution', link: '#identity' },
  { id: '4', title: 'Google Cloud Platform', description: 'Build, deploy, and scale applications on Google infrastructure', category: 'solution', link: '#gcp' },
  { id: '5', title: 'AppSheet', description: 'Build custom apps without coding using AppSheet no-code platform', category: 'solution', link: '#appsheet' },
  { id: '6', title: 'Gemini AI', description: 'Transform work with Google AI-powered Gemini for Workspace', category: 'solution', link: '#gemini' },
  
  // Services
  { id: '7', title: 'Cloud Migration', description: 'Seamless migration to cloud with SwiftMove methodology', category: 'service', link: '#migration' },
  { id: '8', title: '24/7 Support', description: 'Round-the-clock expert support for your cloud infrastructure', category: 'service', link: '#support' },
  { id: '9', title: 'Security Consulting', description: 'Comprehensive security assessment and implementation', category: 'service', link: '#security' },
  { id: '10', title: 'Training & Adoption', description: 'Drive user adoption with customized training programs', category: 'service', link: '#training' },
  
  // Industries
  { id: '11', title: 'Education', description: 'Transform learning with Google for Education solutions', category: 'industry', link: '#education' },
  { id: '12', title: 'Healthcare', description: 'HIPAA-compliant cloud solutions for healthcare providers', category: 'industry', link: '#healthcare' },
  { id: '13', title: 'Financial Services', description: 'Secure, compliant solutions for banks and fintech', category: 'industry', link: '#finserv' },
  { id: '14', title: 'Manufacturing', description: 'Industry 4.0 solutions for modern manufacturing', category: 'industry', link: '#manufacturing' },
  { id: '15', title: 'Retail', description: 'Omnichannel solutions for retail transformation', category: 'industry', link: '#retail' },
  
  // Resources
  { id: '16', title: 'Case Studies', description: 'See how leading organizations transformed with our solutions', category: 'resource', link: '#case-studies' },
  { id: '17', title: 'Blog', description: 'Latest insights on cloud, AI, and digital transformation', category: 'resource', link: '#blog' },
  { id: '18', title: 'Webinars', description: 'On-demand and upcoming webinars and events', category: 'resource', link: '#webinars' },
  { id: '19', title: 'Documentation', description: 'Technical guides and implementation resources', category: 'resource', link: '#docs' },
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
      <DialogContent className="sm:max-w-2xl p-0 gap-0 bg-card border-border overflow-hidden">
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
          <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-border bg-muted px-2 text-xs text-muted-foreground">
            ESC
          </kbd>
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
                    <motion.a
                      key={result.id}
                      href={result.link}
                      onClick={onClose}
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
                    </motion.a>
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
