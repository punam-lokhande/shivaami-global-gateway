import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Search, Building2, Briefcase, Heart, ShoppingCart, Factory, Tv, Laptop, Hotel, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Banner
import caseStudiesBanner from '@/assets/banners/case-studies-banner.jpg';

// Industry images
import healthcareImg from '@/assets/industries/healthcare.jpg';
import financialImg from '@/assets/industries/financial.jpg';
import retailImg from '@/assets/industries/retail.jpg';
import manufacturingImg from '@/assets/industries/manufacturing.jpg';
import mediaImg from '@/assets/industries/media.jpg';
import technologyImg from '@/assets/industries/technology.jpg';
import hospitalityImg from '@/assets/industries/hospitality.jpg';
import logisticsImg from '@/assets/industries/logistics.jpg';

// Client logos
import adaniLogo from '@/assets/clients/adani-international-school.jpg';
import agsLogo from '@/assets/clients/ags.jpg';
import amketteLogo from '@/assets/clients/amkette.jpg';
import apsaraLogo from '@/assets/clients/apsara.jpg';
import aryaLogo from '@/assets/clients/arya.jpg';
import biltLogo from '@/assets/clients/bilt.jpg';
import bmmLogo from '@/assets/clients/bmm.jpg';
import cedcommerceLogo from '@/assets/clients/cedcommerce.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Industries with their case studies
const industries = [
  {
    id: 'technology',
    name: 'Technology & IT',
    icon: Laptop,
    image: technologyImg,
    color: '#38B6FF',
    caseStudies: [
      { name: 'Zepto', description: 'Fast-growing quick-commerce company transforming grocery delivery with cloud solutions.', slug: 'zepto' },
      { name: 'Gupshup', description: 'Conversational Engagement Platform enabling business messaging at scale.' },
      { name: 'Datametica', description: 'World leader in enterprise data warehouse migration to the Cloud.' },
      { name: 'Mindgate Solutions', description: 'Leading payments revolution with innovative fintech solutions.' },
      { name: 'CedCommerce', description: 'Revolutionizing eCommerce integration and multi-channel selling.', logo: cedcommerceLogo },
      { name: 'Schemax', description: 'Software product and technology services company based in India.' },
      { name: 'iOPEX Technologies', description: 'Rapid expansion supporting 60% annual global growth.' },
      { name: 'Shaurya Technosoft', description: 'Rapidly expanding software development company in Pune.' },
      { name: 'Emxcel Solutions', description: 'Helping companies reach new heights with digital transformation.' },
      { name: 'Nelito Systems', description: 'Software products & services for Banking and Financial Services.' },
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharma',
    icon: Heart,
    image: healthcareImg,
    color: '#10B981',
    caseStudies: [
      { name: '1mg', description: "Leader in India's health-tech sector providing digital healthcare platform." },
      { name: 'Intas Pharmaceuticals', description: 'Leading multinational pharmaceutical formulation company.' },
      { name: 'Micro Labs', description: 'Multi-faceted healthcare organization with state-of-the-art facilities.' },
      { name: 'Sitapur Eye Hospital', description: 'Leading Tertiary care eye institute serving millions of patients.' },
      { name: 'Prism', description: 'Working hand in hand with the medical fraternity for better healthcare.' },
      { name: 'Dhani', description: 'Digital healthcare and transactional services at scale.' },
    ]
  },
  {
    id: 'financial',
    name: 'Financial Services',
    icon: Briefcase,
    image: financialImg,
    color: '#F59E0B',
    caseStudies: [
      { name: 'Refyne', description: "Asia's largest Earned Wage Access platform transforming payroll." },
      { name: 'KredX', description: "India's leading integrated financial solutions provider for startups." },
      { name: 'AGS Transact', description: 'Leading integrated omni-channel payment solutions provider.', logo: agsLogo },
      { name: 'LogiCash', description: 'Innovative cash management and financial services since 2010.' },
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: Building2,
    image: hospitalityImg,
    color: '#8B5CF6',
    caseStudies: [
      { name: 'PW Live', description: 'Leading EdTech platform transforming education with technology.' },
      { name: 'Adani International School', description: 'Premium international education with modern cloud infrastructure.', logo: adaniLogo },
      { name: 'Navodaya HS', description: 'Streamlined processes with Google for Education solutions.' },
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    image: retailImg,
    color: '#EC4899',
    caseStudies: [
      { name: 'RSPL Group', description: 'Prominent player in online retail with over 1000+ products.' },
      { name: 'Dunzo', description: 'Hyperlocal delivery services across major Indian cities.' },
      { name: 'Landmark Group', description: 'Carving a niche in retail with integrated brand experience.' },
      { name: 'Apsara Ice Creams', description: 'Leading ice cream manufacturer with digital-first approach.', logo: apsaraLogo },
      { name: "Dinshaw's", description: 'Iconic dairy brand with cloud-powered operations since 1932.' },
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    image: manufacturingImg,
    color: '#EF4444',
    caseStudies: [
      { name: 'BILT', description: "India's largest manufacturer of writing and printing paper.", logo: biltLogo },
      { name: 'Shriram Pistons', description: "Part of India's largest industrial conglomerate." },
      { name: 'D&H Secheron', description: 'Major manufacturer of welding consumables since 1966.' },
      { name: 'GRP Ltd', description: "37 years' experience in reclaimed rubber industry." },
      { name: 'Imperial', description: 'Leading suppliers with state of art manufacturing in Kolkata.' },
      { name: 'Permacel', description: 'Indian leader in tapes manufacturing since 1950s.' },
      { name: 'Merino India', description: 'Versatile manufacturer of interior solutions.' },
      { name: 'Amkette', description: 'Single-source solution for laboratory instrumentation.', logo: amketteLogo },
    ]
  },
  {
    id: 'agritech',
    name: 'AgriTech',
    icon: Truck,
    image: logisticsImg,
    color: '#22C55E',
    caseStudies: [
      { name: 'Arya.ag', description: 'Connecting agri-produce buyers and sellers with quality assurance.', logo: aryaLogo },
      { name: 'Payal Group', description: 'Leading agricultural solutions with R&D focus.' },
    ]
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    icon: Tv,
    image: mediaImg,
    color: '#F97316',
    caseStudies: [
      { name: 'Jaya TV', description: 'Tamil language satellite television channel based in Chennai.' },
      { name: 'Mukta Arts', description: 'Indian film production and entertainment company.' },
    ]
  },
  {
    id: 'conglomerate',
    name: 'Conglomerates',
    icon: Building2,
    image: financialImg,
    color: '#6366F1',
    caseStudies: [
      { name: 'RJ Corp', description: 'Multi-industry conglomerate with two decades of excellence.' },
      { name: 'Navnit Group', description: 'Rs. 2000 crore network of diverse companies.' },
      { name: 'BMM Group', description: 'Reflection of growth path across multiple sectors.', logo: bmmLogo },
      { name: 'Flovel', description: 'Four decades of excellence in hydropower industry.' },
      { name: 'RR Global', description: '650 million USD corporation built on innovation.' },
      { name: 'Senseselec', description: 'Renowned leader in electrical and electronic sectors.' },
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Real Estate',
    icon: Hotel,
    image: hospitalityImg,
    color: '#14B8A6',
    caseStudies: [
      { name: 'Treebo Hotels', description: 'Pioneering hospitality management with technology.' },
      { name: 'PRA Realty', description: "Pune's premier real estate developer since 2005." },
      { name: 'Sole Group', description: 'Specialist in wholesale telecommunications globally.' },
      { name: 'ICT Online', description: 'Leading consulting firm in highways, structures, airports.' },
    ]
  },
];

// Hero Section with background image
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={caseStudiesBanner} 
          alt="Case Studies" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
      </motion.div>

      {/* Content - Left aligned */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-32 pb-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base lg:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            Discover how we've helped leading organizations across industries transform their businesses with cloud and cybersecurity solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Industry Card Component
function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const Icon = industry.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      {/* Industry Header */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={industry.image} 
            alt={industry.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: industry.color }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                <p className="text-white/70 text-sm">{industry.caseStudies.length} Success Stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-3">
        {industry.caseStudies.slice(0, 4).map((study, idx) => (
          <motion.div
            key={idx}
            whileHover={{ x: 8, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="group/card bg-white rounded-xl p-4 border border-gray-100 hover:border-[#38B6FF]/40 hover:shadow-lg hover:shadow-[#38B6FF]/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 group-hover/card:border-[#38B6FF]/30 transition-colors">
                {study.logo ? (
                  <img src={study.logo} alt={study.name} className="w-full h-full object-contain p-1" />
                ) : (
                  <span 
                    className="text-lg font-bold"
                    style={{ color: industry.color }}
                  >
                    {study.name.charAt(0)}
                  </span>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#0C4594] group-hover/card:text-[#38B6FF] transition-colors truncate">
                  {study.name}
                </h4>
                <p className="text-sm text-gray-500 line-clamp-1">{study.description}</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover/card:text-[#38B6FF] group-hover/card:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </motion.div>
        ))}
        
        {industry.caseStudies.length > 4 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="text-sm font-medium text-[#38B6FF] hover:text-[#0C4594] py-2 flex items-center gap-1 justify-center transition-colors"
          >
            View all {industry.caseStudies.length} stories
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

// Case Studies Grid Section
function CaseStudiesGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  
  const filteredIndustries = industries.filter(industry => {
    if (selectedIndustry && industry.id !== selectedIndustry) return false;
    if (!searchQuery) return true;
    
    const matchesIndustry = industry.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCaseStudy = industry.caseStudies.some(cs => 
      cs.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return matchesIndustry || matchesCaseStudy;
  });

  const totalCaseStudies = industries.reduce((acc, ind) => acc + ind.caseStudies.length, 0);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C4594]/5 border border-[#0C4594]/10 mb-4">
            <Building2 className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-sm font-medium text-[#0C4594]">{totalCaseStudies}+ Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
            Success Stories by Industry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we've partnered with industry leaders to drive digital transformation across sectors
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-white rounded-xl shadow-sm">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search companies or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-xl border-gray-200 focus-visible:ring-[#38B6FF]/50"
                />
              </div>
            </div>
            
            {/* Industry Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <button
                onClick={() => setSelectedIndustry(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedIndustry 
                    ? 'bg-[#0C4594] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All
              </button>
              {industries.slice(0, 4).map(ind => (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(selectedIndustry === ind.id ? null : ind.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedIndustry === ind.id 
                      ? 'bg-[#0C4594] text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((industry, idx) => (
            <IndustryCard key={industry.id} industry={industry} index={idx} />
          ))}
        </div>

        {filteredIndustries.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">No results found for "<span className="font-semibold text-[#0C4594]">{searchQuery}</span>"</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedIndustry(null); }}
              className="mt-4 text-[#38B6FF] font-medium hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: '50+', label: 'Success Stories' },
    { value: '10+', label: 'Industries Served' },
    { value: '95%', label: 'Client Retention' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#0C4594] to-[#1a5ab8]">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-[#0C4594] to-[#0a3a7a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#38B6FF]/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the growing list of industry leaders who have transformed their business with Shivaami's cloud and cybersecurity solutions.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#38B6FF]/30 transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CaseStudiesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
