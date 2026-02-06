import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Search, Phone, LogIn, HelpCircle, ChevronDown, Menu, X } from 'lucide-react';
import { useRegion } from '@/contexts/RegionContext';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import SearchDialog from './SearchDialog';
import shivaamiLogo from '@/assets/shivaami-logo.png';
import { Link } from 'react-router-dom';

type AnchorRect = {
  left: number;
  width: number;
  bottom: number;
};

const getNavItems = (shopUrl: string) => [
  { label: 'Solutions & Services', hasMenu: true, key: 'solutions' },
  { label: 'Industries', hasMenu: true, key: 'industries' },
  { label: 'Resources', hasMenu: true, key: 'resources' },
  { label: 'About Us', hasMenu: true, key: 'about' },
  { label: 'Shop', hasMenu: false, key: 'shop', href: shopUrl },
];

export default function Header() {
  const { region, setRegion, content } = useRegion();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuAnchor, setMenuAnchor] = useState<AnchorRect | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!activeMenu) setMenuAnchor(null);
  }, [activeMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar - Full Width */}
      <div className="bg-white border-b border-slate-300">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-end h-10 gap-4 text-sm">
            <button 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Search</span>
            </button>
            
            <a 
              href={`tel:${content.phone}`} 
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{content.phone}</span>
            </a>
            
            <a 
              href="https://customercare.shivaami.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </a>
            
            <Link to="/support" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Support</span>
            </Link>
            
            {/* Region Toggle */}
            <div className="flex items-center gap-0.5 ml-4 bg-secondary/10 rounded-full p-0.5 border border-primary/20">
              <button
                onClick={() => setRegion('india')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  region === 'india'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                India
              </button>
              <button
                onClick={() => setRegion('usa')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  region === 'usa'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-primary hover:bg-primary/10'
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

      {/* Main Navigation - Full Width */}
      <nav className="bg-background border-b border-border/50 backdrop-blur-xl">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <img 
                src={shivaamiLogo} 
                alt="Shivaami" 
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center gap-1">
              {getNavItems(content.shopUrl).map((item) => (
                <div
                  key={item.key}
                  ref={(el) => {
                    navItemRefs.current[item.key] = el;
                  }}
                  className="relative"
                  onMouseEnter={() => {
                    if (!item.hasMenu) return;
                    setActiveMenu(item.key);
                    const el = navItemRefs.current[item.key];
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    setMenuAnchor({ left: rect.left, width: rect.width, bottom: rect.bottom });
                  }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-foreground/80 hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={`#${item.key}`}
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
                  )}
                </div>
              ))}
              
              {/* CTA Button - Part of navigation */}
              <Link to="/contact">
                <Button className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 ml-4">
                  Let's Connect
                </Button>
              </Link>
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
              onMouseLeave={() => {
                setActiveMenu(null);
                setMenuAnchor(null);
              }}
            >
              <MegaMenu
                activeKey={activeMenu}
                anchorRect={menuAnchor}
                onClose={() => {
                  setActiveMenu(null);
                  setMenuAnchor(null);
                }}
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
