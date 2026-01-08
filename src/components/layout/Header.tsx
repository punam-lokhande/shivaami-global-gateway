import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, LogIn, HelpCircle, ChevronDown, Menu, X } from 'lucide-react';
import { useRegion } from '@/contexts/RegionContext';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import SearchDialog from './SearchDialog';
import shivaamiLogo from '@/assets/shivaami-logo.png';

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
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar - Deep Blue Background */}
      <div className="bg-primary border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-10 gap-4 text-sm">
            <button 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Search</span>
            </button>
            
            <a 
              href={`tel:${content.phone}`} 
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{content.phone}</span>
            </a>
            
            <button className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors">
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
            
            <button className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Support</span>
            </button>
            
            {/* Region Toggle - More readable */}
            <div className="flex items-center gap-0.5 ml-4 bg-background/20 rounded-full p-0.5 border border-white/20">
              <button
                onClick={() => setRegion('india')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  region === 'india'
                    ? 'bg-accent text-white shadow-md'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                India
              </button>
              <button
                onClick={() => setRegion('usa')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  region === 'usa'
                    ? 'bg-accent text-white shadow-md'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                USA
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Main Navigation - White Background */}
      <nav className="bg-background border-b border-border/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                src={shivaamiLogo} 
                alt="Shivaami" 
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.hasMenu && setActiveMenu(item.key)}
                >
                  <a
                    href={`#${item.key}`}
                    onClick={(e) => {
                      // Allow click even when dropdown is showing
                      console.log('Navigating to:', item.key);
                    }}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      activeMenu === item.key 
                        ? 'text-primary' 
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {item.hasMenu && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMenu === item.key ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </a>
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
            <div 
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <MegaMenu 
                activeKey={activeMenu} 
                onClose={() => setActiveMenu(null)}
              />
            </div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
