import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  contact: z.string().trim().min(1, "Required").max(20),
  message: z.string().trim().min(1, "Required").max(1000),
});

interface TransferSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
}

export default function TransferSubscriptionDialog({ open, onOpenChange }: TransferSubscriptionDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
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
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) newErrors[err.path[0] as string] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    if (parseInt(captchaInput) !== captcha.answer) {
      setErrors(prev => ({ ...prev, captcha: 'Incorrect' }));
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly regarding your subscription transfer.",
    });

    setFormData({ name: '', email: '', contact: '', message: '' });
    setCaptchaInput('');
    refreshCaptcha();
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden bg-white border-0 rounded-2xl">
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-[#0C4594] to-[#38B6FF] px-5 py-4">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              Transfer Subscription
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Compact Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          {/* Two columns for Name and Contact */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                className={`h-10 text-sm border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 ${errors.name ? 'border-red-400' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name}</p>}
            </div>
            <div>
              <Input
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Contact No. *"
                className={`h-10 text-sm border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 ${errors.contact ? 'border-red-400' : ''}`}
              />
              {errors.contact && <p className="text-red-500 text-[10px] mt-0.5">{errors.contact}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address *"
              className={`h-10 text-sm border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 ${errors.email ? 'border-red-400' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message *"
              rows={2}
              className={`text-sm border-slate-200 focus:border-[#38B6FF] focus:ring-[#38B6FF]/20 resize-none ${errors.message ? 'border-red-400' : ''}`}
            />
            {errors.message && <p className="text-red-500 text-[10px] mt-0.5">{errors.message}</p>}
          </div>

          {/* Captcha - Inline */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#0C4594]/5 to-[#38B6FF]/10 px-3 py-1.5 rounded-lg border border-[#38B6FF]/20">
              <span className="text-[#0C4594] font-semibold text-sm">
                {captcha.num1} + {captcha.num2} =
              </span>
            </div>
            <Input
              value={captchaInput}
              onChange={(e) => {
                setCaptchaInput(e.target.value);
                if (errors.captcha) setErrors(prev => ({ ...prev, captcha: '' }));
              }}
              placeholder="?"
              className={`w-16 h-9 text-sm text-center border-slate-200 focus:border-[#38B6FF] ${errors.captcha ? 'border-red-400' : ''}`}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={refreshCaptcha}
              className="h-9 w-9 text-[#38B6FF] hover:text-[#0C4594] hover:bg-[#38B6FF]/10"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </Button>
            {errors.captcha && <span className="text-red-500 text-[10px]">{errors.captcha}</span>}
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0C4594] to-[#38B6FF] hover:from-[#0a3a7a] hover:to-[#2da8f0] text-white font-semibold h-11 text-sm rounded-xl shadow-md transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
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
