import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import privacyBanner from '@/assets/banners/privacy-policy-banner.jpg';
import {
  Shield,
  Lock,
  ServerOff,
  Globe,
  Trash2,
  Mail,
  CheckCircle2,
  FileText,
  Database,
  EyeOff
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function SecureSightPrivacyPolicy() {
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
        <link rel="canonical" href="https://www.shivaami.com/securesight-privacy-policy" />
        <title>Privacy Policy for SecureSight | Shivaami Cloud Services</title>
        <meta name="description" content="Privacy Policy for the SecureSight Chrome Extension. Learn how Shivaami Cloud Services handles Google Workspace data with strict client-side processing and zero external server storage." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section ref={heroRef} className="relative flex items-center overflow-hidden">
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
                Privacy Policy for SecureSight
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-body"
              >
                SecureSight Chrome Extension — strict client-side processing, zero external server storage, and full Google API compliance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm text-white/60"
              >
                Effective Date: August 11, 2026
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Publisher Info */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/30 rounded-2xl p-6 border border-border/50"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Publisher:</strong> Shivaami Cloud Services ("Shivaami", "we", "us", or "our")
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-2">
                <strong className="text-foreground">Application:</strong> SecureSight Chrome Extension
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Core Data Commitment */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
                <h2 className="text-3xl font-display font-bold text-foreground">1. Core Data Commitment & Exclusive Purpose</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SecureSight is built on a strict, client-side architecture. All Google Workspace administrative data accessed by SecureSight is used solely and exclusively to provide and improve the visible, user-facing security auditing features within the extension interface.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Google user data is never used for any reason outside of delivering the core application functionality described in this policy. SecureSight does not sell, transfer, rent, or share Google user data with third parties, nor does it use Google data for advertising, marketing, analytics, or artificial intelligence (AI/ML) model training.
                </p>
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Core principle:</strong> Your data is used only to render the security auditing features you see inside the extension.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Google Workspace Data Accessed */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">2. Google Workspace Data Accessed and Processed</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                SecureSight requests read-only permissions via OAuth 2.0 strictly necessary to audit your organization's Google Workspace security posture:
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'User Email Address',
                    desc: 'Used solely to confirm authorization and display the active user identity within the extension header.'
                  },
                  {
                    title: 'Directory & Account Security Data',
                    desc: 'User enrollment status for 2-Step Verification (2SV), super admin privilege status, user account activity (dormancy &gt;30 days), and password strength indicators reported by Google Workspace Admin APIs.'
                  },
                  {
                    title: 'OAuth Application Tokens',
                    desc: 'Metadata for third-party applications authorized by domain users (including third-party AI logins) to calculate Shadow IT risks and evaluate third-party scope permissions.'
                  },
                  {
                    title: 'Mobile & Endpoint Device Inventory',
                    desc: 'Device encryption status, screen lock status, last sync timestamp, OS breakdown, and Management level (Basic vs. Advanced MDM).'
                  },
                  {
                    title: 'Drive Audit & Activity Logs',
                    desc: 'File sharing visibility settings (public vs. external links), external document download metrics, mass deletions, and sensitive document access counts.'
                  },
                  {
                    title: 'Domain Security Records',
                    desc: 'Public DNS records (SPF, DKIM, DMARC, MX) queried to evaluate domain authentication health.'
                  },
                  {
                    title: 'Service Usage & License Allocation',
                    desc: 'Active user counts for core services (Gmail, Drive, Calendar, Meet, Docs, Sheets, Slides) and license SKU allocations used to highlight unused licenses and potential cost optimizations.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Purpose Limitations */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
                <h2 className="text-3xl font-display font-bold text-foreground">3. Strict Purpose Limitations & Prohibited Uses</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                In compliance with the Google API Services User Data Policy, Shivaami Cloud Services enforces the following strict boundaries on all data accessed from Google APIs:
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { title: 'Functionality-Only Use', desc: 'Data obtained from Google APIs is processed only to render the local Trust Score, display security risk cards, calculate compliance readiness metrics (HIPAA, ISO 27001, GDPR), and present actionable remediation links directly in your Chrome extension window.' },
                  { title: 'No Secondary Operations', desc: 'Google user data is never used for internal operational analytics, market research, product commercialization, or feature benchmarking.' },
                  { title: 'No AI/ML Training', desc: 'Google user data is never transferred, exported, or used to train personalized or non-personalized artificial intelligence (AI) or machine learning (ML) models.' },
                  { title: 'No Advertising or Monetization', desc: 'Google user data is never used for target advertising, personalized ads, retargeting, interest-based tracking, or commercial data sales.' },
                  { title: 'No Third-Party Transfers', desc: 'Google user data is never shared, transferred, or disclosed to any third-party entity or service provider.' }
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-2xl p-6 border border-border/50">
                    <div className="flex items-start gap-3">
                      <EyeOff className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Local Processing & Storage */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ServerOff className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">4. Local Processing & Storage Architecture</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">A. Zero External Server Storage</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    SecureSight operates entirely within your local browser memory. Shivaami Cloud Services maintains no external servers or databases for SecureSight. No administrative data, audit logs, or personal information are ever transmitted to or stored on external servers owned by Shivaami or third parties.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">B. Local Chrome Storage</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Scan metrics and UI configuration settings (such as light/dark mode and checklist toggle states) are saved locally on your device via Chrome's chrome.storage.local API. This data remains on your machine and can be purged at any time.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">C. Ephemeral Token Management</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Authentication tokens are secured natively via the chrome.identity API, held in temporary browser memory, and used exclusively for direct requests to Google's official APIs (admin.googleapis.com, licensing.googleapis.com, www.googleapis.com).
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Direct Google API Endpoints */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
                <h2 className="text-3xl font-display font-bold text-foreground">5. Direct Google API Endpoints</h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                All network requests originate from your browser directly to official Google endpoints:
              </motion.p>

              <motion.div variants={fadeInUp} className="overflow-x-auto bg-background rounded-2xl border border-border/50">
                <table className="w-full text-left">
                  <thead className="bg-secondary/50 border-b border-border/50">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Endpoint Domain</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {[
                      { domain: 'admin.googleapis.com', purpose: 'Fetching Workspace directory, user security, report activity, and mobile device status.' },
                      { domain: 'www.googleapis.com', purpose: 'Verifying user identity and displaying administrator profile email.' },
                      { domain: 'licensing.googleapis.com', purpose: 'Auditing Workspace license assignments and SKU counts.' },
                      { domain: 'dns.google', purpose: 'Querying public DNS records (MX, SPF, DKIM, DMARC) for domain validation.' },
                      { domain: 'accounts.google.com', purpose: 'Revoking OAuth access tokens upon user sign-out.' }
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-foreground whitespace-nowrap">{row.domain}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Data Control and Permanent Deletion */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Trash2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">6. Data Control and Permanent Deletion</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Sign Out', desc: 'Clicking "Sign Out" revokes your Google OAuth token immediately and completely purges all cached scan results (lastScanResult, lastScanTime, and checklist states) from your browser\'s local storage.' },
                  { title: 'Extension Removal', desc: 'Uninstalling SecureSight or clearing Chrome extension storage permanently deletes all locally cached data from your machine.' },
                  { title: 'Revoking Authorization', desc: 'You can revoke SecureSight\'s access at any time via your Google Account Security Settings.' }
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Google API Compliance */}
        <section className="py-16 bg-secondary/20">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
                <h2 className="text-3xl font-display font-bold text-foreground">7. Google API Services User Data Policy Compliance</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SecureSight's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
                </p>
                <ul className="space-y-3">
                  {[
                    'Limited Use Disclosure: Google user data is used exclusively to provide user-facing security auditing features inside the extension.',
                    'No Human Inspection: No humans read your Google Workspace user data.'
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

        {/* Section 8: Contact Information */}
        <section className="py-16 bg-background">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
                <h2 className="text-3xl font-display font-bold text-foreground">8. Contact Information</h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For inquiries regarding this Privacy Policy or SecureSight's compliance practices:
                </p>
                <p className="text-lg font-semibold text-foreground mb-2">Shivaami Cloud Services</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Support Email:</strong>{' '}
                    <a href="mailto:webstore@shivaami5751.zohodesk.in" className="text-primary hover:underline">
                      webstore@shivaami5751.zohodesk.in
                    </a>
                  </li>
                  <li>
                    <strong>Feedback Portal:</strong>{' '}
                    <a href="https://forms.gle/your-feedback-form" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Shivaami Feedback Form
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
