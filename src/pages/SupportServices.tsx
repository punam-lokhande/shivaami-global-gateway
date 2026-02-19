import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Ticket, ArrowRight, Users, Shield, UserCheck, ExternalLink, CheckCircle2, Headphones, Globe, MessageSquare } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/banners/support-banner.jpg';

// Flag components as SVG for crisp rendering
const IndiaFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="200" fill="#FF9933"/>
    <rect y="200" width="900" height="200" fill="#FFFFFF"/>
    <rect y="400" width="900" height="200" fill="#138808"/>
    <circle cx="450" cy="300" r="60" fill="#000080"/>
    <circle cx="450" cy="300" r="52" fill="#FFFFFF"/>
    <circle cx="450" cy="300" r="16" fill="#000080"/>
  </svg>
);

const USAFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1235 650" xmlns="http://www.w3.org/2000/svg">
    <rect width="1235" height="650" fill="#B22234"/>
    <rect y="50" width="1235" height="50" fill="#FFFFFF"/>
    <rect y="150" width="1235" height="50" fill="#FFFFFF"/>
    <rect y="250" width="1235" height="50" fill="#FFFFFF"/>
    <rect y="350" width="1235" height="50" fill="#FFFFFF"/>
    <rect y="450" width="1235" height="50" fill="#FFFFFF"/>
    <rect y="550" width="1235" height="50" fill="#FFFFFF"/>
    <rect width="494" height="350" fill="#3C3B6E"/>
  </svg>
);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Hero Section - Product page style
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
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Support Services"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-24 lg:pt-28">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-[1.15] tracking-tight"
          >
            We're here to help you<br />
            <span className="text-[#38B6FF]">every step</span> of the way
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl leading-relaxed"
          >
            Comprehensive support tailored for your region with dedicated portals, expert assistance, and a three-tier escalation process for quick resolutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Regional Support Portals
