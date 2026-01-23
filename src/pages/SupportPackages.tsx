import { useRef } from 'react';
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

// Hero Section
function HeroSection() {
  const handleGetStarted = () => {
    window.dispatchEvent(new CustomEvent('open-get-started-dialog'));
  };

  return (
    <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden">
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
            Our Support Packages
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
            Our Support Packages give you predictable IT assistance at fixed costs. Select the level of support that best suits your business size. We handle daily technical issues, so your team stays productive. Each package includes clear response times and dedicated support channels.
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
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            From daily troubleshooting to strategic IT management, our team covers all aspects of your technical needs.
          </p>
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

// Pricing Section
function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { region } = useRegion();

  const handleGetStarted = () => {
    window.dispatchEvent(new CustomEvent('open-get-started-dialog'));
  };

  const packages = [
    {
      name: 'Enterprise Support',
      subtitle: 'Shared Resources',
      timing: 'Monday to Friday\n10am-7pm (2 hours a day)',
      supportType: 'Shared Dedicated Resource',
      channels: 'Call, Email and Remote Support',
      note: 'Onsite Support for Critical issues impacting business',
      popular: false,
      features: [
        'Migration Support',
        'Email Configuration',
        'Basic Troubleshooting',
        'User Account Management',
        'Monthly Health Reports',
        'Priority Email Support',
      ],
    },
    {
      name: 'Managed Service',
      subtitle: 'Remote Support',
      timing: '8 hours window between 8:30AM to 8:30PM\n(Monday-Friday)',
      supportType: 'Dedicated Resource',
      channels: 'Call, Email and Remote Support',
      note: 'Onsite Support for Critical issues impacting business\nNight shift charges will be applied additionally',
      popular: true,
      features: [
        'Everything in Enterprise Support',
        'Dedicated Support Engineer',
        '8-Hour Response Window',
        'Proactive System Monitoring',
        'Weekly Status Reports',
        'Priority Escalation Path',
        'Software Updates & Patches',
        'Security Incident Response',
      ],
    },
    {
      name: 'Managed Service',
      subtitle: 'Onsite Support',
      timing: 'Any 8 hours in between 8:30AM to 8:30PM\n(Monday-Friday)',
      supportType: 'Dedicated Onsite Support',
      channels: 'Full Onsite Presence',
      note: 'Night shift charges will be applied additionally',
      popular: false,
      features: [
        'Everything in Remote Support',
        'Full-Time Onsite Engineer',
        'Immediate Issue Resolution',
        'Hardware Troubleshooting',
        'Physical Infrastructure Support',
        'Real-Time Collaboration',
        'Custom SLA Options',
        'Executive IT Consulting',
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#0a1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38B6FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0C4594]/20 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={`${pkg.name}-${pkg.subtitle}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative group ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border ${pkg.popular ? 'border-[#38B6FF]/50' : 'border-white/10'} p-6 lg:p-8 transition-all duration-300 hover:border-[#38B6FF]/60 hover:bg-white/10`}>
                {/* Glow effect for popular */}
                {pkg.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#38B6FF]/10 to-transparent rounded-2xl pointer-events-none" />
                )}

                <div className="relative">
                  {/* Package Name */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                    <p className="text-[#38B6FF] font-medium">{pkg.subtitle}</p>
                  </div>

                  {/* Timing */}
                  <div className="mb-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                      <div className="text-white/80 text-sm whitespace-pre-line">{pkg.timing}</div>
                    </div>
                  </div>

                  {/* Support Type */}
                  <div className="mb-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">{pkg.supportType}</p>
                        <p className="text-white/60 text-sm">{pkg.channels}</p>
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mb-6 p-3 bg-white/5 rounded-lg">
                    <p className="text-white/60 text-xs whitespace-pre-line">{pkg.note}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-white/60 text-xs uppercase tracking-wide mb-4">Included Features</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#38B6FF] mt-0.5 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={handleGetStarted}
                    className={`w-full py-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594] text-white hover:shadow-lg hover:shadow-[#38B6FF]/30' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Choose Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Note */}
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
  return (
    <>
      <Helmet>
        <title>IT Support Packages | Flexible Help Desk and Technical Support</title>
        <meta 
          name="description" 
          content="Choose IT support that fits your needs and budget. Our packages include help desk, troubleshooting, and maintenance services for businesses in India and the US." 
        />
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
    </>
  );
}
