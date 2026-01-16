import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Building2, Search, Filter } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.05 } },
  viewport: { once: true }
};

// Case studies data with optional logo
const caseStudies: { name: string; description: string; logo?: string }[] = [
  { name: 'Zepto', description: 'Zepto is a fast-growing quick-commerce company operating at...' },
  { name: 'PW Live', description: 'PhysicsWallah (PW.Live) is a leading EdTech platform that heavily relies...' },
  { name: 'Refyne', description: "Refyne, Asia's largest and the world's second-largest Earned..." },
  { name: '1mg', description: "A leader in India's health-tech sector, provides a platform for ..." },
  { name: 'Adani International School', description: 'Adani International School is located in Ahmedabad, Gujarat, India. It offers....', logo: adaniLogo },
  { name: 'Intas Pharmaceuticals', description: 'Intas is one of the leading multinational pharmaceutical formulation....' },
  { name: 'Senseselec', description: 'Senseselec Group is a renowned leader in the electrical and electronic....' },
  { name: 'Arya.ag', description: 'Arya.ag connects agri-produce buyers and sellers with assured quality....', logo: aryaLogo },
  { name: 'Apsara Ice Creams', description: 'Apsara Ice Creams is a leading ice cream manufacturer in India, recognized for its.....', logo: apsaraLogo },
  { name: 'RSPL Group', description: 'RSPL Group is a prominent player in the online retail industry, boasting over...' },
  { name: 'AGS Transact', description: 'AGS is a leading integrated omni-channel payment solutions provider in India...', logo: agsLogo },
  { name: 'Shaurya Technosoft', description: 'Shaurya Technosoft Pvt. Ltd., located in Pune, India, is a rapidly expanding software ...' },
  { name: 'Prism', description: 'At Prism, the focus is on striving to work hand in hand with the medical fraternity in...' },
  { name: 'Treebo Hotels', description: 'Treebo Hotels developed pioneering hospitality management...' },
  { name: 'iOPEX Technologies', description: 'iOPEX Technologies in its rapid expansion supported 60% annual global...' },
  { name: 'Sitapur Eye Hospital', description: 'Sitapur Eye Hospital has been a leading Tertiary care eye institute of India ...' },
  { name: 'BMM Group', description: 'The journey of the BMM Group is a reflection of the path tread by every ....', logo: bmmLogo },
  { name: 'Gupshup', description: 'Gupshup.io is a Conversational Engagement Platform that offers businesses ....' },
  { name: 'KredX', description: "KredX India's leading integrated financial solutions provider, which helps startups, ..." },
  { name: 'RJ Corp', description: 'RJ Corp\'s history dates back more than two decades, to the early 1990s, when the...' },
  { name: 'Landmark Group', description: 'Landmark Group have been successful in carving a niche for themselves and integrate into a brand...' },
  { name: 'Flovel', description: 'For more than four decades, the FLOVEL name has been associated with the hydropower industry...' },
  { name: 'Dhani', description: 'Dhani Services Ltd is a consumer business that provides digital healthcare and digital transactional...' },
  { name: 'Payal Group', description: 'With a strong focus on research and development, Payal Group is one of the leading...' },
  { name: 'Navnit Group', description: 'The Navnit Group, a Rs. 2000 crore plus a network of diverse companies, is a reputed and professionally...' },
  { name: 'Navodaya HS', description: 'One big school, one easy solution How Shivaami helped streamline processes with Google for Education...' },
  { name: 'Shriram Pistons', description: "Shriram Pistons & Rings (SPR) is part of the Shriram Group, one of India's largest and most established industrial conglomerates." },
  { name: 'ICT Online', description: 'Intercontinental Consultants and Technocrats Pvt. Ltd. (ICT) is a leading international consulting firm specialising in highways, structures, airports, urban' },
  { name: "Dinshaw's", description: "Dinshaw's was established by Dinshaw and Erachshaw Rana in the year 1932. It began as a dairy operation in Gittikhadan, Nagpur." },
  { name: 'D&H Secheron', description: 'D&H Sechron is a major manufacturer of welding consumables in India.D&H Sécheron, established in 1966, is an ISO 9001-2015' },
  { name: 'Nelito Systems', description: 'Nelito Systems Ltd. provides software products & services to various sectors such as Banking, Financial Services, Micro-Finance,' },
  { name: 'Emxcel Solutions', description: 'Emxcel was established with an aim to assist companies in reaching new heights, capturing a large audience, managing day-to-day business activities,' },
  { name: 'Merino India', description: 'Merino is a versatile manufacturer and marketer of Interiors Solutions with a wide array of products for homes, offices, commercial and public areas.' },
  { name: 'CedCommerce', description: 'CedCommerce is revolutionizing the way eCommerce is perceived and performed over the Internet.', logo: cedcommerceLogo },
  { name: 'Schemax', description: 'Schemax is a software product and technology services company based out of Visakhapatnam in India.' },
  { name: 'Jaya TV', description: 'Jaya TV is a Tamil language satellite television channel based in Chennai, India.' },
  { name: 'Dunzo', description: 'Dunzo is an Indian company that provides delivery services in Bengaluru, Delhi, Gurgaon, Pune, Chennai, Mumbai and Hyderabad.' },
  { name: 'Mindgate Solutions', description: 'Mindgate Solutions has been in the forefront of the payments revolution from its inception, an outlook which has made it a key global' },
  { name: 'RR Global', description: 'RR Global, a 650 million USD corporation has molded its success on innovation. RR Global, a 650 million USD corporation has molded' },
  { name: 'BILT', description: "Ballarpur Industries Limited (BILT) is India's largest manufacturer of writing and printing (W&P) paper.", logo: biltLogo },
  { name: 'Micro Labs', description: 'Micro Labs Limited is a multi-faceted healthcare organization with a proficient marketing team, state-of-the-art manufacturing facilities' },
  { name: 'LogiCash', description: 'LOGICASH was incorporated in year 2010, with a quest on engagement with people, clients and communities to help them achieve their potential.' },
  { name: 'Datametica', description: 'Datametica is a world leader in enterprise data warehouse migration to the Cloud. Our innovative frameworks automate' },
  { name: 'GRP Ltd', description: "GRP Ltd, previously Gujarat Reclaim & Rubber Products Ltd. (GRRPL), has over 37 years' experience in the reclaimed rubber industry." },
  { name: 'Imperial', description: 'Imperial with its state of art manufacturing facilities in the Eastern part of India at Kolkata is today one of the leading suppliers...' },
  { name: 'Amkette', description: 'Amkette Analytics Ltd. is the single-source solution for all of laboratory and process on instrumentation', logo: amketteLogo },
  { name: 'Permacel', description: 'The Company started operations in India in the late 1950s as a division of Johnson & Johnson (India) and established itself as the Indian leader in tapes manufacturing.' },
  { name: 'Sole Group', description: 'Sole Group Of Companies is a specialist in wholesale telecommunications, Which Sole Group Of Companies - originally founded in Tanzania...' },
  { name: 'PRA Realty', description: "PRA Realty (I) Pvt. Ltd,Founded in year 2005. PRA Realty is Pune's one of the premier real estate developer with offices in Pune, Mumbai & Chicago..." },
  { name: 'Mukta Arts', description: 'Mukta Arts is an Indian film production company.It operates as an entertainment company that primarily produces motion pictures.' },
];

