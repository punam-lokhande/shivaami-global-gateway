import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Region = 'india' | 'usa';

interface RegionContent {
  phone: string;
  currency: string;
  currencySymbol: string;
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
    phone: '+1 408 333 4844',
    currency: 'USD',
    currencySymbol: '$',
    testimonials: [
      {
        name: 'Michael Johnson',
        company: 'TechStart Inc',
        role: 'CEO',
        quote: 'Shivaami\'s enterprise solutions helped us achieve SOC 2 compliance in record time. Outstanding expertise.',
      },
      {
        name: 'Sarah Williams',
        company: 'HealthFirst',
        role: 'Director of IT',
        quote: 'Their AI integration services transformed our patient care workflows. ROI exceeded expectations.',
      },
      {
        name: 'David Chen',
        company: 'RetailMax',
        role: 'CTO',
        quote: 'From Chrome Enterprise to identity management, Shivaami delivered a complete security overhaul for our 200+ stores.',
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
  const [region, setRegion] = useState<Region>('india');

  const toggleRegion = useCallback(() => {
    setRegion((prev) => (prev === 'india' ? 'usa' : 'india'));
  }, []);

  const content = regionData[region];

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
