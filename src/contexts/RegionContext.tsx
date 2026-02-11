import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';


type Region = 'india' | 'usa';

const REGION_STORAGE_KEY = 'shivaami_selected_region';

interface RegionContent {
  phone: string;
  currency: string;
  currencySymbol: string;
  shopUrl: string;
  testimonials: Array<{
    name: string;
    company: string;
    role: string;
    quote: string;
    logo?: string;
  }>;
  offices: string;
  cta: {
    demo: string;
    contact: string;
  };
}

const regionData: Record<Region, RegionContent> = {
  india: {
    phone: '+91 775 784 1333',
    currency: 'INR',
    currencySymbol: '₹',
    shopUrl: 'https://www.shivaami.com/shop/',
    testimonials: [
      {
        name: 'Rajesh Kumar',
        company: 'Zepto',
        role: 'CTO',
        quote: 'Shivaami transformed our cloud infrastructure. Their expertise in Google Workspace helped us scale from 50 to 5000 employees seamlessly.',
      },
      {
        name: 'Priya Sharma',
        company: 'Hurix Digital',
        role: 'VP of IT',
        quote: 'The security solutions from Shivaami gave us peace of mind. Their 24/7 support is truly world-class.',
      },
      {
        name: 'Amit Patel',
        company: 'FinServ Corp',
        role: 'CISO',
        quote: 'SwiftMove made our migration to cloud effortless. Zero downtime, zero data loss. Exceptional service.',
      },
    ],
    offices: 'Mumbai, Delhi, Bangalore, Chennai',
    cta: {
      demo: 'Schedule Demo',
      contact: 'Contact Sales',
    },
  },
  usa: {
    phone: '+1 (408) 333-4844',
    currency: 'USD',
    currencySymbol: '$',
    shopUrl: 'https://gaganhub.shivaami.com/',
    testimonials: [
      {
        name: 'Eric Morhenn',
        company: 'LotusFlare',
        role: 'CCO',
        quote: 'Gemini for Google Workspace has been a valuable addition to Nomad\'s productivity tools, helping employees be more productive, communicate more effectively, and be more creative.',
      },
      {
        name: 'Sridhar Venkatesan',
        company: 'W3Global',
        role: 'CEO',
        quote: 'Our experience working with Shivaami has been exceptional. Their team provided seamless implementation, expert guidance, and continuous support throughout our transition to Google Workspace. They understood our business needs perfectly and delivered a solution that greatly improved our collaboration, security, and efficiency. We truly value their professionalism and partnership.',
      },
    ],
    offices: 'Iselin, New Jersey',
    cta: {
      demo: 'Book a Demo',
      contact: 'Get in Touch',
    },
  },
};

interface RegionContextType {
  region: Region;
  setRegion: (region: Region) => void;
  toggleRegion: () => void;
  content: RegionContent;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<Region>('india');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedRegion = localStorage.getItem(REGION_STORAGE_KEY) as Region | null;
    if (savedRegion && (savedRegion === 'india' || savedRegion === 'usa')) {
      setRegionState(savedRegion);
    }
    setIsInitialized(true);
  }, []);

  const setRegion = useCallback((newRegion: Region) => {
    setRegionState(newRegion);
    localStorage.setItem(REGION_STORAGE_KEY, newRegion);
  }, []);

  const toggleRegion = useCallback(() => {
    const newRegion = region === 'india' ? 'usa' : 'india';
    setRegion(newRegion);
  }, [region, setRegion]);

  const content = regionData[region];

  // Don't render children until we've checked localStorage
  if (!isInitialized) {
    return null;
  }

  return (
    <RegionContext.Provider value={{ region, setRegion, toggleRegion, content }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}
