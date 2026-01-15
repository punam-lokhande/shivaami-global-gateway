import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const offices = [
  {
    region: 'India',
    flag: '🇮🇳',
    phone: '+91 775 784 1333',
    email: 'info@shivaami.com',
    address: '1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080',
  },
  {
    region: 'USA',
    flag: '🇺🇸',
    phone: '+1 408 333 4844',
    email: 'usa@shivaami.com',
    address: '33 S Wood Avenue, Suite 439, Iselin, New Jersey - 08830',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0C4594] to-[#1a5ab8] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Globe className="w-4 h-4 text-[#38B6FF]" />
              <span className="text-white/90 text-sm font-medium">Global Presence • Local Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
              Let's Connect
            </h1>
            <p className="text-lg text-white/70">
              Ready to transform your business? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* Contact Form - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-2 font-display">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                        <Input 
                          placeholder="John Doe" 
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                        <Input 
                          type="email" 
                          placeholder="john@company.com" 
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                        <Input 
                          placeholder="+91 98765 43210" 
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                        <Input 
                          placeholder="Your Company" 
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                      <Input 
                        placeholder="How can we help you?" 
                        className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        rows={4}
                        className="bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors resize-none"
                      />
                    </div>

                    <Button className="w-full h-12 bg-[#0C4594] hover:bg-[#0a3670] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Office Cards */}
                {offices.map((office, index) => (
                  <motion.div
                    key={office.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center shadow-md">
                        <span className="text-2xl">{office.flag}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0C4594]">{office.region} Office</h3>
                        <p className="text-sm text-muted-foreground">Regional Headquarters</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <a 
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#0C4594]/10 flex items-center justify-center group-hover:bg-[#0C4594] transition-colors">
                          <Phone className="w-4 h-4 text-[#0C4594] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-slate-700 group-hover:text-[#0C4594] transition-colors font-medium">{office.phone}</span>
                      </a>

                      <a 
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#0C4594]/10 flex items-center justify-center group-hover:bg-[#0C4594] transition-colors">
                          <Mail className="w-4 h-4 text-[#0C4594] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-slate-700 group-hover:text-[#0C4594] transition-colors font-medium">{office.email}</span>
                      </a>

                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#0C4594]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-[#0C4594]" />
                        </div>
                        <span className="text-slate-600 text-sm leading-relaxed">{office.address}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Connect Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-[#0C4594] to-[#1a5ab8] rounded-2xl p-6 text-white"
                >
                  <h3 className="text-lg font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Our experts are available to help you with any queries.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-[#0C4594] hover:bg-slate-100 font-semibold"
                  >
                    Schedule a Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
