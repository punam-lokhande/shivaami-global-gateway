import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, ArrowRight, Users, Zap, Heart, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const jobOpenings = [
  {
    title: 'Social Media Manager',
    experience: '3-5 years',
    description: 'We are looking for a creative Social Media Manager to drive B2B strategies, manage paid campaigns, create thought-leadership content for CXOs, and oversee leadership LinkedIn profiles. You\'ll collaborate with marketing, explore influencer and podcast partnerships, track analytics, and ensure measurable results, while aligning storytelling with business goals.',
  },
  {
    title: 'Inside Sales Representative',
    experience: '0-2 years (Freshers can also apply)',
    description: 'Looking for individuals who will actively source new sales opportunities through emailing and cold-calling. Individuals who will understand consumer needs and identify sales opportunities. Should be able to handle customer queries and keep themselves updated on all the products and services for lead generation. Excellent communication and interpersonal skills are a must. Should be proficient in Google Workspace, Microsoft Office, and CRM software.',
  },
  {
    title: 'Business Development Executive',
    experience: '1-2 years',
    description: 'We are seeking individuals who will communicate with potential clients, make outbound calls, and follow up on leads. Keep themselves updated about the products and services for lead generation and also keep an update on competing products. Create a pipeline of opportunities for the organization. Should be proficient in Google Workspace, Microsoft Office, and CRM software. A multi-tasker with strong listening and sales skills.',
  },
  {
    title: 'Assistant Sales Manager',
    experience: '4-5 years',
    description: 'We are looking for experienced individuals who can expand the sales opportunities within the region and look for new opportunities. Individuals should be able to organize, supervise, and direct the work of the Sales team. The person must participate in operational and strategic planning and development of an annual budget for the business. Should be able to coordinate with the marketing department on lead generation.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Accelerate your career with continuous learning and development programs.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive team environment.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'Work with the latest cloud technologies from Google, Microsoft, and more.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible policies and benefits that support your well-being.',
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-accent" />
              <span className="text-white/90 text-sm font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your Career with Shivaami
            </h1>
            <p className="text-lg text-white/80">
              Join a team of passionate professionals transforming businesses through cloud technology. 
              Discover opportunities that match your skills and ambitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Join Shivaami?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job. Be part of a dynamic team shaping the future of cloud technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the perfect role for your career growth.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          Experience: {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          Mumbai, India
                        </span>
                      </div>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 group/btn"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-white/80 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
