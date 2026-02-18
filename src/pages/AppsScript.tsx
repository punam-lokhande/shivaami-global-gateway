import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  ArrowRight, CalendarDays, Mail, Shield, Search, ChevronRight,
  FileText, BarChart3, HardDrive, Users, Contact, GitBranch, Building
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GetStartedDialog from '@/components/GetStartedDialog';
import heroImage from '@/assets/banners/apps-script-banner.jpg';
import CTASection from '@/components/sections/CTASection';
import { Helmet } from 'react-helmet-async';

// Automation Categories Data
const automationCategories = [
  {
    id: 'calendar',
    name: 'Calendar Management',
    icon: CalendarDays,
    color: '#38B6FF',
    description: 'Smart booking management to optimise your meeting room resources. These scripts ensure efficient meeting room utilisation, prevent scheduling conflicts, and provide administrators with complete visibility and control over calendar resources across your organisation.',
    automations: [
      { name: 'Conflict Booking Restriction', description: 'Restricts a user from booking more than one meeting room for the same time. Automatically deletes conflicting bookings to prevent double-bookings.' },
      { name: 'Advance Booking Restriction', description: 'Meeting rooms can be booked only within the defined advance time period (e.g., 7 days). Only admins can book beyond this window.' },
      { name: 'Full-Day Booking Restriction', description: 'Meeting rooms can only be booked for a defined period of time. Only admins can book full-day events, ensuring proper resource management.' },
      { name: 'Maximum Meeting Duration Restriction', description: 'Delete events scheduled beyond the permissible timeline (e.g., 4 hours) and notify the user automatically.' },
      { name: 'Get Events (Calendar App)', description: 'Effortlessly list all calendar events in a Google Sheet for better scheduling and planning.' },
      { name: 'Calendar Cleanup Script', description: 'Keep your calendar organised by easily deleting events within a specified date range or from a specific calendar.' },
      { name: 'Get Room ID in Google Calendar', description: 'Retrieve the names of existing rooms in the admin console and associated events, simplifying room booking and management.' },
      { name: 'Get All Events Details', description: 'Retrieve details of all events, including Google Meeting links, recording links, and event durations for effective event management.' },
    ]
  },
  {
    id: 'email',
    name: 'Email Management',
    icon: Mail,
    color: '#10B981',
    description: 'Keep your inbox organised and maintain professional email standards across your team. These scripts help set up consistent email signatures, clean up old messages, back up important attachments, and give admins easy tools to manage emails for everyone.',
    automations: [
      { name: 'Signature Management - HRMS Sync', description: "Automatically synchronise user attributes like name, designation and location from your HRMS to Google Workspace and embed them in the user's signature." },
      { name: 'Signature Management - Auto Update', description: 'Update user signatures based on their Google Workspace user attributes. Ensures standard signature format for all users with centralised management.' },
      { name: 'Email File Backup', description: 'Save a copy of all attachments from emails to Google Drive. Serves as a backup repository and helps refer to documents easily.' },
      { name: 'Email Delete - Thread', description: "Delete the complete email thread using the thread ID. Helps administrators delete complete email threads from users' mailboxes." },
      { name: 'Email Delete - Specific Message', description: 'Delete a specific message from the email thread using the message ID. Helps delete emails shared accidentally within the domain.' },
      { name: 'Email MIS', description: 'Extract all emails from an inbox or from specific senders, and list them on a Google Sheet for collaboration. Ensures no important emails are missed.' },
      { name: 'Delete Mail Using Subject', description: 'Say goodbye to cluttered inboxes by automatically removing emails with a particular subject, helping you stay organised.' },
      { name: 'Delete by Subject', description: 'Say goodbye to cluttered inboxes by automatically removing emails with a particular subject, helping you stay organised.' },
      { name: 'Delete by Label', description: 'Organise your email by deleting messages from existing labels, making your inbox more manageable.' },
      { name: 'Email Box Cleanup', description: 'Take control of email storage with this user email box cleanup script that automates the bulk deletion of emails within a specific date range, ideal for maintaining a tidy mailbox at the admin level.' },
      { name: 'Gmail Mail Deletion', description: 'Automate the deletion of emails older than a specific number of days at the domain level, ensuring that your Gmail remains clutter-free.' },
      { name: 'Count Label Emails', description: 'Get a count of emails within specific labels and have them listed in a Google Sheet, facilitating email organisation and tracking.' },
      { name: 'Get CC/BCC Emails', description: 'This script fetches CC and BCC emails sent to recipients outside the domain and lists them in a Google Sheet for reference and tracking.' },
      { name: 'Forward Label Emails', description: 'Fetch all emails from a specific label and forward them to a designated user, streamlining communication and collaboration.' },
      { name: 'Delete by Days', description: 'Use this script to delete emails based on a specific number of days (X number of days) using custom filters, helping you keep your inbox clean.' },
      { name: 'Trash Old Mail', description: 'Automate the process of moving emails to the trash folder that are older than 7 days, keeping your inbox clean and organised.' },
      { name: 'Permanently Delete Mail', description: 'Permanently delete emails that are older than 7 days, ensuring they do not clutter your mailbox.' },
      { name: 'Set Gmail Signature', description: 'Easily set Gmail signatures for organisation users with the help of this Apps Script, ensuring a consistent and professional email communication.' },
      { name: 'Email Logs Report', description: 'Access email logs and generate reports from the admin console, providing valuable insights into email communications.' },
    ]
  },
  {
    id: 'security',
    name: 'Security & Compliance',
    icon: Shield,
    color: '#F59E0B',
    description: "Keep your workspace secure and meet important safety requirements. These scripts help you track who's logging in, which devices are being used, and whether users have proper security settings enabled to protect your organisation's data.",
    automations: [
      { name: 'Users Without Recovery', description: 'List of users who did not add a recovery email ID. Helps maintain account security standards.' },
      { name: 'Last Login Information', description: 'Track user last login information from the last 6 months of logs. Helps identify account usage patterns.' },
      { name: '2SV Enablement Status', description: 'List of users who did not enable 2-step verification. Critical for security compliance.' },
      { name: 'User Creation & Deletion', description: 'Lists users created and deleted within a defined time period (last 6 months only). Helps with audit account management.' },
      { name: 'Device Compliance Logs', description: "Helps identify non-compliant devices from where the organisation's data is being accessed." },
      { name: 'Device OS Logs', description: 'Fetches the client OS details from where the organisation data is being accessed. Helps maintain device inventory.' },
      { name: 'Administrator Activity Logs', description: 'Fetches admin log events for a defined number of days. Helps focus on limited logs instead of the entire log bank.' },
      { name: 'External File Sharing', description: 'Helps retrieve logs for files shared externally. Critical for data loss prevention.' },
      { name: 'Third-Party Application Logs', description: 'Identifies third-party applications connected with user accounts. Critical to assess security posture.' },
      { name: 'Inactive Users', description: 'Helps identify users who have not signed in for a defined time range. Supports license optimisation.' },
      { name: 'Suspended Users', description: "Suspend users and maintain a record of suspended users' history for reference and auditing." },
    ]
  },
  {
    id: 'data',
    name: 'Data & Reporting',
    icon: BarChart3,
    color: '#8B5CF6',
    description: "Turn your workspace information into easy-to-read reports. These scripts collect details about files, users, and storage into Google Sheets, making it simple to understand what's happening in your workspace and make better decisions.",
    automations: [
      { name: 'Folder Path Retrieval', description: 'If the user has root folder access, retrieve the file/folder path of subfolders. Simplifies navigation.' },
      { name: 'User Attribute Lists', description: 'Lists users as per the required user attribute (e.g., designation, location). Helps segment the user base.' },
      { name: 'Top Drive Users', description: 'Lists users who have the highest download count. Helps identify heavy data users.' },
      { name: 'OU Member Count', description: 'List user count from a specific OU. Helps reduce admin efforts in user management.' },
      { name: 'Google Workspace Updates List', description: 'Fetches Google Workspace updates to a Google Sheet as per the defined time range. Keeps teams informed of platform changes.' },
      { name: 'List File Details', description: 'This time-saving script allows you to list file details from Google Drive directly into Google Sheets.' },
      { name: 'List File Sizes', description: 'Gain a comprehensive view of file sizes in Google Drive (GDrive) by listing them in a Google Sheet (GSheet), helping you manage storage efficiently.' },
      { name: 'Get Folder Structure', description: 'Automatically retrieve the tree structure of folders in Google Drive and have it neatly organised in a Google Sheet, simplifying navigation and organisation.' },
      { name: 'Get User List', description: 'Fetch a comprehensive list of users for the admin and have it printed in a Google Sheet for easy reference and management.' },
      { name: 'Filter by Month/Year', description: 'This script provides data for previous months in your Google Sheet using triggers, enabling you to analyse historical trends and patterns.' },
      { name: 'Filter Unique Users', description: 'Remove duplicate data and count unique entries by ID and email, making data analysis more accurate and efficient.' },
      { name: 'List Admin Users', description: 'List all users\' details from the Admin Console in a Google Sheet for easy access and reference.' },
      { name: 'List Shared Folders', description: 'Automate the listing of all folders in a shared drive to a Google Sheet, simplifying folder management.' },
      { name: 'Get Full Paths', description: 'Fetch folder and file full paths from Google Drive using Apps Script and display them in a Google Sheet for easy access and organisation.' },
    ]
  },
  {
    id: 'forms',
    name: 'Form & Reminder',
    icon: FileText,
    color: '#EC4899',
    description: 'Never miss a form response with automated reminders. These scripts send friendly follow-ups to people who haven\'t submitted their forms yet, helping you collect all the information you need without manual tracking.',
    automations: [
      { name: 'Form Reminder', description: 'This handy script sends reminders for forms, ensuring that important submissions are not missed.' },
      { name: 'No Response Reminder', description: 'Keep track of pending form responses by using this script to send reminders via email for forms with no responses, ensuring no response goes unnoticed.' },
    ]
  },
  {
    id: 'drive',
    name: 'Google Drive Management',
    icon: HardDrive,
    color: '#EF4444',
    description: 'Keep your Google Drive organised and secure. These scripts help you clean up unwanted files, control who can access what, monitor storage space, move files between folders, and back up important documents automatically.',
    automations: [
      { name: 'Delete by Keyword', description: "Admin can easily manage users' Google Drive by searching for specific keywords and deleting files or folders from GDrive that match their criteria." },
      { name: 'List Folder Files', description: 'Simplify file management by listing all files in a specific folder directly in a Google Sheet.' },
      { name: 'List All Folders', description: 'Streamline your folder organisation by listing all folders in your Google Drive directly to a Google Sheet.' },
      { name: 'Restrict Drive Permissions', description: 'Enhance security by managing and restricting permissions for your Google Drive files and folders using this permission restriction script, ensuring data privacy.' },
      { name: 'Delete Drive Folder', description: 'This script allows you to delete a specific Google Drive (GDrive) folder using its folder ID, simplifying folder management with the power of Apps Script.' },
      { name: 'Transfer Folder', description: 'Automate the transfer of files and subfolders from one folder to another using this script, ensuring smooth organisation of your digital assets.' },
      { name: 'File Backup', description: 'This script creates a copy of a file and stores it in a specified location, ensuring data security and redundancy.' },
      { name: 'Check Storage Status', description: "Stay informed about your Google Drive's storage status with this storage check script. Checks storage utilisation and sends alerts if it exceeds 90%, offering customisation options for mail receivers and content." },
      { name: 'Manage Shared Labels', description: 'Manage labels in shared drives by retrieving and setting labels using file IDs with this Apps Script for shared drive label management.' },
      { name: 'Fetch Drive Permissions', description: 'Easily fetch shared drive IDs with their respective permissions to keep track of shared resources.' },
    ]
  },
  {
    id: 'user-admin',
    name: 'User & Admin Management',
    icon: Users,
    color: '#22C55E',
    description: 'Manage your team members efficiently with automated tools. These scripts help you add, update, or move users in bulk, track login activity, identify inactive accounts, and keep your user directory organised without repetitive manual work.',
    automations: [
      { name: 'Last Login Report', description: 'Deployed as a script, this tool generates a report detailing the last login activities of all users and sends it to your admin team, providing insights into user activity.' },
      { name: 'Bulk Update Users', description: "Streamline user management in the Admin Directory with this script for updating bulk users' details, enabling you to update user details in bulk and save time, thereby reducing administrative workload." },
      { name: 'List Inactive Users', description: 'Easily identify inactive users within a specific domain, generate a report, and have it delivered to your Gmail inbox in a particular date range.' },
      { name: 'Count & List Users', description: 'Keep track of user counts and list both active and inactive accounts on Gmail and GSheet, simplifying user management with this script.' },
      { name: 'Create Bulk Users', description: 'Simplify the process of creating a bulk of users in the Admin Console, saving time and effort in user management.' },
      { name: 'Update Console Users', description: 'Streamline user updates in the Admin Console with this script, ensuring accurate and efficient user management.' },
      { name: 'Move Users Between OUs', description: 'Automate the process of moving all users from one organisational unit (OU) to another in Google Workspace using Google Apps Script.' },
      { name: 'Copy Suspend Users', description: "Suspend users and maintain a record of suspended users' history for reference and auditing." },
    ]
  },
  {
    id: 'communication',
    name: 'Communication & Contact',
    icon: Contact,
    color: '#F97316',
    description: 'Build stronger connections with your team through automated personal touches. These scripts send birthday wishes automatically, organise contact information, and keep your address book synced with external partners for smooth collaboration.',
    automations: [
      { name: 'Birthday Wishes Automation', description: "Make your organisation's birthday celebrations special by automatically sending personalised birthday wishes via Gmail." },
      { name: 'Get Google Contacts', description: 'Extract contact information from your Google account, including names, email addresses, and contact numbers, and print them in a Google Sheet for easy access.' },
      { name: 'External Contact Sync', description: 'This directory sync script facilitates the synchronisation of Google contacts shared with external domains, ensuring accurate and up-to-date contact information.' },
    ]
  },
  {
    id: 'workflow',
    name: 'Workflow & Approval',
    icon: GitBranch,
    color: '#6366F1',
    description: 'Make approval processes faster and more organised. This script creates a simple two-step approval system that ensures the right people review and approve important requests, keeping everything documented and moving smoothly.',
    automations: [
      { name: '2 Step Approval', description: 'Simplify the process of obtaining two-step approvals using this script, making decision-making more efficient and structured.' },
    ]
  },
];

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
   <section ref={ref} className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
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

      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-24 sm:pb-28 md:pb-32 lg:pb-36">
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

