import Header from '@/components/layout/Header';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import GetStartedDialog from '@/components/GetStartedDialog';
import { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load below-the-fold sections to reduce initial bundle size
const PillarsSection = lazy(() => import('@/components/sections/PillarsSection'));
const TrustSection = lazy(() => import('@/components/sections/TrustSection'));
const WhyShivaamiSection = lazy(() => import('@/components/sections/WhyShivaamiSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const PartnersSection = lazy(() => import('@/components/sections/PartnersSection'));
const IndustriesSection = lazy(() => import('@/components/sections/IndustriesSection'));
const AchievementsSection = lazy(() => import('@/components/sections/AchievementsSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleOpenDialog = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handleOpenDialog);
    return () => document.removeEventListener('openGetStartedDialog', handleOpenDialog);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <Helmet>
        <link rel="canonical" href="https://www.shivaami.com/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <PillarsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TrustSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyShivaamiSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PartnersSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <IndustriesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AchievementsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;
