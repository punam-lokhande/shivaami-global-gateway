import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ArrowRight, HelpCircle, ChevronDown, Phone, MapPin, Award, Users, Clock, Building2, CreditCard, Mail, Shield, Zap, Star, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '@/assets/banners/google-workspace-banner.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

// Hero Section with Banner Image
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] max-h-[600px] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Google Workspace Pricing India"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      {/* Content - Left aligned with full width layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-8 lg:px-16 xl:px-24 pt-24 lg:pt-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#38B6FF]" />
            <span className="text-white/90 text-sm font-medium">India's Trusted Google Workspace Partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-[1.15] tracking-tight"
          >
            Pick the Plan That<br />
            <span className="text-[#38B6FF]">Powers Your Work</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-white/80 max-w-2xl mb-8 leading-relaxed font-body"
          >
            Google Workspace is a cloud-based productivity suite that helps teams connect and work from anywhere. 
            Shivaami helps Indian businesses use Google Workspace effectively with the right plan for your needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Primary CTA */}
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#38B6FF] via-white to-[#38B6FF] rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-[#38B6FF] to-[#2da8f0] hover:from-[#2da8f0] hover:to-[#38B6FF] text-white font-bold px-10 py-7 text-lg group rounded-xl shadow-2xl shadow-[#38B6FF]/30 transition-all duration-300 border-2 border-white/30"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            
            {/* Secondary CTA */}
            <a href="tel:+917757841333">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-white/20 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-all duration-500" />
                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-bold px-10 py-7 text-lg rounded-xl shadow-xl transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 775 784 1333
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Pricing Plans Section
function PricingSection() {
  const plans = [
    {
      name: "Business Starter",
      commitPrice: "₹3,240",
      flexPrice: "₹3,900",
      priceNote: "Per User/Year + Tax",
      popular: false,
      features: [
        "30 GB storage per person",
        "Custom business email (you@yourcompany.com)",
        "Gemini AI assistant in Gmail",
        "Video meetings with 100 participants",
        "Google Vids video creator",
        "Security and management controls",
        "Standard support"
      ]
    },
    {
      name: "Business Standard",
      commitPrice: "₹12,960",
      flexPrice: "₹15,600",
      priceNote: "Per User/Year + Tax",
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "2 TB storage (65x more than Starter)",
        "Custom email layouts and mail merge",
        "Gemini AI in Gmail, Docs, and Meet",
        "NotebookLM with expanded features",
        "Video meetings with 150 participants",
        "Meeting recording and noise cancellation",
        "Appointment booking pages",
        "eSignature in Docs and PDFs",
        "Data migration tool"
      ]
    },
    {
      name: "Business Plus",
      commitPrice: "₹20,400",
      flexPrice: "₹24,600",
      priceNote: "Per User/Year + Tax",
      popular: false,
      features: [
        "Everything in Standard, plus:",
        "5 TB storage (2.5x more than Standard)",
        "Custom email with eDiscovery",
        "Video meetings with 500 participants",
        "Meeting attendance tracking",
        "Vault for data retention and search",
        "Secure LDAP",
        "Advanced endpoint management",
        "Enhanced security controls"
      ]
    },
    {
      name: "Enterprise",
      commitPrice: "Contact Sales",
      flexPrice: "",
      priceNote: "Custom Pricing",
      popular: false,
      isEnterprise: true,
      features: [
        "All features above, plus:",
        "5 TB storage or more",
        "Custom email with S/MIME encryption",
        "Video meetings with 1,000 participants",
        "In-domain live streaming",
        "Data loss prevention (DLP)",
        "Context-aware access",
        "Enterprise data regions",
        "Cloud Identity Premium",
        "AI Classification for Drive",
        "Enhanced support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Choose Your Google Workspace Plan
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Each plan includes Gmail, Drive, Meet, Calendar, Docs, Sheets, Slides, and Forms. Gemini for Google Workspace is available as an add-on.
          </p>
        </motion.div>

        {/* Pricing Legend */}
        <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0C4594]" />
            <span className="text-sm text-[#475569]"><strong>Commit:</strong> Annual commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#38B6FF]" />
            <span className="text-sm text-[#475569]"><strong>Flex:</strong> Monthly flexibility</span>
          </div>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 }
              }}
              className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-[#38B6FF] shadow-xl shadow-[#38B6FF]/20' 
                  : 'border-[#e2e8f0] hover:border-[#38B6FF]/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#38B6FF] to-[#0C4594] text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className={`p-6 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-[#0C4594] mb-4">{plan.name}</h3>

                {/* Pricing */}
                <div className="mb-6">
                  {plan.isEnterprise ? (
                    <div className="text-2xl font-bold text-[#0C4594]">{plan.commitPrice}</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm text-[#475569]">Commit:</span>
                        <span className="text-2xl font-bold text-[#0C4594]">{plan.commitPrice}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-[#475569]">Flex:</span>
                        <span className="text-xl font-semibold text-[#38B6FF]">{plan.flexPrice}</span>
                      </div>
                    </>
                  )}
                  <p className="text-xs text-[#94a3b8] mt-2">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#475569]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/contact">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:opacity-90' 
                        : 'bg-[#0C4594] hover:bg-[#0a3d80]'
                    } text-white font-semibold py-3`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p {...fadeInUp} className="text-center text-sm text-[#64748b] mt-8">
          <strong>Note:</strong> Business plans support up to 300 users. Enterprise plans have no user limits.
        </motion.p>
      </div>
    </section>
  );
}

// Why Choose Shivaami Section
function WhyShivaamiSection() {
  const strengths = [
    { icon: Clock, value: "21+", label: "Years of cloud technology experience" },
    { icon: Award, value: "250+", label: "Google Certified Professionals" },
    { icon: Phone, value: "24x7", label: "Customer support available" },
    { icon: Building2, value: "6", label: "Offices across India & USA" },
    { icon: Users, value: "20,000+", label: "Satisfied customers" },
    { icon: Star, value: "6", label: "Years as Award-winning Google Cloud Partner" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Why Choose Shivaami?
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Shivaami is a leading cloud solutions company. We've been helping businesses since 2004. 
            We're an authorized Google Workspace reseller in India.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-4 bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-2xl border border-[#e2e8f0] hover:shadow-lg hover:border-[#38B6FF]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0C4594]">{item.value}</div>
                  <p className="text-sm text-[#64748b]">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Office Locations */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <p className="text-[#475569] flex items-center justify-center gap-2 flex-wrap">
            <MapPin className="w-5 h-5 text-[#38B6FF]" />
            <span><strong>India:</strong> Mumbai, Bengaluru, Chennai, Delhi, Surat</span>
            <span className="mx-2">|</span>
            <span><strong>USA:</strong> New Jersey, San Francisco</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What payment options are available?",
      answer: "We accept Net Banking, Credit/Debit Cards, and Razorpay. You can also pay via Cheque, Demand Draft, or NEFT/RTGS."
    },
    {
      question: "What counts as a Google Workspace user?",
      answer: "One user equals one email address (you@yourcompany.com). Group aliases like info@ or support@ are free."
    },
    {
      question: "Can you help me choose a plan?",
      answer: "Yes! Our experts will recommend the best plan. We consider your team size, storage needs, and features required."
    },
    {
      question: "Why buy from Shivaami instead of Google?",
      answer: "Google offers similar pricing for direct purchases. However, Shivaami provides local partner support in India. We help with integration, deployment, migration, and training."
    },
    {
      question: "What's the difference between flexible and annual plans?",
      answer: "Flexible plans let you add or remove users anytime. Annual plans offer discounts but require a one-year commitment."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade anytime with our help. We ensure a smooth transition as your needs grow."
    },
    {
      question: "What support do you provide?",
      answer: "We offer onboarding assistance and user training. Our team provides ongoing technical support too. We're here to answer questions and troubleshoot issues."
    },
    {
      question: "Can I buy individual Google Workspace apps?",
      answer: "No. Google Workspace is an all-in-one solution. All tools work together for maximum efficiency and value."
    },
    {
      question: "Can I use my existing domain?",
      answer: "Yes, you can use your existing domain name."
    },
    {
      question: "Can I migrate from another email solution?",
      answer: "Yes, many clients migrate from Microsoft 365, Zoho, or Zimbra. Google Workspace works across all devices without software installation. It's compatible with Microsoft Office files too."
    },
    {
      question: "We have 300+ users. Can we use Business Starter?",
      answer: "You can purchase 300 Business licenses. Buy additional licenses from the Enterprise plans. Business plans cannot exceed 300 total users."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3d80] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-white hover:text-[#38B6FF] text-left py-5 hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Contact our team today to get personalized pricing and expert guidance for your Google Workspace deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:opacity-90 text-white font-semibold px-10 py-6 text-lg group rounded-xl shadow-lg"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+917757841333">
              <Button
                size="lg"
                variant="outline"
                className="border-[#0C4594] text-[#0C4594] hover:bg-[#0C4594]/5 font-semibold px-10 py-6 text-lg rounded-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                +91 775 784 1333
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#64748b]">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#38B6FF]" />
              <span>Google Cloud Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#38B6FF]" />
              <span>6x Award Winner</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#38B6FF]" />
              <span>20,000+ Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function GoogleWorkspacePricingIndia() {
  return (
    <>
      <Helmet>
        <title>Google Workspace Pricing India | Plans & Pricing | Shivaami</title>
        <meta name="description" content="Google Workspace pricing for Indian businesses. Compare Business Starter, Standard, Plus & Enterprise plans. Get local support from Shivaami - India's trusted Google Cloud Partner." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <WhyShivaamiSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
