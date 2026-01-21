import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, Building2, Users, Globe, CheckCircle2, Target, Lightbulb, Award, Heart, Cloud, Mail, Settings, Monitor, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

import caseStudiesBanner from '@/assets/banners/case-studies-banner.jpg';

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
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={caseStudiesBanner} alt="Micro Labs Case Study" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/85 to-[#0C4594]/60" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-32 pb-16">
        <div className="max-w-4xl">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6"
          >
            <Heart className="w-4 h-4" />
            Healthcare
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            Micro Labs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            A multi-faceted healthcare organization with state-of-the-art manufacturing facilities and R&D centers at par with international standards.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

function BusinessInfoStrip() {
  const stats = [
    { icon: Building2, label: 'Headquarters', value: 'South India' },
    { icon: Heart, label: 'Industry', value: 'Healthcare' },
    { icon: Database, label: 'Legacy System', value: 'IBM Lotus' },
    { icon: Users, label: 'Employees', value: '1,800' },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/70 text-sm mb-1">{stat.label}</p>
                <p className="text-white font-semibold">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChallengeSection() {
  const challenges = [
    'Lotus Notes was system dependent and difficult to manage email services',
    'License charges were quite high and not cost efficient',
    'Need to centralize email usage across the organization',
    'Reduce downtime, redundancy and occurrences of lost emails',
    'IT maintenance costs required a proper substitute solution',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              The Challenge
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C4594] mb-6">Legacy System Migration</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Micro Labs needed to move away from IBM Lotus Notes to a modern, cost-effective collaboration platform that could support their growing healthcare operations.
            </p>
            
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-gray-700">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-32 h-32 text-teal-600 mx-auto mb-6" />
                <p className="text-2xl font-bold text-[#0C4594]">Healthcare Excellence</p>
                <p className="text-gray-600">1,800 Employees Connected</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const solutions = [
    { icon: Cloud, title: 'Google Workspace Provisioning', description: 'Complete provisioning of Google Workspace Account for all users.' },
    { icon: Mail, title: 'Email Migration', description: 'Migrated legacy email from Lotus Notes using GSMME for IMAP migration.' },
    { icon: Settings, title: 'Mail Routing', description: 'Configured mail routing for seamless email flow across the organization.' },
    { icon: Monitor, title: 'Device Management', description: 'Set up device management for secure access across all endpoints.' },
    { icon: Database, title: 'Document Collaboration', description: 'Enabled document collaboration using Google Docs and Drive.' },
    { icon: Cloud, title: 'Change Management', description: 'Conducted change management and online training for all users.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            The Solution
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0C4594] mb-4">Google Workspace Migration</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive migration from Lotus Notes to modern cloud collaboration.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0C4594] mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const outcomes = [
    { metric: '80%', label: 'Support Reduction' },
    { metric: '0', label: 'Downtime Since Migration' },
    { metric: '1,800', label: 'Users Migrated' },
    { metric: '100%', label: 'Remote Access Enabled' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] to-[#1a5ab8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            The Outcomes
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Healthcare Transformation</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Shifting from Lotus Notes to Google Workspace was a major achievement for the organization.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{outcome.metric}</p>
              <p className="text-white/80">{outcome.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0C4594] mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-gray-600 text-lg mb-8">Let Shivaami Cloud Services help you migrate from legacy systems to Google Workspace.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0C4594] hover:bg-[#0C4594]/90">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#0C4594] text-[#0C4594]">
              <Link to="/case-studies">View More Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CaseStudyMicroLabs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BusinessInfoStrip />
      <ChallengeSection />
      <SolutionSection />
      <OutcomesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
