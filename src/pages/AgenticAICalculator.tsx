import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { z } from 'zod';
import { Check, Loader2, Copy, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  INDUSTRY_OPTIONS, REGION_OPTIONS, computeROI, formatCurrency, formatPayback,
  generateInsights, type Industry, type Region, type ROIInputs,
} from '@/lib/agenticROI';
import { submitLead } from '@/lib/leadWebhook';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// CTA URLs — replace with final Apollo & Zoho links when provided.
const APOLLO_URL = 'https://meetings.apollo.io/meet/shivaami-team/30min';
const ZOHO_TRIAL_URL = 'https://www.shivaami.com/free-trial';
const SHARE_URL = 'agenticaicalculator.shivaami.com';

const meetingChoices = [
  { value: 5,  label: 'Under 5 hrs',  badge: 'Low' },
  { value: 10, label: '5–12 hrs',     badge: 'Moderate' },
  { value: 15, label: '12+ hrs',      badge: 'High' },
];
const docChoices = [
  { value: 5,  label: 'Under 5 hrs',  badge: 'Low' },
  { value: 10, label: '5–12 hrs',     badge: 'Moderate' },
  { value: 15, label: '12+ hrs',      badge: 'High' },
];
const researchChoices = [
  { value: 2,  label: 'Under 2 hrs',  badge: 'Low' },
  { value: 5,  label: '2–8 hrs',      badge: 'Moderate' },
  { value: 12, label: '8+ hrs',       badge: 'High' },
];

