import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { API_ENDPOINTS } from '@/utils/api';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegion } from '@/contexts/RegionContext';
import heroImage from '@/assets/banners/contact-hero.jpg';

const offices = [
  {
    region: 'India',
    flag: '🇮🇳',
    phone: '+91 775 784 1333',
    email: 'info@shivaami.com',
    address: '1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080',
    office_type: 'Headquarter',
  },
  {
    region: 'USA',
    flag: '🇺🇸',
    phone: '+1 (408) 333-4844',
    email: 'usa@shivaami.com',
    address: '33 S Wood Avenue, Suite 439, Iselin, New Jersey - 08830',
    office_type: 'Regional Office',
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const { region } = useRegion();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName) newErrors.fullName = 'Full name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!phone) newErrors.phone = 'Phone number is required.';
    if (!company) newErrors.company = 'Company name is required.';
    if (!message) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { fullName, email, phone, company, subject: '', message };

    if (!validate()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    fetch(API_ENDPOINTS.STORE_CONTACTUS_DETAILS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(() => {
        toast.success('Message sent successfully!');
        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
        setErrors({});
        navigate('/contact-us-thankyou');
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again.');
        console.error('Error submitting form:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Contact Form Component (used once, positioned absolutely on desktop)
  const ContactForm = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-xl"
    >
      {region === 'usa' && (
        <div className="mb-6">
          <a
            href="https://app.apollo.io/#/meet/40u-obp-ihl/30-min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full h-12 bg-[#38B6FF] hover:bg-[#2ba3e8] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Button>
          </a>
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-4 text-sm text-slate-500">or fill out the form</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-bold text-[#0C4594] mb-6 font-display">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors ${errors.fullName ? 'border-red-500' : ''}`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Company <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Your Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={`h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors ${errors.company ? 'border-red-500' : ''}`}
            />
            {errors.company && (
              <p className="text-xs text-red-500 mt-1">{errors.company}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className={`bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0C4594] transition-colors resize-none ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-[#0C4594] hover:bg-[#0a3670] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
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
  );

  const HeroIntro = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-2xl mx-auto pt-24"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
        Let's Connect
      </h1>
      <p className="text-lg md:text-xl text-white/80">
        Ready to transform your business? Get in touch with our team and we'll
        get back to you within 24 hours.
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-visible bg-gradient-to-br from-[#0C4594] to-[#1a5ab8]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Contact Shivaami"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>

        {/* Content Container - uses flex column on desktop to stack hero text + form */}
        <div className="relative z-10 container mx-auto px-4 pt-28 lg:pt-32 pb-8 lg:pb-16 flex flex-col">
          {/* Hero Text - flex-1 on desktop so it expands and centers in available space */}
          <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center lg:min-h-[180px] mb-8 lg:mb-12">
            {HeroIntro}
          </div>

          {/* Form - Centered, overlapping into next section on desktop */}
          <div className="flex justify-center lg:pb-0">
            <div className="lg:relative lg:top-16 lg:mb-[-8rem]">
              {ContactForm}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for mobile to account for normal form flow */}
      <div className="lg:hidden h-0" />

      {/* Global Offices Section */}
      <section className="relative py-16 md:py-20 lg:pt-64 bg-slate-50">
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
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#0C4594]/20 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <span className="text-3xl">{office.flag}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0C4594]">
                        {office.region}
                      </h3>
                      <p className="text-sm text-[#38B6FF] font-medium">
                        {office.office_type}
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-5">
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0C4594] flex items-center justify-center shadow-md">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                          Phone
                        </p>
                        <p className="text-lg font-semibold text-[#0C4594] group-hover/item:text-[#38B6FF] transition-colors">
                          {office.phone}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0C4594] flex items-center justify-center shadow-md">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                          Email
                        </p>
                        <p className="text-lg font-semibold text-[#0C4594] group-hover/item:text-[#38B6FF] transition-colors">
                          {office.email}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-3 rounded-xl">
                      <div className="w-11 h-11 rounded-xl bg-[#0C4594] flex items-center justify-center shadow-md flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                          Address
                        </p>
                        <p className="text-slate-700 font-medium leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
