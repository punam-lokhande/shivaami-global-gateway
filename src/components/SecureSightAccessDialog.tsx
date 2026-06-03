import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { API_ENDPOINTS } from '@/utils/api';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EMPLOYEE_COUNTS = ['1-50', '51-250', '251-1000', '1000+'];
const LICENSES = [
  'Business Starter',
  'Business Standard',
  'Business Plus',
  'Enterprise Essentials',
  'Enterprise Essentials Plus',
  'Enterprise Starter',
  'Enterprise Standard',
  'Enterprise Plus',
];

const SecureSightAccessDialog = ({ open, onOpenChange }: Props) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [companyDomain, setCompanyDomain] = useState('');
  const [adminEmails, setAdminEmails] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [licenses, setLicenses] = useState<string[]>([]);
  const [otherLicense, setOtherLicense] = useState('');
  const [otherChecked, setOtherChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setEmail('');
      setCompanyDomain('');
      setAdminEmails('');
      setEmployeeCount('');
      setLicenses([]);
      setOtherLicense('');
      setOtherChecked(false);
    }
  }, [open]);

  const toggleLicense = (l: string) => {
    setLicenses(prev => prev.includes(l) ? prev.filter(x => x !== l) : [...prev, l]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!employeeCount) {
      toast({ title: 'Please select employee count', variant: 'destructive' });
      return;
    }
    const allLicenses = [...licenses, ...(otherChecked && otherLicense ? [`Other: ${otherLicense}`] : [])];
    if (allLicenses.length === 0) {
      toast({ title: 'Please select at least one GWS License', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(API_ENDPOINTS.STORE_SECURESIGHT_CUSTOMERDETAILS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          website: companyDomain,
          emailids: adminEmails,
          emoloyeecounts: employeeCount,
          licenses: allLicenses.join(', '),
          message: `Admin Emails: ${adminEmails}\nEmployee Count: ${employeeCount}\nGWS Licenses: ${allLicenses.join(', ')}`,
          productName: 'SecureSight Early Access',
          submittedFrom: '/securesight',
        }),
      });
      if (res.ok) {
        toast({ title: 'Request Submitted!', description: "We'll grant you early access shortly." });
        onOpenChange(false);
        navigate('/thank-you');
      } else {
        toast({ title: 'Submission Failed', description: 'Please try again.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Network Error', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-[560px] max-h-[90vh] overflow-y-auto bg-background p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#0C4594]">SecureSight Early Access</DialogTitle>
          <DialogDescription>Fill out the form to request early access.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="ss-email">Email *</Label>
            <Input id="ss-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ss-domain">Company Domain *</Label>
            <Input id="ss-domain" value={companyDomain} onChange={e => setCompanyDomain(e.target.value)} required placeholder="company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ss-admins">Admin Email IDs *</Label>
            <p className="text-xs text-muted-foreground">
              Please list the email addresses of the team members who have SuperAdmin access to Google Workspace, separated by commas (e.g., admin1@company.com, admin2@company.com).
            </p>
            <p className="text-xs text-muted-foreground"><strong>Note:</strong> These users will be granted early access to the environment.</p>
            <Input id="ss-admins" value={adminEmails} onChange={e => setAdminEmails(e.target.value)} required placeholder="admin1@company.com, admin2@company.com" />
          </div>
          <div className="space-y-2">
            <Label>Current Employee Count *</Label>
            <RadioGroup value={employeeCount} onValueChange={setEmployeeCount} className="space-y-1">
              {EMPLOYEE_COUNTS.map(c => (
                <div key={c} className="flex items-center space-x-2">
                  <RadioGroupItem value={c} id={`ec-${c}`} />
                  <Label htmlFor={`ec-${c}`} className="font-normal cursor-pointer">{c}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>GWS Licenses in Use *</Label>
            <div className="space-y-2">
              {LICENSES.map(l => (
                <div key={l} className="flex items-center space-x-2">
                  <Checkbox id={`lic-${l}`} checked={licenses.includes(l)} onCheckedChange={() => toggleLicense(l)} />
                  <Label htmlFor={`lic-${l}`} className="font-normal cursor-pointer">{l}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox id="lic-other" checked={otherChecked} onCheckedChange={v => setOtherChecked(!!v)} />
                <Label htmlFor="lic-other" className="font-normal cursor-pointer">Other:</Label>
                <Input className="h-8 flex-1" value={otherLicense} onChange={e => setOtherLicense(e.target.value)} disabled={!otherChecked} />
              </div>
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#0C4594] hover:bg-[#1a5ab8] text-white">
            {isSubmitting ? 'Submitting...' : 'Submit'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SecureSightAccessDialog;