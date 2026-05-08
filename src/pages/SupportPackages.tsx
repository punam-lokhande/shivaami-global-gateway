import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Headphones, 
  Clock, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  Monitor,
  Server,
  Database,
  Settings,
  Wrench,
  CheckCircle2,
  Building2,
  Globe,
  Zap
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { useRegion } from '@/contexts/RegionContext';
import heroImage from '@/assets/banners/support-banner.jpg';
import GetStartedDialog from '@/components/GetStartedDialog';
import { supportPackagesData, type PackageSegment } from '@/data/supportPackagesData';


// Hero Section
function HeroSection() {
  const handleGetStarted = () => {
    console.log("clicked")
    document.dispatchEvent(new CustomEvent('openGetStartedDialog'));
  };

  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="IT Support Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            <span className="text-[#38B6FF]"> Support Packages: Flexible</span> Help Desk & Technical Support

          
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
             Our Support Packages offer predictable IT support at fixed costs, tailored to your needs, with guaranteed response times, dedicated channels, and proactive help to keep your team productive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-[#38B6FF] hover:bg-[#38B6FF]/90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-[#38B6FF]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#38B6FF]/30 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// What We Handle Section
function WhatWeHandleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Headphones,
      title: 'Help Desk Support',
      description: 'Dedicated support team for all your technical queries and troubleshooting needs.'
    },
    {
      icon: Monitor,
      title: 'Remote Assistance',
      description: 'Quick remote access to diagnose and resolve issues without onsite visits.'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Proactive monitoring and maintenance of your server infrastructure.'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Continuous threat detection and security incident response.'
    },
    {
      icon: Database,
      title: 'Data Backup',
      description: 'Automated backup solutions to protect your critical business data.'
    },
    {
      icon: Settings,
      title: 'System Updates',
      description: 'Regular patches and updates to keep your systems secure and optimized.'
    },
    {
      icon: Wrench,
      title: 'Hardware Support',
      description: 'Troubleshooting and coordination for hardware repairs and replacements.'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Account setup, access control, and identity management services.'
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0a1628] mb-4">
            What We Handle for You
          </h2>

        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:border-[#38B6FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#38B6FF]/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-[#0a1628] mb-2 group-hover:text-[#0C4594] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Pricing Section — categorized by Google Workspace and IAM with segment tabs
function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [category, setCategory] = useState<'gws' | 'iam'>('gws');
  const [segmentKey, setSegmentKey] = useState<string>('micro');

  const cat = supportPackagesData[category];
  const segment: PackageSegment =
    cat.segments.find((s) => s.key === segmentKey) || cat.segments[0];

  const handleCategoryChange = (k: 'gws' | 'iam') => {
    setCategory(k);
    setSegmentKey(supportPackagesData[k].segments[0].key);
  };

  const tierCount = segment.tiers.length;
  const gridCols =
    tierCount === 4
      ? 'lg:grid-cols-4'
      : tierCount === 3
      ? 'lg:grid-cols-3'
      : 'lg:grid-cols-2';

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38B6FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0C4594]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38B6FF]/10 border border-[#38B6FF]/30 text-[#38B6FF] text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Flexible Plans
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Choose the Best Plan for Your Business
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Scalable support packages designed to grow with your organization's needs.
          </p>
        </motion.div>

        {/* Main Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {(['gws', 'iam'] as const).map((k) => (
            <button
              key={k}
              onClick={() => handleCategoryChange(k)}
              className={`px-5 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 border ${
                category === k
                  ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594] text-white border-transparent shadow-lg shadow-[#38B6FF]/25'
                  : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
              }`}
            >
              {supportPackagesData[k].label}
            </button>
          ))}
        </div>

        {/* Segment Sub-tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto">
          {cat.segments.map((s) => (
            <button
              key={s.key}
              onClick={() => setSegmentKey(s.key)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap border ${
                segmentKey === s.key
                  ? 'bg-[#38B6FF] text-white border-[#38B6FF]'
                  : 'bg-transparent text-white/70 border-white/15 hover:border-[#38B6FF]/50 hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Tier Cards */}
        <motion.div
          key={`${category}-${segmentKey}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 lg:gap-8`}
        >
          {segment.tiers.map((tier, idx) => {
            const popular = idx === 1 && tierCount >= 3;
            return (
              <div
                key={`${segment.key}-${tier}-${idx}`}
                className={`relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border ${
                  popular ? 'border-[#38B6FF]/50' : 'border-white/10'
                } p-6 transition-all duration-300 hover:border-[#38B6FF]/60 hover:bg-white/10 flex flex-col`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] text-white text-xs font-semibold rounded-full shadow">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-[#38B6FF] text-xs font-mono mb-1">{segment.codes[idx]}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{tier}</h3>
                  <p className="text-white/60 text-sm">{segment.skus[idx]}</p>
                </div>

                <div className="flex-1 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  {segment.groups.map((group) => (
                    <div key={group.title} className="mb-5">
                      <h4 className="text-white/60 text-[11px] uppercase tracking-wider mb-2 font-semibold">
                        {group.title}
                      </h4>
                      <ul className="space-y-2">
                        {group.rows.map((row, ri) => {
                          const label = row[0];
                          const value = row[idx + 1] ?? '';
                          if (!label && !value) return null;
                          return (
                            <li key={ri} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                {label && (
                                  <span className="text-white/90 font-medium">{label}</span>
                                )}
                                {label && value && <span className="text-white/40"> — </span>}
                                <span className="text-white/70">{value}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            Need a custom package?{' '}
            <Link to="/contact" className="text-[#38B6FF] hover:underline font-medium">
              Contact us
            </Link>{' '}
            for tailored solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Clock,
      title: 'Predictable Costs',
      description: 'Fixed monthly pricing with no surprise charges. Budget with confidence.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Expert technicians who understand your business and systems.'
    },
    {
      icon: Shield,
      title: 'Proactive Care',
      description: 'We identify and resolve issues before they impact your operations.'
    },
    {
      icon: Globe,
      title: 'India & US Coverage',
      description: 'Local support teams in both India and the United States.'
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0a1628] mb-4">
              Why Choose Our Support?
            </h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              Partner with a team that's committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#0C4594]/10 to-[#38B6FF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#0C4594]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1628] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SupportPackages() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handler);
    return () => document.removeEventListener('openGetStartedDialog', handler);
  }, []);

  return (
    <>
      <Helmet>
<title>IT Support Packages | Flexible Help Desk and Technical Support</title>
 <meta name="description" content="Choose IT support that fits your needs and budget. Our packages include help desk, troubleshooting, and maintenance services for businesses in India and the US." />
<link rel="canonical" href="https://www.shivaami.com/support-packages" />

 </Helmet>

      <Header />
      <main>
        <HeroSection />
        <WhatWeHandleSection />
        <PricingSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
