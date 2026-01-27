import { motion } from 'framer-motion'; // Import motion for animations
import { Phone, Mail, MapPin, Send, Globe, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { API_ENDPOINTS } from '@/utils/api';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  // State variables to hold form input values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = {
      fullName,
      email,
      phone,
      company,
      subject,
      message,
    };

    setIsLoading(true);

    // Send data to the API
    fetch(API_ENDPOINTS.STORE_CONTACTUS_DETAILS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        toast.success('Message sent successfully!');
        console.log('Form Submitted Successfully!', data);
        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setSubject('');
        setMessage('');
        navigate('/contact-us-thankyou');
      })
      .catch(error => {
        toast.error('Failed to send message. Please try again.');
        console.error('Error submitting form:', error);
      }).finally(() => {
        setIsLoading(false);
      });
  };

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

      {/* Office Cards Section - Primary Focus */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-3 font-display">
              Our Global Offices
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Reach out to our team at any of our locations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#0C4594]/20 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <span className="text-3xl">{office.flag}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0C4594]">{office.region}</h3>
                      <p className="text-sm text-[#38B6FF] font-medium">Regional Office</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-5">
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0C4594] flex items-center justify-center shadow-md">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Phone</p>
                        <p className="text-lg font-semibold text-[#0C4594] group-hover/item:text-[#38B6FF] transition-colors">{office.phone}</p>
                      </div>
                    </a>

                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0C4594] flex items-center justify-center shadow-md">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                        <p className="text-lg font-semibold text-[#0C4594] group-hover/item:text-[#38B6FF] transition-colors">{office.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-3 rounded-xl">
                      <div className="w-11 h-11 rounded-xl bg-[#0C4594] flex items-center justify-center shadow-md flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Address</p>
                        <p className="text-slate-700 font-medium leading-relaxed">{office.address}</p>
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
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-3 font-display">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100"
            >
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <Input 
                      type="email"
                      placeholder="john@company.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <Input 
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                    <Input 
                      placeholder="Your Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                  <Input 
                    placeholder="How can we help you?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" onClick={handleSubmit} disabled={isLoading} className="w-full h-12 bg-[#0C4594] hover:bg-[#0a3670] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
