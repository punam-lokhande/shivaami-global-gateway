import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import privacyBanner from '@/assets/banners/privacy-policy-banner.jpg';
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
        <title>Privacy Policy | Shivaami Cloud Services</title>
        <meta name="description" content="Learn how Shivaami Cloud Services protects your privacy and handles your personal information. Read our comprehensive privacy policy." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative flex items-center overflow-hidden"
        >
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <img
              src={privacyBanner}
              alt="Privacy and data protection"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
          </motion.div>

          <motion.div 
            style={{ opacity: heroOpacity }}
            className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16"
          >
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.15] tracking-tight"
              >
                Privacy Policy
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
              >
                Shivaami Cloud Services Pvt. Ltd. is committed to protecting the privacy 
                and security of your personal information.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm text-white/60"
              >
                Last Updated: January 2026
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                This Privacy Policy describes how we collect, use, disclose and safeguard information when you 
                visit our website (www.shivaami.com), engage our services or interact with us as a customer, 
                partner, or visitor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This Privacy Policy is intended to comply with the Digital Personal Data Protection Act, 2023 ("DPDP Act"), to the extent it applies to our processing of digital personal data of Data Principals in India. For the purposes of the DPDP Act, Shivaami generally acts as a Data Fiduciary when we determine the purpose and means of processing personal data and as a processor (on behalf of our customers) where we process personal data strictly under their instructions in connection with certain cloud and managed services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This Privacy Policy also explains additional rights and protections that may apply to you under other laws, such as the General Data Protection Regulation ("GDPR") for users in the European Economic Area (EEA) or the United Kingdom.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Navigation */}
        <section className="py-8 bg-secondary/30 border-y border-border/50 sticky top-16 z-40 backdrop-blur-sm">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                  <p className="text-muted-foreground mb-4">When you engage with Shivaami as customer, partner or visitor, we may collect:</p>
                  <ul className="space-y-3">
                    {[
                      { title: 'Contact Information', desc: 'Name, business email address, phone number, job title, and company name' },
                      { title: 'Billing Information', desc: 'Company billing address, tax identification numbers payment details and other related details.' },
                      { title: 'Communication Records', desc: 'Correspondence through email, support tickets, chat, phone calls and other communication with us.' },
                      { title: 'Service Requests', desc: 'Technical requirements, configuration preferences, implementation details, support inquiries and other information you provide in connection with the services.' },
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
                      { title: 'Cookies and Similar Technologies', desc: 'Information collected through cookies, web beacons, pixel and similar tracking technologies (see Section 9)' },
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
                      { title: 'Technology Partners', desc: 'Google, Microsoft, AWS and other service providers with whom we partner' },
                      { title: 'Business Partners', desc: 'Resellers, distributors, implementation partners and referral partners.' },
                      { title: 'Public Sources', desc: 'Publicly available business information, corporate websites and professional directories' },
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
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                We use personal information for the purposes described below and only to the extent that such use is lawful, necessary and proportionate to our functions and activities.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '2.1 Service Delivery and Management',
                    items: [
                      'To Provision, configure and manage cloud services (Google Workspace, Microsoft 365, etc.)',
                      'To provide technical support, managed services and implementation services',
                      'To process service requests, manage user accounts and account administration',
                      'To monitor service performance, ensure availability and troubleshoot issues.'
                    ]
                  },
                  {
                    title: '2.2 Business and Contractual Operations',
                    items: [
                      'To Process orders, invoice and payments',
                      'To maintain and enhance our relationships with customers, partners and vendors.',
                      'To respond to your enquiries, feedback and complaints.',
                      'To perform and enforce the contracts that we have entered into with you or your organisation.'
                    ]
                  },
                  {
                    title: '2.3 Service Improvement and Development',
                    items: [
                      'To analyse service usage and user behaviour to improve our service, solutions and website.',
                      'To develop new features, integrations and offerings.'
                    ]
                  },
                  {
                    title: '2.4 Marketing and Communications',
                    items: [
                      'To send service-related communications, such as important updates, notices and administrative messages.',
                      'To share information about webinars, events, case studies, whitepapers and other educational content.',
                      'To provide information about new or existing products, services, offers and promotions that may be relevant to you.',
                      'Where required by law, we will obtain your consent before sending marketing communications and you may withdraw your consent or opt-out from such communications at any time by using the unsubscribe link in our emails or by contacting us.'
                    ]
                  },
                  {
                    title: '2.5 Legal and Security',
                    items: [
                      'Complying with legal obligations, regulations, court orders and legal processes.',
                      'Protecting rights, property, operation and the safety of our users, employees and the public.',
                      'Detect, prevent and respond to fraud, security incidents, abuse and other harmful activities against fraud, security threats, and unauthorised access',
                      'Enforcing our terms of service, agreements and policies to resolve disputes.',
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

        {/* Section 3: Lawful Basis for Processing */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">3. Lawful Basis for Processing</h2>
              </motion.div>

              {/* 3.1 DPDP Act */}
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">3.1 Under the DPDP Act (India)</h3>
                <p className="text-muted-foreground mb-4">
                  Where the DPDP Act applies, we process personal data of Data Principals in India based on one or more of the following grounds:
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    { title: 'Consent', desc: 'Where you have given or are deemed to have given consent for specified purposes, such as when you submit information through our website, sign up for marketing communications or use specific services that require consent.' },
                    { title: 'Certain Legitimate Uses Permitted by Law', desc: 'Including processing necessary for performance of a contract with you or your organisation, for compliance with legal obligations, to respond to medical or safety emergencies, for prevention and detection of fraud and cybersecurity incidents or for other legitimate uses permitted under the DPDP Act.' },
                    { title: 'Employment-Related Purposes', desc: 'Where processing is reasonably necessary for recruitment, HR management or other employment-related functions as permitted by the DPDP Act.' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{item.title}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  Where we rely on consent, you have the right to withdraw your consent at any time. Withdrawal will not affect processing that has already occurred before the withdrawal was received.
                </p>
              </motion.div>

              {/* 3.2 GDPR */}
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">3.2 Under the GDPR</h3>
                <p className="text-muted-foreground mb-4">
                  For users in the European Economic Area (EEA), we process personal information based on:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Contractual Necessity', desc: 'To fulfil our service agreements and deliver requested services' },
                    { title: 'Legitimate Interests', desc: 'To operate our business, improve services, and ensure security' },
                    { title: 'Legal Obligations', desc: 'To comply with applicable laws and regulations' },
                    { title: 'Consent', desc: 'Where you have provided explicit consent for specific processing activities' },
                  ].map((item, index) => (
                    <div key={index} className="bg-background rounded-xl p-4 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Data Sharing and Disclosure */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                <p className="text-muted-foreground mt-2">We may share information in the following circumstances:</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.1 Service Providers and Partners</h3>
                  <p className="text-muted-foreground mb-4">We may share personal data with carefully selected third parties that help us deliver our services or operate our business, such as:</p>
                  <ul className="space-y-3 mb-4">
                    {[
                      { title: 'Technology Vendors', desc: 'Google, Microsoft, AWS, and other cloud platform providers for service delivery' },
                      { title: 'Payment Processors', desc: 'Razorpay and other payment gateways for transaction processing' },
                      { title: 'SaaS Partners', desc: 'Third-party application providers whose solutions we resell or integrate' },
                      { title: 'Service Providers', desc: 'Hosting providers, analytics services, and support tools that assist our operations.' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-2">Where required, we enter into contracts with such parties that require them to:</p>
                  <ul className="space-y-2">
                    {[
                      'Act only on our documented instructions.',
                      'Implement appropriate technical and organisational security measures.',
                      'Not use personal data for their own independent purposes.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.2 Business Transfers</h3>
                  <p className="text-muted-foreground">
                    In the event of a merger, acquisition, reorganisation, joint venture or sale of assets, your information may be 
                    transferred to the acquiring entity, subject to continued protection consistent with this Privacy Policy and applicable law. We will notify you of any such change and the choices you may have.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">4.3 Legal Requirements and Protection of Rights</h3>
                  <p className="text-muted-foreground mb-4">
                    We may disclose information when required by law, regulation, legal process, or governmental request, or when necessary to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Comply with applicable law, regulation, legal process, or governmental request.',
                      'Protect the rights, property or safety of Shivaami, our users, employees or the public.',
                      'Detect, investigate and prevent fraud, security breaches or potentially prohibited or illegal activities.',
                      'Enforce our terms and conditions, policies and pursue available remedies.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                  { title: 'Encryption', desc: 'Data encryption in transit (TLS/SSL) and at rest, where applicable' },
                  { title: 'Access Controls', desc: 'Role-based access restrictions and authentication mechanisms' },
                  { title: 'Security Certifications', desc: 'ISO 27001:2013 certified information security management' },
                  { title: 'Regular Audits', desc: 'Ongoing security assessments and vulnerability testing' },
                  { title: 'Employee Training', desc: 'Security awareness and data protection training for all Employees.' },
                  { title: 'Incident Response', desc: 'Incident detection, response and remediation procedures, including notifications where required by law.' },
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mt-6 text-sm italic">
                While we employ industry-standard security practices, no method of transmission or storage is completely 
                secure. We cannot guarantee absolute security, but we are committed to protecting your information using 
                reasonable and appropriate measures.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Data Retention */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                <p className="text-muted-foreground mb-4">We retain personal information for as long as is reasonably necessary to:</p>
                <ul className="space-y-3">
                  {[
                    'Fulfil the purposes outlined in this Privacy Policy',
                    'Comply with legal, regulatory, accounting or reporting requirements',
                    'Resolve disputes, enforce our agreements and protect our legal rights.',
                    'Maintain business records and continuity'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  We apply the principles of purpose limitation and storage limitation, and when personal information is no longer required, we will delete, anonymise, or otherwise dispose of it securely in accordance with applicable laws and our internal policies.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Your Rights and Choices */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                Your rights depend on the laws that apply to you, and we aim to handle all requests in a fair, transparent and reasonable manner. As we only act as a reseller and billing partner and do not access, process or store customer content or end‑user data within the services, your rights in relation to us are limited to the direct personal data you share with us.
              </motion.p>

              {/* 7.1 DPDP Act Rights */}
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">7.1 Rights Under the DPDP Act (India)</h3>
                <p className="text-muted-foreground mb-4">If you are a Data Principal in India and the DPDP Act applies, you may have the right to:</p>
                <ul className="space-y-2">
                  {[
                    'Obtain a summary of your personal data that we process, limited to the data you have directly shared with Shivaami and the related processing activities',
                    'Request correction or completion of inaccurate or incomplete personal data that you have provided to us.',
                    'Request erasure of such personal data when it is no longer necessary for the specified purpose or we are no longer legally required to retain it.',
                    'Withdraw consent at any time for processing based on consent.',
                    'Register a grievance with our Grievance Officer, and if you are not satisfied with the resolution, escalate the matter to the Data Protection Board of India as per applicable law.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  For clarity, any rights in relation to customer content or end‑user data held within the products or platforms (such as Google Workspace or Microsoft 365) must be exercised directly with the relevant OEM that controls that data, as we do not process or store such data.
                </p>
              </motion.div>

              {/* 7.2 GDPR Rights */}
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">7.2 Rights Under GDPR (EEA/UK)</h3>
                <p className="text-muted-foreground mb-4">Where GDPR applies, you may have the right to:</p>
                <ul className="space-y-2">
                  {[
                    'Access your personal data and obtain a copy limited to the personal data that you have shared with us as a reseller or billing partner.',
                    'Request rectification of inaccurate data we hold about you.',
                    'Request erasure of your data in certain circumstances.',
                    'Restrict or object to processing in certain circumstances.',
                    'Data portability where technically feasible and applicable for data you have provided to us and which we process by automated means on the basis of consent or contract.',
                    'Not to be subject to certain automated decision-making.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  These rights relate only to data for which we are a controller. For data controlled by the underlying cloud service provider or your organisation, you should exercise your rights directly with the Service Provider.
                </p>
              </motion.div>

              {/* 7.3 Other Choices */}
              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">7.3 Other Choices</h3>
                <p className="text-muted-foreground mb-4">Regardless of your location, you may:</p>
                <ul className="space-y-2">
                  {[
                    'Update your contact details and account information provided to us.',
                    'Opt out of marketing communications at any time, without affecting service-related communications that are necessary for billing or support.',
                    'Manage cookies and similar technologies through your browser or device settings (see Section 9).'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact for exercising rights */}
              <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <p className="text-muted-foreground mb-4">To exercise these rights, contact us at:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>Email: <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a></span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <span>Mail: Shivaami Cloud Services Pvt. Ltd., 1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080, India</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We will respond within the timeframes required by applicable law.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: International Data Transfers */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                  Shivaami operates and works with service providers and partners in multiple countries, including India and the United States. As a result, your personal information may be transferred to and processed in jurisdictions whose data protection laws may differ from those in your home country.
                </p>
                <p className="text-muted-foreground">
                  For Data Principals in India, personal data may be transferred outside India in accordance with the DPDP Act and any applicable government notifications, including to countries where our affiliates, cloud providers, or service providers are located. We will ensure that such transfers are undertaken in compliance with applicable law and subject to appropriate safeguards, where required.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 9: Cookies */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                <p className="text-muted-foreground mb-4">Our website and online services use cookies and similar technologies only in connection with your interactions directly with Shivaami as a website visitor, customer, partner or prospective customer. These technologies help us to:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Recognise you and maintain your session on our website.',
                    'Remember your preferences and settings (for example, language or form inputs).',
                    'Analyse site traffic, usage patterns and performance at an aggregated level.',
                    'Improve our website, services and overall user experience.',
                    'Support marketing and analytics activities relating to Shivaami\'s own offerings, where permitted by applicable law and your choices.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mb-4">
                  Cookies used by underlying cloud services such as Google Workspace, Microsoft 365 or other third‑party platforms are controlled by those providers and not by Shivaami in its role as reseller or billing partner.
                </p>
                <p className="text-muted-foreground mb-4">
                  You can typically control or disable cookies through your browser or device settings. Please note that disabling certain cookies may impact the functionality or performance of our website. For more detailed information, please refer to our Cookie Policy, where available.
                </p>
                <p className="text-muted-foreground">
                  You can typically control or disable cookies through your browser settings. Please note that disabling certain cookies may impact the functionality or performance of the website. For more detailed information, please refer to our Cookie Policy.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 10: Third-Party Links */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                  Our website and communications may contain links to third-party websites, applications or services, including those operated by our technology vendors, channel partners and other independent providers. These third parties have their own privacy policies, cookie practices and terms of use.
                </p>
                <p className="text-muted-foreground">
                  Shivaami does not control and is not responsible for the privacy, security or content of such third-party properties nor for any data you provide directly to them, or that is processed within their platforms (for example, within Google Workspace or Microsoft 365 environments or any third party). You should review the privacy policies and terms of any third-party websites or services you visit or use.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 11: Children's Privacy */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                <p className="text-muted-foreground mb-4">
                  Our services and website are intended for business and professional use and are not directed to individuals under 18 years of age.
                </p>
                <p className="text-muted-foreground mb-4">
                  In accordance with the DPDP Act, we do not knowingly collect or process personal data of children in India (individuals under 18 years) in our capacity as reseller and billing partner, except where such processing is clearly limited to direct contact or billing information provided with appropriate authority. If we become aware that personal data of a child has been provided to us without appropriate consent from a parent or lawful guardian, we will take reasonable steps to delete such data from our own systems promptly.
                </p>
                <p className="text-muted-foreground">
                  Any children's data processed within third-party cloud services is governed by the respective service provider and/or the customer organisation that controls that environment.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 12: Updates */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                  We may update or modify this Privacy Policy from time to time to reflect changes in our role as reseller and billing partner, our practices, services, technologies or applicable legal requirements.
                </p>
                <p className="text-muted-foreground mb-4">When we make material changes, we will:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Update the "Last Updated" date at the top of this Privacy Policy; and',
                    'Provide additional notice, such as a prominent notice on our website or direct communication to affected customers or partners, where appropriate.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  We encourage you to review this Privacy Policy periodically to stay informed about how Shivaami handles personal information that is directly shared with us.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 13 & 14: Contact Information */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div 
              className=""
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
                If you have questions, concerns or requests related to this Privacy Policy or to personal data that you have directly shared with Shivaami, you can contact us at:
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
                      <span>1001, 10th Floor, Runwal R Square<br />LBS Road, Mulund West<br />Mumbai – 400080, India</span>
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
                      <span>33 S Wood Avenue, Suite 439<br />Iselin, New Jersey – 08830</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+14083334844" className="hover:text-foreground transition-colors">+1 408 333 4844</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email: <a href="mailto:info@shivaami.com" className="text-primary hover:underline">info@shivaami.com</a></span>
                </div>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 text-sm italic">
                Please note that queries about data held within third‑party cloud platforms, like user content in Google Workspace or Microsoft 365 or any other third-party, should be directed to the relevant service provider or to the customer organisation that controls that environment. Shivaami, in its capacity as reseller and billing partner, does not store or process such customer content.
              </motion.p>

              {/* Grievance Officer */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">14. Grievance Officer (India)</h2>
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <p className="text-muted-foreground mb-4">
                    In accordance with Indian data protection regulations, including the DPDP Act, Shivaami has designated a Grievance Officer for issues relating to personal data that is directly shared with Shivaami. You may contact the Grievance Officer at:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span><strong className="text-foreground">Grievance Officer:</strong> Punit Thakkar</span><br />
                        <span><strong className="text-foreground">Designation:</strong> Managing Director and CEO</span>
                      </div>
                    </div>
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
                    We are committed to addressing grievances and complaints in a timely and transparent manner within the timelines prescribed under the DPDP Act and applicable rules. If you are not satisfied with the resolution provided by the Grievance Officer, you may have the right to escalate your complaint to the Data Protection Board of India in accordance with the DPDP Act and its implementing rules.
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
