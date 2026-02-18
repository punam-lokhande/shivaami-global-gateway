import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Search, Building2, Briefcase, Heart, ShoppingCart, Factory, Tv, Laptop, Hotel, Truck, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Banner
import caseStudiesBanner from '@/assets/banners/case-studies-banner.jpg';

// Client logos
import adaniLogo from '@/assets/clients/adani-international-school.jpg';
import agsLogo from '@/assets/clients/ags.jpg';
import amketteLogo from '@/assets/clients/amkette.jpg';
import apsaraLogo from '@/assets/clients/apsara.jpg';
import aryaLogo from '@/assets/clients/arya.jpg';
import biltLogo from '@/assets/clients/bilt.jpg';
import bmmLogo from '@/assets/clients/bmm.jpg';
import cedcommerceLogo from '@/assets/clients/cedcommerce.jpg';
import { Helmet } from 'react-helmet-async';

// Industries with their case studies
const industries = [
  {
    id: 'technology',
    name: 'Technology & IT',
    icon: Laptop,
    color: '#38B6FF',
    caseStudies: [
      { name: 'Zepto', description: 'Fast-growing quick-commerce company transforming grocery delivery with cloud solutions.', slug: 'zepto' },
      { name: 'Gupshup', description: 'Conversational Engagement Platform enabling business messaging at scale.', slug: 'gupshup' },
      { name: 'Datametica', description: 'World leader in enterprise data warehouse migration to the Cloud.', slug: 'datametica' },
      { name: 'Mindgate Solutions', description: 'Leading payments revolution with innovative fintech solutions.', slug: 'mindgate' },
      { name: 'CedCommerce', description: 'Revolutionizing eCommerce integration and multi-channel selling.', logo: cedcommerceLogo, slug: 'cedcommerce' },
      { name: 'Schemax', description: 'Software product and technology services company based in India.', slug: 'schemax' },
      { name: 'iOPEX Technologies', description: 'Rapid expansion supporting 60% annual global growth.', slug: 'iopex' },
      { name: 'Shaurya Technosoft', description: 'Rapidly expanding software development company in Pune.', slug: 'shaurya-technosoft' },
      { name: 'Emxcel Solutions', description: 'Helping companies reach new heights with digital transformation.', slug: 'emxcel' },
      { name: 'Nelito Systems', description: 'Software products & services for Banking and Financial Services.', slug: 'nelito' },
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharma',
    icon: Heart,
    color: '#10B981',
    caseStudies: [
      { name: '1mg', description: "Leader in India's health-tech sector providing digital healthcare platform.", slug: '1mg' },
      { name: 'Intas Pharmaceuticals', description: 'Leading multinational pharmaceutical formulation company.', slug: 'intas' },
      { name: 'Micro Labs', description: 'Multi-faceted healthcare organization with state-of-the-art facilities.', slug: 'microlabs' },
      { name: 'Sitapur Eye Hospital', description: 'Leading Tertiary care eye institute serving millions of patients.', slug: 'sitapur-eye-hospital' },
      { name: 'Prism', description: 'Working hand in hand with the medical fraternity for better healthcare.', slug: 'prism' },
      { name: 'Dhani', description: 'Digital healthcare and transactional services at scale.', slug: 'dhani' },
    ]
  },
  {
    id: 'financial',
    name: 'Financial Services',
    icon: Briefcase,
    color: '#F59E0B',
    caseStudies: [
      { name: 'Refyne', description: "Asia's largest Earned Wage Access platform transforming payroll.", slug: 'refyne' },
      { name: 'KredX', description: "India's leading integrated financial solutions provider for startups.", slug: 'kredx' },
      { name: 'AGS Transact', description: 'Leading integrated omni-channel payment solutions provider.', logo: agsLogo, slug: 'ags' },
      { name: 'LogiCash', description: 'Innovative cash management and financial services since 2010.', slug: 'logicash' },
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: Building2,
    color: '#8B5CF6',
    caseStudies: [
      { name: 'PW Live', description: 'Leading EdTech platform transforming education with technology.', slug: 'pw-live' },
      { name: 'Adani International School', description: 'Premium international education with modern cloud infrastructure.', logo: adaniLogo, slug: 'adani' },
      { name: 'Navodaya HS', description: 'Streamlined processes with Google for Education solutions.', slug: 'navodaya' },
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    color: '#EC4899',
    caseStudies: [
      { name: 'RSPL Group', description: 'Prominent player in online retail with over 1000+ products.', slug: 'rspl' },
      { name: 'Dunzo', description: 'Hyperlocal delivery services across major Indian cities.', slug: 'dunzo' },
      { name: 'Landmark Group', description: 'Carving a niche in retail with integrated brand experience.', slug: 'landmark' },
      { name: 'Apsara Ice Creams', description: 'Leading ice cream manufacturer with digital-first approach.', logo: apsaraLogo, slug: 'apsara' },
      { name: "Dinshaw's", description: 'Iconic dairy brand with cloud-powered operations since 1932.', slug: 'dinshaws' },
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    color: '#EF4444',
    caseStudies: [
      { name: 'BILT', description: "India's largest manufacturer of writing and printing paper.", logo: biltLogo, slug: 'bilt' },
      { name: 'Shriram Pistons', description: "Part of India's largest industrial conglomerate.", slug: 'shriram-pistons' },
      { name: 'D&H Secheron', description: 'Major manufacturer of welding consumables since 1966.', slug: 'dh-secheron' },
      { name: 'GRP Ltd', description: "37 years' experience in reclaimed rubber industry.", slug: 'grp' },
      { name: 'Imperial', description: 'Leading suppliers with state of art manufacturing in Kolkata.', slug: 'imperial' },
      { name: 'Permacel', description: 'Indian leader in tapes manufacturing since 1950s.', slug: 'permacel' },
      { name: 'Merino India', description: 'Versatile manufacturer of interior solutions.', slug: 'merino-india' },
      { name: 'Amkette', description: 'Single-source solution for laboratory instrumentation.', logo: amketteLogo, slug: 'amkette' },
    ]
  },
  {
    id: 'agritech',
    name: 'AgriTech',
    icon: Truck,
    color: '#22C55E',
    caseStudies: [
      { name: 'Arya.ag', description: 'Connecting agri-produce buyers and sellers with quality assurance.', logo: aryaLogo, slug: 'arya' },
      { name: 'Payal Group', description: 'Leading agricultural solutions with R&D focus.', slug: 'payal-group' },
    ]
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    icon: Tv,
    color: '#F97316',
    caseStudies: [
      { name: 'Jaya TV', description: 'Tamil language satellite television channel based in Chennai.', slug: 'jaya-tv' },
      { name: 'Mukta Arts', description: 'Indian film production and entertainment company.', slug: 'mukta-arts' },
    ]
  },
  {
    id: 'conglomerate',
    name: 'Conglomerates',
    icon: Building2,
    color: '#6366F1',
    caseStudies: [
      { name: 'RJ Corp', description: 'Multi-industry conglomerate with two decades of excellence.', slug: 'rjcorp' },
      { name: 'Navnit Group', description: 'Rs. 2000 crore network of diverse companies.', slug: 'navnit' },
      { name: 'BMM Group', description: 'Reflection of growth path across multiple sectors.', logo: bmmLogo, slug: 'bmm' },
      { name: 'Flovel', description: 'Four decades of excellence in hydropower industry.', slug: 'flovel' },
      { name: 'RR Global', description: '650 million USD corporation built on innovation.', slug: 'rr-global' },
      { name: 'Senseselec', description: 'Renowned leader in electrical and electronic sectors.', slug: 'senseselec' },
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Real Estate',
    icon: Hotel,
    color: '#14B8A6',
    caseStudies: [
      { name: 'Treebo Hotels', description: 'Pioneering hospitality management with technology.', slug: 'treebo' },
      { name: 'PRA Realty', description: "Pune's premier real estate developer since 2005.", slug: 'pra-realty' },
      { name: 'Sole Group', description: 'Specialist in wholesale telecommunications globally.', slug: 'sole-group' },
      { name: 'ICT Online', description: 'Leading consulting firm in highways, structures, airports.', slug: 'ict-online' },
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
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
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
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]"
          >
            Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base lg:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            Discover how we've helped leading organizations across industries transform their businesses with cloud and cybersecurity solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Sidebar Industry Filter
function IndustrySidebar({ 
  selectedIndustry, 
  onSelectIndustry 
}: { 
  selectedIndustry: string | null; 
  onSelectIndustry: (id: string | null) => void;
}) {
  const totalCaseStudies = industries.reduce((acc, ind) => acc + ind.caseStudies.length, 0);

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
      <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] p-5">
          <h3 className="text-white font-bold text-lg">Filter by Industry</h3>
          <p className="text-white/70 text-sm mt-1">{totalCaseStudies}+ Success Stories</p>
        </div>

        {/* Industry List */}
        <div className="p-3">
          {/* All Industries */}
          <motion.button
            whileHover={{ x: 4 }}
            onClick={() => onSelectIndustry(null)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all ${
              !selectedIndustry 
                ? 'bg-[#0C4594]/10 border-l-4 border-[#0C4594]' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              !selectedIndustry ? 'bg-[#0C4594] text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <span className={`font-medium ${!selectedIndustry ? 'text-[#0C4594]' : 'text-gray-700'}`}>
                All Industries
              </span>
              <p className="text-xs text-gray-500">{totalCaseStudies} stories</p>
            </div>
            {!selectedIndustry && <ChevronRight className="w-4 h-4 text-[#0C4594]" />}
          </motion.button>

          <div className="border-t border-gray-100 my-2" />

          {/* Individual Industries */}
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = selectedIndustry === industry.id;
            
            return (
              <motion.button
                key={industry.id}
                whileHover={{ x: 4 }}
                onClick={() => onSelectIndustry(isActive ? null : industry.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all ${
                  isActive 
                    ? 'bg-[#0C4594]/10 border-l-4 border-[#0C4594]' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: isActive ? industry.color : `${industry.color}20`,
                    color: isActive ? '#fff' : industry.color 
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-medium text-sm ${isActive ? 'text-[#0C4594]' : 'text-gray-700'}`}>
                    {industry.name}
                  </span>
                  <p className="text-xs text-gray-500">{industry.caseStudies.length} stories</p>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-[#0C4594]" />}
              </motion.button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

// Case Study Card Component
function CaseStudyCard({ 
  study, 
  industry, 
  index 
}: { 
  study: { name: string; description: string; slug?: string; logo?: string }; 
  industry: typeof industries[0];
  index: number;
}) {
  const Icon = industry.icon;
  
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-xl hover:shadow-[#38B6FF]/10 hover:border-[#38B6FF]/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-[#38B6FF]/30 transition-colors">
          {study.logo ? (
            <img src={study.logo} alt={study.name} className="w-full h-full object-contain p-2" />
          ) : (
            <span 
              className="text-2xl font-bold"
              style={{ color: industry.color }}
            >
              {study.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Name & Industry Badge */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-[#0C4594] group-hover:text-[#38B6FF] transition-colors line-clamp-1">
            {study.name}
          </h3>
          <div 
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mt-1"
            style={{ 
              backgroundColor: `${industry.color}15`,
              color: industry.color 
            }}
          >
            <Icon className="w-3 h-3" />
            {industry.name}
          </div>
        </div>

        {/* Arrow */}
        {study.slug && (
          <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#38B6FF] transition-colors flex-shrink-0" />
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {study.description}
      </p>

      {/* Read More */}
      {study.slug && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-[#38B6FF] group-hover:text-[#0C4594] flex items-center gap-1 transition-colors">
            Read Case Study
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      )}
    </motion.div>
  );

  if (study.slug) {
    return <Link to={`/case-studies/${study.slug}`} className="block h-full">{cardContent}</Link>;
  }
  
  return cardContent;
}

// Main Content Grid
function CaseStudiesContent({ selectedIndustry }: { selectedIndustry: string | null }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get case studies based on filter
  const filteredStudies = industries
    .filter(ind => !selectedIndustry || ind.id === selectedIndustry)
    .flatMap(ind => 
      ind.caseStudies
        .filter(cs => 
          !searchQuery || 
          cs.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cs.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(cs => ({ ...cs, industry: ind }))
    );

  const activeIndustry = industries.find(ind => ind.id === selectedIndustry);

  return (
    <div className="flex-1 min-w-0">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white rounded-xl shadow-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-xl border-gray-200 focus-visible:ring-[#38B6FF]/50"
            />
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0C4594]">
            {activeIndustry ? activeIndustry.name : 'All Success Stories'}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Showing {filteredStudies.length} case {filteredStudies.length === 1 ? 'study' : 'studies'}
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      {filteredStudies.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredStudies.map((study, idx) => (
            <CaseStudyCard 
              key={`${study.industry.id}-${study.name}`} 
              study={study} 
              industry={study.industry}
              index={idx}
            />
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-gray-50 rounded-2xl"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 text-lg">
            No results found for "<span className="font-semibold text-[#0C4594]">{searchQuery}</span>"
          </p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-[#38B6FF] font-medium hover:underline"
          >
            Clear search
          </button>
        </motion.div>
      )}
    </div>
  );
}

// Main Section with Sidebar + Grid
function CaseStudiesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <IndustrySidebar 
            selectedIndustry={selectedIndustry} 
            onSelectIndustry={setSelectedIndustry} 
          />

          {/* Main Content */}
          <CaseStudiesContent selectedIndustry={selectedIndustry} />
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-[#0C4594] to-[#0a3a7a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#38B6FF]/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative w-full px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
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

    <>
     <Helmet>
<title>About Shivaami | Company Vision and Mission</title>
 <meta name="description" content="Explore Shivaami's collection of case studies and learn how our technology solutions have helped businesses across various industries to achieve their goals." />
<link rel="canonical" href="https://www.shivaami.com/case-studies" />
 </Helmet>


    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div></>
  );
}
