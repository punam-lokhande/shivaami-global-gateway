import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Globe, Settings, Building, Shield, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/sections/CTASection';

// Banner
import bookDomainBanner from '@/assets/banners/book-domain-banner.jpg';

const offerings = [
  {
    icon: Settings,
    title: 'Managed Domain Services',
    description: 'Let our experts handle registration, renewals, and DNS configuration while you focus on your business.',
    features: [
      'Expert domain registration',
      'Automated renewal management',
      'DNS configuration & optimization',
      'Technical support included'
    ]
  },
  {
    icon: Globe,
    title: 'Self-Service Registration',
    description: 'Direct access to GoDaddy\'s platform with Shivaami\'s dedicated support.',
    features: [
      'Full GoDaddy platform access',
      'Dedicated Shivaami support',
      'Domain search & availability check',
      'Instant domain activation'
    ]
  },
  {
    icon: Building,
    title: 'Corporate Domain Management',
    description: 'Centralized control across your entire domain portfolio with enterprise-grade security.',
    features: [
      'Centralized domain dashboard',
      'Multi-domain management',
      'Enterprise-grade security',
      'Role-based access control'
    ]
  },
  {
    icon: Shield,
    title: 'Digital Asset Monitoring',
    description: 'Proactive oversight to protect your brand from unauthorized use and cybersquatting.',
    features: [
      'Brand protection monitoring',
      'Cybersquatting alerts',
      'Domain expiry notifications',
      'Unauthorized use detection'
    ]
  },
];

export default function BookDomain() {
  const handleBookNow = () => {
    window.open('https://www.shivaamicorporation.in/', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
    <Helmet>
<title>Domain Name Registration and DNS Hosting Provider | Shivaami</title>
 <meta name="description" content="Search & buy domain name with suffixes like .IN .Com .Net etc. for your company at Shivaami, a leading domain registration service provider in India and the US." />
<link rel="canonical" href="https://www.shivaami.com/google-meet-hardware" />
 </Helmet>


      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={bookDomainBanner}
            alt="Domain Registration Services"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.15] tracking-tight"
            >
              Secure Your <span className="text-[#38B6FF]">Digital Identity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
            >
              Your domain name is the foundation of your online presence. Shivaami partners with GoDaddy to deliver comprehensive domain management solutions tailored for businesses that demand reliability and control.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://www.shivaamicorporation.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#38B6FF] hover:bg-white text-white hover:text-[#0C4594] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4594] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive domain solutions to establish and protect your online presence
            </p>
          </motion.div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (


                
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0C4594]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#0C4594]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0C4594] mb-2">
                        {offering.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {offering.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#38B6FF] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C4594]/10 mb-6">
              <Globe className="w-5 h-5 text-[#0C4594]" />
              <span className="text-[#0C4594] font-semibold">Trusted Partnership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4594] mb-6">
              Powered by GoDaddy, Delivered by Shivaami
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We combine GoDaddy's world-class domain infrastructure with Shivaami's expert consulting and support. Get the best of both worlds - industry-leading technology with personalized enterprise service.
            </p>
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-[#38B6FF] hover:bg-[#0C4594] text-white px-8 py-6 text-base font-semibold shadow-lg"
            >
              Book Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
