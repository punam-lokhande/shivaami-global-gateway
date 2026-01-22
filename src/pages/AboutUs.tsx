import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users, Shield, Zap, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

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
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] max-h-[700px] flex items-center overflow-hidden">
      {/* Hero Image Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-[#0C4594]/60" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            Making Your<br />
            <span className="text-[#38B6FF]">Online Life</span> Easier
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
          >
            Making your online life easier requires the right technology partners. Shivaami has quickly established itself as a trusted cloud and cybersecurity solutions company.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 28 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/leadership">
              <Button
                size="lg"
                className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Meet Our Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// About Story Section
function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  At Shivaami, businesses are helped to understand technology's potential for growth. We are an authorized partner for leading technology brands. Our team of experts is directly trained by our partners.
                </p>
                <p>
                  Solutions across cloud platforms, AI solutions, cybersecurity tools, and IT management systems are offered by us. Punit Thakkar founded Shivaami in 2004 with a clear vision.
                </p>
                <p>
                  Companies were to be allowed to drive business growth with flexibility. Today, cloud computing is drastically changing the online business environment. Businesses are helped to run faster at reduced costs.
                </p>
                <p>
                  Shivaami combines its commitment to the latest technology with customer satisfaction. Our passion is to fulfill customer needs effectively. Businesses are helped to grow faster and more efficiently through innovative solutions.
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '20+', label: 'Years of Excellence' },
                { number: '20,000+', label: 'Clients Served' },
                { number: '50+', label: 'Technology Partners' },
                { number: '100+', label: 'Expert Professionals' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-2xl border border-[#e2e8f0] text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-2">{stat.number}</div>
                  <div className="text-sm text-[#475569]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Vision & Mission Section
function VisionMissionSection() {
  const cards = [
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'Our vision is to become the most sought-after name as a cloud email solution provider globally. We will do this with passion and relentless commitment to client needs.',
      gradient: 'from-[#38B6FF] to-[#0C4594]',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: "Our company's mission is to enhance people's abilities and the performance of their organizations. With the help of a cloud-based collaboration suite and trained professionals, we help businesses drive growth and achieve more.",
      gradient: 'from-[#0C4594] to-[#082d61]',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Company Vision & Mission
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Driving innovation and excellence in cloud and cybersecurity solutions
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="relative overflow-hidden rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                <div className="relative p-8 md:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/90 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const features = [
    { icon: Shield, title: 'Authorized Partner', desc: 'Certified partnerships with leading technology brands' },
    { icon: Users, title: 'Expert Team', desc: 'Directly trained by technology partners' },
    { icon: Zap, title: 'Innovative Solutions', desc: 'Cutting-edge cloud and AI solutions' },
    { icon: CheckCircle2, title: 'Customer Focus', desc: 'Passion to fulfill customer needs effectively' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Why Choose Shivaami
          </h2>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-[#f8fafc] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#475569]">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you leverage the power of cloud technology and cybersecurity solutions to drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lets-connect">
              <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg rounded-xl">
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <VisionMissionSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}