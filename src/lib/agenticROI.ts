export type Industry =
  | 'Financial Services'
  | 'Technology & SaaS'
  | 'Healthcare & Life Sciences'
  | 'Professional Services'
  | 'Manufacturing'
  | 'Retail & eCommerce'
  | 'Education'
  | 'Other';

export type Region =
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Middle East & Africa'
  | 'Asia'
  | 'Australia & New Zealand';

export const INDUSTRY_OPTIONS: { label: Industry; mult: number }[] = [
  { label: 'Financial Services', mult: 1.3 },
  { label: 'Technology & SaaS', mult: 1.2 },
  { label: 'Healthcare & Life Sciences', mult: 1.1 },
  { label: 'Professional Services', mult: 1.15 },
  { label: 'Manufacturing', mult: 1.0 },
  { label: 'Retail & eCommerce', mult: 1.05 },
  { label: 'Education', mult: 1.0 },
  { label: 'Other', mult: 1.0 },
];

export const REGION_OPTIONS: { label: Region; mult: number }[] = [
  { label: 'North America', mult: 1.0 },
  { label: 'South America', mult: 0.8 },
  { label: 'Europe', mult: 0.85 },
  { label: 'Middle East & Africa', mult: 0.8 },
  { label: 'Asia', mult: 0.75 },
  { label: 'Australia & New Zealand', mult: 0.85 },
];

// Salary matrix: NA, EU, Asia, SA/MEA
const SALARY_MATRIX: Record<Industry, { na: number; eu: number; asia: number; samea: number }> = {
  'Financial Services':         { na: 105000, eu: 72000, asia: 42000, samea: 48000 },
  'Technology & SaaS':          { na: 115000, eu: 70000, asia: 45000, samea: 42000 },
  'Healthcare & Life Sciences': { na: 90000,  eu: 58000, asia: 35000, samea: 38000 },
  'Professional Services':      { na: 95000,  eu: 62000, asia: 38000, samea: 40000 },
  'Manufacturing':              { na: 75000,  eu: 48000, asia: 30000, samea: 32000 },
  'Retail & eCommerce':         { na: 72000,  eu: 46000, asia: 28000, samea: 30000 },
  'Education':                  { na: 65000,  eu: 42000, asia: 25000, samea: 28000 },
  'Other':                      { na: 70000,  eu: 45000, asia: 28000, samea: 30000 },
};

function salaryFor(industry: Industry, region: Region): number {
  const row = SALARY_MATRIX[industry];
  switch (region) {
    case 'North America': return row.na;
    case 'Europe': return row.eu;
    case 'Asia': return row.asia;
    case 'Australia & New Zealand': return row.eu;
    case 'South America':
    case 'Middle East & Africa':
      return row.samea;
    default: return row.na;
  }
}

export interface ROIInputs {
  industry: Industry;
  region: Region;
  fte: number;
  monthlyRedundantSpend: number; // optional, 0 if none
  meetHrs: number;     // 5 | 10 | 15
  docHrs: number;      // 5 | 10 | 15
  researchHrs: number; // 2 | 5 | 12
}

export interface ROIMetrics {
  hourlyRate: number;
  weeklyHoursSaved: number;
  adjustedWeeklySaved: number;
  annualProductivityValue: number;
  legacyCostsAnnual: number;
  totalAnnualGain: number;
  licenseCost: number;
  tco: number;
  netValue: number;
  roiPct: number;
  paybackMonths: number;
  threeYearNetValue: number;
  revenueUplift: number;
  hoursReclaimedPerPerson: number;
}

export function computeROI(i: ROIInputs): ROIMetrics {
  const industryMult = INDUSTRY_OPTIONS.find(x => x.label === i.industry)?.mult ?? 1;
  const regionMult = REGION_OPTIONS.find(x => x.label === i.region)?.mult ?? 1;
  const avgSalary = salaryFor(i.industry, i.region);

  const hourlyRate = (avgSalary * 1.3) / 2080;
  const weeklyHoursSaved = i.meetHrs * 0.22 + i.docHrs * 0.40 + i.researchHrs * 0.80;
  const adjustedWeeklySaved = weeklyHoursSaved * 0.60;
  const annualProductivityValue =
    i.fte * adjustedWeeklySaved * 52 * hourlyRate * 0.40 * 0.82 * industryMult * regionMult;
  const legacyCostsAnnual = (i.monthlyRedundantSpend || 0) * 12;
  const totalAnnualGain = annualProductivityValue + legacyCostsAnnual;
  const licenseCost = i.fte * 30 * 12;
  const tco = licenseCost * 1.25;
  const netValue = totalAnnualGain - tco;
  const roiPct = tco > 0 ? (netValue / tco) * 100 : 0;
  const paybackMonths = totalAnnualGain > 0 ? tco / (totalAnnualGain / 12) : 0;
  const threeYearNetValue = netValue * 3;
  const revenueUplift = annualProductivityValue * 0.30 * 0.10;
  const hoursReclaimedPerPerson = adjustedWeeklySaved;

  return {
    hourlyRate, weeklyHoursSaved, adjustedWeeklySaved, annualProductivityValue,
    legacyCostsAnnual, totalAnnualGain, licenseCost, tco, netValue, roiPct,
    paybackMonths, threeYearNetValue, revenueUplift, hoursReclaimedPerPerson,
  };
}

export function formatCurrency(n: number): string {
  if (!isFinite(n)) return '$0';
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (abs >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${Math.round(n).toLocaleString()}`;
}

export function formatPayback(months: number): string {
  if (!isFinite(months) || months <= 0) return '—';
  if (months < 1) {
    const days = Math.max(1, Math.round(months * 30));
    return `${days} days`;
  }
  return `${months.toFixed(1)} mo`;
}

export function generateInsights(i: ROIInputs, m: ROIMetrics): string[] {
  const hrsPerYearTeam = m.adjustedWeeklySaved * i.fte * 52;
  return [
    `Your ${i.fte.toLocaleString()}-person team can reclaim approximately ${Math.round(hrsPerYearTeam).toLocaleString()} hours per year — roughly ${m.adjustedWeeklySaved.toFixed(1)} hours per employee per week — by letting Gemini Enterprise handle meeting prep, drafting and research.`,
    `At a fully-loaded hourly rate of ${formatCurrency(m.hourlyRate)} for your ${i.industry} workforce in ${i.region}, that reclaimed time translates into ${formatCurrency(m.annualProductivityValue)} of annual productivity value.`,
    i.monthlyRedundantSpend > 0
      ? `Consolidating onto Gemini Enterprise can retire about ${formatCurrency(m.legacyCostsAnnual)} per year of overlapping AI tooling across your organization.`
      : `Even without counting any existing AI-tool spend you can retire, the productivity gain alone pays back Gemini Enterprise in ${formatPayback(m.paybackMonths)}.`,
    `Net of a 25% implementation buffer on $30/user/month licenses, you are looking at ${formatCurrency(m.netValue)} of net value in Year 1 and ${formatCurrency(m.threeYearNetValue)} over three years.`,
  ];
}