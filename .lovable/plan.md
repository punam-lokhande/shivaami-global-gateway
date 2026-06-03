
## Goal
Swap the textual content on `/register-webinar` (`src/pages/RegisterWebinar.tsx`) with the content from https://webinar.shivaami.com/ — keep the existing layout, sections, colors, components, and structure exactly as-is.

## Content mapping (source → existing section)

### Hero
- H1: "Build Your Agentic Workforce with Gemini Enterprise for Education"
- Subheading (blue): "Google Cloud × Shivaami live webinar — Wednesday, June 10 · 1:00–1:45 PM EDT"
- CTA button: "Register Now" (keep existing anchor to `#registration-form`)

### Image + Intro Strip
- Heading: "45 minutes. Working agents. Real campus impact."
- Paragraph: "Join Google Cloud and Shivaami for a deep dive on how to scale secure, context-aware AI agents across your campus ecosystem — transforming institutional efficiency while keeping student data locked down. Learn to build AI agents that ease the load on your teams, simplify everyday workflows, and automate busy work by connecting with 250+ connectors."
- Meta items (keep icons):
  - Calendar: "Wednesday, June 10"
  - Clock: "1:00–1:45 PM EDT"
  - MapPin: "Online · Google Meet invite shared upon registration"
- Keep existing `nextGenAiImg`.

### Yellow/blue Gift callout (above tabs)
- "**Bonus for attendees.** Eligibility for a Gemini Enterprise 30-day free trial with org-specific hands-on agent build sessions, plus two custom Gems: the **Use Case Validator** and the **ROI Calculator**."

### Tabs — keep 3 tabs, retitle "Who It's For" → "What You'll Learn"

**Overview tab** — intro paragraph + 4 bullets (reuse Target / ShieldCheck / FileText / LineChart icons):
- Intro: "A session worth your time, designed for education leaders ready to put AI agents to work, not just talk about them."
- Target — **The AI Agent Mandate for Education:** Where AI agents create the biggest wins, how they differ from chatbots and assistants, and the approaches leading universities and districts are using right now.
- ShieldCheck — **Student Privacy Protections Under FERPA by Design:** Agents only share what each learner, faculty, or staff role should see — every action tracked and student data protected under FERPA from day one.
- FileText — **A Leader's Playbook for AI Agents in Education:** Ease day-to-day workloads, speed up learner onboarding, and give faculty and staff time back — with a plan you can take to your leadership or cabinet.
- LineChart — **Live Demo — Gemini Enterprise for Education:** Watch an AI agent come together step-by-step, connecting to Gmail, Outlook, ServiceNow, Canvas, and more.
- Bonus banner (Sparkles): "Leave with more than just notes — every attendee gets the **Use Case Validator** Gem (yes/no qualification framework) and the **ROI Calculator** Gem (forecast and measure impact)."

**Agenda tab** — replace 3 hour-blocks with 3 time-blocks:
- 1:00 PM — The AI Agent Mandate for Education. From overstretched teams to disconnected systems, education leaders are being asked to do more with less. We unpack where AI agents create the biggest wins and how they differ from chatbots.
- 1:10 PM — Gemini Enterprise Live Demo. A hands-on demo showing how an AI agent can answer common questions, automate everyday workflows, and connect to tools like Gmail, Outlook, ServiceNow, and Canvas — with privacy and trust built in.
- 1:35 PM — Deep Dive Q&A: Bring Your Challenges. Open conversation until 1:45 PM on data privacy, system integration, governance, and team capacity, with tactical input from peers and experts.

**What You'll Learn tab** (was "Who It's For") — replace 3 cards with the 3 speakers:
- Brian Seifert — Head of Sales, Public Sector (State, Local, Education), Google Cloud. Partners with higher-ed and K-12 customers to bring Gemini Enterprise for Education to life.
- Kunal Thacker — Vice President, Shivaami. 11+ years in cloud and AI, partnering with leaders on strategy and hands-on execution to ship AI outcomes.
- Nikunj Thakkar — Customer Engineer, Shivaami. Google-certified agentic AI expert helping customers solve complex problems with measurable success.

### Registration form (right column)
- Header title: "Register Now" (keep)
- Subtitle: "Google Meet link sent upon registration"
- Keep existing field set (Name, Business Email, Company Website, Phone Number) — no behavior changes
- Sticky info pill: "🎯 Build Your Agentic Workforce · Wed, June 10 · 1:00–1:45 PM EDT"
- Submit button text: "Register"
- Bottom Gift banner: "**Bonus:** 30-day Gemini Enterprise trial eligibility + two custom Gems (Use Case Validator & ROI Calculator)."

## Technical notes
- Single file edit: `src/pages/RegisterWebinar.tsx`.
- Pure text/JSX content swaps; no changes to imports, styles, Tailwind classes, motion settings, or form logic.
- Tab `value` keys can stay (`overview`, `agenda`, `audience`) — only visible label of the third tab changes.

## Out of scope
- No design, color, spacing, or component changes.
- No form submission wiring changes.
- No new images (speaker photos from source are not added, since current layout has no speaker cards — speakers shown as text-only items inside existing tab card pattern).
