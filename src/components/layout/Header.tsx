import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, LogIn, HelpCircle, ChevronDown, Menu, X } from 'lucide-react';
import { useRegion } from '@/contexts/RegionContext';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';

const navItems = [
  { label: 'Solutions & Services', hasMenu: true, key: 'solutions' },
  { label: 'Industries', hasMenu: true, key: 'industries' },
  { label: 'Resources', hasMenu: true, key: 'resources' },
  { label: 'About Us', hasMenu: true, key: 'about' },
];

export default function Header() {
  const { region, setRegion, content } = useRegion();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar */}
      <div className="section-navy">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-10 gap-4 text-sm">
            <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            
            <a 
              href={`tel:${content.phone}`} 
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{content.phone}</span>
            </a>
            
            <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
            
            <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Support</span>
            </button>
            
            {/* Region Toggle */}
            <div className="flex items-center gap-1 ml-4 bg-primary-foreground/10 rounded-full p-1">
              <button
                onClick={() => setRegion('india')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  region === 'india'
                    ? 'bg-primary-foreground text-navy'
                    : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                India
              </button>
              <button
                onClick={() => setRegion('usa')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  region === 'usa'
                    ? 'bg-primary-foreground text-navy'
                    : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                USA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">Shivaami</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                    {item.label}
                    {item.hasMenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                Let's Connect
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <MegaMenu 
              activeKey={activeMenu} 
              onClose={() => setActiveMenu(null)}
            />
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="block py-3 text-foreground/80 hover:text-foreground font-medium border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Let's Connect
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
