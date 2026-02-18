import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import termsBanner from '@/assets/banners/terms-conditions-banner.jpg';
import { 
  FileText, 
  Users, 
  Shield, 
  Lock, 
  Globe, 
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const contentPadding = "w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24";

export default function TermsAndConditions() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Shivaami Cloud Services</title>
        <meta name="description" content="Read the Terms and Conditions for using Shivaami Cloud Services website and services." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden"
        >
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <img
              src={termsBanner}
              alt="Terms and Conditions"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
          </motion.div>

          <motion.div 
            style={{ opacity: heroOpacity }}
            className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-24 sm:pb-28 md:pb-32 lg:pb-36"
          >
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.15] tracking-tight"
              >
                Terms and Conditions
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
              >
                Please read these Terms carefully before using our services.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-white/60"
              >
                Last Updated: January 2026
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                This website is operated by Shivaami Cloud Services Private Limited ("Shivaami," "we," "us," or "our"). By accessing or using our website and services, you ("user", "you," or "your") agree to be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully before using our services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                These Terms apply to all users, including browsers, customers, vendors, merchants, and content contributors. We may update these Terms at any time by posting changes on our website. Your continued use after changes constitutes acceptance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Acceptance of Terms */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">1. Acceptance of Terms</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  By visiting our website, purchasing products/services, or engaging with our platform, you accept these Terms, including referenced policies (e.g., Privacy Policy, Refund Policy) available via hyperlink. If you lack the authority to bind your organization, do not use our services.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Eligibility */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">2. Eligibility</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  You represent that you are at least 18 years old or the age of majority in your jurisdiction, have legal capacity to enter contracts, and (if acting for an organization) have binding authority. You will not use our services for illegal purposes, transmit viruses/malware, or violate laws (e.g., copyright). Breaches may result in immediate service termination.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Services Provided */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">3. Services Provided</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">Shivaami offers cloud-based solutions, including but not limited to:</p>
                <ul className="space-y-3">
                  {[
                    'Cloud email solutions (Google Workspace, Microsoft 365)',
                    'Chrome enterprise solutions',
                    'SaaS products and integrations',
                    'Cloud security services',
                    'Cloud platform services (Google Cloud Platform, AWS, Zoho, etc.)',
                    'Managed services and support packages',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  All services are subject to availability and may be modified, suspended, or discontinued at our discretion without Liability.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: User Accounts and Registration */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">4. User Accounts and Registration</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">To access certain features of our services, you may be required to create an account. You agree to:</p>
                <ul className="space-y-3">
                  {[
                    'Provide accurate, current, and complete information',
                    'Maintain and promptly update your account information',
                    'Maintain the security of your account credentials',
                    'Notify us immediately of any unauthorized access',
                    'Accept responsibility for all activities under your account',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  You are responsible for all account activity. We may suspend/terminate accounts at our discretion. As a Data Fiduciary under the DPDP Act 2023, we use reasonable safeguards for your data.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Consent and DPDP Compliance */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">5. Consent and DPDP Compliance</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">By utilizing Shivaami for billing, you ("Data Principal") provide unambiguous consent for us to:</p>
                <ul className="space-y-3">
                  {[
                    'Process your personal and financial data for invoicing and taxation.',
                    'Share necessary provisioning data with the Service Provider to activate your licenses.',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong className="text-foreground">Withdrawal:</strong> You may withdraw consent for billing services at any time
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Data Privacy */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">6. Data Privacy (Data Fiduciary Role)</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  Under the DPDP Act 2023, Shivaami acts as a Data Fiduciary for your billing information.
                </p>
                <p className="text-muted-foreground mb-4">
                  We ensure that your data is used only for the purpose of account management and statutory compliance.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Data Processors:</strong> You acknowledge that Service Providers (like Google or Microsoft) act as independent Data Fiduciaries/Processors for the data stored within their applications.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Pricing, Payment, Refunds */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">7. Pricing, Payment, Refunds and Cancellations</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  Prices are subject to change without notice. You agree to pay all fees, taxes, and provide valid payment details for subscriptions. We may refuse/cancel orders (e.g., fraudulent ones) and limit quantities. Refunds vary by product/service per our Refund Policy—software/subscriptions are generally non-refundable; hardware may qualify within limits; custom and consultancy services are non-refundable post-commencement.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: Intellectual Property Rights */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">8. Intellectual Property Rights</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  All content on our website, including text, graphics, logos, images, software, and documentation, is the property of Shivaami Cloud Services Private Limited or our licensors and is protected by intellectual property laws.
                </p>
                <p className="text-muted-foreground mb-4">You may not:</p>
                <ul className="space-y-3">
                  {[
                    'Reproduce, distribute, or modify our content without written permission',
                    'Use our trademarks, service marks, or branding without authorization',
                    'Reverse engineer, decompile, or disassemble any software or technology',
                    'Remove or alter any copyright, trademark, or proprietary notices',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 9: Acceptable Use Policy */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">9. Acceptable Use Policy</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">You agree not to use our services to:</p>
                <ul className="space-y-3">
                  {[
                    'Violate any applicable laws, regulations, or third-party rights',
                    'Transmit malware, viruses, or malicious code',
                    'Engage in unauthorized access or security breaches',
                    'Harass, threaten, or harm others',
                    'Distribute spam or unsolicited communications',
                    'Infringe on intellectual property rights',
                    'Engage in fraudulent or deceptive practices',
                    'Interfere with the proper functioning of our services',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Violation of this policy may result in immediate termination of your access to our services.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 10: Third-Party Services */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">10. Third-Party Services and Links</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  We provide "as is" access to third-party tools/links without warranties or liability for their content, privacy, or damages. Review their terms before use.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our services may integrate with or link to third-party platforms, tools, and websites. We do not control or endorse these third-party services and are not responsible for:
                </p>
                <ul className="space-y-3">
                  {[
                    'Their content, accuracy, or availability',
                    'Their privacy practices or terms of service',
                    'Any damages or losses resulting from your use of third-party services',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  You should review the terms and policies of any third-party services before using them.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 11: Accuracy and Availability */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">11. Accuracy and Availability</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  Information on our site is for general reference only—not guaranteed accurate/current. We may correct errors, update content, or discontinue services without notice/liability. Monitor changes yourself.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 12: Data Privacy and Security */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">12. Data Privacy and Security</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  Governed by our Privacy Policy. You consent to our practices and have DPDP rights (access, correction, erasure, withdrawal). We use industry-standard security, but cannot guarantee absolute protection. Credit card data is encrypted; other content may be transmitted unencrypted.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 13: Service Level and Availability */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">13. Service Level and Availability</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">While we strive to provide reliable and uninterrupted services, we do not guarantee:</p>
                <ul className="space-y-3">
                  {[
                    'Continuous, error-free operation',
                    'That our services will meet your specific requirements',
                    'That all defects will be corrected',
                    'Specific uptime percentages (unless specified in a separate Service Level Agreement)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  We reserve the right to suspend or modify services for maintenance, updates, or other operational reasons.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 14: Limitation of Liability */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">14. Limitation of Liability</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4 uppercase font-semibold text-sm">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHIVAAMI CLOUD SERVICES PRIVATE LIMITED, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AND PARTNERS SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="space-y-3">
                  {[
                    'Any indirect, incidental, special, consequential, or punitive damages',
                    'Loss of profits, revenue, data, or business opportunities',
                    'Service interruptions or data loss',
                    'Damages arising from your use or inability to use our services',
                    'Any claims by third parties',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Our total liability shall not exceed the amount you paid for the specific service giving rise to the claim in the 12 months preceding the event.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 15: Indemnification */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">15. Indemnification</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  You agree to indemnify, defend, and hold harmless Shivaami Cloud Services Private Limited and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="space-y-3">
                  {[
                    'Your use of our services',
                    'Your violation of these Terms',
                    'Your violation of any rights of third parties',
                    'Any content you submit or transmit through our services',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 16: Warranties and Disclaimers */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">16. Warranties and Disclaimers</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4 uppercase font-semibold text-sm">
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-3">
                  {[
                    'Warranties of merchantability or fitness for a particular purpose',
                    'Non-infringement of third-party rights',
                    'Accuracy, reliability, or completeness of content',
                    'Uninterrupted or error-free operation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 17: Termination */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">17. Termination</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">We may terminate or suspend your access to our services immediately, without prior notice, for:</p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Violation of these Terms',
                    'Fraudulent or illegal activity',
                    'Non-payment of fees',
                    'Any other reason at our sole discretion',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mb-4">Upon termination:</p>
                <ul className="space-y-3">
                  {[
                    'Your right to use our services ceases immediately',
                    'You remain liable for any outstanding fees',
                    'Provisions that should survive termination (including liability limitations and indemnification) remain in effect',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  You may terminate your account at any time by contacting us at <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 18: Governing Law */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">18. Governing Law and Jurisdiction</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 19: Dispute Resolution */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">19. Dispute Resolution</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  Before initiating any formal legal proceedings, you agree to first attempt to resolve disputes by contacting us at <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a>. We will work in good faith to resolve any issues.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 20: Severability */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">20. Severability</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  If any provision of these Terms is found to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 21: Entire Agreement */}
        <section className="py-16 bg-secondary/20">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">21. Entire Agreement</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Shivaami Cloud Services Private Limited regarding your use of our services.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 22: Contact Information */}
        <section className="py-16 bg-background">
          <div className={contentPadding}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">22. Contact Information</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                For questions, concerns, or notices regarding these Terms of Service, please contact us:
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Shivaami Cloud Services Private Limited</h3>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-4">India Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>1001, 10th Floor, Runwal R Square<br />LBS Road, Mulund West<br />Mumbai - 400080, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+917757841333" className="hover:text-foreground transition-colors">+91 775 784 1333</a>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-4">USA Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>33 S Wood Avenue, Suite 439<br />Iselin, New Jersey - 08830</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+14083334844" className="hover:text-foreground transition-colors">+1 408 333 4844</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Email: <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a></span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Website: <a href="https://www.shivaami.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.shivaami.com</a></span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground font-medium">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