function RegionalPortals() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* India Portal */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF9933]/20 via-white/10 to-[#138808]/20 rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-12 rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <IndiaFlag className="w-full h-full" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#0C4594]">India Customers</h2>
                  <p className="text-muted-foreground text-sm">Dedicated support portal</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Access our dedicated support portal for Indian customers. Get comprehensive domain management, transaction history, and license management all in one place.
              </p>
              
              <a 
                href="https://customercare.shivaami.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0C4594] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0C4594]/90 transition-all mb-6"
              >
                <Ticket className="w-5 h-5" />
                Raise a Support Ticket
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              
              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#138808]" />
                  What You Can Do:
                </h3>
                <ul className="space-y-2">
                  {[
                    'View complete domain summary and details',
                    'Access full transaction history',
                    'Add licenses anytime as needed',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className="w-4 h-4 text-[#0C4594] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* USA Portal */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B22234]/20 via-white/10 to-[#3C3B6E]/20 rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-12 rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <USAFlag className="w-full h-full" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#0C4594]">USA Customers</h2>
                  <p className="text-muted-foreground text-sm">Dedicated support portal</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our dedicated support portal for US-based customers. Get quick access to all your support needs in one convenient location.
              </p>
              
              <a 
                href="mailto:na-support@shivaami.com" 
                className="inline-flex items-center gap-2 bg-[#0C4594] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0C4594]/90 transition-all"
              >
                <Mail className="w-5 h-5" />
                Raise a Support Ticket
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reach Out Section - Compact
function ReachOutSection() {
  const channels = [
    {
      icon: Mail,
      title: 'Email Support',
      items: [
        { label: 'India', value: 'support@shivaami.com', href: 'mailto:support@shivaami.com' },
        { label: 'USA', value: 'usa@shivaami.com', href: 'mailto:usa@shivaami.com' },
      ],
    },
    {
      icon: Phone,
      title: 'Phone Support',
      items: [
        { label: 'India', value: '+91 775 784 1333', href: 'tel:+917757841333' },
        { label: 'USA', value: '+1 (408) 333-4844', href: 'tel:+14083334844' },
      ],
    },
    {
      icon: Ticket,
      title: 'Support Portal',
      items: [
        { label: 'Raise a Ticket', value: 'Response within 24 hours', href: 'https://customercare.shivaami.com/', external: true },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-3">Reach Out to Us</h2>
          <p className="text-muted-foreground">Multiple ways to connect with our support team</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-border/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0C4594]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#0C4594]" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-4">{channel.title}</h3>
                <div className="space-y-3">
                  {channel.items.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="block text-muted-foreground hover:text-[#0C4594] transition-colors"
                    >
                      <span className="font-medium text-foreground">{item.label}: </span>
                      <span className="text-[#0C4594]">{item.value}</span>
                      {item.external && <ExternalLink className="w-3 h-3 inline ml-1" />}
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Support Escalation - Compact Timeline
function EscalationSection() {
  const levels = [
    {
      level: 1,
      title: 'Initial Support',
      icon: MessageSquare,
      color: '#38B6FF',
      regions: [
        { region: 'India', flag: IndiaFlag, email: 'support@shivaami.com', phone: '+91 775 784 1333 (Ext: 2)', googleDirect: '1800 108 7879' },
        { region: 'USA', flag: USAFlag, email: 'na-support@shivaami.com', phone: '+1 (408) 333-4844', googleDirect: '+1 650 206 5555' },
      ],
    },
    {
      level: 2,
      title: 'Priority Escalation',
      icon: Users,
      color: '#0C4594',
      managers: [
        { region: 'India', flag: IndiaFlag, name: 'Pratima Attarde', role: '', phone: '+91 775 784 1333 (Ext: 2)', email: 'pratima.attarde@shivaami.com' },
        { region: 'USA', flag: USAFlag, name: 'Kunal Thacker', role: 'VP', phone: '+1 (408) 333-4844 (Ext: 3)', email: 'kunal@shivaami.com' },
      ],
    },
    {
      level: 3,
      title: 'C-Suite Escalation',
      icon: Shield,
      color: '#082d61',
      executives: [
        { name: 'Chetana Chaudhari', role: 'CTO', email: 'chetana@shivaami.com' },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61] relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#38B6FF]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Support Escalation Process</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our three-tier support system ensures your issues are resolved efficiently
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden cursor-pointer group hover:bg-white/15 hover:border-white/40 hover:shadow-2xl hover:shadow-[#38B6FF]/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-white/10 px-6 py-4 flex items-center gap-3 group-hover:bg-white/20 transition-colors duration-300">
                  <motion.div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: level.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold">{level.level}</span>
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#38B6FF] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-white">{level.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Level 1 */}
                  {level.regions && level.regions.map((r) => {
                    const Flag = r.flag;
                    return (
                      <div key={r.region} className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-5 rounded overflow-hidden">
                            <Flag className="w-full h-full" />
                          </div>
                          <span className="text-white font-medium text-sm">{r.region}</span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <p><span className="text-[#38B6FF] font-medium">Email:</span> <a href={`mailto:${r.email}`} className="text-white/80 hover:text-[#38B6FF]">{r.email}</a></p>
                          <p><span className="text-[#38B6FF] font-medium">Phone:</span> <span className="text-white/80">{r.phone}</span></p>
                          <p><span className="text-[#38B6FF] font-medium">Google Direct:</span> <span className="text-white/80">{r.googleDirect}</span></p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Level 2 */}
                  {level.managers && level.managers.map((manager) => {
                    const Flag = manager.flag;
                    return (
                      <div key={manager.region} className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-5 rounded overflow-hidden">
                            <Flag className="w-full h-full" />
                          </div>
                          <span className="text-white font-medium text-sm">{manager.region}</span>
                        </div>
                        <p className="text-white/90 font-medium">{manager.name} {manager.role && <span className="text-white/60">- {manager.role}</span>}</p>
                        <p className="text-white/70 text-xs mt-1">{manager.phone}</p>
                        <a href={`mailto:${manager.email}`} className="text-[#38B6FF] text-xs hover:underline">{manager.email}</a>
                      </div>
                    );
                  })}

                  {/* Level 3 */}
                  {level.executives && (
                    <>
                      {level.executives.map((exec) => (
                        <div key={exec.name} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-[#38B6FF]" />
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">
                              {exec.name} {exec.role && <span className="text-white/60">- {exec.role}</span>}
                            </p>
                            <a href={`mailto:${exec.email}`} className="text-[#38B6FF] text-xs hover:underline">{exec.email}</a>
                          </div>
                        </div>
                      ))}
                      <p className="text-white/60 text-xs mt-4 bg-white/5 p-3 rounded-lg">
                        ⚠️ Please mention your query reference number for speedy resolution.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tip */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Headphones className="w-5 h-5 text-[#38B6FF]" />
            <span className="text-white/90 text-sm">
              <strong className="text-white">Pro Tip:</strong> Provide your ticket number, domain name, and contact details for faster resolution
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SupportServices() {
  return (
    <>
      <Helmet>
        <title>Support Services | Shivaami Cloud Services</title>
        <meta name="description" content="Get comprehensive support from Shivaami. Access our dedicated support portals for India and USA customers, raise tickets, and get help from our expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <RegionalPortals />
          <ReachOutSection />
          <EscalationSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
