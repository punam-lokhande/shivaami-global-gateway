import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users2, ArrowRight, Linkedin, Mail } from 'lucide-react';
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
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

// Leadership data
const leaders = [
  {
    name: 'Punit Thakkar',
    role: 'CEO & MD',
    image: null,
    bio: "Punit started Shivaami as an Internet service company in 1997. He has a special way of meeting the specific needs of a wide and varied canvas of clients, numbering more than 20,000 at present. He believes passionately in the power of internet & marketing to grow businesses and industries. Punit has an MBA from Welingkar Institutes, Matunga. He is also a student of Brahma Kumari's World Spiritual University. Punit wants to help one lakh people in his lifetime.",
    color: 'from-[#0C4594] to-[#38B6FF]',
  },
  {
    name: 'Priyanka Khanna',
    role: 'Chief Revenue Officer',
    image: null,
    bio: "Priyanka joined Shivaami in 2010 and focuses on business development for Cloud offerings. Relationship management is her forte – whether it's with clients, team members or vendors. A persuasive leader, Priyanka is good at talent spotting and team building. She is an expert at partner & channel management. She manages the marketing and overlooks the entire gamut of digital marketing for Shivaami.",
    color: 'from-[#38B6FF] to-[#0C4594]',
  },
  {
    name: 'Chetana Chaudhari',
    role: 'Chief Technology Officer',
    image: null,
    bio: "Chetana has fourteen years experience in analysis, design, development and implementation of Internet, cloud and business intelligent internet applications. She has the ability to translate business requirements into technical specifications and can integrate multiple applications across platforms. From handling presales to vendors, she is a multi-tasker. A natural leader, she inspires and motivates everyone in the team to give their best.",
    color: 'from-[#0C4594] to-[#082d61]',
  },
  {
    name: 'Amee Thakkar',
    role: 'Chief Human Resources Officer',
    image: null,
    bio: "Amee is the core foundation of Shivaami. She takes over multiple roles such as handling accounts, people management & payment collection. Her zeal and passion for women's empowerment have made Shivaami a women-centric organization in India. She strongly believes that everyone is creative & should take life in a playful way.",
    color: 'from-[#38B6FF] to-[#0C4594]',
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
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#38B6FF]/20 blur-3xl" />
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
            <Users2 className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">Our Leadership</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-[1.15] tracking-tight"
          >
            Meet Our Leadership Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Visionary leaders driving innovation and excellence in cloud and cybersecurity solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

// Leadership Card Component
function LeaderCard({ leader, index }: { leader: typeof leaders[0]; index: number }) {
  const initials = leader.name.split(' ').map(n => n[0]).join('');
  
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#e2e8f0]">
        {/* Image/Avatar Section */}
        <div className={`relative h-64 bg-gradient-to-br ${leader.color} overflow-hidden`}>
          {/* Abstract decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10" />
          </div>
          
          {/* Initials Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-500">
              <span className="text-4xl font-bold text-white">{initials}</span>
            </div>
          </div>
          
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        {/* Content Section */}
        <div className="p-6 pt-2">
          {/* Name and Role */}
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-[#0C4594] mb-1">{leader.name}</h3>
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${leader.color} text-white`}>
              {leader.role}
            </span>
          </div>
          
          {/* Bio */}
          <p className="text-sm text-[#475569] leading-relaxed text-center">
            {leader.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3 mt-6">
            <button className="w-10 h-10 rounded-full bg-[#f8fafc] hover:bg-[#0C4594] flex items-center justify-center transition-all duration-300 group/social">
              <Linkedin className="w-4 h-4 text-[#475569] group-hover/social:text-white transition-colors" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#f8fafc] hover:bg-[#38B6FF] flex items-center justify-center transition-all duration-300 group/social">
              <Mail className="w-4 h-4 text-[#475569] group-hover/social:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Leadership Grid Section
function LeadershipGrid() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div 
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {leaders.map((leader, idx) => (
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
    { title: 'Innovation', desc: 'Constantly pushing boundaries in cloud technology' },
    { title: 'Customer Focus', desc: 'Putting client needs at the heart of everything we do' },
    { title: 'Excellence', desc: 'Delivering exceptional quality in every solution' },
    { title: 'Integrity', desc: 'Building trust through transparency and honesty' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Our Core Values
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
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
              className="relative bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-2xl border border-[#e2e8f0] text-center hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Decorative number */}
              <div className="absolute -top-4 -right-4 text-7xl font-bold text-[#0C4594]/5 group-hover:text-[#38B6FF]/10 transition-colors">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{value.title}</h3>
                <p className="text-sm text-[#475569]">{value.desc}</p>
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
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of cloud and cybersecurity solutions in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lets-connect">
              <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                View Careers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about-us">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg rounded-xl">
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
        <LeadershipGrid />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}