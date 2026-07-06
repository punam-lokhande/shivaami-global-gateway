import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const BASE_URL = "https://www.shivaami.com";

const PAGES: Array<{ path: string; title: string; category: string }> = [
  { path: "/", title: "Home", category: "Main" },
  { path: "/about-us", title: "About Us", category: "Company" },
  { path: "/leadership", title: "Leadership", category: "Company" },
  { path: "/achievements", title: "Achievements", category: "Company" },
  { path: "/certifications", title: "Certifications", category: "Company" },
  { path: "/careers", title: "Careers", category: "Company" },
  { path: "/contact", title: "Contact", category: "Company" },
  { path: "/google-workspace", title: "Google Workspace", category: "Product" },
  { path: "/google-cloud-platform", title: "Google Cloud Platform", category: "Product" },
  { path: "/gemini-enterprise", title: "Gemini Enterprise", category: "Product" },
  { path: "/google-ai-ultra", title: "Google AI Ultra", category: "Product" },
  { path: "/chrome-enterprise", title: "Chrome Enterprise", category: "Product" },
  { path: "/chromebook", title: "Chromebook", category: "Product" },
  { path: "/google-meet-hardware", title: "Google Meet Hardware", category: "Product" },
  { path: "/appsheet", title: "AppSheet", category: "Product" },
  { path: "/apps-script", title: "Apps Script", category: "Product" },
  { path: "/aws", title: "AWS", category: "Product" },
  { path: "/azure", title: "Azure", category: "Product" },
  { path: "/microsoft-365", title: "Microsoft 365", category: "Product" },
  { path: "/securesight", title: "SecureSight", category: "Product" },
  { path: "/sales-sync", title: "Gemini + Salesforce Sync", category: "Product" },
  { path: "/smarter-solutions", title: "Smarter Solutions", category: "Hub" },
  { path: "/safer-security", title: "Safer Security", category: "Hub" },
  { path: "/smoother-services", title: "Smoother Services", category: "Hub" },
  { path: "/support-packages", title: "Support Packages", category: "Support" },
  { path: "/support-services", title: "Support Services", category: "Support" },
  { path: "/case-studies", title: "Case Studies", category: "Resources" },
  { path: "/newsletter", title: "Newsletter", category: "Resources" },
  { path: "/become-partner", title: "Become a Partner", category: "Company" },
  { path: "/referral-program", title: "Referral Program", category: "Company" },
  { path: "/privacy-policy", title: "Privacy Policy", category: "Legal" },
  { path: "/terms-and-conditions", title: "Terms & Conditions", category: "Legal" },
];

export default defineTool({
  name: "list_pages",
  title: "List Shivaami pages",
  description: "Returns the list of public pages on shivaami.com with titles, URLs, and categories (Company, Product, Hub, Support, Resources, Legal).",
  inputSchema: {
    category: z.string().optional().describe("Optional filter by category (case-insensitive)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered = category
      ? PAGES.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      : PAGES;
    const rows = filtered.map((p) => ({
      title: p.title,
      url: `${BASE_URL}${p.path}`,
      category: p.category,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { pages: rows },
    };
  },
});