// Sidebar Category Filter
function CategorySidebar({ 
  selectedCategory, 
  onSelectCategory 
}: { 
  selectedCategory: string | null; 
  onSelectCategory: (id: string | null) => void;
}) {
  const totalAutomations = automationCategories.reduce((acc, cat) => acc + cat.automations.length, 0);

  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
      <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] p-5">
          <h3 className="text-white font-bold text-lg">Filter by Category</h3>
          <p className="text-white/70 text-sm mt-1">{totalAutomations}+ Automation Scripts</p>
        </div>

        {/* Category List */}
        <div className="p-3 max-h-[60vh] overflow-y-auto">
          {/* All Categories */}
          <motion.button
            whileHover={{ x: 4 }}
            onClick={() => onSelectCategory(null)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all ${
              !selectedCategory 
                ? 'bg-[#0C4594]/10 border-l-4 border-[#0C4594]' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              !selectedCategory ? 'bg-[#0C4594] text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <Building className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <span className={`font-medium ${!selectedCategory ? 'text-[#0C4594]' : 'text-gray-700'}`}>
                All Categories
              </span>
              <p className="text-xs text-gray-500">{totalAutomations} scripts</p>
            </div>
            {!selectedCategory && <ChevronRight className="w-4 h-4 text-[#0C4594]" />}
          </motion.button>

          <div className="border-t border-gray-100 my-2" />

          {/* Individual Categories */}
          {automationCategories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                whileHover={{ x: 4 }}
                onClick={() => onSelectCategory(isActive ? null : category.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl mb-1 transition-all ${
                  isActive 
                    ? 'bg-[#0C4594]/10 border-l-4 border-[#0C4594]' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: isActive ? category.color : `${category.color}20`,
                    color: isActive ? '#fff' : category.color 
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-medium text-sm ${isActive ? 'text-[#0C4594]' : 'text-gray-700'}`}>
                    {category.name}
                  </span>
                  <p className="text-xs text-gray-500">{category.automations.length} scripts</p>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-[#0C4594]" />}
              </motion.button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

// Automation Card Component
function AutomationCard({ 
  automation, 
  category, 
  index 
}: { 
  automation: { name: string; description: string }; 
  category: typeof automationCategories[0];
  index: number;
}) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-xl hover:shadow-[#38B6FF]/10 hover:border-[#38B6FF]/30 transition-all duration-300 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Icon */}
        <div 
          className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors"
          style={{ 
            backgroundColor: `${category.color}15`,
            color: category.color 
          }}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Name & Category Badge */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base text-[#0C4594] group-hover:text-[#38B6FF] transition-colors">
            {automation.name}
          </h3>
          <div 
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mt-1"
            style={{ 
              backgroundColor: `${category.color}15`,
              color: category.color 
            }}
          >
            <Icon className="w-3 h-3" />
            {category.name}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {automation.description}
      </p>
    </motion.div>
  );
}

// Category Header Component
function CategoryHeader({ 
  category 
}: { 
  category: typeof automationCategories[0];
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6"
    >
      <div className="flex items-start gap-4">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: category.color, color: '#fff' }}
        >
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#0C4594] mb-2">{category.name} Automations</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
        </div>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex-shrink-0">
          {category.automations.length} scripts
        </span>
      </div>
    </motion.div>
  );
}

// Main Content Section
function AutomationsContent({ selectedCategory }: { selectedCategory: string | null }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter automations based on category and search
  const filteredCategories = automationCategories
    .filter(cat => !selectedCategory || cat.id === selectedCategory)
    .map(cat => ({
      ...cat,
      automations: cat.automations.filter(auto =>
        !searchQuery ||
        auto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auto.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.automations.length > 0);

  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.automations.length, 0);

  // Get all filtered automations with their category info for grid display
  const allFilteredAutomations = filteredCategories.flatMap(cat => 
    cat.automations.map(auto => ({ ...auto, category: cat }))
  );

  return (
    <div className="flex-1 min-w-0">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#38B6FF] transition-colors" />
          <Input
            type="text"
            placeholder="Search automations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-6 text-base border-gray-200 rounded-xl focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 shadow-sm"
          />
        </div>
        
        {/* Results count */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-[#0C4594]">{totalResults}</span> automation scripts
            {selectedCategory && (
              <> in <span className="font-semibold text-[#0C4594]">
                {automationCategories.find(c => c.id === selectedCategory)?.name}
              </span></>
            )}
          </p>
        </div>
      </div>

      {/* Category Header - Only show when a specific category is selected */}
      {selectedCategory && filteredCategories.length > 0 && (
        <CategoryHeader category={filteredCategories[0]} />
      )}

      {/* Automations Grid */}
      {allFilteredAutomations.length > 0 && (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {allFilteredAutomations.map((automation, idx) => (
            <AutomationCard 
              key={`${automation.category.id}-${automation.name}`}
              automation={automation} 
              category={automation.category}
              index={idx}
            />
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredCategories.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-gray-50 rounded-2xl"
        >
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No automations found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
}

// Main Page Component
export default function AppsScript() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
          
          {/* Sidebar + Content Layout */}
          <section className="py-16 bg-[#f8fafc]">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block">
                  <CategorySidebar 
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />
                </div>

                {/* Mobile Category Selector */}
                <div className="lg:hidden">
                  <select
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium focus:border-[#38B6FF] focus:ring-[#38B6FF]/20"
                  >
                    <option value="">All Categories ({automationCategories.reduce((acc, c) => acc + c.automations.length, 0)} scripts)</option>
                    {automationCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.automations.length} scripts)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Main Content */}
                <AutomationsContent selectedCategory={selectedCategory} />
              </div>
            </div>
          </section>

          <CTASection />
        </main>
        <Footer />
        <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </>
  );
}
