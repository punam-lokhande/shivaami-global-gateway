import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  ArrowRight, CalendarDays, Mail, FolderSync, FileText, Users, Clock, Shield, 
  UserCheck, AlertTriangle, Smartphone, Activity, Share2, AppWindow, UserX,
  FolderTree, ListFilter, Download, Building, Newspaper
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import GetStartedDialog from '@/components/GetStartedDialog';
import heroImage from '@/assets/banners/apps-script-banner.jpg';
import CTASection from '@/components/sections/CTASection';
import { Helmet } from 'react-helmet-async';

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

// Hero Section
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    document.title = "Google Apps Script Solutions | Shivaami Automation Services";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Automate Google Workspace with Apps Script. Custom automation for Gmail, Sheets, Calendar and more. Expert development from Shivaami.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Automate Google Workspace with Apps Script. Custom automation for Gmail, Sheets, Calendar and more. Expert development from Shivaami.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] max-h-[700px] flex items-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Apps Script Automation"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594]/60 via-transparent to-[#0C4594]/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight"
          >
            <span className="text-[#38B6FF]">Google Apps Script: Custom</span> Automation for Enterprises
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
            Google Apps Script is a low-code platform for automating Google Workspace. Build custom workflows, connect apps and APIs, and create business solutions that boost productivity, no coding expertise required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={() => document.dispatchEvent(new CustomEvent('openGetStartedDialog'))}
              size="lg"
              className="bg-[#38B6FF] hover:bg-[#0C4594] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Reusable Card with Background Image
