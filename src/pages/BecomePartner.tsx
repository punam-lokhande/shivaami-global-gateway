import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Handshake, TrendingUp, Users, Award, CheckCircle, ArrowRight, 
  Rocket, Target, DollarSign, GraduationCap, HeadphonesIcon, Briefcase 
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: DollarSign,
    title: 'Revenue Growth',
    description: 'Access competitive margins and recurring revenue streams through our partner program.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Certification',
    description: 'Get certified on leading cloud platforms with our comprehensive training programs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: '24/7 partner support with dedicated account managers for your success.',
  },
  {
    icon: Target,
    title: 'Lead Sharing',
    description: 'Receive qualified leads and co-marketing opportunities in your region.',
  },
  {
    icon: Rocket,
    title: 'Go-to-Market Support',
    description: 'Marketing resources, sales tools, and campaign support to accelerate growth.',
  },
  {
    icon: Award,
    title: 'Recognition Program',
    description: 'Earn badges, awards, and public recognition for your achievements.',
  },
];

const requirements = [
  'Established IT services or consulting business',
  'Technical team with cloud or security experience',
  'Commitment to customer success and satisfaction',
  'Alignment with enterprise and SMB market focus',
  'Willingness to complete certification programs',
];

const onboardingSteps = [
  {
    step: '01',
    title: 'Apply',
    description: 'Submit your partnership application with business details and goals.',
  },
  {
    step: '02',
    title: 'Evaluate',
    description: 'Our team reviews your application and schedules an introduction call.',
  },
  {
    step: '03',
    title: 'Onboard',
    description: 'Complete partner onboarding, access training, and get certified.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Start selling with full support, resources, and lead opportunities.',
  },
];

const successOutcomes = [
  { metric: '200+', label: 'Active Partners' },
  { metric: '40%', label: 'Avg. Revenue Growth' },
  { metric: '95%', label: 'Partner Satisfaction' },
  { metric: '24/7', label: 'Support Available' },
];

export default function BecomePartner() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium mb-6"
            >
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-primary">Partner Program</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Grow Your Business with <span className="text-gradient">Shivaami</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Join our partner ecosystem and unlock new revenue streams, exclusive resources, 
              and dedicated support to accelerate your cloud services business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8">
                Download Partner Guide
              </Button>
            </motion.div>
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {successOutcomes.map((outcome, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <div className="text-sm text-muted-foreground">{outcome.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner with Shivaami?
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide everything you need to succeed in the cloud services market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-premium"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section ref={processRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Onboarding Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in four easy steps and begin growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {onboardingSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {idx < onboardingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section ref={benefitsRef} className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner Requirements
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're looking for ambitious partners who share our commitment to excellence 
                and customer success.
              </p>
              <ul className="space-y-4">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-lg"
            >
              <div className="text-center">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Apply today and our partner team will reach out within 48 hours.
                </p>
                <Button size="lg" className="w-full btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Apply for Partnership
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join 200+ Successful Partners
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with Shivaami and access the tools, training, and support you need 
              to grow your cloud services business.
            </p>
            <Button size="lg" variant="secondary" className="font-semibold px-8">
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
