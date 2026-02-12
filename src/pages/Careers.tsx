import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight, Users, Zap, Heart, TrendingUp, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { API_ENDPOINTS } from '@/utils/api';
import careersBanner from '@/assets/banners/careers-banner.jpg';

const jobOpenings = [
  {
    title: 'Social Media Manager',
    experience: '3-5 years',
    description: 'We are looking for a creative Social Media Manager to drive B2B strategies, manage paid campaigns, create thought-leadership content for CXOs, and oversee leadership LinkedIn profiles. You\'ll collaborate with marketing, explore influencer and podcast partnerships, track analytics, and ensure measurable results, while aligning storytelling with business goals.',
  },
  {
    title: 'Inside Sales Representative',
    experience: '0-2 years (Freshers can also apply)',
    description: 'Looking for individuals who will actively source new sales opportunities through emailing and cold-calling. Individuals who will understand consumer needs and identify sales opportunities. Should be able to handle customer queries and keep themselves updated on all the products and services for lead generation. Excellent communication and interpersonal skills are a must. Should be proficient in Google Workspace, Microsoft Office, and CRM software.',
  },
  {
    title: 'Business Development Executive',
    experience: '1-2 years',
    description: 'We are seeking individuals who will communicate with potential clients, make outbound calls, and follow up on leads. Keep themselves updated about the products and services for lead generation and also keep an update on competing products. Create a pipeline of opportunities for the organization. Should be proficient in Google Workspace, Microsoft Office, and CRM software. A multi-tasker with strong listening and sales skills.',
  },
  {
    title: 'Assistant Sales Manager',
    experience: '4-5 years',
    description: 'We are looking for experienced individuals who can expand the sales opportunities within the region and look for new opportunities. Individuals should be able to organize, supervise, and direct the work of the Sales team. The person must participate in operational and strategic planning and development of an annual budget for the business. Should be able to coordinate with the marketing department on lead generation.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Accelerate your career with continuous learning and development programs.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive team environment.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'Work with the latest cloud technologies from Google, Microsoft, and more.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible policies and benefits that support your well-being.',
  },
];

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
};

export default function Careers() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: '',
    message: '',
    captchaAnswer: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleApplyClick = (profile: string) => {
    handleInputChange('profile', profile);
    scrollToForm();
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.profile) newErrors.profile = 'Please select a profile';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.captchaAnswer.trim()) {
      newErrors.captchaAnswer = 'Please solve the captcha';
    } else if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      newErrors.captchaAnswer = 'Incorrect answer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(JSON.stringify(formData, null, 2));

    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.STORE_CAREER_DETAILS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      toast({
        title: 'Application Submitted!',
        description: 'Thank you for your interest. Redirecting...',
      });
      navigate('/careers/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={careersBanner}
            alt="Careers at Shivaami"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-32 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Build Your Career with Shivaami
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Join a team of passionate professionals transforming businesses through cloud technology. 
              Discover opportunities that match your skills and ambitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Join Shivaami?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              We offer more than just a job. Be part of a dynamic team shaping the future of cloud technology.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-5 md:p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-12 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Explore our open positions and find the perfect role for your career growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-5 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2 text-xs md:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          Experience: {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          Mumbai, India
                        </span>
                      </div>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 group/btn text-sm"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Shape Your Future?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Take the first step towards an exciting career. Fill out the form below and our HR team will get back to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-xl border border-border/50 p-6 md:p-8 shadow-lg">
              <div className="grid gap-5 md:gap-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Profile Select */}
                <div>
                  <Label htmlFor="profile" className="text-sm font-medium mb-2 block">
                    Select Profile <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.profile} onValueChange={(value) => handleInputChange('profile', value)}>
                    <SelectTrigger className={errors.profile ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobOpenings.map((job) => (
                        <SelectItem key={job.title} value={job.title}>
                          {job.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.profile && <p className="text-destructive text-xs mt-1">{errors.profile}</p>}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and why you're interested in this role..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Captcha */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Security Check <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary px-4 py-2 rounded-lg font-mono text-lg">
                      {captcha.num1} + {captcha.num2} = ?
                    </div>
                    <Input
                      placeholder="Answer"
                      value={formData.captchaAnswer}
                      onChange={(e) => handleInputChange('captchaAnswer', e.target.value)}
                      className={`w-24 ${errors.captchaAnswer ? 'border-destructive' : ''}`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setCaptcha(generateCaptcha())}
                      className="text-xs"
                    >
                      Refresh
                    </Button>
                  </div>
                  {errors.captchaAnswer && <p className="text-destructive text-xs mt-1">{errors.captchaAnswer}</p>}
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={scrollToForm}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
