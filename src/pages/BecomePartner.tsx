import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  TrendingUp, Rocket, Clock, Users, Headphones,
  FileText, GraduationCap, ArrowRight, Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import partnerBanner from '@/assets/banners/changepath-banner.jpg';
import partnershipImage from '@/assets/banners/partnership-handshake.jpg';
import { API_ENDPOINTS } from '@/utils/api';

const whyPartner = [
  {
    icon: TrendingUp,
    title: 'Boost Your Revenue',
    description: 'Access competitive margins and recurring revenue streams on cloud licenses and services.',
  },
  {
    icon: Rocket,
    title: 'Close Bigger Deals',
    description: 'Leverage our Google Cloud Premier Partner expertise to bid on complex enterprise projects with confidence.',
  },
  {
    icon: Users,
    title: 'Reduce Technical Overhead',
    description: 'Use our certified deployment and migration teams as your own "back-office" experts.',
  },
  {
    icon: Clock,
    title: 'Faster Time-to-Market',
    description: "Don't wait years to get certified. Start selling advanced cloud security and infrastructure solutions today.",
  },
];

const shivaamiAdvantage = [
  {
    icon: Users,
    title: 'Expert Architectural Support',
    description: "Don't let a technical question kill a deal. Our team of certified architects is available for joint sales calls and technical discovery sessions to ensure the solution fits the client's needs perfectly.",
  },
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    description: 'Your customers deserve the best. We provide high-priority support escalation, ensuring that if a problem arises, it is resolved with the speed and precision of a Premier Partner.',
  },
  {
    icon: FileText,
    title: 'White-Label Ready Services',
    description: 'Want to keep your brand front and center? We offer white-label migration and deployment services, allowing you to deliver expert results under your own company name.',
  },
  {
    icon: GraduationCap,
    title: 'Sales & Marketing Enablement',
    description: 'Get access to co-branded collateral, case studies from our 20,000+ successful deployments, and training sessions to help your sales team identify more cloud opportunities.',
  },
];

export default function BecomePartner() {
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    companyType: '',
    email: '',
    phone: '',
    products: '',
    reason: '',
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(API_ENDPOINTS.STORE_PARTNERWTHUS_DETAILS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      navigate('/become-partner/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Become a Partner | Shivaami Cloud Services</title>
        <meta name="description" content="Join the Shivaami Partner Program. Deploy world-class cloud solutions including Google Workspace, GCP, and AWS without the cost of maintaining a massive internal engineering team." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={partnerBanner}
            alt="Partner with Shivaami"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,69,148,0.95)] via-[rgba(12,69,148,0.85)] to-[rgba(12,69,148,0.6)]" />
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-20 sm:pt-24 lg:pt-28">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
            >
              Scale Your Business with Shivaami
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/90 max-w-2xl mb-6 sm:mb-8"
            >
              Whether you are a Reseller or Distributor, the Shivaami Partner Program is designed to help you deploy world-class cloud solutions—including Google Workspace, GCP, and AWS—without the cost of maintaining a massive internal engineering team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8"
              >
                Become a Shivaami Partner Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner with Shivaami?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Building a cloud practice is hard. Partnering with Shivaami makes it easy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyPartner.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Shivaami Advantage */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              The "Shivaami Advantage"
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              While you maintain your independent brand and business, you gain the "unfair advantage" of working with one of India's leading cloud partners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch max-w-7xl mx-auto">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                <img
                  src={partnershipImage}
                  alt="Business Partnership"
                  className="w-full h-full min-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >

              <div className="space-y-4">
                {shivaamiAdvantage.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section ref={formRef} className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Grow with the Shivaami Partner Program
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Join 100+ partners who are already scaling their businesses with Shivaami.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type of Company *</label>
                  <Input
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    placeholder="e.g., Reseller, Distributor, MSP"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Featured Products and Services</label>
                  <Input
                    name="products"
                    value={formData.products}
                    onChange={handleChange}
                    placeholder="e.g., Google Workspace, GCP, AWS"
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">Why do you want to partner with Shivaami?</label>
                <Textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Tell us about your business goals and how you'd like to collaborate..."
                  rows={4}
                  className="bg-background"
                />
              </div>

              <div className="mt-6 sm:mt-8">
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
