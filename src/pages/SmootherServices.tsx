import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Search, Zap, Users, FileCheck, Shield, Headphones, Code, ChevronRight, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';

// Banner - reuse support banner for services
import smootherServicesBanner from '@/assets/banners/support-banner.jpg';

// Categories with services
const categories = [
  {
    id: 'migration-services',
    name: 'Migration Services',
    description: 'Seamless cloud migration solutions',
    icon: Zap,
    color: '#38B6FF',
    products: [
      { 
        name: 'SwiftMove', 
        description: 'Zero-downtime cloud migration with comprehensive data transfer and security protocols.', 
        slug: '/swiftmove',
        icon: Zap
      },
    ]
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    description: 'Comprehensive IT management',
    icon: Headphones,
    color: '#10B981',
    products: [
      { 
        name: 'Pulse360', 
        description: '24/7 managed IT services with proactive monitoring, helpdesk, and vendor management.', 
        slug: '/pulse360',
        icon: Headphones
      },
      { 
        name: 'Support Packages', 
        description: 'Tiered enterprise support with dedicated account managers and SLA guarantees.', 
        slug: '/support-packages',
        icon: Headphones
      },
    ]
  },
  {
    id: 'change-management',
    name: 'Change Management',
    description: 'Organizational transformation support',
    icon: FileCheck,
    color: '#8B5CF6',
    products: [
      { 
        name: 'ChangePath', 
        description: 'Structured change management framework for successful digital transformation adoption.', 
        slug: '/changepath',
        icon: FileCheck
      },
    ]
  },
  {
    id: 'security-services',
    name: 'Security Services',
    description: 'Security assessment & compliance',
    icon: Shield,
    color: '#EF4444',
    products: [
      { 
        name: 'SecureSight', 
        description: 'Comprehensive security assessment with penetration testing and compliance audits.', 
        slug: '/securesight',
        icon: Shield
      },
    ]
  },
  {
    id: 'staffing-services',
    name: 'Staffing Services',
    description: 'Expert talent augmentation',
    icon: Users,
    color: '#F59E0B',
    products: [
      { 
        name: 'TalentEdge', 
        description: 'Rapid deployment of verified cloud and security experts within 48-72 hours.', 
        slug: '/talentedge',
        icon: Users
      },
    ]
  },
  {
    id: 'development-services',
    name: 'Development Services',
    description: 'Custom automation & integration',
    icon: Code,
    color: '#06B6D4',
    products: [
      { 
        name: 'Apps Script', 
        description: 'Custom automation and integration development for Google Workspace and beyond.', 
        slug: '/apps-script',
        icon: Code
      },
    ]
  },
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
    <section ref={ref} className="relative flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={smootherServicesBanner} 
          alt="Smoother Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
      </motion.div>

      {/* Content - Left aligned */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">The Shivaami 3S Advantage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]"
          >
            Smoother <span className="text-[#38B6FF]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base lg:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            Expert-led services that simplify your cloud journey—from migration and managed IT to security assessments and staff augmentation.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Sidebar Category Filter
function CategorySidebar({ 
  selectedCategory, 
  onSelectCategory 
}: { 
  selectedCategory: string | null; 
  onSelectCategory: (id: string | null) => void;
}) {
  const totalProducts = categories.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
      <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] p-5">
          <h3 className="text-white font-bold text-lg">Filter by Category</h3>
          <p className="text-white/70 text-sm mt-1">{totalProducts} Services Available</p>
        </div>

        {/* Category List */}
        <div className="p-3">
          {/* All Categories */}
          <motion.button
            whileHover={{ x: 4 }}
            onClick={() => onSelectCategory(null)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all ${
              !selectedCategory 
                ? 'bg-[#0C4594]/10 border-l-4 border-[#0C4594]' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              !selectedCategory ? 'bg-[#0C4594] text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <span className={`font-medium ${!selectedCategory ? 'text-[#0C4594]' : 'text-gray-700'}`}>
                All Services
              </span>
              <p className="text-xs text-gray-500">{totalProducts} services</p>
            </div>
            {!selectedCategory && <ChevronRight className="w-4 h-4 text-[#0C4594]" />}
          </motion.button>

          <div className="border-t border-gray-100 my-2" />

          {/* Individual Categories */}
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                whileHover={{ x: 4 }}
                onClick={() => onSelectCategory(isActive ? null : category.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all ${
                  isActive 
                    ? 'bg-[#0C4594]/10 border-l-4 border-[#0C4594]' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: isActive ? category.color : `${category.color}20`,
                    color: isActive ? '#fff' : category.color 
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-medium text-sm ${isActive ? 'text-[#0C4594]' : 'text-gray-700'}`}>
                    {category.name}
                  </span>
                  <p className="text-xs text-gray-500">{category.products.length} service{category.products.length !== 1 ? 's' : ''}</p>
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

// Product Card Component
function ServiceCard({ 
  product, 
  category, 
  index 
}: { 
  product: { name: string; description: string; slug: string; icon: React.ElementType }; 
  category: typeof categories[0];
  index: number;
}) {
  const ProductIcon = product.icon;
  const CategoryIcon = category.icon;
  
  return (
    <Link to={product.slug} className="block h-full">
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
          {/* Icon */}
          <div 
            className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: `${category.color}15`,
            }}
          >
            <ProductIcon 
              className="w-7 h-7"
              style={{ color: category.color }}
            />
          </div>

          {/* Name & Category Badge */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base lg:text-lg text-[#0C4594] group-hover:text-[#38B6FF] transition-colors break-words">
              {product.name}
            </h3>
            <div 
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mt-1"
              style={{ 
                backgroundColor: `${category.color}15`,
                color: category.color 
              }}
            >
              <CategoryIcon className="w-3 h-3" />
              {category.name}
            </div>
          </div>

          {/* Arrow */}
          <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#38B6FF] transition-colors flex-shrink-0" />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Learn More */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-[#38B6FF] group-hover:text-[#0C4594] flex items-center gap-1 transition-colors">
            Learn More
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

// Main Content Grid
function ServicesContent({ selectedCategory }: { selectedCategory: string | null }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get products based on filter
  const filteredProducts = categories
    .filter(cat => !selectedCategory || cat.id === selectedCategory)
    .flatMap(cat => 
      cat.products
        .filter(product => 
          !searchQuery || 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(product => ({ ...product, category: cat }))
    );

  const activeCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="flex-1 min-w-0">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#38B6FF] transition-colors" />
          <Input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-6 text-base rounded-xl border-gray-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 transition-all"
          />
        </div>
      </div>

      {/* Active Category Header */}
      {activeCategory && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-3"
        >
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: activeCategory.color }}
          >
            <activeCategory.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#0C4594]">{activeCategory.name}</h2>
            <p className="text-sm text-gray-500">{activeCategory.description}</p>
          </div>
        </motion.div>
      )}

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-6">
        Showing {filteredProducts.length} service{filteredProducts.length !== 1 ? 's' : ''}
        {searchQuery && ` for "${searchQuery}"`}
      </p>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-5">
          {filteredProducts.map((product, index) => (
            <ServiceCard
              key={`${product.category.id}-${product.name}`}
              product={product}
              category={product.category}
              index={index}
            />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0C4594] to-[#1a5ab8]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your IT Operations?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let our experts guide you through your cloud journey with tailored services for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0C4594] font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function SmootherServices() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);

  // Update selected category when URL changes
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.find(c => c.id === category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      {/* Main Content with Sidebar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block">
              <CategorySidebar 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
              />
            </div>

            {/* Mobile Category Filter */}
            <div className="lg:hidden relative">
              <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    !selectedCategory 
                      ? 'bg-[#0C4594] text-white' 
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category.id 
                        ? 'bg-[#0C4594] text-white' 
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              {/* Right fade indicator for scroll hint */}
              <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
            </div>

            {/* Main Content */}
            <ServicesContent selectedCategory={selectedCategory} />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
