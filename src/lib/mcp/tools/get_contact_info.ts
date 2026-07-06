import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get Shivaami contact info",
  description: "Returns Shivaami's official contact details: phone numbers, email addresses, and office locations for India and USA.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      india: {
        phone: "+91 22 6666 4225",
        email: "sales@shivaami.com",
        support: "support@shivaami.com",
        office: "Mumbai, India",
      },
      usa: {
        phone: "+1 (408) 333-4844",
        email: "sales@shivaami.com",
        support: "support@shivaami.com",
      },
      website: "https://www.shivaami.com",
      contact_page: "https://www.shivaami.com/contact",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});