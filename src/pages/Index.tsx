import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PillarsSection from '@/components/sections/PillarsSection';
import TrustSection from '@/components/sections/TrustSection';
import WhyShivaamiSection from '@/components/sections/WhyShivaamiSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import BrandsSection from '@/components/sections/BrandsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
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
        <BrandsSection />
        <AchievementsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
