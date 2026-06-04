import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useRegion } from '@/contexts/RegionContext';
import referralHeroImage from '@/assets/banners/referral-program-hero.jpg';
import {
  Gift,
  Infinity as InfinityIcon,
  Wallet,
  Brain,
  Users,
  Shield,
  Cloud,
  GraduationCap,
  ClipboardCheck,
  Headphones,
  Mail,
  Phone,
} from 'lucide-react';

const benefits = [
  {
    icon: Gift,
    title: '$500 Reward',
    desc: 'We issue a $500 reward for every referred business that becomes a Shivaami client.',
  },
  {
    icon: InfinityIcon,
    title: 'No Limit on Referrals',
    desc: 'There is no cap on the number of referrals you can make. You will earn a reward for every successful introduction.',
  },
  {
    icon: Wallet,
    title: 'Choice of Reward',
    desc: 'You can choose how to receive your reward: as a direct electronic payment or as a credit applied to your Shivaami account for future services.',
  },
];

const whoToRefer = [
  { icon: Brain, title: 'AI Solutions', desc: 'Custom AI solutions, including agentic AI platforms, to automate workflows and enhance productivity.' },
  { icon: Users, title: 'Collaboration Solutions', desc: 'Expert implementation and optimization of Google Workspace.' },
  { icon: Shield, title: 'Security Solutions', desc: 'Cloud Security, Identity Management, and Data Backup.' },
  { icon: Cloud, title: 'Migration Services', desc: 'Professional migration to Google Cloud (GCP).' },
  { icon: GraduationCap, title: 'Professional Development', desc: 'Custom Technology Adoption and Training Programs.' },
  { icon: ClipboardCheck, title: 'Security Audits', desc: 'In-depth, actionable Security Assessments.' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Fully Managed IT Services for seamless operations.' },
];

export default function ReferralProgram() {
  const { region } = useRegion();
  const navigate = useNavigate();

  // This program is US-only — bounce non-US visitors back home.
  useEffect(() => {
    if (region !== 'usa') {
      navigate('/', { replace: true });
    }
  }, [region, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shivaami Referral Program | Earn $500 Per Referral</title>
        <meta
          name="description"
          content="Refer a business to Shivaami and earn a $500 reward for every successful introduction. No cap on referrals. Available for the USA region."
        />
      </Helmet>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-[120px] md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                  <Gift className="w-3.5 h-3.5" /> Shivaami Referral Program
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3">
                  Shivaami <span className="text-primary">Referral Program</span>
                </h1>
                <p className="text-lg md:text-xl font-semibold text-foreground mb-5">
                  Help Businesses Work Smarter, Safer, Smoother
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:contactus@shivaami.com?subject=Shivaami%20Referral%20Program">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Mail className="w-4 h-4" /> Refer via Email
                    </Button>
                  </a>
                  <a href="tel:+14083334844">
                    <Button size="lg" variant="outline">
                      <Phone className="w-4 h-4" /> +1 (408) 333-4844
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
                  <img
                    src={referralHeroImage}
                    alt="Shivaami Referral Program - Business Partnership"
                    className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it works / Benefits */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How does the referral program work?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you introduce a business seeking help with AI, Cloud, Collaboration solutions and services, you create an opportunity for them to thrive. To thank you for facilitating this new partnership, we will issue a <span className="font-semibold text-foreground">$500 reward</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who to Refer */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="max-w-2xl mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Who to Refer?
              </h2>
              <p className="text-muted-foreground">
                This program is ideal for businesses seeking to enhance their operations through smarter AI,
                safer cloud infrastructure, and smoother collaboration. Refer businesses that require:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whoToRefer.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to make a referral / CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent text-primary-foreground p-10 md:p-14">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,white,transparent_60%)]" />
              <div className="relative max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  How to Make a Referral
                </h2>
                <p className="text-base md:text-lg text-primary-foreground/90 mb-8">
                  Simply facilitate an introduction by contacting our team via email or phone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:contactus@shivaami.com?subject=Shivaami%20Referral%20Program"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    contactus@shivaami.com
                  </a>
                  <a
                    href="tel:+14083334844"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-primary-foreground font-semibold hover:bg-white/20 transition-colors backdrop-blur"
                  >
                    <Phone className="w-5 h-5" />
                    +1 (408) 333-4844
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}