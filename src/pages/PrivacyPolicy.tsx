import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Shield, 
  Database, 
  Lock, 
  FileText, 
  Globe, 
  Cookie, 
  Users, 
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

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Shivaami Cloud Services</title>
        <meta name="description" content="Learn how Shivaami Cloud Services protects your privacy and handles your personal information. Read our comprehensive privacy policy." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#0C4594] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white/90 text-sm font-medium">Your Privacy Matters</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              >
                Privacy Policy
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/80 mb-4"
              >
                Shivaami Cloud Services Pvt. Ltd. is committed to protecting the privacy 
                and security of your personal information.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-sm text-white/60"
              >
                Last Updated: January 2025
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shivaami Cloud Services Pvt. Ltd. ("Shivaami," "we," "us," or "our") is committed to protecting 
                the privacy and security of your personal information. As a leading provider of cloud solutions, 
                including Google Workspace, Microsoft 365, Chrome Solutions, and managed cloud services, we 
                understand the importance of data privacy in enterprise environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This Privacy Policy describes how we collect, use, disclose, and safeguard information when you 
                visit our website (www.shivaami.com), engage our services, or interact with us as a customer, 
                partner, or visitor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Navigation */}
        <section className="py-8 bg-secondary/30 border-y border-border/50 sticky top-16 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {[
                { icon: Database, label: 'Collection' },
                { icon: FileText, label: 'Usage' },
                { icon: Lock, label: 'Security' },
                { icon: Users, label: 'Your Rights' },
                { icon: Globe, label: 'Transfers' },
                { icon: Cookie, label: 'Cookies' },
              ].map((item, index) => (
                <button 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium text-muted-foreground"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Information We Collect */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">1. Information We Collect</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.1 Information You Provide Directly</h3>
                  <p className="text-muted-foreground mb-4">When you engage with Shivaami's services, we may collect:</p>
                  <ul className="space-y-3">
                    {[
                      { title: 'Contact Information', desc: 'Name, business email address, phone number, job title, and company name' },
                      { title: 'Account Information', desc: 'Credentials and authentication details for service provisioning' },
                      { title: 'Billing Information', desc: 'Company billing address, tax identification numbers, and payment details' },
                      { title: 'Communication Records', desc: 'Correspondence through email, support tickets, chat, or phone' },
                      { title: 'Service Requests', desc: 'Technical requirements, configuration preferences, and support inquiries' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.2 Information Collected Automatically</h3>
                  <p className="text-muted-foreground mb-4">When you visit our website or use our services, we automatically collect:</p>
                  <ul className="space-y-3">
                    {[
                      { title: 'Technical Information', desc: 'IP address, browser type, operating system, device information' },
                      { title: 'Usage Data', desc: 'Pages viewed, time spent on pages, navigation paths, and access times' },
                      { title: 'Cookies and Similar Technologies', desc: 'Information collected through cookies, web beacons, and similar tracking technologies' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">1.3 Information from Third Parties</h3>
                  <p className="text-muted-foreground mb-4">We may receive information from:</p>
                  <ul className="space-y-3">
                    {[
                      { title: 'Technology Partners', desc: 'Google, Microsoft, AWS, and other service providers with whom we partner' },
                      { title: 'Business Partners', desc: 'Resellers, distributors, and implementation partners' },
                      { title: 'Public Sources', desc: 'Publicly available business information and professional directories' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">2. How We Use Your Information</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                Shivaami uses collected information for the following purposes:
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '2.1 Service Delivery and Management',
                    items: [
                      'Provisioning and managing cloud services (Google Workspace, Microsoft 365, etc.)',
                      'Providing technical support and managed services',
                      'Processing service requests and account administration',
                      'Monitoring service performance and availability'
                    ]
                  },
                  {
                    title: '2.2 Business Operations',
                    items: [
                      'Processing billing and payments',
                      'Maintaining customer relationships',
                      'Responding to inquiries and communications',
                      'Fulfilling contractual obligations'
                    ]
                  },
                  {
                    title: '2.3 Service Improvement and Development',
                    items: [
                      'Analyzing usage patterns to improve our services',
                      'Developing new features and solutions',
                      'Conducting research and analytics',
                      'Enhancing security and performance'
                    ]
                  },
                  {
                    title: '2.4 Marketing and Communications',
                    items: [
                      'Sending service updates, product announcements, and relevant information about our offerings',
                      'Providing educational content, webinars, and industry insights',
                      'Sharing information about new products and services (with your consent where required)'
                    ]
                  },
                  {
                    title: '2.5 Legal and Security',
                    items: [
                      'Complying with legal obligations and regulatory requirements',
                      'Protecting against fraud, security threats, and unauthorized access',
                      'Enforcing our terms of service and agreements',
                      'Resolving disputes and investigating violations'
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-background rounded-2xl p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Legal Basis for Processing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">3. Legal Basis for Processing (GDPR)</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                For users in the European Economic Area (EEA), we process personal information based on:
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Contractual Necessity', desc: 'To fulfill our service agreements and deliver requested services' },
                  { title: 'Legitimate Interests', desc: 'To operate our business, improve services, and ensure security' },
                  { title: 'Legal Obligations', desc: 'To comply with applicable laws and regulations' },
                  { title: 'Consent', desc: 'Where you have provided explicit consent for specific processing activities' },
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Data Sharing and Disclosure */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">4. Data Sharing and Disclosure</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-8">
                <p className="text-lg font-medium text-foreground">
                  Shivaami does not sell your personal information.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.1 Service Providers and Partners</h3>
                  <ul className="space-y-3">
                    {[
                      { title: 'Technology Vendors', desc: 'Google, Microsoft, AWS, and other cloud platform providers for service delivery' },
                      { title: 'Payment Processors', desc: 'Razorpay and other payment gateways for transaction processing' },
                      { title: 'SaaS Partners', desc: 'Third-party application providers whose solutions we resell or integrate' },
                      { title: 'Service Providers', desc: 'Hosting providers, analytics services, and support tools that assist our operations' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.2 Business Transfers</h3>
                  <p className="text-muted-foreground">
                    In the event of a merger, acquisition, reorganization, or sale of assets, your information may be 
                    transferred to the acquiring entity. We will notify you of any such change and the choices you may have.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.3 Legal Requirements</h3>
                  <p className="text-muted-foreground mb-4">
                    We may disclose information when required by law, regulation, legal process, or governmental request, or when necessary to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Comply with legal obligations',
                      'Protect our rights, property, or safety',
                      'Prevent fraud or security threats',
                      'Enforce our terms and conditions'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.4 With Your Consent</h3>
                  <p className="text-muted-foreground">
                    We may share information with third parties when you have provided explicit consent for such disclosure.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Data Security */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">5. Data Security</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                We implement comprehensive security measures to protect your information:
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Encryption', desc: 'Data encryption in transit (TLS/SSL) and at rest where applicable' },
                  { title: 'Access Controls', desc: 'Role-based access restrictions and authentication mechanisms' },
                  { title: 'Security Certifications', desc: 'ISO 27001:2013 certified information security management' },
                  { title: 'Regular Audits', desc: 'Ongoing security assessments and vulnerability testing' },
                  { title: 'Employee Training', desc: 'Security awareness and data protection training for all staff' },
                  { title: 'Incident Response', desc: 'Established protocols for detecting and responding to security incidents' },
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mt-6 text-sm italic">
                While we employ industry-standard security practices, no method of transmission or storage is completely 
                secure. We cannot guarantee absolute security but are committed to protecting your information using 
                reasonable and appropriate measures.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Data Retention */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">6. Data Retention</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">We retain personal information for as long as necessary to:</p>
                <ul className="space-y-3">
                  {[
                    'Fulfill the purposes outlined in this Privacy Policy',
                    'Comply with legal, regulatory, accounting, or reporting requirements',
                    'Resolve disputes and enforce our agreements',
                    'Maintain business records and continuity'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  When information is no longer needed, we securely delete or anonymize it in accordance with our 
                  data retention policies and applicable laws.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Your Rights and Choices */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">7. Your Rights and Choices</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                Depending on your location, you may have the following rights:
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: '7.1 Access and Portability',
                    items: [
                      'Request access to your personal information',
                      'Receive a copy of your data in a structured, commonly used format'
                    ]
                  },
                  {
                    title: '7.2 Correction and Updates',
                    items: [
                      'Request correction of inaccurate or incomplete information',
                      'Update your contact preferences and account details'
                    ]
                  },
                  {
                    title: '7.3 Deletion and Restriction',
                    items: [
                      'Request deletion of your personal information (subject to legal retention requirements)',
                      'Request restriction of processing in certain circumstances'
                    ]
                  },
                  {
                    title: '7.4 Objection and Withdrawal',
                    items: [
                      'Object to processing based on legitimate interests',
                      'Withdraw consent where processing is based on consent',
                      'Opt-out of marketing communications at any time'
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">7.5 Exercising Your Rights</h3>
                <p className="text-muted-foreground mb-4">To exercise these rights, contact us at:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>Email: info@shivaami.com</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <span>Mail: Shivaami Cloud Services Pvt. Ltd., 1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080, India</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We will respond to your request within 30 days (or as required by applicable law).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: International Data Transfers */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">8. International Data Transfers</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  Shivaami operates primarily in India and the United States. Your information may be transferred to, 
                  stored, and processed in jurisdictions where we or our service providers operate.
                </p>
                <p className="text-muted-foreground mb-4">
                  When transferring data internationally, we ensure appropriate safeguards are in place, including:
                </p>
                <ul className="space-y-2">
                  {[
                    'Standard contractual clauses approved by relevant authorities',
                    'Adequacy decisions by regulatory bodies',
                    'Other legally compliant transfer mechanisms'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 9: Cookies */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">9. Cookies and Tracking Technologies</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">Our website uses cookies and similar technologies to:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Maintain user sessions and preferences',
                    'Analyze website traffic and usage patterns',
                    'Improve user experience and functionality',
                    'Understand visitor behavior for service improvement'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                   You can control cookie preferences through your browser settings. Note that disabling cookies may 
                   limit certain website functionality.
                 </p>
                 <p className="text-muted-foreground mt-4">
                   For detailed information about our cookie practices, please refer to our Cookie Policy.
                 </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 10: Third-Party Links */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">10. Third-Party Links and Services</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to third-party websites, applications, or services, including:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Partner product pages (Google, Microsoft, AWS)',
                    'Integration tools and SaaS applications',
                    'Educational resources and documentation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  We are not responsible for the privacy practices of these third parties. We encourage you to 
                  review their privacy policies before providing any information.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 11: Children's Privacy */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">11. Children's Privacy</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground">
                  Shivaami's services are intended for business use and are not directed to individuals under 18 years 
                  of age. We do not knowingly collect personal information from children. If we become aware that we 
                  have collected information from a child, we will take steps to delete it promptly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 12: Updates */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">12. Updates to This Privacy Policy</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices, services, or 
                  legal requirements. When we make material changes, we will:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Update the "Last Updated" date at the top of this policy',
                    'Notify you via email or prominent notice on our website',
                    'Provide a summary of significant changes where appropriate'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  We encourage you to review this Privacy Policy regularly to stay informed about how we protect 
                  your information.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 13 & 14: Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">13. Contact Information</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </motion.p>

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
                  <h3 className="text-lg font-semibold text-foreground mb-4">United States Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>33 S Wood Avenue, Suite 439<br />Iselin, New Jersey - 08830</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+14083334844" className="hover:text-foreground transition-colors">+1 (408) 333-4844</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email: <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a></span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground mt-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Privacy Compliance Officer: <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a></span>
                </div>
              </motion.div>

              {/* Grievance Officer */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">14. Grievance Officer (India)</h2>
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <p className="text-muted-foreground mb-4">
                    In accordance with Indian data protection regulations, our Grievance Officer can be contacted at:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>Email: <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a></span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Address: Shivaami Cloud Services Pvt. Ltd., 1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080, India</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    We are committed to resolving complaints and concerns in a timely and transparent manner.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
