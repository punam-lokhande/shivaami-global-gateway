import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, TrendingUp, Shield, Calendar, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  {
    icon: Sparkles,
    title: 'Expert analysis on emerging technologies',
  },
  {
    icon: TrendingUp,
    title: 'Proven strategies to reduce IT costs',
  },
  {
    icon: Shield,
    title: 'Security updates and compliance guidance',
  },
  {
    icon: Calendar,
    title: 'Invitations to exclusive industry events',
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're subscribed!",
      description: "Welcome to the Shivaami newsletter. Check your inbox soon.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Newsletter | Shivaami</title>
        <meta name="description" content="Get the latest IT insights and Shivaami news delivered monthly. Expert analysis, cost-saving strategies, and security updates." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#38B6FF] rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0C4594] rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-medium text-[#0C4594]">Stay Updated</span>
                    <div className="h-px w-12 bg-[#38B6FF]" />
                    <span className="text-sm font-medium text-slate-500">Newsletter</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-[#0C4594] mb-4">
                    Never Miss an Update
                  </h1>

                  <p className="text-xl text-slate-600 mb-8">
                    Get the latest IT insights and Shivaami news delivered monthly.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-slate-800">What You'll Get:</h3>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#38B6FF]/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-[#0C4594]" />
                        </div>
                        <span className="text-slate-700">{benefit.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right - Subscription Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#38B6FF] to-[#0C4594] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#38B6FF]/20">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">Subscribe Now</h2>
                      <p className="text-slate-500 mt-2">Join thousands of IT professionals</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          placeholder="Your work email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-14 text-lg px-5 border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] hover:from-[#1a5ab8] hover:to-[#0C4594] text-white shadow-lg shadow-[#0C4594]/20 transition-all duration-300"
                      >
                        {isSubmitting ? 'Subscribing...' : 'Get Free Insights'}
                      </Button>
                    </form>

                    <p className="text-center text-sm text-slate-400 mt-6">
                      No spam, ever. Only valuable content. Unsubscribe with one click.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