// Hero Section
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[50vh] min-h-[400px] max-h-[500px] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#38B6FF]" />
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#38B6FF]/20 blur-3xl" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Building2 className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">{caseStudies.length}+ Success Stories</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-[1.15] tracking-tight"
          >
            Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Discover how we've helped leading organizations transform their businesses with cloud and cybersecurity solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Case Study Card Component
function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 }
      }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#38B6FF]/40"
    >
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF]" />
      
      <div className="p-5">
        {/* Logo + Name Row */}
        <div className="flex items-center gap-4 mb-3">
          {/* Logo Container */}
          <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm group-hover:border-[#38B6FF]/50 group-hover:shadow-md transition-all duration-300">
            {study.logo ? (
              <img 
                src={study.logo} 
                alt={`${study.name} logo`} 
                className="w-full h-full object-contain p-1.5"
              />
            ) : (
              <span className="text-xl font-bold bg-gradient-to-br from-[#0C4594] to-[#38B6FF] bg-clip-text text-transparent">
                {study.name.charAt(0)}
              </span>
            )}
          </div>
          
          {/* Company Name */}
          <h3 className="text-base font-bold text-[#0C4594] group-hover:text-[#38B6FF] transition-colors duration-300 line-clamp-2 leading-tight">
            {study.name}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {study.description}
        </p>
        
        {/* Read More Link */}
        <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#38B6FF] hover:text-[#0C4594] transition-colors group/btn">
          Read More
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

// Case Studies Grid Section
function CaseStudiesGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStudies = caseStudies.filter(study =>
    study.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
            Our Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we've partnered with industry leaders to drive digital transformation
          </p>
        </motion.div>

        {/* Search Bar - Enhanced */}
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto mb-14">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white rounded-xl shadow-lg">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by company name or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-6 py-7 rounded-xl border-0 bg-transparent text-base focus-visible:ring-2 focus-visible:ring-[#38B6FF]/50"
              />
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <p className="text-gray-600">
            Showing <span className="font-bold text-[#0C4594] text-lg">{filteredStudies.length}</span> success stories
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C4594]/5 text-sm text-[#0C4594] font-medium">
            <Filter className="w-4 h-4" />
            All Industries
          </div>
        </motion.div>

        {/* Grid - Enhanced spacing */}
        <motion.div 
          {...staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredStudies.map((study, idx) => (
            <CaseStudyCard key={idx} study={study} index={idx} />
          ))}
        </motion.div>

        {filteredStudies.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">No case studies found matching "<span className="font-semibold text-[#0C4594]">{searchQuery}</span>"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-[#38B6FF] font-medium hover:underline"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the growing list of industry leaders who have transformed their business with Shivaami's cloud and cybersecurity solutions.
          </p>
          <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CaseStudiesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}