import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface GetStartedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
};

const GetStartedDialog = ({ open, onOpenChange }: GetStartedDialogProps) => {
  const location = useLocation();
  const { toast } = useToast();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    captchaAnswer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setCaptcha(generateCaptcha());
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        captchaAnswer: '',
      });
    }
  }, [open]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      toast({
        title: "Incorrect Captcha",
        description: "Please solve the math problem correctly.",
        variant: "destructive",
      });
      setCaptcha(generateCaptcha());
      setFormData(prev => ({ ...prev, captchaAnswer: '' }));
      return;
    }

    setIsSubmitting(true);

    // Extract product name from the last part of the URL path.
    // This assumes a URL structure like /products/your-product-name
    const pathParts = location.pathname.split('/').filter(Boolean);
    const productName =
      pathParts.length > 0
        ? pathParts[pathParts.length - 1]
        : 'General Inquiry';

    const submissionData = { ...formData, productName, submittedFrom: location.pathname };
    console.log('Form Data Submitted:', submissionData);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground">Get Started</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and our team will reach out to you shortly.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              required
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website" className="text-foreground">Website</Label>
            <Input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://yourcompany.com"
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your requirements..."
              required
              rows={3}
              className="bg-background border-border resize-none"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="captchaAnswer" className="text-foreground">
              Security Captcha: What is {captcha.num1} + {captcha.num2}? *
            </Label>
            <Input
              id="captchaAnswer"
              name="captchaAnswer"
              type="number"
              value={formData.captchaAnswer}
              onChange={handleInputChange}
              placeholder="Enter the answer"
              required
              className="bg-background border-border"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
