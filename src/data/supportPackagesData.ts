// Auto-generated from Shivaami support packages spreadsheet
export type PackageGroup = { title: string; rows: string[][] };
export type PackageSegment = { key: string; label: string; tiers: string[]; skus: string[]; codes: string[]; groups: PackageGroup[] };
export type PackageCategory = { label: string; segments: PackageSegment[] };

export const supportPackagesData: { gws: PackageCategory; iam: PackageCategory } = {
  "gws": {
    "label": "Google Workspace Support Packages",
    "segments": [
      {
        "key": "micro",
        "label": "Micro / VSMB",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Business Starter/Standard",
          "Business Starter/Standard",
          "Business Plus+"
        ],
        "codes": [
          "GWS-MICRO-BSC",
          "GWS-MICRO-STD",
          "GWS-MICRO-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Articles",
                "Email, Phone",
                "Email, Chat, Phone"
              ],
              [
                "KAM (Key Account Manager)",
                "—",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "—",
                "—",
                "-"
              ],
              [
                "First response – Critical",
                "12 hours",
                "2 hours",
                "1 hour"
              ],
              [
                "First response – High",
                "24–48 hours",
                "4 hours",
                "2 hours"
              ],
              [
                "First response – Medium",
                "24–48 hours",
                "8 hours",
                "4 hours"
              ],
              [
                "First response – Low",
                "24–48 hours",
                "12 hours",
                "8 hours"
              ],
              [
                "Email services down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "30 tickets",
                "40 tickets",
                "60 tickets"
              ],
              [
                "Additional tickets (beyond quota per year)",
                "5",
                "10",
                "15"
              ],
              [
                "Google support ticket quota",
                "2",
                "4",
                "6"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Cadence calls",
                "—",
                "Once a Year",
                "Once a Year"
              ],
              [
                "Security assessment / adoption report",
                "—",
                "-",
                "Once a year"
              ],
              [
                "GWS adoption report sharing",
                "—",
                "Once a year",
                "Once a year"
              ],
              [
                "GWS training sessions per year (admin & end user - any type can be taken)",
                "1",
                "2",
                "3"
              ],
              [
                "Management connects (Mgr/CXO)",
                "—",
                "—",
                "Once a year"
              ],
              [
                "Live webinars",
                "—",
                "—",
                "✓"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "AppScripts",
                "—",
                "1/year (max 1 working days)",
                "2/year (max 2 working days)"
              ],
              [
                "AppSheet",
                "—",
                "—",
                "—"
              ],
              [
                "Knowledge base / e-learning portal",
                "—",
                "✓",
                "✓"
              ],
              [
                "Google certification (guidance & materials)",
                "—",
                "✓",
                "✓"
              ],
              [
                "Self-service portal – licence addition",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Voice bot on board lines",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "Chargeable",
                "Chargeable",
                "Chargeable"
              ],
              [
                "Third-party integration support",
                "Articles only",
                "Most integrations",
                "Comprehensive support"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "Gmail",
                "Basic troubleshooting, filters & labels",
                "Advanced routing, policy setup, retention",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance"
              ],
              [
                "Google Drive",
                "File sharing, sync issues, folder guidance",
                "Advanced permissions, integration with GWS tools",
                "Storage optimisation, large data migration, advanced reporting"
              ],
              [
                "Google Meet",
                "Basic meetings, scheduling via Calendar",
                "Setting up meetings, live streaming",
                "Custom layouts, enterprise security & moderation"
              ],
              [
                "Google Calendar",
                "Creating & sharing events, basic reminders",
                "Recurring events, basic reminders",
                "Sync with third-party tools, permissions management"
              ],
              [
                "Admin Console",
                "Basic user setup & permissions, basic reports",
                "User creation, custom roles, monitoring app usage",
                "Org units, app config, detailed reporting & insights"
              ],
              [
                "Security (DLP, Vault)",
                "Basic 2FA, password policies",
                "DLP configuration, email encryption, access controls",
                "Full security auditing, proactive monitoring, compliance support"
              ],
              [
                "Data backup & recovery",
                "Support in manual backup, troubleshooting",
                "Support in integrating Automated backup for key apps as per request",
                "Assisting in Scheduling Automated backup, scheduled audits as per request"
              ],
              [
                "Team & collaboration tools",
                "Basic shared Drives & Docs",
                "Multi-user collaboration (Docs, Sheets)",
                "Advanced collaboration (Drive, Meet, Calendar)"
              ]
            ]
          }
        ]
      },
      {
        "key": "smb",
        "label": "SMB",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Business Starter/Standard",
          "Business Plus",
          "Business Plus+"
        ],
        "codes": [
          "GWS-SMB-BSC",
          "GWS-SMB-STD",
          "GWS-SMB-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Articles",
                "Email, Phone",
                "Email, Chat, Phone"
              ],
              [
                "KAM (Key Account Manager)",
                "—",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "—",
                "—",
                "Any available resource"
              ],
              [
                "First response – Critical",
                "8 hours",
                "2 hours",
                "1 hour"
              ],
              [
                "First response – High",
                "12 hours",
                "4 hours",
                "2 hours"
              ],
              [
                "First response – Medium",
                "24 hours",
                "8 hours",
                "4 hours"
              ],
              [
                "First response – Low",
                "48 hours",
                "12 hours",
                "8 hours"
              ],
              [
                "Email services down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "60 tickets",
                "120 tickets",
                "180 tickets"
              ],
              [
                "Additional tickets  (beyond quota per year)",
                "10",
                "20",
                "40"
              ],
              [
                "Google support ticket quota",
                "8",
                "12",
                "18"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Cadence calls",
                "—",
                "Twice a Year",
                "Twice a Year"
              ],
              [
                "Security assessment / adoption report",
                "—",
                "Once a year",
                "Once a year"
              ],
              [
                "GWS adoption report sharing",
                "—",
                "Twice a Year",
                "Twice a Year"
              ],
              [
                "GWS training sessions per year (admin & end user - any type can be taken)",
                "2",
                "3",
                "4"
              ],
              [
                "Management connects (Mgr/CXO)",
                "—",
                "—",
                "Once a year"
              ],
              [
                "Live webinars",
                "—",
                "—",
                "✓"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "AppScripts",
                "—",
                "2/year (max 2 working days)",
                "2/year (max 4 working days)"
              ],
              [
                "AppSheet",
                "—",
                "—",
                "—"
              ],
              [
                "Knowledge base / e-learning portal",
                "—",
                "✓",
                "✓"
              ],
              [
                "Google certification (guidance & materials)",
                "—",
                "✓",
                "✓"
              ],
              [
                "Self-service portal – licence addition",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Voice bot on board lines",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "Chargeable",
                "Chargeable",
                "Chargeable"
              ],
              [
                "Third-party integration support",
                "Articles only",
                "Most integrations",
                "Comprehensive support"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "Gmail",
                "Basic troubleshooting, filters & labels",
                "Advanced routing, policy setup, retention",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance"
              ],
              [
                "Google Drive",
                "File sharing, sync issues, folder guidance",
                "Advanced permissions, integration with GWS tools",
                "Storage optimisation, large data migration, advanced reporting"
              ],
              [
                "Google Meet",
                "Basic meetings, scheduling via Calendar",
                "Setting up meetings, live streaming",
                "Custom layouts, enterprise security & moderation"
              ],
              [
                "Google Calendar",
                "Creating & sharing events, basic reminders",
                "Recurring events, basic reminders",
                "Sync with third-party tools, permissions management"
              ],
              [
                "Admin Console",
                "Basic user setup & permissions, basic reports",
                "User creation, custom roles, monitoring app usage",
                "Org units, app config, detailed reporting & insights"
              ],
              [
                "Security (DLP, Vault)",
                "Basic 2FA, password policies",
                "DLP configuration, email encryption, access controls",
                "Full security auditing, proactive monitoring, compliance support"
              ],
              [
                "Data backup & recovery",
                "Support in manual backup, troubleshooting",
                "Support in integrating Automated backup for key apps as per request",
                "Assisting in Scheduling Automated backup, scheduled audits as per request"
              ],
              [
                "Team & collaboration tools",
                "Basic shared Drives & Docs",
                "Multi-user collaboration (Docs, Sheets)",
                "Advanced collaboration (Drive, Meet, Calendar)"
              ]
            ]
          }
        ]
      },
      {
        "key": "midmarket",
        "label": "Mid-Market",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Business SKUs",
          "Business Plus",
          "Enterprise Starter"
        ],
        "codes": [
          "GWS-MM-BSC",
          "GWS-MM-STD",
          "GWS-MM-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Phone",
                "Email, Chat, Phone",
                "Email, Chat, Phone"
              ],
              [
                "KAM (Key Account Manager)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "—",
                "Any available resource",
                "Shared SPOC"
              ],
              [
                "First response – Critical",
                "2 hours",
                "1 hour",
                "15 minutes"
              ],
              [
                "First response – High",
                "4 hours",
                "2 hours",
                "30 minutes"
              ],
              [
                "First response – Medium",
                "8 hours",
                "4 hours",
                "2 hours"
              ],
              [
                "First response – Low",
                "12 hours",
                "8 hours",
                "4 hours"
              ],
              [
                "Email services down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, any 4 hrs (8am–8pm)"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "120 tickets",
                "180 tickets",
                "240 tickets"
              ],
              [
                "Additional tickets (beyond quota per year)",
                "30",
                "45",
                "60"
              ],
              [
                "Google support ticket quota",
                "12",
                "18",
                "30"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Cadence calls",
                "Twice a year",
                "Quarterly",
                "Monthly"
              ],
              [
                "Security assessment / adoption report",
                "Once a year",
                "Twice a year",
                "Quarterly"
              ],
              [
                "GWS adoption report sharing",
                "Twice a year",
                "Quarterly",
                "Monthly"
              ],
              [
                "GWS training sessions per year (admin & end user - any type can be taken)",
                "3",
                "4",
                "6"
              ],
              [
                "Management connects (Mgr/CXO)",
                "Once a year",
                "Once a year",
                "Once a year"
              ],
              [
                "Live webinars",
                "✓",
                "✓",
                "✓"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "AppScripts",
                "2/year (max 2 working days)",
                "2/year (max 4 working days)",
                "2/year (max 10 working days)"
              ],
              [
                "AppSheet",
                "—",
                "Workflow & automation setup (max 2 mandays)",
                "Custom app dev & integrations (max 4 mandays); ₹10K/manday beyond"
              ],
              [
                "Knowledge base / e-learning portal",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Google certification (guidance & materials)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Self-service portal – licence addition",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Voice bot on board lines",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "Chargeable",
                "Chargeable",
                "1 free visit/year"
              ],
              [
                "Third-party integration support",
                "Most integrations",
                "Comprehensive support",
                "Comprehensive + optimised"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "Gmail",
                "Advanced routing, policy setup, retention",
                "Email disaster recovery, DLP, GDPR/HIPAA",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance"
              ],
              [
                "Google Drive",
                "Advanced permissions, GWS tool integration, Advance Storage Reporting",
                "Storage optimisation, Advance Storage Reporting",
                "Advanced reporting, Advance Storage Reporting"
              ],
              [
                "Google Meet",
                "Setting up meetings, live streaming",
                "Custom layouts, enterprise use case setup",
                "Custom layouts, enterprise security & moderation"
              ],
              [
                "Google Calendar",
                "Recurring events, third-party sync",
                "Permissions management, workflow setup",
                "Enterprise scheduling, automated scheduling, audits"
              ],
              [
                "Admin Console",
                "User creation, custom roles, monitoring",
                "Org units, app config, detailed reporting",
                "Advanced security policies (2FA, SSO), security audits"
              ],
              [
                "Security (DLP, Vault)",
                "DLP configuration, email encryption",
                "Full security auditing, proactive monitoring",
                "Full auditing, proactive monitoring, compliance support"
              ],
              [
                "Data backup & recovery",
                "Support in Automated backup for key apps as per request",
                "Support in integrating Automated backup, scheduled audits as per requests",
                "Support in integrating - Disaster recovery, cloud data recovery"
              ],
              [
                "Team & collaboration tools",
                "Multi-user collaboration (Docs, Sheets)",
                "Advanced collaboration (Drive, Meet, Calendar)",
                "Custom collaborative workflows across departments"
              ]
            ]
          }
        ]
      },
      {
        "key": "enterprise",
        "label": "Enterprise",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Enterprise Starter",
          "Enterprise Standard",
          "Enterprise Plus"
        ],
        "codes": [
          "GWS-ENT-BSC",
          "GWS-ENT-STD",
          "GWS-ENT-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Chat, Phone",
                "Email, Chat, Phone",
                "Email, Chat, Phone"
              ],
              [
                "KAM (Key Account Manager)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "-",
                "Space assitance with any available resource",
                "Shared Spoc"
              ],
              [
                "First response – Critical",
                "15 minutes",
                "15 Min",
                "15 Min"
              ],
              [
                "First response – High",
                "1 Hour",
                "30 Min",
                "15 Min"
              ],
              [
                "First response – Medium",
                "2 hours",
                "1 Hour",
                "30 Min"
              ],
              [
                "First response – Low",
                "4 hours",
                "3 Hours",
                "2 Hours"
              ],
              [
                "Email services down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am-7pm",
                "Mon–Fri, any 8 hrs (8am–8pm)",
                "Mon–Fri, any 8 hrs (8am–8pm)"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "200 tickets",
                "400 tickets",
                "600 tickets"
              ],
              [
                "Additional tickets  (beyond quota per year)",
                "50",
                "100",
                "150"
              ],
              [
                "Google support ticket quota",
                "30",
                "30",
                "30"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Cadence calls",
                "Monthly",
                "Monthly",
                "Monthly"
              ],
              [
                "Security assessment / adoption report",
                "Quarterly",
                "Quarterly",
                "Quarterly"
              ],
              [
                "GWS adoption report sharing",
                "Monthly",
                "Monthly",
                "Monthly"
              ],
              [
                "GWS training sessions per year",
                "6",
                "8",
                "10"
              ],
              [
                "Management connects (Mgr/CXO)",
                "Once a year",
                "Once a year",
                "Once a year"
              ],
              [
                "Live webinars",
                "✓",
                "✓",
                "✓"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "AppScripts",
                "2/year (max 10 working days)",
                "2/year (max 10 working days)",
                "2/year (max 10 working days)"
              ],
              [
                "AppSheet",
                "Custom app dev & integrations (max 2 mandays)",
                "Custom app dev & integrations (max 4 mandays)",
                "Custom app dev & integrations (max 4 mandays)"
              ],
              [
                "Knowledge base / e-learning portal",
                "✓",
                "✓",
                "✓"
              ],
              [
                "GWS certification (guidance & materials)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Self-service portal – licence addition",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Voice bot on board lines",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "1 free visit/year",
                "2 free visits/year",
                "3 Visits/Year"
              ],
              [
                "Third-party integration support",
                "Comprehensive + optimised",
                "Comprehensive + optimised",
                "Comprehensive + optimised"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "Gmail",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance"
              ],
              [
                "Google Drive",
                "advanced storage reporting",
                "advanced reporting",
                "advanced reporting"
              ],
              [
                "Google Meet",
                "Custom layouts, enterprise security & moderation",
                "Custom layouts, enterprise security & moderation",
                "Custom layouts, enterprise security & moderation, device management"
              ],
              [
                "Google Calendar",
                "Enterprise scheduling, automated scheduling",
                "Enterprise scheduling, automated scheduling, calendar audits",
                "Enterprise scheduling, automated scheduling, advanced analytics"
              ],
              [
                "Admin Console",
                "Advanced security policies (2FA, SSO), reporting",
                "Security audits, policy enforcement, detailed reporting",
                "Security audits, policy enforcement, detailed reporting & insights"
              ],
              [
                "Security (DLP, Vault)",
                "Full security auditing, proactive monitoring, compliance",
                "Full auditing, proactive monitoring, GDPR/HIPAA support",
                "Full auditing, proactive monitoring, GDPR/HIPAA support"
              ],
              [
                "Data backup & recovery",
                "Support in integrating - Disaster recovery, cloud data recovery",
                "Support in integrating - Disaster recovery, cloud data recovery",
                "Support in integrating - Disaster recovery, cloud data recovery"
              ],
              [
                "Team & collaboration tools",
                "Custom workflows, cross-platform integrations",
                "Custom collaborative workflows, cross-platform integrations",
                "Custom collaborative workflows, cross-platform integrations, data syncing"
              ]
            ]
          }
        ]
      },
      {
        "key": "managed",
        "label": "Managed Service",
        "tiers": [
          "Shared Remote",
          "Hybrid/bi-weekly",
          "Dedicated Remote",
          "Dedicated Onsite"
        ],
        "skus": [
          "Shared Remote",
          "Hybrid/Bi-weekly",
          "Dedicated Remote",
          "Dedicated Onsite"
        ],
        "codes": [
          "GWS-MS-BSC",
          "GWS-MS-SharedOnsite",
          "GWS-MS-STD",
          "GWS-MS-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "33",
                "Email, Chat, Phone",
                "Email, Chat, Phone",
                "Email, Chat, Phone"
              ],
              [
                "KAM (Key Account Manager)",
                "✓",
                "✓",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "Shared SPOC (Remote)",
                "x",
                "Dedicated (Remote)",
                "Dedicated (onsite)"
              ],
              [
                "First response – Critical",
                "15 minutes",
                "15 minutes",
                "Immediate",
                "Immediate"
              ],
              [
                "First response – High",
                "30 minutes",
                "30 minutes",
                "Immediate",
                "Immediate"
              ],
              [
                "First response – Medium",
                "2 hours",
                "2 hours",
                "Immediate",
                "Immediate"
              ],
              [
                "First response – Low",
                "4 hours",
                "4 hours",
                "Immediate",
                "Immediate"
              ],
              [
                "Email services down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, any 4 hrs (8am–8pm)",
                "26 hours workinng Hours \n(2 working days a week)",
                "Mon–Fri, any 8 hrs (8am–8pm)",
                "Mon–Fri, 5 days/week onsite"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "200 tickets",
                "200 Tickets",
                "400 tickets",
                "600 tickets"
              ],
              [
                "Additional tickets (beyond quota per year)",
                "20",
                "40",
                "50",
                "60"
              ],
              [
                "Google support ticket quota",
                "20",
                "20",
                "30",
                "30"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Cadence calls",
                "Monthly (mid of the month)",
                "Monthly (mid of the month)",
                "Monthly (mid of the month)",
                "Monthly (mid of the month)"
              ],
              [
                "Security assessment / adoption report",
                "Quarterly (2nd, 5th, 8th, 11th month after handover to CS)",
                "Quarterly (2nd, 5th, 8th, 11th month after handover to CS)",
                "Quarterly (2nd, 5th, 8th, 11th month after handover to CS)",
                "Quarterly (2nd, 5th, 8th, 11th month after handover to CS)"
              ],
              [
                "GWS adoption report sharing",
                "Monthly (mid month)",
                "Monthly (mid month)",
                "Monthly (mid month)",
                "Monthly (mid month)"
              ],
              [
                "GWS training sessions per year",
                "6",
                "6",
                "8",
                "10"
              ],
              [
                "Management connects (Mgr/CXO)",
                "Once a year (6th Month)",
                "Once a year (6th Month)",
                "Once a year (6th Month)",
                "Once a year (6th Month)"
              ],
              [
                "Live webinars",
                "✓",
                "✓",
                "✓",
                "✓"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "AppScripts",
                "2/year (max 10 working days)",
                "2/year (max 10 working days)",
                "2/year (max 10 working days)",
                "2/year (max 10 working days)"
              ],
              [
                "AppSheet",
                "Custom app dev & integrations (max 2 mandays)",
                "Custom app dev & integrations (max 2 mandays)",
                "Custom app dev & integrations (max 4 mandays)",
                "Custom app dev & integrations (max 4 mandays)"
              ],
              [
                "Knowledge base / e-learning portal",
                "✓",
                "✓",
                "✓",
                "✓"
              ],
              [
                "GWS certification (guidance & materials)",
                "✓",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Self-service portal – licence addition",
                "✓",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Voice bot on board lines",
                "✓",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "1 free visit/year",
                "-",
                "2 free visits/year",
                "All 5 days/week (included)"
              ],
              [
                "Third-party integration support",
                "Comprehensive + optimised",
                "Comprehensive + optimised",
                "Comprehensive + optimised",
                "Comprehensive + optimised"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "Gmail",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance",
                "Email disaster recovery, DLP, GDPR/HIPAA compliance"
              ],
              [
                "Google Drive",
                "advanced storage reporting",
                "advanced storage reporting",
                "advanced reporting",
                "advanced reporting"
              ],
              [
                "Google Meet",
                "Custom layouts, enterprise security & moderation",
                "Custom layouts, enterprise security & moderation",
                "Custom layouts, enterprise security & moderation",
                "Custom layouts, enterprise security & moderation, device management"
              ],
              [
                "Google Calendar",
                "Enterprise scheduling, automated scheduling",
                "Enterprise scheduling, automated scheduling",
                "Enterprise scheduling, automated scheduling, calendar audits",
                "Enterprise scheduling, automated scheduling, advanced analytics"
              ],
              [
                "Admin Console",
                "Advanced security policies (2FA, SSO), reporting",
                "Advanced security policies (2FA, SSO), reporting",
                "Security audits, policy enforcement, detailed reporting",
                "Security audits, policy enforcement, detailed reporting & insights"
              ],
              [
                "Security (DLP, Vault)",
                "Full security auditing, proactive monitoring, compliance",
                "Full security auditing, proactive monitoring, compliance",
                "Full auditing, proactive monitoring, GDPR/HIPAA support",
                "Full auditing, proactive monitoring, GDPR/HIPAA support"
              ],
              [
                "Data backup & recovery",
                "Support in integrating - Disaster recovery, cloud data recovery",
                "Support in integrating - Disaster recovery, cloud data recovery",
                "Support in integrating - Disaster recovery, cloud data recovery",
                "Support in integrating - Disaster recovery, cloud data recovery"
              ],
              [
                "Team & collaboration tools",
                "Custom workflows, cross-platform integrations",
                "Custom workflows, cross-platform integrations",
                "Custom collaborative workflows, cross-platform integrations",
                "Custom collaborative workflows, cross-platform integrations, data syncing"
              ],
              [
                "Third Party Assitance",
                "-",
                "Communication / follwups for intergation with GWS",
                "Communication / followups for intergation with GWS",
                "Communication / followups for intergation with GWS"
              ]
            ]
          }
        ]
      },
      {
        "key": "free",
        "label": "Free Trial (1 Year)",
        "tiers": [
          "Free"
        ],
        "skus": [
          "Trial — 365 days"
        ],
        "codes": [
          "GWS-FREE"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email only"
              ],
              [
                "KAM (Key Account Manager)",
                "— Not included"
              ],
              [
                "TAM (Technical Account Manager)",
                "— Not included"
              ],
              [
                "First response time",
                "8 business hours"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am–7pm IST"
              ],
              [
                "Weekend support",
                "— Not included"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Trial duration",
                "365 days (no auto-renewal)"
              ],
              [
                "Ticket quota",
                "25 tickets (non-renewable during trial)"
              ],
              [
                "Google support ticket escalation",
                "— Not included"
              ],
              [
                "Additional tickets beyond quota",
                "— Not available in trial"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Onboarding call",
                "1 × 30-min session"
              ],
              [
                "Cadence / check-in calls",
                "1 × mid-trial check-in"
              ],
              [
                "Live webinar",
                "1 × group webinar access"
              ],
              [
                "GWS adoption snapshot report",
                "1 × one-time report"
              ],
              [
                "Security assessment",
                "— Not included"
              ],
              [
                "Management connects (Mgr/CXO)",
                "— Not included"
              ],
              [
                "GWS training sessions",
                "— Not included"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "Knowledge base / e-learning portal",
                "✓ Full access during trial period"
              ],
              [
                "Google certification guidance",
                "✓ Resource materials for 1 certification path"
              ],
              [
                "Self-service licence portal",
                "✓ Add/manage licences independently"
              ],
              [
                "Voice bot on board lines",
                "✓ Available"
              ],
              [
                "AppScripts",
                "— Not included (from Professional tier)"
              ],
              [
                "AppSheet",
                "— Not included (from Professional tier)"
              ],
              [
                "Onsite technical visit",
                "— Not included"
              ],
              [
                "Third-party integration support",
                "— Articles only (self-serve)"
              ]
            ]
          },
          {
            "title": "Technical Coverage (Email Support Only)",
            "rows": [
              [
                "Gmail",
                "Basic troubleshooting — sending/receiving, filters & labels"
              ],
              [
                "Google Drive",
                "File sharing & permission issues, sync troubleshooting"
              ],
              [
                "Google Meet",
                "Basic meeting setup & connection troubleshooting"
              ],
              [
                "Google Calendar",
                "Creating & sharing events, basic reminders"
              ],
              [
                "Admin Console",
                "Basic user setup, password reset, app access"
              ],
              [
                "Security features (DLP, Vault)",
                "— Not included"
              ],
              [
                "Data backup & recovery",
                "— Not included"
              ],
              [
                "Advanced integrations",
                "— Not included"
              ]
            ]
          },
          {
            "title": "Trial Journey Milestones",
            "rows": [
              [
                "Day 1",
                "Onboarding call — understand your GWS environment & pain points"
              ],
              [
                "Day 7",
                "Mid-trial check-in + group webinar access"
              ],
              [
                "Day 21",
                "GWS adoption snapshot report delivered"
              ],
              [
                "Day 28",
                "Upgrade offer presented with ROI summary"
              ]
            ]
          },
          {
            "title": "Unlock on Upgrade to Paid Plan",
            "rows": [
              [
                "Phone & chat support",
                "Available from Standard tier"
              ],
              [
                "Dedicated KAM",
                "Available from Standard tier"
              ],
              [
                "TAM (shared or dedicated)",
                "Available from Professional / Enterprise tier"
              ],
              [
                "Faster SLAs (Critical: 1 hr)",
                "Available from Standard tier"
              ],
              [
                "AppScripts & AppSheet",
                "Available from Professional tier"
              ],
              [
                "Regular cadence calls",
                "Bi-yearly from Standard; Monthly from Enterprise"
              ],
              [
                "Google ticket escalation",
                "Available from Standard tier"
              ],
              [
                "Recurring adoption reports",
                "Quarterly / Monthly on paid plans"
              ],
              [
                "Onsite technical visit",
                "Chargeable from Basic; Free from Enterprise"
              ],
              [
                "GWS training sessions",
                "2–10 sessions/year depending on tier"
              ]
            ]
          }
        ]
      }
    ]
  },
  "iam": {
    "label": "Identity and Access Management (IAM) Support Packages",
    "segments": [
      {
        "key": "smb",
        "label": "SMB",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Business Starter / Standard",
          "Business Plus",
          "Business Plus / Enterprise Starter"
        ],
        "codes": [
          "IAM-SMB-BSC",
          "IAM-SMB-STD",
          "IAM-SMB-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Articles",
                "Email, Phone",
                "Email, Chat, Phone, GMeet"
              ],
              [
                "KAM (Key Account Manager)",
                "—",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "—",
                "—",
                "✓"
              ],
              [
                "First response – Critical",
                "4–6 hours",
                "2 hours",
                "1 hour"
              ],
              [
                "First response – High",
                "24–48 hours",
                "4 hours",
                "2 hours"
              ],
              [
                "First response – Medium",
                "24–48 hours",
                "8 hours",
                "4 hours"
              ],
              [
                "First response – Low",
                "24–48 hours",
                "12 hours",
                "8 hours"
              ],
              [
                "Entire Service down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "60 tickets",
                "240 tickets",
                "600 tickets"
              ],
              [
                "Additional tickets (beyond quota)",
                "Chargeable",
                "Chargeable",
                "Chargeable"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Cadence calls",
                "—",
                "Bi-yearly",
                "Bi-yearly"
              ],
              [
                "Health Check / adoption report",
                "—",
                "Once a year - Paid Redeployment",
                "Once a year - Free Redeployment"
              ],
              [
                "IAM adoption report sharing",
                "—",
                "Bi-yearly",
                "Bi-yearly"
              ],
              [
                "IAM training sessions per year",
                "1",
                "3",
                "4"
              ],
              [
                "Management connects (Mgr/CXO)",
                "—",
                "3 Connects",
                "On - Demand"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "Custom Scripts",
                "—",
                "5 Script Per Year *",
                "10 per year*"
              ],
              [
                "Knowledge base / e-learning portal",
                "—",
                "✓",
                "✓"
              ],
              [
                "Product Level certification (guidance & materials)",
                "—",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "Chargeable (₹10K/visit)",
                "2 Per year",
                "Once Qtr"
              ],
              [
                "Third-party integration support",
                "Articles only",
                "Free Available upto 2 Applications",
                "Comprehensive support"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "",
                "Basic Scopes",
                "All the Basic scopes +",
                "All the Standard scopes +"
              ],
              [
                "Organization Settings",
                "Org Profiles, Administrators, Service accounts",
                "Security, Notification channels",
                "Features, Automation Variables, Customize Email features"
              ],
              [
                "Directory",
                "Directory configuration, Manual user import",
                "User import + Sync",
                "Directory Sync + Attribute mapping, User group mapping"
              ],
              [
                "User Management",
                "User creation, User activation, User groups",
                "Active directory/HR directories, CSV import",
                "Dynamic Group memberships, Configure user lifecycle management (onboarding/offboarding), Identity providers, API import through powershell"
              ],
              [
                "Device management",
                "Guidance on MDM, Device Onboarding for all OS, Device groups",
                "MDM, Device Onboarding for all OS, Device groups, Policy management, Software management, Patch Management, Exporting agent logs",
                "Automated Device Enrollment Configuration, Volume Purchase Program (VPP), Commands, Patch management, Asset management, Policy groups, Commands, Asset Management"
              ],
              [
                "Access Management",
                "SSO, Credential based Radius",
                "Basic Scope + LDAP, Access request",
                "Access Request, SaaS management, Certificate based Radius, Vault, Conditional Access Policies, SCIM Integration, VPN Configuration, Firewall Integration"
              ],
              [
                "Security",
                "Basic user setup & permissions, basic reports",
                "Basic user setup & permissions, basic reports, User creation, custom roles, monitoring app usage",
                "Jumpcloud Go MFA, Basic user setup & permissions, basic reports, User creation, custom roles, monitoring app usage, Org units, app config, detailed reporting & insights, Password Manager"
              ],
              [
                "Alerts",
                "Configure alerts for various scenarios",
                "Configure alerts for various scenarios",
                "Configure alerts for various scenarios"
              ],
              [
                "PAM",
                "Users creation and Server configuration",
                "Users creation and Server configuration",
                "Users creation and Server configuration"
              ],
              [
                "Reports/Insights",
                "Basic manual backup, troubleshooting",
                "Basic manual backup, troubleshooting, Automated backup for key apps",
                "Basic manual backup, troubleshooting, Automated backup for key apps, Automated backup, scheduled audits, Export Insights data into SIEM tools (optional if using a 3rd party SIEM)"
              ]
            ]
          },
          {
            "title": "Pricing",
            "rows": [
              [
                "Recommended Charges / month (Rs.)",
                "Min 3K",
                "Min 5K",
                "Min 10K"
              ]
            ]
          }
        ]
      },
      {
        "key": "mid",
        "label": "Mid-Market",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Business Starter / Standard",
          "Business Plus / Enterprise Starter",
          "Enterprise Standard / Plus"
        ],
        "codes": [
          "IAM-MM-BSC",
          "IAM-MM-STD",
          "IAM-MM-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Phone",
                "Email, Chat, Phone",
                "Email, Chat, Phone, GMeet"
              ],
              [
                "KAM (Key Account Manager)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "—",
                "Any available resource",
                "Shared SPOC"
              ],
              [
                "First response – Critical",
                "2 hours",
                "1 hour",
                "15 minutes"
              ],
              [
                "First response – High",
                "4 hours",
                "2 hours",
                "30 minutes"
              ],
              [
                "First response – Medium",
                "8 hours",
                "4 hours",
                "2 hours"
              ],
              [
                "First response – Low",
                "12 hours",
                "8 hours",
                "4 hours"
              ],
              [
                "Entire Service down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, 10am–7pm",
                "Mon–Fri, any 4 hrs (8am–8pm)"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "240 tickets",
                "600 tickets",
                "960 tickets"
              ],
              [
                "Additional tickets (beyond quota)",
                "Chargeable",
                "Chargeable",
                "Chargeable"
              ],
              [
                "Product Level support ticket quota",
                "12",
                "18",
                "30"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Health check",
                "Bi-yearly",
                "Quarterly",
                "Monthly"
              ],
              [
                "Security assessment / adoption report",
                "Once a year",
                "Twice a year",
                "Quarterly"
              ],
              [
                "IAM adoption report sharing",
                "Bi-yearly",
                "Quarterly",
                "Monthly"
              ],
              [
                "IAM training sessions per year",
                "3",
                "4",
                "6"
              ],
              [
                "Management connects (Mgr/CXO)",
                "Once a year",
                "Once a year",
                "Once a year"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "Custom Scripts",
                "2 Script Per Year *",
                "5 Script Per Year *",
                "10 per year*"
              ],
              [
                "Knowledge base / e-learning portal",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Product Level certification (guidance & materials)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "Chargeable (₹10K/visit)",
                "Chargeable (₹10K/visit)",
                "1 free visit/year"
              ],
              [
                "Third-party integration support",
                "Most integrations",
                "Comprehensive support",
                "Comprehensive + optimised"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "",
                "Basic Scopes",
                "All the Basic scopes +",
                "All the Standard scopes +"
              ],
              [
                "Organization Settings",
                "Org Profiles, Administrators, Service accounts",
                "Security, Notification channels",
                "Features, Automation Variables, Customize Email features"
              ],
              [
                "Directory",
                "Directory configuration, Manual user import",
                "User import + Sync",
                "Directory Sync + Attribute mapping, User group mapping"
              ],
              [
                "User Management",
                "User creation, User activation, User groups",
                "Active directory/HR directories, CSV import",
                "Dynamic Group memberships, Configure user lifecycle management (onboarding/offboarding), Identity providers, API import through powershell"
              ],
              [
                "Device management",
                "MDM, Device Onboarding for all OS, Device groups",
                "Policy management, Software management, Patch Management, Exporting agent logs",
                "Automated Device Enrollment Configuration, Volume Purchase Program (VPP), Commands, Patch management, Asset management, Policy groups, Commands, Asset Management"
              ],
              [
                "Access Management",
                "SSO, Credential based Radius",
                "LDAP, Access request",
                "Access Request, SaaS management, Certificate based Radius, Vault, Conditional Access Policies, SCIM Integration, VPN Configuration, Firewall Integration"
              ],
              [
                "Security",
                "Basic user setup & permissions, basic reports",
                "Basic user setup & permissions, basic reports, User creation, custom roles, monitoring app usage",
                "Jumpcloud Go MFA, Basic user setup & permissions, basic reports, User creation, custom roles, monitoring app usage, Org units, app config, detailed reporting & insights, Password Manager"
              ],
              [
                "Alerts",
                "Configure alerts for various scenarios",
                "Configure alerts for various scenarios",
                "Configure alerts for various scenarios"
              ],
              [
                "PAM",
                "Users creation and Server configuration",
                "Users creation and Server configuration",
                "Users creation and Server configuration"
              ],
              [
                "Reports/Insights",
                "Basic manual backup, troubleshooting",
                "Basic manual backup, troubleshooting, Automated backup for key apps",
                "Basic manual backup, troubleshooting, Automated backup for key apps, Automated backup, scheduled audits, Export Insights data into SIEM tools (optional if using a 3rd party SIEM)"
              ]
            ]
          },
          {
            "title": "Pricing",
            "rows": [
              [
                "Recommended Charges / month (Rs.)",
                "Min 10K",
                "Min 20K",
                "Min 40K"
              ]
            ]
          }
        ]
      },
      {
        "key": "enterprise",
        "label": "Enterprise",
        "tiers": [
          "Basic",
          "Standard",
          "Professional"
        ],
        "skus": [
          "Business, Frontline, Enterprise Starter",
          "Enterprise Standard / Plus",
          "Enterprise Std / Enterprise Plus"
        ],
        "codes": [
          "IAM-ENT-BSC",
          "IAM-ENT-STD",
          "IAM-ENT-PRO"
        ],
        "groups": [
          {
            "title": "Support Access",
            "rows": [
              [
                "Support channels",
                "Email, Chat, Phone",
                "Email, Chat, Phone",
                "Email, Chat, Phone, GMeet"
              ],
              [
                "KAM (Key Account Manager)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "TAM (Technical Account Manager)",
                "Shared SPOC",
                "Dedicated (Remote)",
                "Dedicated (onsite)"
              ],
              [
                "First response – Critical",
                "15 minutes",
                "Immediate",
                "Immediate"
              ],
              [
                "First response – High",
                "30 minutes",
                "Immediate",
                "Immediate"
              ],
              [
                "First response – Medium",
                "2 hours",
                "Immediate",
                "Immediate"
              ],
              [
                "First response – Low",
                "4 hours",
                "Immediate",
                "Immediate"
              ],
              [
                "Entire Service down (exceptional)",
                "Within 30 min",
                "Within 30 min",
                "Within 30 min"
              ],
              [
                "Hours of support",
                "Mon–Fri, any 4 hrs (8am–8pm)",
                "Mon–Fri, any 8 hrs (8am–8pm)",
                "Mon–Fri, 5 days/week onsite"
              ],
              [
                "Weekend support",
                "Additional charges",
                "Additional charges",
                "Additional charges"
              ]
            ]
          },
          {
            "title": "Quotas & Capacity",
            "rows": [
              [
                "Yearly ticket quota",
                "960 tickets",
                "1800 tickets",
                "1800 tickets"
              ],
              [
                "Additional tickets (beyond quota)",
                "Chargeable",
                "Chargeable",
                "Chargeable"
              ],
              [
                "Product Level support ticket quota",
                "30",
                "30",
                "30"
              ]
            ]
          },
          {
            "title": "Engagement & Reviews",
            "rows": [
              [
                "Health check",
                "Monthly",
                "Monthly",
                "Monthly"
              ],
              [
                "Security assessment / adoption report",
                "Quarterly",
                "Quarterly",
                "Quarterly"
              ],
              [
                "IAM adoption report sharing",
                "Monthly",
                "Monthly",
                "Monthly"
              ],
              [
                "IAM training sessions per year",
                "6",
                "8",
                "10"
              ],
              [
                "Management connects (Mgr/CXO)",
                "Once a year",
                "Once a year",
                "Once a year"
              ]
            ]
          },
          {
            "title": "Value Adds",
            "rows": [
              [
                "Custom Scripts",
                "2 Script Per Year *",
                "5 Script Per Year *",
                "10 per year*"
              ],
              [
                "Knowledge base / e-learning portal",
                "✓",
                "✓",
                "✓"
              ],
              [
                "IAM certification (guidance & materials)",
                "✓",
                "✓",
                "✓"
              ],
              [
                "Onsite technical visit",
                "1 free visit/year",
                "2 free visits/year",
                "All 5 days/week (included)"
              ],
              [
                "Third-party integration support",
                "Comprehensive + optimised",
                "Comprehensive + optimised",
                "Comprehensive + optimised"
              ]
            ]
          },
          {
            "title": "Technical Coverage",
            "rows": [
              [
                "",
                "Basic Scopes",
                "All the Basic scopes +",
                "All the Standard scopes +"
              ],
              [
                "Organization Settings",
                "Org Profiles, Administrators, Service accounts",
                "Security, Notification channels",
                "Features, Automation Variables, Customize Email features"
              ],
              [
                "Directory",
                "Directory configuration, Manual user import",
                "User import + Sync",
                "Directory Sync + Attribute mapping, User group mapping"
              ],
              [
                "User Management",
                "User creation, User activation, User groups",
                "Active directory/HR directories, CSV import",
                "Dynamic Group memberships, Configure user lifecycle management (onboarding/offboarding), Identity providers, API import through powershell"
              ],
              [
                "Device management",
                "MDM, Device Onboarding for all OS, Device groups",
                "Policy management, Software management, Patch Management, Exporting agent logs",
                "Automated Device Enrollment Configuration, Volume Purchase Program (VPP), Commands, Patch management, Asset management, Policy groups, Commands, Asset Management"
              ],
              [
                "Access Management",
                "SSO, Credential based Radius",
                "LDAP, Access request",
                "Access Request, SaaS management, Certificate based Radius, Vault, Conditional Access Policies, SCIM Integration, VPN Configuration, Firewall Integration"
              ],
              [
                "Security",
                "Basic user setup & permissions, basic reports",
                "Basic user setup & permissions, basic reports, User creation, custom roles, monitoring app usage",
                "Jumpcloud Go MFA, Basic user setup & permissions, basic reports, User creation, custom roles, monitoring app usage, Org units, app config, detailed reporting & insights, Password Manager"
              ],
              [
                "Alerts",
                "Configure alerts for various scenarios",
                "Configure alerts for various scenarios",
                "Configure alerts for various scenarios"
              ],
              [
                "PAM",
                "Users creation and Server configuration",
                "Users creation and Server configuration",
                "Users creation and Server configuration"
              ],
              [
                "Reports/Insights",
                "Basic manual backup, troubleshooting",
                "Basic manual backup, troubleshooting, Automated backup for key apps",
                "Basic manual backup, troubleshooting, Automated backup for key apps, Automated backup, scheduled audits, Export Insights data into SIEM tools (optional if using a 3rd party SIEM)"
              ]
            ]
          },
          {
            "title": "Pricing",
            "rows": [
              [
                "Recommended Charges / month (Rs.)",
                "Min 50K",
                "Min 80K",
                "Min 1.5 Lakhs"
              ]
            ]
          }
        ]
      }
    ]
  }
} as const;
