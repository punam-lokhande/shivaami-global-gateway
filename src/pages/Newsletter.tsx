import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, TrendingUp, Shield, Calendar, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Expert analysis on emerging technologies',
  },
  {
    icon: TrendingUp,
    title: 'Proven strategies to reduce IT costs',
  },
  {
    icon: Shield,
    title: 'Security updates and compliance guidance',
  },
  {
    icon: Calendar,
    title: 'Invitations to exclusive industry events',
  },
];

declare global {
  interface Window {
    setupSF: (...args: any[]) => void;
    runOnFormSubmit_sf3z129613819e83c149fddb6f9e33b70d7b2169c82c3c7474ea5ff0d5c809aee106: (th: any) => void;
  }
}

export default function Newsletter() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://lzyx-zgph.maillist-manage.net/js/optin.min.js';
    script1.onload = () => {
      if (window.setupSF) {
        try {
          window.setupSF('sf3z129613819e83c149fddb6f9e33b70d7b2169c82c3c7474ea5ff0d5c809aee106','ZCFORMVIEW',false,'light',false,'0');
        } catch (error) {
          console.error("Error setting up Zoho form:", error);
        }
      }
    };
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.innerHTML = `
      function runOnFormSubmit_sf3z129613819e83c149fddb6f9e33b70d7b2169c82c3c7474ea5ff0d5c809aee106(th){ /*Before submit, if you want to trigger your event, "include your code here"*/ };
    `;
    document.body.appendChild(script2);

    const style = document.createElement('style');
    style.innerHTML = `#customForm.quick_form_29_css * { -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important; overflow-wrap: break-word }@media only screen and (max-width: 200px) {.quick_form_29_css[name="SIGNUP_BODY"] { width: 100% !important; min-width: 100% !important; margin: 0px auto !important; padding: 0px !important } }@media screen and (min-width: 320px) and (max-width: 580px) and (orientation: portrait) {.quick_form_29_css[name="SIGNUP_BODY"] { max-width: 300px !important; margin: 0px auto !important; padding: 0px !important } }@media only screen and (max-device-width: 1024px) {.quick_form_29_css[name="SIGNUP_BODY"] { max-width: 500px !important; margin: 0px auto !important } }@media only screen and (max-device-width: 1024px) and (orientation: landscape) {.quick_form_29_css[name="SIGNUP_BODY"] { max-width: 700px !important; margin: 0px auto !important } }@media screen and (min-width: 475px) and (max-width: 980px) and (orientation: landscape) {.quick_form_29_css[name="SIGNUP_BODY"] { max-width: 400px !important; margin: 0px auto !important; padding: 0px !important } }`;
    document.head.appendChild(style);

    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const zohoEmailInput = document.getElementById('EMBED_FORM_EMAIL_LABEL') as HTMLInputElement;
    const zohoSubmitButton = document.getElementById('zcWebOptin') as HTMLInputElement;

    if (zohoEmailInput && zohoSubmitButton) {
      zohoEmailInput.value = email;
      zohoSubmitButton.click();
    } else {
      console.error('Zoho form elements not found.');
    }
  };

  const zohoForm = (
    <div id="sf3z129613819e83c149fddb6f9e33b70d7b2169c82c3c7474ea5ff0d5c809aee106" data-type="signupform" style={{ opacity: 1, display: 'none' }}>
      <div id="customForm">
        <div className="quick_form_29_css" style={{ width: '300px', zIndex: 2, fontFamily: 'Arial', border: '1px none rgb(206, 206, 206)', backgroundColor: 'rgb(255, 255, 255)', backgroundPosition: '0px 100%', backgroundRepeat: 'no-repeat', overflow: 'hidden' }} name="SIGNUP_BODY">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontFamily: '"Arial"', fontWeight: 'normal', color: 'rgb(0, 162, 234)', textAlign: 'left', padding: '30px 25px 5px', width: '100%', display: 'block' }} id="SIGNUP_HEADING">Join Our Newsletter</div>
            <div style={{ position: 'relative' }}>
              <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                  <tbody>
                    <tr>
                      <td width="10%"><img className="successicon" src="https://lzyx-zgph.maillist-manage.net/images/challangeiconenable.jpg" align="absmiddle" alt="success" /></td>
                      <td><span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%' }} action="https://lzyx-zgph.maillist-manage.net/weboptin.zc" target="_zcSignup">
              <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', margin: '20px 10px 0px', border: '1px solid rgb(255, 217, 211)', opacity: 1, display: 'none' }} id="errorMsgDiv">Please correct the marked field(s) below.</div>
              <div style={{ position: 'relative', width: '250px', height: '41px', padding: '0 10px', margin: '20px 70px 0px 20px', display: 'inline-block' }}>
                <span style={{ verticalAlign: 'middle', backgroundImage: 'url(https://campaigns.zoho.com/images/mail_icon.svg)', display: 'inline-block', borderTop: 'none', borderLeft: 'none', borderRight: 'none', width: '40px', backgroundSize: '25px', backgroundPosition: 'center center', border: 'solid rgb(214, 205, 205)', borderWidth: '1px 0 1px 1px', backgroundRepeat: 'no-repeat', height: '41px', boxSizing: 'border-box', float: 'left' }}></span>
                <input type="text" style={{ fontSize: '17px', borderWidth: '1px', borderColor: 'rgb(214, 205, 205)', borderStyle: 'solid', width: '190px', height: '100%', zIndex: 4, outline: 'none', padding: '4px 10px 6px', boxSizing: 'border-box', color: 'rgb(113, 106, 106)', textAlign: 'left', fontFamily: '"Arial"', backgroundColor: 'transparent', borderRadius: '0px', display: 'inline-block', float: 'left' }} placeholder="Email" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
              </div>
              <div style={{ position: 'relative', width: '180px', height: '40px', margin: '20px 70px 50px 10px', display: 'inline-block' }}>
                <input type="button" style={{ textAlign: 'center', width: '100%', height: '100%', zIndex: 5, border: 0, color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontSize: '20px', backgroundColor: 'rgb(72, 134, 255)', borderRadius: '5px' }} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Join Now" />
              </div>
              <input type="hidden" id="fieldBorder" value="" />
              <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
              <input type="hidden" id="emailReportId" name="emailReportId" value="" />
              <input type="hidden" id="formType" name="formType" value="QuickForm" />
              <input type="hidden" name="zx" id="cmpZuid" value="129589521" />
              <input type="hidden" name="zcvers" value="3.0" />
              <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
              <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
              <input type="hidden" id="zcld" name="zcld" value="13ae1bce1921e2b1" />
              <input type="hidden" id="zctd" name="zctd" value="13ae1bce15aafbd1" />
              <input type="hidden" id="document_domain" value="" />
              <input type="hidden" id="zc_Url" value="lzyx-zgph.maillist-manage.net" />
              <input type="hidden" id="new_optin_response_in" value="0" />
              <input type="hidden" id="duplicate_optin_response_in" value="0" />
              <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
              <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z129613819e83c149fddb6f9e33b70d7b2169c82c3c7474ea5ff0d5c809aee106" />
              <input type="hidden" id="viewFrom" value="URL_ACTION" />
              <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
              <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
              <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Newsletter | Shivaami</title>
        <meta name="description" content="Get the latest IT insights and Shivaami news delivered monthly. Expert analysis, cost-saving strategies, and security updates." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#0C4594] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_#38B6FF20_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_#38B6FF15_0%,_transparent_50%)]" />
          {/* Floating orbs */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 left-[10%] w-64 h-64 bg-[#38B6FF]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-[15%] w-80 h-80 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38B6FF]/5 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-[#38B6FF] to-transparent mb-8"
                  />

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Never Miss an
                    <span className="block text-[#38B6FF]">Update</span>
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 leading-relaxed">
                    Get the latest IT insights and Shivaami news delivered monthly.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-5">
                    <h3 className="text-sm font-semibold text-[#38B6FF] uppercase tracking-widest">What You'll Get</h3>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-[#38B6FF]/20 group-hover:border-[#38B6FF]/30 transition-all duration-300">
                          <benefit.icon className="w-5 h-5 text-[#38B6FF]" />
                        </div>
                        <span className="text-white/90 font-medium">{benefit.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right - Subscription Form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="relative">
                    {/* Glow effect behind card */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#38B6FF]/20 to-white/10 rounded-[2rem] blur-2xl" />
                    
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-10">
                      <div className="text-center mb-8">
                        <motion.div 
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-20 h-20 bg-gradient-to-br from-[#38B6FF] to-white/30 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-[#38B6FF]/30"
                        >
                          <Mail className="w-9 h-9 text-white" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-white">Subscribe Now</h2>
                        <p className="text-white/60 mt-2">Join thousands of IT professionals</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <Input
                            type="email"
                            placeholder="Your work email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-14 text-lg px-5 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#38B6FF] focus:ring-[#38B6FF]/30 backdrop-blur-sm"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-14 text-lg font-semibold bg-white text-[#0C4594] hover:bg-[#38B6FF] hover:text-white shadow-xl transition-all duration-300"
                        >
                          Get Free Insights
                        </Button>
                      </form>

                      <p className="text-center text-sm text-white/50 mt-6">
                        No spam, ever. Only valuable content. Unsubscribe with one click.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {zohoForm}
    </>
  );
}