function ImageCard({ icon: Icon, title, desc, image }: { icon: React.ElementType; title: string; desc: string; image: string }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 }
      }}
      className="relative rounded-2xl overflow-hidden group min-h-[320px] cursor-pointer"
    >
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/80 to-[#0C4594]/50 group-hover:from-[#0C4594] group-hover:via-[#0C4594]/85 group-hover:to-[#0C4594]/60 transition-all duration-300" />
      
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <div className="w-11 h-11 rounded-xl bg-[#38B6FF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// Calendar Solutions Section
function CalendarSolutionsSection() {
const calendarFeatures = [
    {
      icon: CalendarDays,
      title: 'Conflict Booking Restriction',
      desc: 'Restricts a user from booking more than one meeting room for the same time. Automatically deletes conflicting bookings to prevent double-bookings.',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Clock,
      title: 'Advance Booking Restriction',
      desc: 'Meeting rooms can be booked only within the defined advance time period (e.g., 7 days). Only admins can book beyond this window.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: CalendarDays,
      title: 'Full-Day Booking Restriction',
      desc: 'Meeting rooms can only be booked for a defined period of time. Only admins can book full-day events, ensuring proper resource management.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Clock,
      title: 'Maximum Meeting Duration Restriction',
      desc: 'Delete events scheduled beyond the permissible timeline (e.g., 4 hours) and notify the user automatically.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Calendar Management Automations
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Smart booking management to optimise your meeting room resources.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calendarFeatures.map((feature, idx) => (
            <ImageCard key={idx} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Email Solutions Section
function EmailSolutionsSection() {
const emailFeatures = [
    {
      icon: Users,
      title: 'Signature Management - HRMS Sync',
      desc: 'Automatically synchronise user attributes like name, designation and location from your HRMS to Google Workspace and embed them in the user\'s signature.',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Mail,
      title: 'Signature Management - Auto Update',
      desc: 'Update user signatures based on their Google Workspace user attributes. Ensures standard signature format for all users with centralised management.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: FolderSync,
      title: 'Email File Backup',
      desc: 'Save a copy of all attachments from emails to Google Drive. Serves as a backup repository and helps refer to documents easily.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: FileText,
      title: 'Email Delete - Thread',
      desc: 'Delete the complete email thread using the thread ID. Helps administrators delete complete email threads from users\' mailboxes.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Mail,
      title: 'Email Delete - Specific Message',
      desc: 'Delete a specific message from the email thread using the message ID. Helps delete emails shared accidentally within the domain.',
      image: 'https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: FileText,
      title: 'Email MIS',
      desc: 'Extract all emails from an inbox or from specific senders, and list them on a Google Sheet for collaboration. Ensures no important emails are missed.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Email Management Automations
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Streamline email management and maintain consistent branding.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailFeatures.map((feature, idx) => (
            <ImageCard key={idx} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Security & Compliance Section
function SecurityComplianceSection() {
const securityFeatures = [
    {
      icon: AlertTriangle,
      title: 'Users Without Recovery',
      desc: 'List of users who did not add a recovery email ID. Helps maintain account security standards.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Activity,
      title: 'Last Login Information',
      desc: 'Track user last login information from the last 6 months of logs. Helps identify account usage patterns.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Shield,
      title: '2SV Enablement Status',
      desc: 'List of users who did not enable 2-step verification. Critical for security compliance.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: UserCheck,
      title: 'User Creation & Deletion',
      desc: 'Lists users created and deleted within a defined time period (last 6 months only). Helps with audit account management.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Smartphone,
      title: 'Device Compliance Logs',
      desc: 'Helps identify non-compliant devices from where the organisation\'s data is being accessed.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Smartphone,
      title: 'Device OS Logs',
      desc: 'Fetches the client OS details from where the organisation data is being accessed. Helps maintain device inventory.',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Activity,
      title: 'Administrator Activity Logs',
      desc: 'Fetches admin log events for a defined number of days. Helps focus on limited logs instead of the entire log bank.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Share2,
      title: 'External File Sharing',
      desc: 'Helps retrieve logs for files shared externally. Critical for data loss prevention.',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: AppWindow,
      title: 'Third-Party Application Logs',
      desc: 'Identifies third-party applications connected with user accounts. Critical to assess security posture.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: UserX,
      title: 'Inactive Users',
      desc: 'Helps identify users who have not signed in for a defined time range. Supports license optimisation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Security & Compliance Automations
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Monitor security posture and maintain compliance standards.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {securityFeatures.map((feature, idx) => (
            <ImageCard key={idx} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Data & Reporting Section
function DataReportingSection() {
const dataFeatures = [
    {
      icon: FolderTree,
      title: 'Folder Path Retrieval',
      desc: 'If the user has root folder access, retrieve the file/folder path of subfolders. Simplifies navigation.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: ListFilter,
      title: 'User Attribute Lists',
      desc: 'Lists users as per the required user attribute (e.g., designation, location). Helps segment the user base.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Download,
      title: 'Top Drive Users',
      desc: 'Lists users who have the highest download count. Helps identify heavy data users.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Building,
      title: 'OU Member Count',
      desc: 'List user count from a specific OU. Helps reduce admin efforts in user management.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Newspaper,
      title: 'Google Workspace Updates List',
      desc: 'Fetches Google Workspace updates to a Google Sheet as per the defined time range. Keeps teams informed of platform changes.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Data & Reporting Automations
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Generate insights and maintain organised data across your workspace.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {dataFeatures.map((feature, idx) => (
            <ImageCard key={idx} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function AppsScript() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDialogOpen(true);
    document.addEventListener('openGetStartedDialog', handler);
    return () => document.removeEventListener('openGetStartedDialog', handler);
  }, []);

  return (
    <>
      <Helmet>
        <title>Google Apps Script Solutions for Google Workspace | Shivaami</title>
        <meta name="description" content="Automate Calendar, Gmail, Drive & more with Shivaami's ready-to-deploy Google Apps Script solutions. Custom scripts built for enterprises. Get started today." />
        <link rel="canonical" href="https://www.shivaami.com/apps-script" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <CalendarSolutionsSection />
          <EmailSolutionsSection />
          <SecurityComplianceSection />
          <DataReportingSection />
          <CTASection />
        </main>
        <Footer />
        <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </>
  );
}
