import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import GetStartedDialog from '@/components/GetStartedDialog';
import PillarsSection from '@/components/sections/PillarsSection';
import TrustSection from '@/components/sections/TrustSection';
import WhyShivaamiSection from '@/components/sections/WhyShivaamiSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import IndustriesSection from '@/components/sections/IndustriesSection';

import AchievementsSection from '@/components/sections/AchievementsSection';
import CTASection from '@/components/sections/CTASection';
import { useState, useEffect } from 'react';

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <TrustSection />
        <WhyShivaamiSection />
        <TestimonialsSection />
        <PartnersSection />
        <IndustriesSection />
        
        <AchievementsSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;
