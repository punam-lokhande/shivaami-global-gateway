import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Globe, Building2, Sparkles } from 'lucide-react';
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
    color: 'from-[#0C4594] to-[#1a5ab8]',
    bgGradient: 'from-blue-50 to-slate-50',
    borderColor: 'border-[#0C4594]/20',
    accentColor: 'text-[#38B6FF]',
  },
  {
    region: 'USA',
    flag: '🇺🇸',
    phone: '+1 408 333 4844',
    email: 'usa@shivaami.com',
    address: '33 S Wood Avenue, Suite 439, Iselin, New Jersey - 08830',
    color: 'from-[#0C4594] to-[#38B6FF]',
    bgGradient: 'from-slate-50 to-blue-50',
    borderColor: 'border-[#38B6FF]/20',
    accentColor: 'text-[#0C4594]',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Royal Design */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Luxurious Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#0a3670]" />
        
        {/* Pattern Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338B6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-[#38B6FF]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#0C4594]/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Royal Crown Icon */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#38B6FF]/30 blur-xl rounded-full" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#38B6FF] to-[#0C4594] flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-display"
            >
              Get in <span className="text-[#38B6FF]">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            >
              Connect with our global team for premium cloud solutions
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent mx-auto"
            />
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Office Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#0C4594]/10 text-[#0C4594] text-sm font-semibold mb-4">
              <Globe className="w-4 h-4 inline mr-2" />
              Global Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C4594] mb-4 font-display">
              Our Offices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving clients across continents with dedicated local support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${office.bgGradient} rounded-3xl p-8 border-2 ${office.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${office.color} opacity-10 rounded-bl-[100px]`} />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${office.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{office.flag}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0C4594]">{office.region}</h3>
                      <p className={`text-sm font-medium ${office.accentColor}`}>Regional Office</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-5">
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/80 hover:bg-white transition-colors group/item"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center shadow-md`}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <p className="text-lg font-semibold text-[#0C4594] group-hover/item:text-[#38B6FF] transition-colors">{office.phone}</p>
                      </div>
                    </a>

                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/80 hover:bg-white transition-colors group/item"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center shadow-md`}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <p className="text-lg font-semibold text-[#0C4594] group-hover/item:text-[#38B6FF] transition-colors">{office.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Address</p>
                        <p className="text-[#0C4594] font-medium leading-relaxed">{office.address}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#0C4594]/10 text-[#0C4594] text-sm font-semibold mb-4">
                <Building2 className="w-4 h-4 inline mr-2" />
                Send Us a Message
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C4594] mb-4 font-display">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your requirements and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#0C4594]/20"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0C4594] mb-2">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="h-12 border-2 border-slate-200 focus:border-[#0C4594] rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0C4594] mb-2">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="h-12 border-2 border-slate-200 focus:border-[#0C4594] rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0C4594] mb-2">Phone Number</label>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="h-12 border-2 border-slate-200 focus:border-[#0C4594] rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0C4594] mb-2">Company Name</label>
                    <Input 
                      placeholder="Your Company" 
                      className="h-12 border-2 border-slate-200 focus:border-[#0C4594] rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0C4594] mb-2">Subject</label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="h-12 border-2 border-slate-200 focus:border-[#0C4594] rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0C4594] mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or requirements..." 
                    rows={5}
                    className="border-2 border-slate-200 focus:border-[#0C4594] rounded-xl resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button className="w-full h-14 bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] hover:from-[#0a3670] hover:to-[#0C4594] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#0C4594] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38B6FF]/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#38B6FF]/20 mb-6">
              <Phone className="w-8 h-8 text-[#38B6FF]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule a consultation with our cloud experts and discover how Shivaami can accelerate your digital journey.
            </p>
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2a9de0] text-white font-semibold px-8 h-14 text-lg rounded-xl shadow-lg">
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
