import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  contact: z.string().trim().min(1, "Contact number is required").max(20, "Contact number must be less than 20 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

interface TransferSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Generate random math captcha
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
}

export default function TransferSubscriptionDialog({ open, onOpenChange }: TransferSubscriptionDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      setErrors(prev => ({ ...prev, captcha: 'Incorrect answer. Please try again.' }));
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly regarding your subscription transfer.",
    });

    // Reset form
    setFormData({ name: '', email: '', contact: '', message: '' });
    setCaptchaInput('');
    refreshCaptcha();
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white border-0">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#0C4594] to-[#38B6FF] p-6 pb-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              Transfer Subscription
            </DialogTitle>
            <p className="text-white/80 text-sm mt-2">
              Fill in your details and we'll help you transfer your Google Workspace subscription seamlessly.
            </p>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#0C4594] font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0C4594] font-medium">
              Email ID <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={`border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-[#0C4594] font-medium">
              Contact Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              className={`border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 ${errors.contact ? 'border-red-500' : ''}`}
            />
            {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#0C4594] font-medium">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your current subscription and requirements"
              rows={3}
              className={`border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 resize-none ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          {/* Captcha */}
          <div className="space-y-2">
            <Label className="text-[#0C4594] font-medium">
              Verification <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#0C4594]/10 to-[#38B6FF]/10 px-4 py-2 rounded-lg border border-[#38B6FF]/30">
                  <span className="text-[#0C4594] font-semibold text-lg">
                    {captcha.num1} + {captcha.num2} = ?
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={refreshCaptcha}
                  className="text-[#38B6FF] hover:text-[#0C4594] hover:bg-[#38B6FF]/10"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
              <Input
                value={captchaInput}
                onChange={(e) => {
                  setCaptchaInput(e.target.value);
                  if (errors.captcha) setErrors(prev => ({ ...prev, captcha: '' }));
                }}
                placeholder="Answer"
                className={`w-24 border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 text-center ${errors.captcha ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.captcha && <p className="text-red-500 text-xs">{errors.captcha}</p>}
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0C4594] to-[#38B6FF] hover:from-[#0a3a7a] hover:to-[#2da8f0] text-white font-semibold py-6 text-base rounded-xl shadow-lg transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
