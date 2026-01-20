import { motion } from 'framer-motion';
import { Mail, Phone, Ticket, ArrowRight, Users, Shield, UserCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const supportChannels = [
  {
    icon: Mail,
    title: 'Email Support',
    items: [
      { label: 'India', value: 'support@shivaami.com' },
      { label: 'USA', value: 'usa@shivaami.com' },
    ],
  },
  {
    icon: Phone,
    title: 'Phone Support',
    items: [
      { label: 'India', value: '+91 775 784 1333' },
      { label: 'USA', value: '+1 408 333 4844' },
    ],
  },
  {
    icon: Ticket,
    title: 'Support Portal',
    items: [
      { label: 'Raise a Ticket', value: 'Get a response within 24 hours', isAction: true },
    ],
  },
];

const escalationLevels = [
  {
    level: 1,
    title: 'Initial Support Request',
    subtitle: 'Submit Your Support Request',
    description: 'Raise your query through any of our service channels below. You will receive a detailed response within 24 hours, depending on the priority of your request.',
    icon: Ticket,
    channels: [
      {
        type: 'email',
        title: 'Email Support',
        items: ['India: support@shivaami.com', 'USA: usa@shivaami.com'],
      },
      {
        type: 'phone',
        title: 'Phone Support',
        items: ['India: +91 775 784 1333 (Ext: 2)', 'USA: +1 408 333 4844'],
      },
      {
        type: 'direct',
        title: 'Direct Google Support',
        items: ['India: 1800 108 7879', 'USA: +1 650 206 5555, +1 650 763 0461, +1 855 593 8213'],
      },
    ],
  },
  {
    level: 2,
    title: 'Manager Support',
    subtitle: 'Speak with Our Support Managers',
    description: 'For queries requiring additional attention or if you need immediate assistance, contact our support managers directly.',
    icon: Users,
    contacts: [
      {
        region: 'India',
        flag: '🇮🇳',
        name: 'Pratima Attarde',
        role: 'Manager',
        phone: '+91 775 784 1333 (Ext: 2)',
        email: 'pratima.attarde@shivaami.com',
      },
      {
        region: 'USA',
        flag: '🇺🇸',
        name: 'Kunal Thacker',
        role: 'Director',
        phone: '+1 408 333 4844 (Ext: 3)',
        email: 'kunal@shivaami.com',
      },
    ],
    note: 'For Faster Resolution: Please provide your ticket number, domain name, your name, and mobile number when contacting us.',
  },
  {
    level: 3,
    title: 'Executive Escalation',
    subtitle: 'Escalation to Senior Leadership',
    description: 'If your query has not been resolved to your satisfaction through previous support levels, you can escalate directly to our senior leadership team.',
    icon: Shield,
    executives: [
      { name: 'Chetana Chaudhari', email: 'chetana@shivaami.com' },
      { name: 'Punit Thakkar', role: 'CEO', email: 'punit@shivaami.com' },
    ],
    note: 'Important: Please mention your query reference number for speedy resolution.',
  },
];

export default function SupportServices() {
  return (
    <>
      <Helmet>
        <title>Support Services | Shivaami Cloud Services</title>
        <meta name="description" content="Get comprehensive support from Shivaami. Access our dedicated support portals for India and USA customers, raise tickets, and get help from our expert team." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#0C4594] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                We're here to help you every step of the way
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Comprehensive support tailored for your region with dedicated portals and expert assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Regional Support Portals */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* India Portal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">🇮🇳</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">India Customers</h2>
                    <p className="text-muted-foreground text-sm">Dedicated support portal</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Access our dedicated support portal for Indian customers. Get comprehensive domain management, transaction history, and license management all in one place.
                </p>
                
                <a 
                  href="https://customercare.shivaami.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0C4594] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0C4594]/90 transition-all mb-6"
                >
                  <Ticket className="w-5 h-5" />
                  Raise a Support Ticket
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                
                <div className="border-t border-border/50 pt-6">
                  <h3 className="font-semibold text-foreground mb-4">What You Can Do:</h3>
                  <ul className="space-y-3">
                    {[
                      'View complete domain summary and details',
                      'Access full transaction history',
                      'Add licenses anytime as needed',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-[#0C4594] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* USA Portal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-3xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">🇺🇸</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">USA Customers</h2>
                    <p className="text-muted-foreground text-sm">Dedicated support portal</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our dedicated support portal for US-based customers. Get quick access to all your support needs in one convenient location.
                </p>
                
                <a 
                  href="https://customercare.shivaami.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0C4594] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0C4594]/90 transition-all"
                >
                  <Ticket className="w-5 h-5" />
                  Raise a Support Ticket
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reach Out Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reach Out to Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to connect with our support team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <motion.div
                    key={channel.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border/50 p-6 text-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0C4594]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#0C4594]" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-4">{channel.title}</h3>
                    <div className="space-y-2">
                      {channel.items.map((item) => (
                        <div key={item.label} className="text-muted-foreground">
                          {item.isAction ? (
                            <a 
                              href="https://customercare.shivaami.com/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#0C4594] hover:underline font-medium"
                            >
                              {item.label}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <>
                              <span className="font-medium text-foreground">{item.label}: </span>
                              <span>{item.value}</span>
                            </>
                          )}
                          {item.isAction && (
                            <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Escalation Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Support Escalation Process
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our three-tier support system ensures your issues are resolved efficiently. Each level provides specialized assistance tailored to your needs.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {escalationLevels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-lg"
                  >
                    {/* Level Header */}
                    <div className="bg-gradient-to-r from-[#0C4594] to-[#1a5ab8] px-8 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{level.level}</span>
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-white">
                            LEVEL {level.level}: {level.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Level Content */}
                    <div className="p-8">
                      <h4 className="font-semibold text-foreground text-lg mb-3">{level.subtitle}</h4>
                      <p className="text-muted-foreground mb-6">{level.description}</p>

                      {/* Level 1: Channels */}
                      {level.channels && (
                        <div className="grid md:grid-cols-3 gap-6">
                          {level.channels.map((channel) => (
                            <div key={channel.type} className="bg-secondary/30 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-3">
                                {channel.type === 'email' && <Mail className="w-5 h-5 text-[#0C4594]" />}
                                {channel.type === 'phone' && <Phone className="w-5 h-5 text-[#0C4594]" />}
                                {channel.type === 'direct' && <ExternalLink className="w-5 h-5 text-[#0C4594]" />}
                                <span className="font-semibold text-foreground">{channel.title}</span>
                              </div>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                {channel.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Level 2: Contacts */}
                      {level.contacts && (
                        <>
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {level.contacts.map((contact) => (
                              <div key={contact.region} className="bg-secondary/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-3xl">{contact.flag}</span>
                                  <div>
                                    <h5 className="font-semibold text-foreground">{contact.region} Support {contact.role === 'Director' ? 'Director' : 'Manager'}</h5>
                                    <p className="text-sm text-muted-foreground">{contact.name} - {contact.role}</p>
                                  </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Phone className="w-4 h-4 text-[#0C4594]" />
                                    <span>{contact.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Mail className="w-4 h-4 text-[#0C4594]" />
                                    <a href={`mailto:${contact.email}`} className="hover:text-[#0C4594] transition-colors">
                                      {contact.email}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          {level.note && (
                            <div className="bg-[#0C4594]/5 border border-[#0C4594]/20 rounded-xl p-4">
                              <p className="text-sm text-foreground">
                                <strong>💡 {level.note.split(':')[0]}:</strong> {level.note.split(':').slice(1).join(':')}
                              </p>
                            </div>
                          )}
                        </>
                      )}

                      {/* Level 3: Executives */}
                      {level.executives && (
                        <>
                          <div className="bg-secondary/30 rounded-xl p-6 mb-6">
                            <h5 className="font-semibold text-foreground mb-4">Executive Contacts</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                              {level.executives.map((exec) => (
                                <div key={exec.name} className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-[#0C4594]/10 flex items-center justify-center">
                                    <UserCheck className="w-5 h-5 text-[#0C4594]" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-foreground">
                                      {exec.name} {exec.role && <span className="text-muted-foreground">- {exec.role}</span>}
                                    </p>
                                    <a href={`mailto:${exec.email}`} className="text-sm text-[#0C4594] hover:underline">
                                      {exec.email}
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {level.note && (
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                              <p className="text-sm text-foreground">
                                <strong>⚠️ {level.note.split(':')[0]}:</strong> {level.note.split(':').slice(1).join(':')}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
