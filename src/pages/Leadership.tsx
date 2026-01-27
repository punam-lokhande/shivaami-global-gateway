import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users2, ArrowRight, Linkedin, Mail, Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import leadership images
import punitImg from '@/assets/leadership/punit.jpg';
import priyankaImg from '@/assets/leadership/priyanka.jpg';
import chetanaImg from '@/assets/leadership/chetana.jpg';
import ameeImg from '@/assets/leadership/amee.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

// Leadership data
const leaders = [
  {
    name: 'Punit Thakkar',
    role: 'CEO & MD',
    image: punitImg,
    bio: "Punit started Shivaami as an Internet service company in 1997. He has a special way of meeting the specific needs of a wide and varied canvas of clients, numbering more than 20,000 at present. He believes passionately in the power of internet & marketing to grow businesses and industries. Punit has an MBA from Welingkar Institutes, Matunga. He is also a student of Brahma Kumari's World Spiritual University. Punit wants to help one lakh people in his lifetime.",
    color: 'from-[#0C4594] to-[#38B6FF]',
    quote: "The purpose of Shivaami is to bring positive change in the lives of people we connect, by offering solutions and services which brings profit and happiness.",
    linkedinUrl: 'https://www.linkedin.com/in/punitshivaami/',
  },
  {
    name: 'Priyanka Khanna',
    role: 'Chief Revenue Officer',
    image: priyankaImg,
    bio: "Priyanka joined Shivaami in 2010 and focuses on business development for Cloud offerings. Relationship management is her forte – whether it's with clients, team members or vendors. A persuasive leader, Priyanka is good at talent spotting and team building. She is an expert at partner & channel management. She manages the marketing and overlooks the entire gamut of digital marketing for Shivaami.",
    color: 'from-[#38B6FF] to-[#0C4594]',
    quote: "Building lasting relationships is the foundation of business success.",
    linkedinUrl: 'https://www.linkedin.com/in/priyankakhanna17/',
  },
  {
    name: 'Chetana Chaudhari',
    role: 'Chief Technology Officer',
    image: chetanaImg,
    bio: "Chetana has fourteen years experience in analysis, design, development and implementation of Internet, cloud and business intelligent internet applications. She has the ability to translate business requirements into technical specifications and can integrate multiple applications across platforms. From handling presales to vendors, she is a multi-tasker. A natural leader, she inspires and motivates everyone in the team to give their best.",
    color: 'from-[#0C4594] to-[#082d61]',
    quote: "Translating vision into technology solutions that drive impact.",
    linkedinUrl: 'https://www.linkedin.com/in/chetana-chaudhari-3117609/',
  },
  {
    name: 'Amee Thakkar',
    role: 'Chief Human Resources Officer',
    image: ameeImg,
    bio: "Amee is the core foundation of Shivaami. She takes over multiple roles such as handling accounts, people management & payment collection. Her zeal and passion for women's empowerment have made Shivaami a women-centric organization in India. She strongly believes that everyone is creative & should take life in a playful way.",
    color: 'from-[#38B6FF] to-[#0C4594]',
    quote: "Empowering people to be creative and take life in a playful way.",
    linkedinUrl: 'https://www.linkedin.com/in/amee-thakkar-45a119242/',
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
    <section ref={ref} className="relative h-[60vh] min-h-[500px] max-h-[600px] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#38B6FF]" />
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-[#38B6FF]/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Users2 className="w-5 h-5 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium tracking-wide">Our Leadership</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Meet Our <span className="text-[#38B6FF]">Leadership</span> Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Visionary leaders with decades of experience driving innovation and excellence in cloud and cybersecurity solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L60 91.7C120 83.3 240 66.7 360 58.3C480 50 600 50 720 54.2C840 58.3 960 66.7 1080 70.8C1200 75 1320 75 1380 75L1440 75V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}

// Featured Leader (CEO) Section
function FeaturedLeader() {
  const ceo = leaders[0];
  
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ceo.image} 
                  alt={ceo.name}
                  className="w-full h-[500px] object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#0C4594]">{ceo.name}</h3>
                    <p className="text-[#38B6FF] font-semibold">{ceo.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#38B6FF]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0C4594]/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C4594]/10 border border-[#0C4594]/20">
                <span className="text-[#0C4594] text-sm font-semibold">Founder & CEO</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0C4594]">
                Leading with Vision & Purpose
              </h2>
              
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0]">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-[#38B6FF]/20" />
                <p className="text-lg text-[#475569] italic leading-relaxed">
                  "{ceo.quote}"
                </p>
              </div>
              
              <p className="text-[#475569] leading-relaxed text-lg">
                {ceo.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                <button className="w-12 h-12 rounded-xl bg-[#0C4594] hover:bg-[#0a3a7a] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Linkedin className="w-5 h-5 text-white" />
                </button>
                {/* <button className="w-12 h-12 rounded-xl bg-[#38B6FF] hover:bg-[#2da8f0] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Mail className="w-5 h-5 text-white" />
                </button> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Leadership Card Component
function LeaderCard({ leader, index }: { leader: typeof leaders[0]; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="group h-full"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#e2e8f0] h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={leader.image} 
            alt={leader.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t ${leader.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Name and Role */}
          <h3 className="text-xl font-bold text-[#0C4594] mb-1">{leader.name}</h3>
          <p className="text-[#38B6FF] font-semibold text-sm mb-3">{leader.role}</p>
          
          {/* Quote */}
          <div className="relative bg-[#f8fafc] rounded-xl p-4 mb-4 border-l-4 border-[#38B6FF]">
            <p className="text-sm text-[#475569] italic">"{leader.quote}"</p>
          </div>
          
          {/* Bio */}
          <p className="text-sm text-[#475569] leading-relaxed flex-grow">
            {leader.bio}
          </p>
          
          {/* Social Links - Removed Email button as it's commented out */}
          <div className="flex gap-2 mt-6 pt-4 border-t border-[#e2e8f0]">
            <a
              href={leader.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#f8fafc] hover:bg-[#0C4594] text-[#475569] hover:text-white transition-all duration-300 group/btn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">Connect</span>
            </a>
            {/* <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#f8fafc] hover:bg-[#38B6FF] text-[#475569] hover:text-white transition-all duration-300 group/btn">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Leadership Grid Section
function LeadershipGrid() {
  const otherLeaders = leaders.slice(1);
  
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Our C-Level Leadership
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto text-lg">
            Meet the talented leaders who drive Shivaami's mission forward every day.
          </p>
        </motion.div>

        <motion.div 
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {otherLeaders.map((leader, idx) => (
            <LeaderCard key={idx} leader={leader} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Values Section
function ValuesSection() {
  const values = [
    { title: 'Innovation', desc: 'Constantly pushing boundaries in cloud technology', icon: '💡' },
    { title: 'Customer Focus', desc: 'Putting client needs at the heart of everything we do', icon: '🎯' },
    { title: 'Excellence', desc: 'Delivering exceptional quality in every solution', icon: '⭐' },
    { title: 'Integrity', desc: 'Building trust through transparency and honesty', icon: '🤝' },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#0C4594]/10 text-[#0C4594] text-sm font-semibold mb-4">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Our Core Values
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto text-lg">
            The principles that guide our leadership and drive our success
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 }
              }}
              className="relative bg-white p-8 rounded-2xl border border-[#e2e8f0] text-center hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C4594] to-[#38B6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#0C4594] group-hover:text-white mb-2 transition-colors">
                  {value.title}
                </h3>
                <p className="text-[#475569] group-hover:text-white/80 transition-colors">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#38B6FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of cloud and cybersecurity solutions in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lets-connect">
              <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                View Careers
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about-us">
              <Button size="lg" variant="outline" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg rounded-xl backdrop-blur-sm">
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedLeader />
        <LeadershipGrid />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
