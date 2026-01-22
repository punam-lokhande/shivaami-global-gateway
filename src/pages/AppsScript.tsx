import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  ArrowRight, Calendar, CheckCircle2,
  CalendarDays, Mail, FolderSync, FileText, Users, Clock, Settings, Shield, Ticket, Package, UserCheck, Building
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GetStartedDialog from '@/components/GetStartedDialog';
import heroImage from '@/assets/banners/apps-script-banner.jpg';

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
            Google Apps Script<br />
            <span className="text-[#38B6FF]">Automation</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mb-6 leading-relaxed font-body"
          >
            Google Apps Script is a powerful automation tool that works with Google Workspace apps like Sheets and Gmail. The platform uses JavaScript to create custom scripts that automate tasks and add new features easily. Connect with Google services and external APIs to extend what your apps can do.
          </motion.p>

          {/* CTA Button */}
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

// Calendar Solutions Section
function CalendarSolutionsSection() {
  const calendarFeatures = [
    {
      icon: CalendarDays,
      title: 'Conflict Booking Restriction',
      desc: 'Restricts a user from booking more than one meeting room for the same time. Automatically deletes conflicting bookings to prevent double-bookings.',
    },
    {
      icon: Clock,
      title: 'Advance Booking Restriction',
      desc: 'Meeting rooms can be booked only within the defined advance time period (e.g., 7 days). Only admins can book beyond this window.',
    },
    {
      icon: CalendarDays,
      title: 'Full-Day Booking Restriction',
      desc: 'Meeting rooms can only be booked for a defined period of time. Only admins can book full-day events, ensuring proper resource management.',
    },
    {
      icon: Clock,
      title: 'Maximum Duration Restriction',
      desc: 'Delete events scheduled beyond the permissible timeline (e.g., 4 hours) and notify the user automatically.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Calendar Automation Solutions
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Smart booking management to optimize your meeting room resources.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calendarFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#1E88E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
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
      desc: 'Update user signatures based on their GWS user attributes. Ensures standard signature format for all users with centralised management.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: FolderSync,
      title: 'Email File Backup to Drive',
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
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Email & Signature Solutions
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Streamline email management and maintain consistent branding.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="relative rounded-2xl overflow-hidden group h-[320px] cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4594] via-[#0C4594]/80 to-[#0C4594]/50 group-hover:from-[#0C4594] group-hover:via-[#0C4594]/85 group-hover:to-[#0C4594]/60 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#38B6FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Business Solutions Section
function BusinessSolutionsSection() {
  const businessFeatures = [
    {
      icon: Settings,
      title: 'Project Management',
      desc: 'Manage various projects, assign tasks, and calculate budgets. Dashboard to track project progress with role-based access to respective modules.',
    },
    {
      icon: UserCheck,
      title: 'Talent Acquisition System',
      desc: 'Request hiring with approval flow and post job openings on social platforms. Streamlines the internal resource request process.',
    },
    {
      icon: Clock,
      title: 'Timesheets',
      desc: 'Help management view employee productivity based on the data they feed. Track time and monitor project progress effectively.',
    },
    {
      icon: Ticket,
      title: 'Helpdesk Ticketing Solution',
      desc: 'A ticketing tool centralises support requests, boosting efficiency and collaboration. Automates tasks like assignment and notifications with tracking visibility.',
    },
    {
      icon: Package,
      title: 'Product Improvement System',
      desc: 'Review a product across multiple teams. Document feedback with approval flow to accept/reject proposed changes for refund or replacement decisions.',
    },
    {
      icon: Shield,
      title: 'Vendor Management System',
      desc: 'Streamlines the vendor database with an approval system. Vendor documents are stored in their respective Google Drive folder automatically.',
    },
    {
      icon: Building,
      title: 'Visitor Management System',
      desc: 'Maintains data for people visiting your premises. Keeps historical data of frequent visitors for security and tracking purposes.',
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
            Business Process Solutions
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Custom applications to streamline your business operations.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#1E88E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4594] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Calendar CTA Section
function CalendarCTASection() {
  const demoPoints = [
    'Custom automation assessment — we evaluate your current workflows and identify automation opportunities',
    'Apps Script proposal — get a tailored development plan for your specific needs',
    'Integration roadmap — understand how Apps Script connects with your existing tools',
    'Implementation timeline — see how quickly we can automate your processes',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0C4594] via-[#0a3a7a] to-[#082d61]">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#38B6FF] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-lg text-white/80 mb-8">Schedule a consultation and we'll provide:</p>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-10">
            {demoPoints.map((point, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#38B6FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{point}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/contact">
            <Button size="lg" className="bg-[#38B6FF] hover:bg-[#2da8f0] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CalendarSolutionsSection />
        <EmailSolutionsSection />
        <BusinessSolutionsSection />
        <CalendarCTASection />
      </main>
      <Footer />
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}