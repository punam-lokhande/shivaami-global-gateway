// Lead capture webhook for Agentic AI ROI Calculator.
// Set this to your Google Apps Script /exec URL when ready.
// Until then, submitLead silently no-ops so the UI keeps working.
export const LEAD_WEBHOOK_URL = '';

export interface LeadPayload {
  timestamp: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  companyWebsite: string;
  phone?: string;
  jobTitle: string;
  industry: string;
  region: string;
  fte: number;
  monthlyRedundantSpend: number;
  meetHrs: number;
  docHrs: number;
  researchHrs: number;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!LEAD_WEBHOOK_URL) return;
  try {
    await fetch(LEAD_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    });
  } catch {
    // fire-and-forget; never block UI on webhook failures
  }
}