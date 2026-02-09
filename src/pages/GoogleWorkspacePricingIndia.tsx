import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ArrowRight, HelpCircle, ChevronDown, Phone, MapPin, Award, Users, Clock, Building2, CreditCard, Mail, Shield, Zap, Star, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useRegion } from '@/contexts/RegionContext';
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
        </div>
      </motion.div>
    </section>
  );
}

// Pricing Plans Section
function PricingSection() {
  const { region } = useRegion();

  const plans = [
    {
      name: "Business Starter",
      prices: {
        india: { commit: "₹3,240", flex: "₹3,900" },
        usa: { commit: "$7", flex: "$8.4" }
      },
      popular: false,
      shopUrl: "https://www.shivaami.com/shop/product/google-workspace-business-starter-plan-pricing/",
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
      prices: {
        india: { commit: "₹12,960", flex: "₹15,600" },
        usa: { commit: "$14", flex: "$16.8" }
      },
      popular: true,
      shopUrl: "https://www.shivaami.com/shop/product/google-workspace-business-standard-plan-pricing/",
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
      prices: {
        india: { commit: "₹20,400", flex: "₹24,600" },
        usa: { commit: "$22", flex: "$26.4" }
      },
      popular: false,
      shopUrl: "https://www.shivaami.com/shop/product/google-workspace-business-plus-plan-pricing/",
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
      prices: {
        india: { commit: "Contact Sales", flex: "" },
        usa: { commit: "Contact Sales", flex: "" }
      },
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

  const priceNote = region === 'usa' ? "Per User/Month + Tax" : "Per User/Year + Tax";

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
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group cursor-pointer ${
                plan.popular ? 'lg:-mt-4 lg:mb-4' : ''
              }`}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 rounded-3xl blur-lg transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-[#38B6FF] via-[#0C4594] to-[#38B6FF] opacity-60 group-hover:opacity-100' 
                  : 'bg-gradient-to-r from-[#0C4594]/30 to-[#38B6FF]/30 opacity-0 group-hover:opacity-60'
              }`} />
              
              <div className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg group-hover:shadow-2xl ${
                plan.popular 
                  ? 'ring-2 ring-[#38B6FF]' 
                  : 'border border-[#e2e8f0]'
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#38B6FF] to-[#0C4594] text-white text-center py-3 text-sm font-bold tracking-wide">
                    <Star className="w-4 h-4 inline mr-2 animate-pulse" />
                    MOST POPULAR
                  </div>
                )}

                {/* Top accent line for non-popular */}
                {!plan.popular && (
                  <div className="h-1 bg-gradient-to-r from-[#0C4594] to-[#38B6FF]" />
                )}

                <div className="p-6">
                  {/* Plan Name with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-[#38B6FF] to-[#0C4594]' 
                        : 'bg-[#f1f5f9]'
                    }`}>
                      <Zap className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-[#0C4594]'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0C4594]">{plan.name}</h3>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-[#e2e8f0]">
                    {plan.isEnterprise ? (
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0C4594] to-[#38B6FF] bg-clip-text text-transparent">{plan.prices[region].commit}</div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-xs font-medium text-[#64748b] uppercase tracking-wide">Commit</span>
                          <span className="text-3xl font-bold text-[#0C4594]">{plan.prices[region].commit}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-medium text-[#64748b] uppercase tracking-wide">Flex</span>
                          <span className="text-xl font-semibold text-[#38B6FF]">{plan.prices[region].flex}</span>
                        </div>
                      </>
                    )}
                    <p className="text-xs text-[#94a3b8] mt-2 font-medium">{plan.isEnterprise ? "Custom Pricing" : priceNote}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#38B6FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#38B6FF]" />
                        </div>
                        <span className="text-sm text-[#475569]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {region === 'india' && plan.shopUrl ? (
                    <a href={plan.shopUrl} target="_blank" rel="noopener noreferrer">
                      <Button 
                        className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg hover:shadow-[#38B6FF]/30 hover:scale-[1.02]' 
                            : 'bg-[#0C4594] hover:bg-[#0a3d80] hover:shadow-lg'
                        } text-white rounded-xl`}
                      >
                        Buy Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link to="/contact">
                      <Button 
                        className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg hover:shadow-[#38B6FF]/30 hover:scale-[1.02]' 
                            : 'bg-[#0C4594] hover:bg-[#0a3d80] hover:shadow-lg'
                        } text-white rounded-xl`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
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
    { icon: Clock, value: "22", label: "Years of cloud technology experience" },
    { icon: Award, value: "250+", label: "Google Certified Professionals" },
    { icon: Phone, value: "24x7", label: "Customer support available" },
    { icon: Building2, value: "5", label: "Offices across India & USA" },
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
            <span><strong>India:</strong> Mumbai, Bengaluru, Chennai, Delhi</span>
            <span className="mx-2">|</span>
            <span><strong>USA:</strong> New Jersey</span>
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
      answer: "We accept Net Banking, Credit/Debit Cards, Razorpay, Cheque, DD, or NEFT/RTGS."
    },
    {
      question: "What counts as a Google Workspace user?",
      answer: "One user equals one email address. Group aliases like info@ or support@ are free."
    },
    {
      question: "Can you help me choose a plan?",
      answer: "Yes! Our experts recommend the best plan based on your team size and needs."
    },
    {
      question: "Why buy from Shivaami instead of Google?",
      answer: "Shivaami provides local partner support in India with integration, deployment, and training."
    },
    {
      question: "Flexible vs Annual plans?",
      answer: "Flexible plans allow adding/removing users anytime. Annual plans offer discounts."
    },
    {
      question: "Can I migrate from another email solution?",
      answer: "Yes, we migrate from Microsoft 365, Zoho, or Zimbra with full compatibility."
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0C4594]/20 to-[#38B6FF]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop" 
                  alt="FAQ Support"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Need Help?</p>
                      <p className="text-white/80 text-sm">We're here 24x7</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - FAQ */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0C4594] mb-6">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-white border border-[#e2e8f0] rounded-xl px-4 overflow-hidden hover:border-[#38B6FF]/30 transition-colors"
                  >
                    <AccordionTrigger className="text-[#0C4594] hover:text-[#38B6FF] text-left py-4 hover:no-underline text-sm">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#64748b] pb-4 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* <Link to="/contact" className="inline-block mt-6">
                <Button className="bg-[#0C4594] hover:bg-[#0a3d80] text-white font-medium px-6 py-3 rounded-xl">
                  Have more questions? Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link> */}
            </motion.div>
          </div>
        </div>
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
