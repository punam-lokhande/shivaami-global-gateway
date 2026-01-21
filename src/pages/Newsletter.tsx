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

      <main className="min-h-screen bg-[#0C4594] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_#38B6FF20_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_#38B6FF15_0%,_transparent_50%)]" />
          {/* Floating orbs */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 left-[10%] w-64 h-64 bg-[#38B6FF]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-[15%] w-80 h-80 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38B6FF]/5 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-[#38B6FF] to-transparent mb-8"
                  />

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Never Miss an
                    <span className="block text-[#38B6FF]">Update</span>
                  </h1>

                  <p className="text-xl text-white/70 mb-10 leading-relaxed">
                    Get the latest IT insights and Shivaami news delivered monthly.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-5">
                    <h3 className="text-sm font-semibold text-[#38B6FF] uppercase tracking-widest">What You'll Get</h3>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-[#38B6FF]/20 group-hover:border-[#38B6FF]/30 transition-all duration-300">
                          <benefit.icon className="w-5 h-5 text-[#38B6FF]" />
                        </div>
                        <span className="text-white/90 font-medium">{benefit.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right - Subscription Form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="relative">
                    {/* Glow effect behind card */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#38B6FF]/20 to-white/10 rounded-[2rem] blur-2xl" />
                    
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-10">
                      <div className="text-center mb-8">
                        <motion.div 
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-20 h-20 bg-gradient-to-br from-[#38B6FF] to-white/30 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-[#38B6FF]/30"
                        >
                          <Mail className="w-9 h-9 text-white" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-white">Subscribe Now</h2>
                        <p className="text-white/60 mt-2">Join thousands of IT professionals</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <Input
                            type="email"
                            placeholder="Your work email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-14 text-lg px-5 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#38B6FF] focus:ring-[#38B6FF]/30 backdrop-blur-sm"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 text-lg font-semibold bg-white text-[#0C4594] hover:bg-[#38B6FF] hover:text-white shadow-xl transition-all duration-300"
                        >
                          {isSubmitting ? 'Subscribing...' : 'Get Free Insights'}
                        </Button>
                      </form>

                      <p className="text-center text-sm text-white/50 mt-6">
                        No spam, ever. Only valuable content. Unsubscribe with one click.
                      </p>
                    </div>
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
