import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function PartnerThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 text-center shadow-xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Application Submitted!
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Thank you for your interest in partnering with Shivaami. Our partner team will contact you within 48 hours.
              </p>

              {/* Back Button */}
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="lg"
                className="gap-2 rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </motion.div>

            {/* Bottom decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center mt-8 gap-2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="w-2 h-2 rounded-full bg-primary/30"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}