const contactSchema = z.object({
  fullName: z.string().trim().min(1, 'Required').max(100),
  workEmail: z.string().trim().email('Enter a valid email').max(255),
  companyName: z.string().trim().min(1, 'Required').max(150),
  companyWebsite: z.string().trim().min(1, 'Required').max(255)
    .refine((v) => /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}([/?#].*)?$/i.test(v), 'Enter a valid URL'),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  jobTitle: z.string().trim().min(1, 'Required').max(120),
});

type Step = 1 | 2 | 3;

const PARTNER_BADGES = [
  { src: '/badges/tier_gws_cosell_and_service_diamond.png', alt: 'Google Workspace Diamond Co-sell & Service Partner' },
  { src: '/badges/GC-PP-Sell-Outline.png', alt: 'Google Cloud Premier Co-sell Partner' },
  { src: '/badges/GWS-PP-Sell-Service-Outline.png', alt: 'Google Cloud Premier Services Partner' },
];

export default function AgenticAICalculator() {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>(1);
  const [completed, setCompleted] = useState<Record<Step, boolean>>({ 1: false, 2: false, 3: false });
  const [calculating, setCalculating] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Step 1
  const [industry, setIndustry] = useState<Industry | ''>('');
  const [region, setRegion] = useState<Region | ''>('');
  const [fte, setFte] = useState<string>('');
  const [redundantSpend, setRedundantSpend] = useState<string>('');

  // Step 2 — work profile
  const [meetHrs, setMeetHrs] = useState<number | null>(null);
  const [docHrs, setDocHrs] = useState<number | null>(null);
  const [researchHrs, setResearchHrs] = useState<number | null>(null);

  // Step 2 — contact
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputs: ROIInputs | null = useMemo(() => {
    if (!industry || !region || !fte || meetHrs == null || docHrs == null || researchHrs == null) return null;
    return {
      industry, region,
      fte: Math.max(1, Number(fte) || 0),
      monthlyRedundantSpend: Math.max(0, Number(redundantSpend) || 0),
      meetHrs, docHrs, researchHrs,
    };
  }, [industry, region, fte, redundantSpend, meetHrs, docHrs, researchHrs]);

  const metrics = useMemo(() => inputs ? computeROI(inputs) : null, [inputs]);
  const insights = useMemo(() => (inputs && metrics) ? generateInsights(inputs, metrics) : [], [inputs, metrics]);

  const scrollToTop = () => {
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  const goToStep = (s: Step) => {
    if (s === step) return;
    if (s > step && !completed[step]) return;
    if (s === 3 && !completed[2]) return;
    setStep(s);
    scrollToTop();
  };

  const handleNextFromStep1 = () => {
    if (!industry || !region || !fte || Number(fte) < 1) {
      toast({ title: 'Please complete required fields', description: 'Industry, region and employee count are required.', variant: 'destructive' });
      return;
    }
    setCompleted((c) => ({ ...c, 1: true }));
    setStep(2);
    scrollToTop();
  };

  const handleSubmit = async () => {
    if (meetHrs == null || docHrs == null || researchHrs == null) {
      toast({ title: 'Please answer all work-profile questions', variant: 'destructive' });
      return;
    }
    const parsed = contactSchema.safeParse({ fullName, workEmail, companyName, companyWebsite, phone, jobTitle });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => { errs[String(iss.path[0])] = iss.message; });
      setErrors(errs);
      toast({ title: 'Please fix the highlighted fields', variant: 'destructive' });
      return;
    }
    setErrors({});
    setCalculating(true);
    // Fire-and-forget lead capture
    submitLead({
      timestamp: new Date().toISOString(),
      fullName, workEmail, companyName, companyWebsite, phone, jobTitle,
      industry: industry as string,
      region: region as string,
      fte: Number(fte) || 0,
      monthlyRedundantSpend: Number(redundantSpend) || 0,
      meetHrs, docHrs, researchHrs,
    });
    await new Promise((r) => setTimeout(r, 1200));
    setCalculating(false);
    setCompleted((c) => ({ ...c, 2: true }));
    setStep(3);
    scrollToTop();
  };

  const handleReset = () => {
    setStep(1);
    setCompleted({ 1: false, 2: false, 3: false });
    setIndustry(''); setRegion(''); setFte(''); setRedundantSpend('');
    setMeetHrs(null); setDocHrs(null); setResearchHrs(null);
    setFullName(''); setWorkEmail(''); setCompanyName(''); setCompanyWebsite('');
    setPhone(''); setJobTitle(''); setErrors({});
    scrollToTop();
  };

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(`https://${SHARE_URL}`);
      toast({ title: 'Link copied', description: 'Share it with your colleagues.' });
    } catch {
      toast({ title: 'Could not copy link', variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Agentic AI ROI Calculator | ROI Calculator for Gemini Enterprise | Shivaami</title>
        <meta name="description" content="Calculate your Return on Investment for deploying Gemini Enterprise Standard. Get a personalized savings report covering cost savings, productivity gains, revenue uplift and payback period." />
        <link rel="canonical" href="https://www.shivaami.com/agentic-ai-calculator" />
      </Helmet>
      <Header />

      <main className="flex-1 pt-[120px] md:pt-32 pb-16">
        <div ref={topRef} />
        <div className="container max-w-5xl px-4">

          {/* Tab pills */}
          <div className="flex items-center gap-2 md:gap-4 mb-8 overflow-x-auto">
            {[
              { n: 1 as Step, label: 'Context' },
              { n: 2 as Step, label: 'Requirements' },
              { n: 3 as Step, label: 'Results' },
            ].map(({ n, label }) => {
              const isActive = step === n;
              const isDone = completed[n];
              const clickable = n === step || isDone || (n === 2 && completed[1]) || (n === 3 && completed[2]);
              return (
                <button
                  key={n}
                  onClick={() => clickable && goToStep(n)}
                  disabled={!clickable}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors border',
                    isActive ? 'bg-primary text-primary-foreground border-primary' :
                    isDone ? 'bg-primary/10 text-primary border-primary/30' :
                    'bg-muted text-muted-foreground border-border',
                    !clickable && 'opacity-60 cursor-not-allowed',
                  )}
                >
                  <span className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center text-xs',
                    isActive ? 'bg-white/20' : isDone ? 'bg-primary text-white' : 'bg-background',
                  )}>
                    {isDone ? <Check className="w-3.5 h-3.5" /> : n}
                  </span>
                  {label}
                </button>
              );
            })}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Hero card */}
              <Card className="relative overflow-hidden p-8 md:p-12 border-0 text-white bg-gradient-to-br from-primary via-[hsl(214_82%_28%)] to-[hsl(214_82%_18%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(199_91%_50%/0.25),transparent_60%)] pointer-events-none" />
                <div className="relative">
                  <span className="inline-block text-xs font-bold tracking-wider uppercase text-white/70 mb-3">Agentic AI ROI Calculator</span>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                    Calculate your Return on Investment for Gemini Enterprise
                  </h1>
                  <p className="text-white/80 text-base md:text-lg max-w-2xl">
                    Answer a few questions and get your personalized savings report — covering cost savings, productivity gains, revenue uplift, and payback period.
                  </p>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Personalize your ROI report</h2>
                <p className="text-sm text-muted-foreground mb-6">Required fields are marked with *</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Industry *</Label>
                    <Select value={industry} onValueChange={(v) => setIndustry(v as Industry)}>
                      <SelectTrigger className="text-base"><SelectValue placeholder="Select your industry" /></SelectTrigger>
                      <SelectContent>
                        {INDUSTRY_OPTIONS.map((o) => (
                          <SelectItem key={o.label} value={o.label}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Primary region *</Label>
                    <Select value={region} onValueChange={(v) => setRegion(v as Region)}>
                      <SelectTrigger className="text-base"><SelectValue placeholder="Select primary region" /></SelectTrigger>
                      <SelectContent>
                        {REGION_OPTIONS.map((o) => (
                          <SelectItem key={o.label} value={o.label}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fte">Number of full-time employees *</Label>
                    <Input id="fte" type="number" min={1} inputMode="numeric" value={fte}
                      onChange={(e) => setFte(e.target.value)} placeholder="e.g. 250" className="text-base" />
                    <p className="text-xs text-muted-foreground">Gemini Enterprise users to be covered</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spend">Total monthly spend on other AI tools, org-wide (USD)</Label>
                    <Input id="spend" type="number" min={0} inputMode="numeric" value={redundantSpend}
                      onChange={(e) => setRedundantSpend(e.target.value)} placeholder="Optional — e.g. 1500" className="text-base" />
                    <p className="text-xs text-muted-foreground">Total monthly spend across your organization on AI tools that Gemini Enterprise can replace</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button size="lg" onClick={handleNextFromStep1} className="w-full md:w-auto">
                    Next: Requirements <ArrowRight className="ml-1" />
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <Card className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Work Profile</h2>
                <p className="text-sm text-muted-foreground mb-6">Per-employee weekly hours — pick the closest band.</p>

                <ChoiceGroup label="Weekly hours in meetings per employee *"
                  options={meetingChoices} value={meetHrs} onChange={setMeetHrs} />
                <ChoiceGroup label="Weekly hours on email, documents & reports per employee *"
                  options={docChoices} value={docHrs} onChange={setDocHrs} />
                <ChoiceGroup label="Weekly hours on manual research & data gathering per employee *"
                  options={researchChoices} value={researchHrs} onChange={setResearchHrs} />
              </Card>

              <Card className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Contact Details</h2>
                <p className="text-sm text-muted-foreground mb-6">We use this to personalize and send your ROI report.</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name *" error={errors.fullName}>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} className="text-base" />
                  </Field>
                  <Field label="Work Email *" error={errors.workEmail}>
                    <Input type="email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} className="text-base" />
                  </Field>
                  <Field label="Company Name *" error={errors.companyName}>
                    <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="text-base" />
                  </Field>
                  <Field label="Company Website *" error={errors.companyWebsite}>
                    <Input placeholder="https://" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} className="text-base" />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="text-base" />
                  </Field>
                  <Field label="Job Title *" error={errors.jobTitle}>
                    <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="text-base" />
                  </Field>
                </div>

                <div className="mt-8 flex flex-col-reverse md:flex-row md:justify-between gap-3">
                  <Button variant="outline" size="lg" onClick={() => { setStep(1); scrollToTop(); }}>
                    <ArrowLeft className="mr-1" /> Back
                  </Button>
                  <Button size="lg" onClick={handleSubmit} className="w-full md:w-auto">
                    Show My Agentic AI Savings <ArrowRight className="ml-1" />
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* STEP 3 — Results */}
          {step === 3 && metrics && inputs && (
            <ResultsView
              metrics={metrics}
              inputs={inputs}
              insights={insights}
              companyName={companyName}
              onReset={handleReset}
              onCopyShare={handleCopyShare}
            />
          )}
        </div>
      </main>

      {/* Calculating overlay */}
      {calculating && (
        <div className="fixed inset-0 z-[60] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="p-8 max-w-sm w-full text-center">
            <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-3">Generating your report</h3>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>• Analyzing industry benchmarks</li>
              <li>• Calculating productivity gains</li>
              <li>• Estimating savings & payback</li>
              <li>• Preparing your personalized report</li>
            </ul>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}

/* ---------- helpers ---------- */

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ChoiceGroup({
  label, options, value, onChange,
}: {
  label: string;
  options: { value: number; label: string; badge: string }[];
  value: number | null;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-6">
      <Label className="block mb-3">{label}</Label>
      <div className="grid sm:grid-cols-3 gap-3">
        {options.map((o) => {
          const active = value === o.value;
          const tone = o.badge === 'Low' ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
            : o.badge === 'Moderate' ? 'bg-sky-50 text-sky-700 border-sky-200'
            : 'bg-orange-50 text-orange-700 border-orange-200';
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={cn(
                'text-left rounded-xl border-2 p-4 transition-all',
                active ? 'border-primary bg-primary/5 shadow-md' : 'border-border hover:border-primary/40 bg-card',
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">{o.label}</span>
                <span className={cn('text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border', tone)}>{o.badge}</span>
              </div>
              <div className={cn('w-4 h-4 rounded-full border-2 flex items-center justify-center',
                active ? 'border-primary bg-primary' : 'border-muted-foreground/40')}>
                {active && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultsView({
  metrics, inputs, insights, companyName, onReset, onCopyShare,
}: {
  metrics: ReturnType<typeof computeROI>;
  inputs: ROIInputs;
  insights: string[];
  companyName: string;
  onReset: () => void;
  onCopyShare: () => void;
}) {
  const title = companyName.trim()
    ? `${companyName.trim()}'s Agentic AI Savings Report`
    : 'Your ROI Report for Gemini Enterprise';

  // Bar chart values
  const maxBar = Math.max(metrics.annualProductivityValue, metrics.legacyCostsAnnual, metrics.licenseCost, 1);
  const bars = [
    { label: 'Productivity Gain',  value: metrics.annualProductivityValue, color: 'bg-emerald-500' },
    { label: 'Tool Savings',       value: metrics.legacyCostsAnnual,       color: 'bg-primary' },
    { label: 'License Investment', value: metrics.licenseCost,             color: 'bg-[hsl(199_91%_50%)]' },
  ];

  return (
    <div className="space-y-6">
      {/* Header card */}
      <Card className="relative overflow-hidden p-8 md:p-10 border-0 text-white bg-gradient-to-br from-primary via-[hsl(214_82%_28%)] to-[hsl(214_82%_18%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(199_91%_50%/0.25),transparent_60%)] pointer-events-none" />
        <div className="relative">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-white/70 mb-2">
            Agentic AI ROI Report — Powered by Shivaami
          </span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-3xl">
            Based on your inputs — here's what deploying Gemini Enterprise Standard ($30/user/month) can deliver for your business.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <KPI label="Total Annual Savings (Org-wide)" value={formatCurrency(metrics.totalAnnualGain)} tone="green" />
            <KPI label="Payback Period" value={formatPayback(metrics.paybackMonths)} tone="white" />
            <KPI label="3-Year Net Value (Org-wide)" value={formatCurrency(metrics.threeYearNetValue)} tone="sky" />
          </div>
        </div>
      </Card>

      {/* Key Insights */}
      <Card className="p-6 md:p-8 border-l-4 border-l-accent">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-accent" />
          <h2 className="text-lg font-bold">Key Insights</h2>
        </div>
        <ol className="space-y-3 text-sm md:text-base text-foreground/90">
          {insights.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">{i + 1}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </Card>

      {/* Metric boxes */}
      <div>
        <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Your ROI Metrics</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <MetricBox highlight label="Annual Productivity Value" value={formatCurrency(metrics.annualProductivityValue)} />
          <MetricBox label="Tool Costs Eliminated (Annual, Org-wide)" value={formatCurrency(metrics.legacyCostsAnnual)} />
          <MetricBox label="Hrs Reclaimed / Person / Week" value={`${metrics.hoursReclaimedPerPerson.toFixed(1)} hrs`} />
          <MetricBox label="Est. Revenue Uplift — Year 1" value={formatCurrency(metrics.revenueUplift)} />
        </div>
      </div>

      {/* Value Breakdown */}
      <Card className="p-6 md:p-8">
        <h3 className="text-lg font-bold mb-5">Value Breakdown</h3>
        <div className="space-y-4">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-foreground">{b.label}</span>
                <span className="font-semibold text-foreground">{formatCurrency(b.value)}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className={cn('h-full rounded-full transition-all', b.color)}
                  style={{ width: `${Math.max(2, (b.value / maxBar) * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* CTA pair */}
      <div className="grid md:grid-cols-2 gap-5">
        <Card className="p-6 md:p-7 bg-primary text-primary-foreground border-0 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Discuss Your Results With a Google Cloud Expert</h3>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/15">Most Impactful</span>
          </div>
          <p className="text-sm text-white/80 mb-5 flex-1">
            Get a personalized walkthrough of your savings report and a 90-day deployment outline.
          </p>
          <a href={APOLLO_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
              Schedule a Consultation <ArrowRight className="ml-1" />
            </Button>
          </a>
          <p className="text-xs text-white/60 mt-3">30-min session · Google Cloud Partner</p>
        </Card>

        <Card className="p-6 md:p-7 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-foreground">Try Gemini Enterprise Free for 30 Days</h3>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">Risk-Free</span>
          </div>
          <p className="text-sm text-muted-foreground mb-5 flex-1">
            Spin up a full-feature trial for your team and validate the gains in your own workflows.
          </p>
          <a href={ZOHO_TRIAL_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full">
              Request Free Trial <ArrowRight className="ml-1" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-3">Full features · Cancel anytime</p>
        </Card>
      </div>

      {/* Deeper Insights teaser */}
      <Card className="p-6 md:p-8 bg-muted/40">
        <h3 className="text-lg font-bold mb-4">Deeper Insights Available</h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/90">
          {[
            'Custom agentic AI blueprint',
            'Department-by-department savings breakdown',
            'Compliance readiness',
            'Shadow IT & data exfiltration risk assessment',
            '90-day deployment roadmap',
            'License right-sizing',
          ].map((t) => (
            <li key={t} className="flex gap-2"><Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{t}</li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-4">
          Shared during your free 30-min analysis session with a Shivaami Google Cloud expert.
        </p>
      </Card>

      {/* Share */}
      <Card className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Share this tool with your colleagues</p>
          <p className="text-sm text-muted-foreground break-all">{SHARE_URL}</p>
        </div>
        <Button variant="outline" onClick={onCopyShare}>
          <Copy className="mr-1" /> Copy Link
        </Button>
      </Card>

      {/* Partner badges */}
      <Card className="p-6 md:p-8">
        <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4 text-center">Google Cloud Partner Recognition</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {PARTNER_BADGES.map((b) => (
            <img key={b.src} src={b.src} alt={b.alt} loading="lazy" className="h-20 md:h-24 w-auto object-contain" />
          ))}
        </div>
      </Card>

      <div className="flex justify-center pt-2">
        <Button variant="ghost" onClick={onReset}>
          <ArrowLeft className="mr-1" /> Start New Assessment
        </Button>
      </div>
    </div>
  );
}

function KPI({ label, value, tone }: { label: string; value: string; tone: 'green' | 'white' | 'sky' }) {
  const styles = tone === 'green'
    ? 'bg-emerald-500/15 border-emerald-300/30 text-emerald-50'
    : tone === 'sky'
    ? 'bg-[hsl(199_91%_50%/0.15)] border-[hsl(199_91%_70%/0.3)] text-sky-50'
    : 'bg-white/10 border-white/20 text-white';
  return (
    <div className={cn('rounded-xl border p-4', styles)}>
      <p className="text-[11px] font-semibold uppercase tracking-wider opacity-80 mb-1">{label}</p>
      <p className="text-2xl md:text-3xl font-bold">{value}</p>
    </div>
  );
}

function MetricBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <Card className={cn('p-5', highlight && 'bg-primary text-primary-foreground border-0')}>
      <p className={cn('text-xs font-semibold uppercase tracking-wider mb-1.5',
        highlight ? 'text-white/70' : 'text-muted-foreground')}>{label}</p>
      <p className="text-2xl md:text-3xl font-bold">{value}</p>
    </Card>
  );
}