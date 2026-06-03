
## Goal
Replace the content on `/register-webinar` (`src/pages/RegisterWebinar.tsx`) with the **verbatim** copy from https://webinar.shivaami.com/. Keep the current layout, sections, colors, components, icons, and form structure exactly as they are. Only the text changes.

## Verbatim content mapping

### Hero
- H1: "Build Your Agentic Workforce with Gemini Enterprise for Education"
- Subheading (blue): "Join Google Cloud and Shivaami for a deep dive session on how to scale secure, context-aware AI agents across your campus ecosystem"
- Supporting line under hero (kept inside hero block): "Automate the processes and workflows that slow your institution down."
- CTA: "Register Now" → anchors to `#registration-form`

### Image + Intro Strip
- Heading: "Webinar"
- Sub-heading line: "Wednesday, June 10 · 1:00 to 1:45 PM EDT"
- Paragraph (verbatim): "Join Google Cloud and Shivaami for a deep dive session on how to scale secure, context-aware AI agents across your campus ecosystem, transforming institutional efficiency while keeping student data completely locked down. Learn to build AI agents that ease the load on your teams, simplify everyday workflows, and automate the busy work by connecting with 250+ connectors."
- Meta icons:
  - Calendar: "Wednesday, June 10"
  - Clock: "1:00 to 1:45 PM EDT"
  - MapPin: "Webinar — Google Meet invite shared upon registration"

### Gift callout strip (above tabs) — verbatim Bonus block
"**Bonus.** Webinar attendees will be eligible for receiving Gemini Enterprise free 30-day trial with organization-specific hands-on agent build sessions. Two custom Gems will be shared with all attendees: the Gemini Enterprise Use Case Validator Gem and ROI Calculator Gem."

### Tabs (keep 3 tabs; relabel third)
Tab labels: "Overview" · "Agenda" · "Speakers"

**Overview tab (verbatim copy from source)**
- "Webinar — Gemini Enterprise live demo"
- "Interactive Q&A — Q&A with Google Cloud and Shivaami experts"
- Section heading: "The Agenda"
- "Tight, crisp, and built to send you back with a clear next move, learn how to build, deploy, and scale AI agents for your institution."
- Sub-heading: "When & Where"
  - "Wednesday, June 10"
  - "1:00 PM to 1:45 PM EDT"
  - "Webinar, Google Meet invite shared upon registration"
- Section heading: "What You'll Learn"
- "A session worth your time, designed for education leaders ready to put AI agents to work, not just talk about them."
- 4 bullets (verbatim — keep existing Target/ShieldCheck/FileText/LineChart icons):
  - **A leader's playbook for AI agents in education** — "See where AI agents make the biggest difference, easing day-to-day workloads, speeding up learner onboarding, and giving faculty and staff time back, with a clear plan you can take to your leadership or cabinet."
  - **Gemini Enterprise for Education: Live Demo** — "Watch an AI agent come together step by step, connecting to the tools your institution already uses like Gmail, Outlook, ServiceNow, Canvas, and more, no heavy lifting required."
  - **Student Privacy Protections Under FERPA by Design** — "Make sure agents only share what each learner, faculty member, or staff role should see, with every action tracked and student data protected under FERPA from day one."
  - **Leave with more than just notes** — "To help you immediately apply these insights, all attendees will receive two custom-built Gems: the Gemini Enterprise Use Case Validator (a simple yes/no framework to instantly qualify your project ideas) and the Gemini Enterprise ROI Calculator (a practical tool to forecast and measure the impact of your initiatives)."
- Sparkles banner (gradient blue card, verbatim):
  - Heading: "About Shivaami"
  - "Shivaami is a premier Google Cloud Partner with a team of experts trained by Google. With 22 years of experience, Shivaami has served over 20,000 customers across diverse industries, empowering organisations to make their IT ecosystem smarter, safer and smoother through secure Cloud and AI solutions."

**Agenda tab (verbatim 3 time-blocks)**
- 1:00 PM — "The AI Agent Mandate for Education. From overstretched teams to disconnected systems, education leaders are being asked to do more with less. We unpack where AI agents create the biggest wins, how they differ from chatbots and AI assistants, and the approaches leading universities and districts are using right now."
- 1:10 PM — "Gemini Enterprise Live Demo. Watch a hands-on demo showing how an AI agent can answer common questions, automate everyday workflows, and connect to the tools you already use like Gmail, Outlook, ServiceNow, Canvas, and more, with privacy and trust built in."
- 1:35 PM — "Deep Dive Question and Answer: Bring Your Challenges. An open conversation from 1:35 to 1:45 PM. Share your real-world blockers around data privacy, connecting systems, governance, and team capacity, and get tactical input from peers and our experts."

**Speakers tab (verbatim 3 cards — text only, no photos since current cards are text-only)**
- "Brian Seifert — Head of Sales, Public Sector (State, Local, Education), Google Cloud. Integral part of the Google Cloud team, partnering with higher education and K-12 customers to bring Gemini Enterprise for Education to life and automate campus processes."
- "Kunal Thacker — Vice President, Shivaami. 11+ years in the cloud and AI industry at Shivaami, partnering with leaders on both strategy and hands-on execution to turn ambitious AI mandates into shipped outcomes."
- "Nikunj Thakkar — Customer Engineer, Shivaami. Google-certified professional and agentic AI expert at Shivaami, with a track record of helping customers solve complex problems and deliver measurable success."

### Registration form (right column — verbatim form copy, keep existing field set & behavior)
- Header title: "Register now to secure your spot."
- Subtitle: "Google Meet webinar link sent upon registration."
- Form title line above fields: "Webinar: Build Your Agentic Workforce with Gemini Enterprise"
- Field labels (kept as required):
  - Name (First Name, Last Name) *
  - Business Email *
  - Company Website *
  - Phone Number *
- Sticky info pill (replace current): "🎯 Webinar · Wednesday, June 10 · 1:00 to 1:45 PM EDT"
- Submit button: "Register"
- Disclaimer below button (verbatim from source): "By selecting 'Yes,' you provide express written consent for Shivaami LLC to contact you with marketing via automated technology or AI/prerecorded voice at the number provided. Consent is not a condition of purchase."
- Bottom Gift banner (verbatim): "**Bonus:** Free 30-day Gemini Enterprise trial with organization-specific hands-on agent build sessions, plus two custom Gems — the Use Case Validator and the ROI Calculator."

## Technical notes
- Single-file edit: `src/pages/RegisterWebinar.tsx`.
- Pure text/JSX swap. No new imports, no class changes, no layout changes.
- Tab `value` keys remain (`overview`, `agenda`, `audience`); only visible third tab label changes to "Speakers".
- Form fields and submission logic untouched (current page has no extra Job Title / Company Name / Marketing-consent fields — adding new fields would change the design, so they are intentionally not added per the user's "design same as it is" instruction).

## Out of scope
- No design, color, spacing, component, or animation changes.
- No new speaker photo images added.
- No form behavior, validation, or field-set changes.
