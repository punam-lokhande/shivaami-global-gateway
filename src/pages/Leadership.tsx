import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductHeroSection from '@/components/sections/ProductHeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import careersBanner from '@/assets/banners/careers-banner.jpg';

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
    bio: "Punit established Shivaami in 1997 as an internet services company, building it into a trusted digital partner serving over 20,000 clients across industries. He has a strong ability to understand varied business needs and craft solutions that deliver meaningful impact. A firm believer in the power of the internet and marketing, Punit champions digital innovation as a catalyst for long-term, sustainable growth. He earned his MBA from Welingkar Institute of Management, Matunga, and is deeply influenced by his association with the Brahma Kumaris World Spiritual University. Combining entrepreneurial drive with strong spiritual values, Punit is committed to making a positive difference in the lives of one lakh people during his lifetime.",
    color: 'from-[#0C4594] to-[#38B6FF]',
    quote: "The purpose of Shivaami is to bring positive change in the lives of people we connect, by offering solutions and services which brings profit and happiness.",
    linkedinUrl: 'https://www.linkedin.com/in/punitshivaami/',
  },
  {
    name: 'Priyanka Khanna',
    role: 'Chief Revenue Officer',
    image: priyankaImg,
    bio: "Priyanka joined Shivaami in 2010 and has been instrumental in driving business development for its Cloud offerings. She excels at building and nurturing strong relationships — with clients, partners, vendors, and internal teams alike. A persuasive and intuitive leader, she has a keen eye for identifying talent and building high-performing teams. With deep expertise in partner and channel management, Priyanka also leads the company's marketing initiatives, overseeing the complete digital marketing landscape for Shivaami.",
    color: 'from-[#38B6FF] to-[#0C4594]',
    quote: "Building lasting relationships is the foundation of business success.",
    linkedinUrl: 'https://www.linkedin.com/in/priyankakhanna17/',
  },
  {
    name: 'Chetana Chaudhari',
    role: 'Chief Technology Officer',
    image: chetanaImg,
    bio: "Chetana brings over fourteen years of experience in the analysis, design, development, and implementation of internet, cloud, and business intelligence applications. She has a strong ability to translate business requirements into clear technical solutions and seamlessly integrate applications across platforms. From managing presales activities to coordinating with vendors, she handles multiple responsibilities with ease. A natural leader, Chetana consistently inspires and motivates her team to perform at their best.",
    color: 'from-[#0C4594] to-[#082d61]',
    quote: "Translating vision into technology solutions that drive impact.",
    linkedinUrl: 'https://www.linkedin.com/in/chetana-chaudhari-3117609/',
  },
  {
    name: 'Amee Thakkar',
    role: 'Chief Human Resources Officer',
    image: ameeImg,
    bio: "Amee is the cornerstone of Shivaami and a driving force behind its culture and growth. As a founding member, she plays a pivotal role in people management and organizational development. Her passion for women's empowerment has shaped Shivaami into a women-centric organization in India. She firmly believes that everyone possesses creativity and that life should be approached with a sense of joy and playfulness. Amee truly celebrates life at Shivaami, fostering an environment of positivity and inspiration.",
    color: 'from-[#38B6FF] to-[#0C4594]',
    quote: "Empowering people to be creative and take life in a playful way.",
    linkedinUrl: 'https://www.linkedin.com/in/amee-thakkar-45a119242/',
  },
];

// Hero Section
// HeroSection removed - using ProductHeroSection instead
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
                <a href={ceo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#0C4594] hover:bg-[#0a3a7a] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
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
            <Link to="/careers">
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
        <ProductHeroSection
          title={<>Meet Our <span className="text-[#38B6FF]">Leadership</span> Team</>}
          description="Visionary leaders with decades of experience driving innovation and excellence in cloud and cybersecurity solutions."
          backgroundImage={careersBanner}
          altText="Leadership Team"
          showCTA={false}
          showScheduleDemo={false}
        />
        <FeaturedLeader />
        <LeadershipGrid />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
