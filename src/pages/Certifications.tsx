import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Shield, CheckCircle, BadgeCheck, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';

// Certificate images
import iso9001 from '@/assets/certifications/iso-9001.jpg';
import iso27001 from '@/assets/certifications/iso-27001.jpg';
import iso20000 from '@/assets/certifications/iso-20000.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const certifications = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management Systems',
    image: iso9001,
    color: '#0C4594',
    icon: Award,
    description: 'Our ISO 9001:2015 certification signifies our unwavering commitment to quality. We have established and maintain a robust Quality Management System (QMS) to ensure consistent, top-notch services and products.',
    highlights: [
      'Consistent, top-notch services and products',
      'Meeting and exceeding customer expectations',
      'Continuous improvement of processes',
      'Robust Quality Management System (QMS)',
    ],
  },
  {
    id: 'iso-20000',
    title: 'ISO/IEC 20000-1:2018',
    subtitle: 'Information Technology Service Management',
    image: iso20000,
    color: '#38B6FF',
    icon: Shield,
    description: "Shivaami's ISO/IEC 20000-1:2018 certification showcases our ability to deliver excellent service management. We have implemented best practices to guarantee efficient and effective service delivery, placing our clients at the core of everything we do.",
    highlights: [
      'Excellent IT service management',
      'Best practices for efficient service delivery',
      'Client-centric approach',
      'Aligned with industry standards',
    ],
  },
  {
    id: 'iso-27001',
    title: 'ISO/IEC 27001:2013',
    subtitle: 'Information Security Management Systems',
    image: iso27001,
    color: '#10B981',
    icon: BadgeCheck,
    description: 'Security is paramount in today\'s digital landscape. Our ISO/IEC 27001:2013 certification is a testament to our commitment to safeguarding your data and information. Shivaami has implemented a robust Information Security Management System (ISMS).',
    highlights: [
      'Confidentiality, integrity, and availability of information',
      'Robust Information Security Management System (ISMS)',
      'Sensitive data handled with utmost care',
      'Comprehensive security protocols',
    ],
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
    <section ref={ref} className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#0a3a7a]">
      {/* Background Pattern */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#38B6FF]/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-32 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
          >
            <Award className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-sm font-medium text-white/90">Globally Recognized Standards</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            ISO Certified: A New Chapter in{' '}
            <span className="text-[#38B6FF]">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base lg:text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Shivaami, an industry leader in IT and cloud solutions, takes immense pride in its commitment to quality, security, and excellence. Our ISO certifications are a testament to our unwavering dedication to delivering top-tier services.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Introduction Section
function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
            At Shivaami, we understand that excellence and trustworthiness are not just ideals but essential principles in today's competitive business world. We have undertaken rigorous assessments and achieved these prestigious ISO certifications to ensure that our clients receive the highest quality services with the utmost security.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            These certifications reflect our dedication to continuous improvement and our commitment to meet and exceed international standards.
          </p>
          
          {/* Certification badges summary */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-sm"
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                >
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="font-semibold text-gray-800">{cert.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Certificate Card with Modal
function CertificateCard({ cert, index, onViewCertificate }: { 
  cert: typeof certifications[0]; 
  index: number;
  onViewCertificate: (cert: typeof certifications[0]) => void;
}) {
  const Icon = cert.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group"
    >
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#38B6FF]/10 transition-all duration-500">
        {/* Certificate Image */}
        <div 
          className="relative h-80 overflow-hidden cursor-pointer"
          onClick={() => onViewCertificate(cert)}
        >
          <img 
            src={cert.image} 
            alt={cert.title}
            className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-sm font-medium text-gray-800">
              <Award className="w-4 h-4" />
              Click to view certificate
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{ backgroundColor: cert.color }}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0C4594]">{cert.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{cert.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {cert.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2">
            {cert.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle 
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: cert.color }}
                />
                <span className="text-sm text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Certificate Modal
function CertificateModal({ cert, onClose }: { 
  cert: typeof certifications[0] | null; 
  onClose: () => void;
}) {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Certificate Image */}
        <div className="p-6 bg-gray-50">
          <img 
            src={cert.image} 
            alt={cert.title}
            className="w-full h-auto max-h-[70vh] object-contain mx-auto"
          />
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-gray-100 text-center">
          <h3 className="font-bold text-[#0C4594]">{cert.title}</h3>
          <p className="text-sm text-gray-500">{cert.subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Certifications Grid
function CertificationsGrid() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C4594] mb-4">
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Demonstrating our commitment to delivering superior quality, service management, and information security
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              index={index}
              onViewCertificate={setSelectedCert}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}

// Trust Indicators
function TrustSection() {
  const stats = [
    { value: '3', label: 'ISO Certifications' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime Guarantee' },
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

export default function Certifications() {
  return (
    <>
      <Helmet>
        <title>ISO Certifications | Shivaami Cloud Services</title>
        <meta name="description" content="Shivaami holds ISO 9001:2015, ISO/IEC 20000-1:2018, and ISO/IEC 27001:2013 certifications, demonstrating commitment to quality, service management, and information security." />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <IntroSection />
          <CertificationsGrid />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
