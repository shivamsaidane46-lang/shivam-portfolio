import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Award,
  Workflow,
  Database,
  Code2,
  Mail,
  Globe,
  MapPin,
  Copy,
  Check,
  Search,
  Layers,
  Zap,
  TrendingUp,
  ExternalLink,
  X,
  ZoomIn,
  Terminal,
  Briefcase,
  Send,
  ChevronRight,
  Cpu,
  ShieldCheck,
  Calendar,
  Clock,
  Calculator,
  HelpCircle,
  ChevronDown,
  Rocket
} from 'lucide-react';

// ============================================================================
// OWNER CONFIGURATION (Edit this file in GitHub / VS Code / Antigravity to
// add new HubSpot certifications, client packages, or n8n workflows)
// ============================================================================
const PORTFOLIO_DATA = {
  profile: {
    name: "Shivam Saidane",
    shortName: "Shivam S.",
    brand: "Shivam S. · Automation Studio",
    role: "Freelance HubSpot RevOps & n8n Automation Partner",
    availability: "Accepting New Client Projects & Sprints · Fast Turnaround",
    headline: "Turn Manual Busywork Into Autonomous Revenue Systems",
    subheadline:
      "Stop losing leads to slow follow-ups and disconnected tools. Partner directly with a 5× HubSpot Certified specialist & n8n automation architect to deploy custom CRM pipelines, AI lead-scoring engines, and zero-touch operations—delivered in days, not months.",
    personalMotto:
      "Great automation doesn't replace human connection—it removes operational friction so your revenue team can focus on closing deals and serving clients.",
    experienceYears: "3+ Years",
    email: "shivam@shivamsaidane.online",
    domain: "shivamsaidane.online",
    location: "India · Serving Clients Worldwide",
    githubUrl: "https://github.com/shivamsaidane46-lang/AI-Automation-Portfolio/tree/main",
    linkedinUrl: "https://www.linkedin.com/in/shivam-saidane-82b11b274",
    threadsUrl: "https://www.threads.com/@_.solivant?xmt=AQG0vZhL3oxPdwFcKcvMT6Bvc6QoYvpvyYnltFDtvKwRAyo",
    fiverrUrl: "https://www.fiverr.com/s/yeeL2WV"
  },
  servicePackages: [
    {
      id: "pkg-sprint",
      badge: "Fastest ROI · 3–5 Days",
      title: "Custom n8n Workflow Sprint",
      subtitle: "For founders & teams eliminating a high-friction manual bottleneck",
      turnaround: "3–5 Business Days",
      engagementModel: "Fixed-Scope Milestone",
      featured: false,
      inquiryValue: "Single n8n Workflow Sprint (3–5 Days)",
      timelinePreset: "3–5 Day Fixed-Scope Sprint",
      description:
        "One production-grade, multi-node n8n automation engineered from scratch—connecting your forms, AI models, databases, Slack, and CRM with fail-safe error handling.",
      deliverables: [
        "End-to-end custom n8n workflow architecture (Cloud or Self-Hosted)",
        "Webhook, REST API, & custom JavaScript/Python code node integration",
        "Dedicated Slack/Email Error-Trigger node so zero payloads fail silently",
        "100% ownership of source .json file + recorded walkthrough handoff",
        "14 days of post-launch hypercare & edge-case tuning"
      ]
    },
    {
      id: "pkg-revops",
      badge: "Most Popular · 1–2 Weeks",
      title: "HubSpot RevOps & AI Pipeline Engine",
      subtitle: "For B2B sales & marketing teams scaling inbound and outbound velocity",
      turnaround: "7–14 Business Days",
      engagementModel: "Turnkey System Build",
      featured: true,
      inquiryValue: "HubSpot CRM & RevOps Engine Build (1–2 Weeks)",
      timelinePreset: "1–2 Week Turnkey RevOps Build",
      description:
        "Complete HubSpot Sales Hub & Reporting setup wired to autonomous n8n backend workflows—automating lead capture, AI ICP scoring, deal routing, and executive attribution.",
      deliverables: [
        "HubSpot Sales Hub deal pipelines, custom properties & lifecycle stages",
        "AI ICP lead scoring (0–100) + E.164 phone & corporate domain hygiene",
        "Instant high-intent SQL routing + WhatsApp/Slack sales rep alerts",
        "Automated low-touch nurture sequences for <75 ICP leads",
        "Executive HubSpot & weekly Slack PDF revenue health dashboards"
      ]
    },
    {
      id: "pkg-retainer",
      badge: "Ongoing Partner · Monthly",
      title: "Dedicated Automation & CRM Partner",
      subtitle: "For growing agencies & B2B operators needing an on-call automation engineer",
      turnaround: "Continuous Weekly Releases",
      engagementModel: "Monthly Retainer",
      featured: false,
      inquiryValue: "Dedicated Monthly Automation Retainer",
      timelinePreset: "Monthly Automation Partner Retainer",
      description:
        "Your fractional Marketing Automation & HubSpot RevOps engineer—continuously shipping new n8n workflows, maintaining API integrations, and optimizing SQL/BigQuery reporting.",
      deliverables: [
        "Ongoing n8n workflow development & new API/webhook integrations",
        "Continuous HubSpot CRM administration, list hygiene & sequence A/B ops",
        "SQL, PostgreSQL, Supabase & BigQuery data pipeline maintenance",
        "Direct Slack channel communication & priority 24h turnaround",
        "Cancel or pause anytime—zero long-term agency lock-in"
      ]
    }
  ],
  bentoHighlights: [
    {
      id: "bento-1",
      theme: "lavender",
      badge: "n8n + AI Orchestration",
      title: "Client pipelines that scale on autopilot",
      description:
        "Deploy multi-stage n8n workflows that watch your inbox, CRM, ad platforms, and databases—enriching leads, triaging support tickets, and generating executive reports automatically."
    },
    {
      id: "bento-2",
      theme: "indigo",
      badge: "HubSpot CRM Architecture",
      title: "Clean CRM data, zero lead leakage",
      description:
        "Stay 100% aligned across Sales Hub, Meta/Google Ads, PostgreSQL, and BigQuery with strict deduplication gates, E.164 normalization, and automated deal-stage routing."
    },
    {
      id: "bento-3",
      theme: "indigo",
      badge: "Full IP Handoff & Reliability",
      title: "You own 100% of the code & JSONs",
      description:
        "Every system is deployed directly inside your accounts with production error-handling triggers, Slack Ops alerts, and complete JSON documentation—zero vendor lock-in."
    }
  ],
  certifications: [
    {
      id: "cert-reporting",
      title: "HubSpot Reporting Certified",
      issuer: "HubSpot Academy",
      category: "CRM & RevOps Analytics",
      validFrom: "Oct 11, 2026",
      validUntil: "Nov 10, 2027",
      certCode: "9dfb6ab1fefc4828abe3b6fab6a717db",
      image: "/certs/cert_reporting.jpg",
      credentialNote:
        "Deemed skilled in HubSpot Reporting with demonstrated data literacy skills and knowledge of HubSpot reporting and analytics necessary to bring data-driven decision making to an organization.",
      skills: ["HubSpot Reporting", "Pipeline Analytics", "Attribution", "Executive Dashboards"]
    },
    {
      id: "cert-sales-hub",
      title: "HubSpot Sales Hub Software Certified",
      issuer: "HubSpot Academy",
      category: "CRM & Sales Automation",
      validFrom: "Oct 7, 2026",
      validUntil: "Nov 6, 2027",
      certCode: "0df2b78fc80c44c0a7d855aa70618a13",
      image: "/certs/cert_sales_hub.jpg",
      credentialNote:
        "Deemed capable of using HubSpot sales software to create and implement a streamlined sales strategy, demonstrating proficiency in the essential functions of Sales Hub and its core tools.",
      skills: ["Sales Hub", "Deal Pipelines", "Sequences", "CRM Automation"]
    },
    {
      id: "cert-aeo",
      title: "AEO Fundamentals Certified",
      issuer: "HubSpot Academy",
      category: "Search & AI Marketing",
      validFrom: "Oct 4, 2026",
      validUntil: "Nov 2, 2028",
      certCode: "ca07f82b8f89439fa5599b6fe121001e",
      image: "/certs/cert_aeo.jpg",
      credentialNote:
        "Skilled in Answer Engine Optimization, confirming the ability to build search strategies that drive visibility across traditional and AI-powered answer engines, measure brand visibility, and structure content to earn AI citations.",
      skills: ["Answer Engine Optimization", "AI Search Visibility", "Structured Content", "AI Citations"]
    },
    {
      id: "cert-frictionless",
      title: "Frictionless Sales Certified",
      issuer: "HubSpot Academy",
      category: "Sales Operations",
      validFrom: "Sep 27, 2026",
      validUntil: "Oct 26, 2028",
      certCode: "ee4a287ec79a48918f7b7df597b3ee03",
      image: "/certs/cert_frictionless_sales.jpg",
      credentialNote:
        "Capable and skilled in the frictionless selling framework and in applying flywheel thinking to sales—tested on best practices to take an inbound approach to leading a sales organization.",
      skills: ["Frictionless Selling", "Flywheel Architecture", "RevOps Enablement", "Pipeline Velocity"]
    },
    {
      id: "cert-inbound",
      title: "Inbound Certified",
      issuer: "HubSpot Academy",
      category: "Inbound Marketing",
      validFrom: "Jan 27, 2025",
      validUntil: "Feb 26, 2027",
      certCode: "c6923d618e424c1c8e8261ed3949ce3f",
      image: "/certs/cert_inbound.jpg",
      credentialNote:
        "Capable and skilled in the methodology of inbound—tested on best practices for developing a flywheel business model that attracts, engages, and delights prospects and customers.",
      skills: ["Inbound Methodology", "Flywheel Model", "Lead Nurturing", "Customer Lifecycle"]
    }
  ],
  workflows: [
    {
      id: "wf-01",
      number: "01",
      title: "Automated Multi-Channel Social & Video Content Repurposer",
      category: "Marketing & Content",
      featured: true,
      image: "/workflows/workflow_content_repurposer.jpg",
      summary:
        "End-to-end content engine that watches Google Drive for new video/audio episodes, transcribes and extracts core thesis points with Gemini AI, drafts platform-native LinkedIn essays and X/Twitter threads in parallel, and logs timestamped cut-lists into Airtable.",
      metrics: "Saves 6+ hrs/episode · 4 Automated Stages",
      nodesCount: 10,
      tags: ["n8n", "Gemini AI", "Google Drive", "Airtable", "JavaScript Code", "Content Ops"],
      stages: [
        {
          step: "1. Intake",
          detail: "Watches a Google Drive folder for new video or audio uploads, extracts episode metadata, and downloads the media binary automatically."
        },
        {
          step: "2. Transcription + Thesis Extraction",
          detail: "Single Gemini multimodal call transcribes the full episode with paragraph timestamps, pulls 3–6 thesis points, and flags 5–8 quotable moments in structured JSON."
        },
        {
          step: "3. Parallel Platform Generation",
          detail: "Runs two parallel, constraint-tailored AI prompts: a hook-driven LinkedIn essay and a numbered X/Twitter thread."
        },
        {
          step: "4. Airtable Publishing Dashboard",
          detail: "Merges both drafts, formats notable-quote timestamps for short-form video editors, and creates one centralized Airtable record for one-click review."
        }
      ]
    },
    {
      id: "wf-02",
      number: "02",
      title: "Automated Weekly Executive Business Health Digest",
      category: "RevOps & Executive BI",
      featured: true,
      image: "/workflows/workflow_executive_digest.jpg",
      summary:
        "Scheduled Monday 6 AM executive BI pipeline that aggregates Stripe revenue, Meta & Google Ads spend/conversions, and HubSpot CRM deal velocity in parallel, computes 4-week variance flags, renders a PDF briefing, and delivers it to Leadership Slack.",
      metrics: "Monday 6 AM Cron · 5 Parallel API Streams",
      nodesCount: 18,
      tags: ["n8n", "HubSpot CRM", "Stripe API", "Meta & Google Ads", "Airtable", "Slack Ops"],
      stages: [
        {
          step: "1. Parallel Data Aggregation",
          detail: "Pulls weekly charges from Stripe, ad spend & conversions from Meta Ads and Google Ads, and won deals + open pipeline value from HubSpot CRM."
        },
        {
          step: "2. 4-Week Trend & Anomaly Logic",
          detail: "Queries trailing 4 weeks of logged metrics in Airtable and flags high-priority anomalies (e.g., ad spend spiking while conversions drop >15%)."
        },
        {
          step: "3. Markdown-to-PDF Report Engine",
          detail: "Logs the weekly snapshot, builds a scannable executive Markdown summary, converts to HTML, and renders a formatted PDF briefing."
        },
        {
          step: "4. Delivery & Fail-Safe Error Alerting",
          detail: "Uploads the PDF to Google Drive, posts the digest to Leadership Slack, and routes any expired-token or API timeout errors to Ops Slack."
        }
      ]
    },
    {
      id: "wf-03",
      number: "03",
      title: "Autonomous Customer Onboarding Concierge",
      category: "CRM & Onboarding",
      featured: true,
      image: "/workflows/workflow_onboarding_concierge.jpg",
      summary:
        "Zero-touch client provisioning workflow triggered the instant a Stripe invoice is paid or a DocuSeal/PandaDoc contract is signed—verifying payment status, preventing duplicates via Supabase, and provisioning Drive folders, project boards, Slack channels, and welcome emails.",
      metrics: "Sub-15s Provisioning · Idempotent Dedupe",
      nodesCount: 19,
      tags: ["n8n", "Stripe", "DocuSeal / PandaDoc", "Supabase", "Google Drive", "Slack", "Gmail"],
      stages: [
        {
          step: "1. Dual Webhook Triggers",
          detail: "Listens simultaneously for Stripe Invoice Paid events and DocuSeal/PandaDoc signed contracts, normalizing both payloads into a single schema."
        },
        {
          step: "2. State Verification & Finance Hold",
          detail: "Checks payment/contract state; partial or flagged payments are paused and routed immediately to the Finance Manager in Slack."
        },
        {
          step: "3. Supabase Deduplication Gate",
          detail: "Queries existing client records by email before provisioning to prevent duplicate folders, boards, or Slack channels if a webhook fires twice."
        },
        {
          step: "4. Parallel Workspace Provisioning & Welcome",
          detail: "Creates client root + 3 subfolders (Contracts, Deliverables, Brand Assets) in Drive, clones a project board, invites the client to a private Slack channel, logs to Supabase, and sends a branded Gmail onboarding package."
        }
      ]
    },
    {
      id: "wf-04",
      number: "04",
      title: "Competitor Price & Inventory Tracking Sentinel",
      category: "RevOps & Executive BI",
      featured: false,
      image: "/workflows/workflow_competitor_sentinel.jpg",
      summary:
        "Automated market intelligence sentinel that scans competitor product pages every 2 hours using custom CSS selectors, normalizes pricing and stock status against historical Airtable snapshots, and fires instant Slack opportunity alerts plus an 8 AM daily rollup.",
      metrics: "Every 2h Scan · Dual Alert & Digest Triggers",
      nodesCount: 16,
      tags: ["n8n", "HTML Scraping", "CSS Selectors", "Airtable", "Variance Engine", "Slack"],
      stages: [
        {
          step: "1. Watchlist-Driven Scan",
          detail: "Runs every 2 hours, pulling active competitor product URLs, matching SKUs, and custom CSS selectors from an Airtable watchlist."
        },
        {
          step: "2. Live Scrape + Normalization",
          detail: "Fetches live product pages via HTTP Request, extracts raw price/stock/shipping strings, and cleans them into numeric values and boolean stock flags."
        },
        {
          step: "3. Historical Variance Logic",
          detail: "Compares against the SKU's prior snapshot; flags price drops >=10% or competitor out-of-stock flips as immediate market opportunities."
        },
        {
          step: "4. Instant Slack Alert + 8 AM Daily Digest",
          detail: "Pings commercial teams immediately on critical stock/price shifts and runs an independent 8 AM schedule trigger for a 24-hour executive summary."
        }
      ]
    },
    {
      id: "wf-05",
      number: "05",
      title: "Multi-Format Accounts Payable & Invoice Extraction Pipeline",
      category: "Finance & AP",
      featured: false,
      image: "/workflows/workflow_ap_invoice_pipeline.jpg",
      summary:
        "Dual-source AP automation watching Gmail attachments and Google Drive inbound folders, routing PDFs and phone-scanned receipts through multimodal AI vision extraction, mathematically validating line items against grand totals, and separating clean invoices from exceptions.",
      metrics: "100% Math-Validated · Clean vs. Exception Routing",
      nodesCount: 18,
      tags: ["n8n", "AI Vision Extraction", "Gmail", "Google Drive", "Google Sheets", "Slack AP"],
      stages: [
        {
          step: "1. Dual Ingestion & File-Type Gate",
          detail: "Watches Gmail vendor emails and a Drive Inbound folder simultaneously; filters strictly for PDFs and images (JPG/PNG/HEIC) and logs unsupported files."
        },
        {
          step: "2. Multimodal AI Vision Extraction",
          detail: "Routes PDFs to document nodes and images to vision nodes using a strict JSON schema (vendor, invoice #, dates, tax ID, line items, subtotal, tax, grand total)."
        },
        {
          step: "3. Line-Item Math & Tax Validation",
          detail: "Custom Code node recalculates line-item sums against the parsed grand total (with rounding tolerance) and verifies mandatory vendor/tax fields."
        },
        {
          step: "4. Clean Path vs. Exception Path",
          detail: "Clean invoices are renamed (Vendor_InvoiceNumber_Date.pdf), moved to Processed, and appended to Google Sheets; mismatched invoices move to Needs-Review and alert AP in Slack."
        }
      ]
    },
    {
      id: "wf-06",
      number: "06",
      title: "Omnichannel Support Ticket Triage & Smart Escalation",
      category: "Support & AI Triage",
      featured: false,
      image: "/workflows/workflow_support_triage.jpg",
      summary:
        "AI support triage system that unifies Gmail and live-chat webhook tickets, performs semantic vector search against a Supabase knowledge base via Gemini Embeddings, evaluates sentiment and churn risk, and either auto-resolves or escalates to priority Slack queues.",
      metrics: "pgvector RAG + Sentiment & Churn Guardrails",
      nodesCount: 19,
      tags: ["n8n", "Supabase Vector", "Gemini Embeddings", "LLM Triage", "Airtable", "Slack"],
      stages: [
        {
          step: "1. Omnichannel Ticket Intake",
          detail: "Ingests support emails from Gmail and live-chat webhook payloads, normalizing both into a unified ticket object (channel, customer, message, timestamp)."
        },
        {
          step: "2. Supabase Vector Knowledge Base Match",
          detail: "Embeds the customer query using Gemini Embeddings and queries Supabase pgvector for top-matching KB articles and similarity confidence scores."
        },
        {
          step: "3. Independent Sentiment & Churn Scoring",
          detail: "Evaluates customer sentiment, urgency (1–5), and cancellation/billing risk independently of KB match confidence."
        },
        {
          step: "4. Auto-Resolution vs. Smart Escalation",
          detail: "High KB confidence + neutral/positive sentiment triggers an automated KB-grounded reply; frustration or low confidence builds an enriched Airtable brief and routes to Urgent or Normal Slack queues."
        }
      ]
    },
    {
      id: "wf-07",
      number: "07",
      title: "HubSpot RevOps Engine: AI Lead Enrichment, ICP Scoring & Instant Deal Routing",
      category: "CRM & Onboarding",
      featured: true,
      image: "/workflows/workflow_hubspot_revops_engine.jpg",
      summary:
        "Zero-leakage B2B RevOps pipeline that captures inbound leads from website forms and Meta Lead Ads, normalizes +91 phone formatting to E.164, extracts corporate domains, computes a 0–100 AI ICP fit score and estimated deal value, upserts enriched Contacts into HubSpot CRM via Private App API, and routes high-intent SQLs (ICP >= 75) to auto-create Deals in 'Discovery Completed' with instant WhatsApp and Slack rep alerts.",
      metrics: "ICP >= 75 Auto-Deal · Sub-5s Rep Alert",
      nodesCount: 8,
      tags: ["n8n", "HubSpot CRM", "AI ICP Scoring", "Meta Lead Ads", "E.164 Hygiene", "WhatsApp & Slack Ops"],
      stages: [
        {
          step: "1. Ingestion & Data Hygiene",
          detail: "Captures inbound leads from Website Forms and Meta Lead Ads, normalizes +91 phone formatting to strict E.164 standard, and extracts the corporate domain."
        },
        {
          step: "2. AI ICP Scoring & HubSpot Upsert",
          detail: "Evaluates company fit, calculates an ICP Score (0–100), estimates deal value, and upserts the enriched Contact record into HubSpot CRM via Private App API."
        },
        {
          step: "3. Zero-Leakage Pipeline Routing",
          detail: "Routes high-value SQLs (ICP >= 75) to auto-create a HubSpot Deal in 'Discovery Completed' and dispatches an instant WhatsApp & Slack rep alert, while enrolling < 75 leads into a low-touch nurture sequence."
        }
      ]
    }
  ],
  clientDeliverables: [
    {
      name: "HubSpot Sales Hub & RevOps Architecture",
      outcome: "Zero Lead Leakage",
      detail: "Custom deal pipelines, lead scoring, E.164 hygiene, and automated stage routing."
    },
    {
      name: "Production n8n Workflow Engineering",
      outcome: "100% IP Ownership",
      detail: "Multi-node API & webhook pipelines with dedicated Slack error-handling triggers."
    },
    {
      name: "AI Lead Enrichment & RAG Support Triage",
      outcome: "Sub-5s Response Time",
      detail: "Gemini/OpenAI scoring, pgvector knowledge-base search, and smart escalations."
    },
    {
      name: "Executive BI & Cross-Channel Reporting",
      outcome: "Automated Monday Briefs",
      detail: "Stripe, Meta/Google Ads, and HubSpot metrics unified in SQL/BigQuery & PDF digests."
    },
    {
      name: "Zero-Touch Client & AP Provisioning",
      outcome: "Saves 15+ Hrs/Week",
      detail: "Instant contract/invoice verification, Drive/Slack setup, and math-validated AP."
    }
  ],
  techStack: [
    { name: "HubSpot CRM", role: "Sales Hub · Reporting · Inbound", badge: "HS", accent: "bg-[#FF7A59]/15 text-[#D94E28] border-[#FF7A59]/30" },
    { name: "n8n Workflows", role: "Multi-Node AI & API Pipelines", badge: "n8n", accent: "bg-[#EA4B71]/15 text-[#C82D54] border-[#EA4B71]/30" },
    { name: "Python", role: "Data Processing & Automation", badge: "PY", accent: "bg-indigo-500/15 text-indigo-700 border-indigo-400/30" },
    { name: "SQL & PostgreSQL", role: "Relational & Vector DBs", badge: "SQL", accent: "bg-blue-500/15 text-blue-700 border-blue-400/30" },
    { name: "Google BigQuery", role: "Cloud Data Warehouse & BI", badge: "BQ", accent: "bg-purple-500/15 text-purple-700 border-purple-400/30" },
    { name: "Advanced Excel", role: "RevOps Modeling & Audits", badge: "XLS", accent: "bg-emerald-500/15 text-emerald-700 border-emerald-400/30" },
    { name: "JavaScript / ES6", role: "Custom Code Nodes & Web", badge: "JS", accent: "bg-amber-500/15 text-amber-800 border-amber-400/30" },
    { name: "HTML5 & CSS3", role: "Landing Pages & Email Templates", badge: "UI", accent: "bg-violet-500/15 text-violet-700 border-violet-400/30" },
    { name: "Supabase & Airtable", role: "Backend State & Ops Bases", badge: "DB", accent: "bg-teal-500/15 text-teal-700 border-teal-400/30" }
  ],
  deliveryProcess: [
    {
      phase: "01",
      period: "Day 1 · Discovery & Blueprint",
      title: "Free Workflow & CRM Bottleneck Audit",
      description:
        "We review your current HubSpot setup, manual handoffs, and API endpoints—mapping out a concrete node-by-node automation architecture with clear fixed-scope deliverables."
    },
    {
      phase: "02",
      period: "Days 2–5 · Build & Stress-Test",
      title: "Engineering, Deduplication & Error Guards",
      description:
        "I build and test your n8n workflows and HubSpot pipelines in a safe staging environment—adding strict data normalization, Supabase/CRM deduplication gates, and Slack error alerts."
    },
    {
      phase: "03",
      period: "Launch · Full Handoff & Hypercare",
      title: "Live Deployment + 100% JSON & IP Ownership",
      description:
        "We deploy directly into your n8n and HubSpot accounts. You receive the complete workflow JSONs, credential docs, a recorded walkthrough, and 14 days of post-launch support."
    }
  ],
  faqs: [
    {
      q: "Do I own 100% of the n8n workflow JSONs and HubSpot configurations?",
      a: "Yes—100%. Every workflow, custom code node, and HubSpot pipeline is deployed directly into your own accounts and handed over with the raw .json files and documentation. There is zero agency lock-in."
    },
    {
      q: "Can you work with both n8n Cloud and self-hosted n8n instances?",
      a: "Absolutely. I build and deploy across both n8n Cloud and self-hosted Docker/VPS environments, as well as HubSpot Starter, Professional, and Enterprise portals."
    },
    {
      q: "What happens if an external API times out or a webhook payload changes?",
      a: "Every production workflow I deliver is engineered with idempotent deduplication checks and a dedicated Error Trigger path that catches API timeouts, expired tokens, or schema mismatches and alerts your Slack channel immediately."
    },
    {
      q: "How do we start a project—direct invoice or Fiverr escrow?",
      a: "Whichever fits your procurement workflow best. You can book a fixed-scope sprint or monthly retainer via direct invoice (email below) or through my verified Fiverr workspace if you prefer platform milestone escrow."
    }
  ]
};

export default function App() {
  const portfolioData = PORTFOLIO_DATA;

  // Subtle Mouse Parallax for the BloomFi Hero Glass Visual
  const [glassPose, setGlassPose] = useState({ rotateX: 8, rotateY: -10, scale: 1 });

  // Workflow Showcase Filter & Lightbox State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [workflowSearch, setWorkflowSearch] = useState("");
  const [activeWorkflowModal, setActiveWorkflowModal] = useState(null);
  const [expandedWorkflowStages, setExpandedWorkflowStages] = useState({ "wf-07": true, "wf-01": true });

  // HubSpot Certifications Filter & Official Certificate Lightbox State
  const [certSearch, setCertSearch] = useState("");
  const [selectedCertCategory, setSelectedCertCategory] = useState("All");
  const [activeCertModal, setActiveCertModal] = useState(null);

  // Interactive Freelance ROI Calculator State
  const [teamMembers, setTeamMembers] = useState(4);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyCost, setHourlyCost] = useState(35);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Contact Form & Toast Notification State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    inquiryType: "HubSpot CRM & RevOps Engine Build (1–2 Weeks)",
    budgetOrTimeline: "",
    message: ""
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const copyToClipboard = (text, keyLabel) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopiedKey(keyLabel);
      showToast(`Copied ${keyLabel} to clipboard!`);
      setTimeout(() => setCopiedKey(null), 2200);
    } catch (err) {
      showToast("Copied to clipboard!");
    }
  };

  // Filtered Workflows
  const workflowCategories = useMemo(() => {
    const cats = new Set(["All"]);
    portfolioData.workflows.forEach((w) => cats.add(w.category));
    return Array.from(cats);
  }, [portfolioData.workflows]);

  const filteredWorkflows = useMemo(() => {
    return portfolioData.workflows.filter((wf) => {
      const matchesCat = selectedCategory === "All" || wf.category === selectedCategory;
      const q = workflowSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        wf.title.toLowerCase().includes(q) ||
        wf.summary.toLowerCase().includes(q) ||
        wf.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [portfolioData.workflows, selectedCategory, workflowSearch]);

  // Filtered Certifications
  const certCategories = useMemo(() => {
    const cats = new Set(["All"]);
    portfolioData.certifications.forEach((c) => cats.add(c.category));
    return Array.from(cats);
  }, [portfolioData.certifications]);

  const filteredCerts = useMemo(() => {
    return portfolioData.certifications.filter((c) => {
      const matchesCat = selectedCertCategory === "All" || c.category === selectedCertCategory;
      const q = certSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.credentialNote.toLowerCase().includes(q) ||
        c.certCode.toLowerCase().includes(q) ||
        c.skills.some((s) => s.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [portfolioData.certifications, selectedCertCategory, certSearch]);

  // ROI Calculator Derived Metrics
  const roiMetrics = useMemo(() => {
    const monthlyHoursSaved = Math.round(teamMembers * hoursPerWeek * 4.33 * 0.85);
    const monthlySavingsUsd = Math.round(monthlyHoursSaved * hourlyCost);
    const annualSavingsUsd = monthlySavingsUsd * 12;
    return { monthlyHoursSaved, monthlySavingsUsd, annualSavingsUsd };
  }, [teamMembers, hoursPerWeek, hourlyCost]);

  // Subtle Hero Parallax
  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setGlassPose({
      rotateX: Math.round(-y * 18 + 6),
      rotateY: Math.round(x * 22 - 6),
      scale: 1.01
    });
  };

  const handleHeroMouseLeave = () => {
    setGlassPose({ rotateX: 8, rotateY: -10, scale: 1 });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const selectServicePackage = (pkg) => {
    setContactForm((prev) => ({
      ...prev,
      inquiryType: pkg.inquiryValue,
      budgetOrTimeline: pkg.timelinePreset,
      message: `Hi Shivam, we're interested in your "${pkg.title}" (${pkg.turnaround}). Here's what we want to automate:`
    }));
    showToast(`Selected "${pkg.title}" — project scope pre-filled below!`);
    scrollToSection("contact");
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      showToast("Please fill in your name, email, and project details.");
      return;
    }
    setIsSubmitting(true);
    const encodedBody = new URLSearchParams({
      "form-name": "shivam-portfolio-contact",
      name: contactForm.name,
      email: contactForm.email,
      inquiryType: contactForm.inquiryType,
      budgetOrTimeline: contactForm.budgetOrTimeline,
      message: contactForm.message
    }).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedBody
      });
      setContactSubmitted(true);
      showToast("Project inquiry sent! Shivam will reply within 24 hours.");
    } catch (err) {
      setContactSubmitted(true);
      showToast("Inquiry recorded! You can also click below to email Shivam directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#1A162B] font-sans selection:bg-[#7C5CFC]/20 selection:text-[#1A162B]">
      {/* Subtle Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#1F1B33] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#C4B5FD] shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-auto text-white/60 hover:text-white"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* =====================================================================
          STICKY BLOOMFI PILL NAVIGATION BAR (Client-Focused Freelance UI)
         ===================================================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#F6F5F0]/85 border-b border-[#E5E0F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1F1B33] text-white flex items-center justify-center shadow-md group-hover:bg-[#332B54] transition-colors">
              <Sparkles className="w-4 h-4 text-[#D8B4FE]" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-lg text-[#1A162B] block leading-none">
                {portfolioData.profile.shortName}
              </span>
              <span className="text-[11px] text-[#655E80] font-medium tracking-wider uppercase">
                RevOps &amp; n8n Partner
              </span>
            </div>
          </button>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/75 border border-[#E5E0F5] rounded-full px-3 py-1.5 shadow-sm">
            {[
              { label: "Services & Packages", id: "services" },
              { label: "Case Studies (7)", id: "workflows" },
              { label: "ROI Calculator", id: "roi-calculator" },
              { label: "HubSpot Credentials", id: "certifications" },
              { label: "How We Work", id: "journey" },
              { label: "FAQ", id: "faq" }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#3F3859] hover:text-[#1A162B] hover:bg-[#EDE9FE]/70 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Client Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.profile.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white text-[#1F1B33] border border-[#DCD4F7] hover:bg-[#EDE9FE]/60 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#5B21B6]" />
              <span>Hire on Fiverr</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1F1B33] text-white hover:bg-[#2E284D] transition-all shadow-sm"
            >
              <span>Book a Sprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-20">
        {/* ===================================================================
            HERO SECTION (Freelance Partner Positioning + 3D Glass Visual)
           =================================================================== */}
        <section
          id="hero"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          className="relative rounded-[32px] overflow-hidden border border-[#DCD4F7] shadow-[0_24px_80px_-20px_rgba(91,68,184,0.18)] bg-gradient-to-b from-[#ECE8FF] via-[#DFD8FC] to-[#231D3C]"
        >
          {/* Ambient Lavender / Indigo Mesh Orbs */}
          <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#C4B5FD]/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[#A78BFA]/35 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#18142B] via-[#221C3D]/90 to-transparent" />

          <div className="relative z-10 px-6 sm:px-12 pt-10 sm:pt-14 pb-12">
            {/* Top Centered BloomFi Ornament + Client Availability Pill */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C4B5FD]/60 shadow-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-[#2A2442]">
                  {portfolioData.profile.availability}
                </span>
                <span className="text-[11px] text-[#6E658F] hidden sm:inline">
                  · {portfolioData.profile.location}
                </span>
              </div>

              {/* Four-Point Star Ornament */}
              <div className="w-8 h-8 rounded-full bg-[#1F1B33]/10 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-[#1F1B33]" />
              </div>

              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#4B3F72] mb-2">
                {portfolioData.profile.name} · {portfolioData.profile.role}
              </p>

              <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#171326] leading-[1.08] mb-5">
                {portfolioData.profile.headline}
              </h1>

              <p className="text-sm sm:text-base text-[#3D3557] max-w-2xl leading-relaxed mb-7">
                {portfolioData.profile.subheadline}
              </p>

              {/* Client Trust Guarantees */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-[11px] font-semibold text-[#3B2A78]">
                <span className="px-3 py-1 rounded-full bg-white/70 border border-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3–5 Day Fixed-Scope Sprints</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/70 border border-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% JSON &amp; IP Handoff</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/70 border border-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>5× Official HubSpot Certified</span>
                </span>
              </div>

              {/* Client-Converting Hero CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="px-6 py-3 rounded-full bg-[#171326] text-white text-xs sm:text-sm font-semibold hover:bg-[#2B2445] transition-all shadow-lg flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4 text-[#C4B5FD]" />
                  <span>View Freelance Packages</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("workflows")}
                  className="px-5 py-3 rounded-full bg-white/90 backdrop-blur-md text-[#171326] border border-[#C4B5FD] text-xs sm:text-sm font-semibold hover:bg-white transition-all flex items-center gap-2"
                >
                  <Workflow className="w-4 h-4 text-[#5B21B6]" />
                  <span>Explore 7 n8n Workflows</span>
                </button>
                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-white/65 backdrop-blur-md text-[#2E2647] border border-white/80 text-xs sm:text-sm font-semibold hover:bg-white transition-all flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-[#5B21B6]" />
                  <span>GitHub Workflow JSONs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* ===============================================================
                CLEAN BLOOMFI HERO GLASS CENTERPIECE
               =============================================================== */}
            <div className="relative max-w-5xl mx-auto">
              <div
                className="relative h-[290px] sm:h-[330px] rounded-3xl overflow-hidden border border-white/40 shadow-inner flex items-center justify-center p-6"
                style={{
                  background:
                    "radial-gradient(circle at 50% 25%, rgba(255,255,255,0.88) 0%, rgba(212,201,252,0.75) 45%, rgba(44,34,78,0.96) 100%)",
                  perspective: "1100px"
                }}
              >
                {/* Decorative Lavender Horizon Glow */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141026] via-[#2B204E]/85 to-transparent" />
                <div className="pointer-events-none absolute -bottom-10 left-8 w-72 h-44 rounded-full bg-[#7C3AED]/30 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 right-8 w-72 h-44 rounded-full bg-[#C084FC]/30 blur-2xl" />

                {/* 3D Tilted Frosted Glass Trio */}
                <div
                  className="relative w-full max-w-3xl h-full flex items-center justify-center transition-transform duration-300 ease-out"
                  style={{
                    transform: `rotateX(${glassPose.rotateX}deg) rotateY(${glassPose.rotateY}deg) scale(${glassPose.scale})`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Left Frosted Glass Disc: HubSpot CRM */}
                  <div
                    onClick={() => scrollToSection("certifications")}
                    className="cursor-pointer group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-white/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(31,27,51,0.35)] flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105 -mr-6 sm:-mr-10 z-20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(196,181,253,0.48) 55%, rgba(91,33,182,0.35) 100%)"
                    }}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#FF7A59]/20 border border-[#FF7A59]/50 flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-[#D94E28]" />
                    </div>
                    <span className="text-xs font-bold text-[#1F1B33] tracking-tight">HubSpot RevOps</span>
                    <span className="text-[10px] text-[#3F3859] font-medium mt-0.5">
                      5 Official Certifications
                    </span>
                    <span className="mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#1F1B33] text-white">
                      Sales · Reporting · AEO
                    </span>
                  </div>

                  {/* Center Faceted Glass Core Prism */}
                  <div
                    onClick={() => scrollToSection("services")}
                    className="cursor-pointer relative w-44 h-44 sm:w-56 sm:h-56 rounded-[36px] rotate-6 border-2 border-white/85 backdrop-blur-2xl shadow-[0_25px_70px_rgba(49,27,114,0.45)] flex flex-col items-center justify-center p-5 transition-all duration-300 hover:scale-105 z-30"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(221,214,254,0.62) 48%, rgba(124,58,237,0.34) 100%)"
                    }}
                  >
                    <div className="-rotate-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#1F1B33] text-white flex items-center justify-center shadow-lg mb-2.5">
                        <Cpu className="w-6 h-6 text-[#D8B4FE]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B21B6]">
                        Turnkey Systems
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#171326] mt-0.5">
                        CRM × n8n × AI
                      </span>
                      <span className="text-[11px] text-[#3D3557] mt-1 max-w-[160px] leading-tight">
                        Built, stress-tested &amp; deployed in your stack
                      </span>
                    </div>
                  </div>

                  {/* Right Frosted Glass Disc: n8n Pipelines */}
                  <div
                    onClick={() => scrollToSection("workflows")}
                    className="cursor-pointer group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-white/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(31,27,51,0.35)] flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105 -ml-6 sm:-ml-10 z-20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(167,139,250,0.5) 55%, rgba(31,27,51,0.45) 100%)"
                    }}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#EA4B71]/20 border border-[#EA4B71]/50 flex items-center justify-center mb-2">
                      <Workflow className="w-5 h-5 text-[#C82D54]" />
                    </div>
                    <span className="text-xs font-bold text-[#1F1B33] tracking-tight">n8n Workflows</span>
                    <span className="text-[10px] text-[#3F3859] font-medium mt-0.5">
                      7 Production Systems
                    </span>
                    <span className="mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#1F1B33] text-white">
                      100+ Active Nodes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            PRODUCTIZED FREELANCE SERVICES & ENGAGEMENT MODELS
           =================================================================== */}
        <section id="services" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5B21B6]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Productized Freelance Offerings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#171326]">
                Ways We Can Work Together
              </h2>
              <p className="text-sm sm:text-base text-[#4B4466] max-w-2xl">
                Clear deliverables, transparent timelines, and zero hourly billing surprises. Choose a fixed-scope sprint to eliminate an immediate bottleneck or partner monthly to scale your entire revenue engine.
              </p>
            </div>
            <a
              href={portfolioData.profile.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DCD4F7] text-[#171326] text-xs font-semibold hover:bg-[#EDE9FE]/60 transition-colors shadow-sm"
            >
              <span>Prefer Fiverr Escrow? View Verified Gigs</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5B21B6]" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {portfolioData.servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 border ${
                  pkg.featured
                    ? "bg-gradient-to-b from-[#1F1B33] via-[#251F3E] to-[#1A152E] text-white border-[#5B21B6] shadow-xl scale-[1.01]"
                    : "bg-white text-[#171326] border-[#E2DCF5] shadow-sm hover:shadow-lg"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                        pkg.featured
                          ? "bg-[#C4B5FD] text-[#171326]"
                          : "bg-[#EDE9FE] text-[#4C1D95]"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span
                      className={`text-[11px] font-medium flex items-center gap-1 ${
                        pkg.featured ? "text-[#D1CCE6]" : "text-[#655E80]"
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      <span>{pkg.turnaround}</span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3
                      className={`text-2xl font-serif ${
                        pkg.featured ? "text-white" : "text-[#171326]"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-xs font-medium ${
                        pkg.featured ? "text-[#C4B5FD]" : "text-[#5B21B6]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      pkg.featured ? "text-[#E2DCF5]" : "text-[#4B4466]"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  <div
                    className={`pt-4 border-t space-y-2.5 ${
                      pkg.featured ? "border-white/15" : "border-[#F0EDF9]"
                    }`}
                  >
                    <div
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        pkg.featured ? "text-[#C4B5FD]" : "text-[#5B21B6]"
                      }`}
                    >
                      What&apos;s Included:
                    </div>
                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.featured ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span className={pkg.featured ? "text-white/90" : "text-[#3A3352]"}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-7">
                  <button
                    type="button"
                    onClick={() => selectServicePackage(pkg)}
                    className={`w-full py-3.5 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      pkg.featured
                        ? "bg-[#C4B5FD] text-[#171326] hover:bg-white shadow-md"
                        : "bg-[#1F1B33] text-white hover:bg-[#322B52]"
                    }`}
                  >
                    <span>Scope This {pkg.engagementModel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            BLOOMFI BENTO OVERVIEW SECTION ("Why Clients Partner With Me")
           =================================================================== */}
        <section id="overview" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5B21B6]">
                Why Founders &amp; Revenue Teams Hire Shivam S.
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#171326] tracking-tight">
                Engineered for production, not brittle demos
              </h2>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => scrollToSection("workflows")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1B33] text-white text-xs font-semibold hover:bg-[#2F294B] transition-colors"
                >
                  <span>Inspect 7 live client architectures</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-[#3A3352] leading-relaxed">
                Most basic zaps break the moment a webhook fires twice or a phone number is formatted wrong. I build resilient{" "}
                <strong className="font-semibold text-[#171326]">HubSpot CRM ecosystems</strong>,{" "}
                <strong className="font-semibold text-[#171326]">error-guarded n8n workflows</strong>, and{" "}
                <strong className="font-semibold text-[#171326]">SQL / BigQuery data pipelines</strong>{" "}
                that your team can rely on 24/7.
              </p>
            </div>
          </div>

          {/* 3-Card BloomFi Bento Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Wide Lavender Glass Card */}
            <div className="lg:col-span-6 rounded-[28px] p-7 sm:p-8 bg-gradient-to-br from-[#DED7FF] via-[#D0C6FC] to-[#B8A9F8] border border-[#C4B5FD] shadow-sm flex flex-col justify-between min-h-[270px] relative overflow-hidden">
              <div className="relative z-10 max-w-md space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-white/75 text-[#3B2A78]">
                  {portfolioData.bentoHighlights[0].badge}
                </span>
                <h3 className="text-2xl font-serif text-[#171326]">
                  {portfolioData.bentoHighlights[0].title}
                </h3>
              </div>

              {/* Decorative Glass Node Pipeline */}
              <div className="my-4 flex flex-wrap items-center gap-2 relative z-10">
                <div className="px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-white text-xs font-semibold text-[#1F1B33] shadow-sm flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>Webhook / Meta Lead</span>
                </div>
                <span className="text-[#3B2A78] font-bold">→</span>
                <div className="px-3 py-1.5 rounded-xl bg-[#1F1B33] text-white text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD]" />
                  <span>AI ICP Scorer + E.164</span>
                </div>
                <span className="text-[#3B2A78] font-bold">→</span>
                <div className="px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-white text-xs font-semibold text-[#1F1B33] shadow-sm">
                  HubSpot Deal &amp; Slack
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#282140] leading-relaxed relative z-10 max-w-lg">
                {portfolioData.bentoHighlights[0].description}
              </p>
            </div>

            {/* Deep Indigo Card 1 */}
            <div className="lg:col-span-3 rounded-[28px] p-7 bg-[#221D38] text-white border border-[#352E54] shadow-md flex flex-col justify-between min-h-[270px]">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-[#D8B4FE]">
                  {portfolioData.bentoHighlights[1].badge}
                </span>
                <h3 className="text-xl font-serif text-white leading-snug">
                  {portfolioData.bentoHighlights[1].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D1CCE6] leading-relaxed pt-6">
                {portfolioData.bentoHighlights[1].description}
              </p>
            </div>

            {/* Deep Indigo Card 2 */}
            <div className="lg:col-span-3 rounded-[28px] p-7 bg-[#221D38] text-white border border-[#352E54] shadow-md flex flex-col justify-between min-h-[270px]">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-[#D8B4FE]">
                  {portfolioData.bentoHighlights[2].badge}
                </span>
                <h3 className="text-xl font-serif text-white leading-snug">
                  {portfolioData.bentoHighlights[2].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D1CCE6] leading-relaxed pt-6">
                {portfolioData.bentoHighlights[2].description}
              </p>
            </div>
          </div>

          {/* Glass Metrics & Client Guarantee Bar */}
          <div className="rounded-[26px] bg-white/80 backdrop-blur-xl border border-[#E2DCF5] p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#171326]">
                  {portfolioData.profile.experienceYears}
                </div>
                <div className="text-xs text-[#5E567A] font-medium">
                  Client Delivery Track Record
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#171326]">
                  {portfolioData.workflows.length} Systems
                </div>
                <div className="text-xs text-[#5E567A] font-medium">
                  Production n8n Architectures
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#5B21B6]">
                  {portfolioData.certifications.length} Official
                </div>
                <div className="text-xs text-[#5E567A] font-medium">
                  HubSpot Academy Credentials
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#171326]">100%</div>
                <div className="text-xs text-[#5E567A] font-medium">
                  Client IP &amp; JSON Handoff
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-[#E5E0F5] lg:pl-6">
              <p className="text-xs sm:text-sm italic text-[#3F3859] leading-relaxed">
                &ldquo;{portfolioData.profile.personalMotto}&rdquo;
              </p>
              <p className="text-[11px] font-semibold text-[#5B21B6] mt-2">
                — {portfolioData.profile.name}
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            FEATURED n8n WORKFLOW ARCHITECTURES (7 Client Case Studies + GitHub)
           =================================================================== */}
        <section id="workflows" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5B21B6]">
                <Workflow className="w-3.5 h-3.5" />
                <span>Proven Client Automation Blueprints</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#171326]">
                n8n &amp; HubSpot Case Studies
              </h2>
              <p className="text-sm sm:text-base text-[#4B4466] max-w-2xl">
                Inspect 7 production architectures engineered with structured data hygiene, parallel API execution, and Slack error-handling triggers. Click any system to inspect the full node diagram or request a similar build for your stack.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={portfolioData.profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1B33] text-white text-xs font-semibold hover:bg-[#322B52] transition-colors shadow-sm"
              >
                <Code2 className="w-4 h-4 text-[#C4B5FD]" />
                <span>View All 7 Workflow JSONs on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Filter Pills & Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white/75 backdrop-blur-md p-3 rounded-2xl border border-[#E2DCF5]">
            <div className="flex flex-wrap items-center gap-1.5">
              {workflowCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#1F1B33] text-white shadow-sm"
                      : "text-[#4B4466] hover:bg-[#EDE9FE]/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-[#787096] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={workflowSearch}
                onChange={(e) => setWorkflowSearch(e.target.value)}
                placeholder="Search nodes, tools (e.g. HubSpot, Supabase)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F6F5F0] border border-[#DCD4F7] text-xs text-[#171326] placeholder-[#787096] focus:outline-none focus:border-[#6D28D9]"
              />
            </div>
          </div>

          {/* Workflow Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredWorkflows.map((wf) => {
              const isExpanded = !!expandedWorkflowStages[wf.id];
              return (
                <article
                  key={wf.id}
                  className="rounded-[28px] bg-white border border-[#E2DCF5] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top Header */}
                    <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-[#EDE9FE] text-[#4C1D95] font-bold text-xs flex items-center justify-center">
                          {wf.number}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F3F1FA] text-[#4B4466]">
                          {wf.category}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#5B21B6] bg-[#EDE9FE]/70 px-3 py-1 rounded-full">
                        {wf.metrics}
                      </span>
                    </div>

                    {/* Workflow Canvas Diagram Thumbnail */}
                    <div
                      onClick={() => setActiveWorkflowModal(wf)}
                      className="mx-6 rounded-2xl overflow-hidden bg-[#14121E] border border-[#2D2747] relative cursor-pointer group/img"
                    >
                      <img
                        src={wf.image}
                        alt={wf.title}
                        className="w-full h-52 sm:h-60 object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14121E]/90 via-transparent to-transparent opacity-85 group-hover/img:opacity-95 transition-opacity" />
                      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-white">
                        <span className="text-[11px] font-medium text-white/85 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#C4B5FD]" />
                          <span>{wf.nodesCount} n8n Nodes · Error-Guarded</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-white">
                          <ZoomIn className="w-3 h-3" />
                          <span>Inspect Diagram</span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-serif text-[#171326] group-hover:text-[#5B21B6] transition-colors">
                        {wf.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B4466] leading-relaxed">
                        {wf.summary}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {wf.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#F6F5F0] text-[#3A3352] border border-[#E5E0F5]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Node Stage Architecture Breakdown + Deploy CTA */}
                  <div className="px-6 pb-6 pt-2 border-t border-[#F0EDF9]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedWorkflowStages((prev) => ({
                            ...prev,
                            [wf.id]: !prev[wf.id]
                          }))
                        }
                        className="text-xs font-semibold text-[#5B21B6] hover:text-[#3B0764] flex items-center gap-1.5 py-1"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span>
                          {isExpanded ? "Hide Pipeline Stages" : `View ${wf.stages.length}-Stage Breakdown`}
                        </span>
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={portfolioData.profile.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-[#4B4466] hover:text-[#171326] flex items-center gap-1"
                        >
                          <Code2 className="w-3.5 h-3.5 text-[#5B21B6]" />
                          <span>Workflow JSON</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setContactForm((prev) => ({
                              ...prev,
                              inquiryType: "Single n8n Workflow Sprint (3–5 Days)",
                              budgetOrTimeline: "3–5 Day Custom Build",
                              message: `Hi Shivam, we'd love to deploy a customized version of your "${wf.title}" workflow for our stack.`
                            }));
                            showToast(`Pre-filled project brief for "${wf.title}"`);
                            scrollToSection("contact");
                          }}
                          className="text-xs font-semibold text-[#1F1B33] hover:text-[#5B21B6] flex items-center gap-1"
                        >
                          <span>Deploy Similar</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 space-y-2 bg-[#F8F7FC] p-4 rounded-2xl border border-[#E5E0F5]">
                        {wf.stages.map((st, i) => (
                          <div key={i} className="text-xs space-y-0.5">
                            <div className="font-bold text-[#1F1B33]">{st.step}</div>
                            <div className="text-[#4B4466] leading-relaxed">{st.detail}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            INTERACTIVE CLIENT AUTOMATION ROI & HOURS-SAVED CALCULATOR
           =================================================================== */}
        <section
          id="roi-calculator"
          className="rounded-[32px] p-7 sm:p-10 bg-gradient-to-br from-[#EDE9FE] via-[#E2DAFC] to-[#D5C7FF] border border-[#C4B5FD] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4C1D95]">
                <Calculator className="w-3.5 h-3.5" />
                <span>Client ROI Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#171326]">
                How much manual busywork can we eliminate?
              </h2>
              <p className="text-xs sm:text-sm text-[#3B2A78] leading-relaxed">
                Estimate the monthly hours and operational payroll your team reclaims by replacing manual CRM data entry, lead triage, and spreadsheet reporting with autonomous n8n + HubSpot pipelines.
              </p>
            </div>

            <div className="space-y-5 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#171326]">
                  <span>Team members handling manual CRM / ops tasks</span>
                  <span className="text-[#5B21B6] font-bold">{teamMembers} people</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={teamMembers}
                  onChange={(e) => setTeamMembers(Number(e.target.value))}
                  className="w-full accent-[#5B21B6] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#171326]">
                  <span>Manual hours spent per person / week</span>
                  <span className="text-[#5B21B6] font-bold">{hoursPerWeek} hrs/week</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={20}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#5B21B6] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#171326]">
                  <span>Average loaded hourly team cost (USD)</span>
                  <span className="text-[#5B21B6] font-bold">${hourlyCost}/hr</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={100}
                  step={5}
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full accent-[#5B21B6] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[26px] bg-[#1F1B33] text-white p-7 space-y-6 shadow-xl border border-[#383059]">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C4B5FD]">
                Estimated Automation Impact (85% Reduction)
              </span>
              <div className="text-3xl sm:text-4xl font-serif text-white">
                ${roiMetrics.annualSavingsUsd.toLocaleString()}{" "}
                <span className="text-sm font-sans font-normal text-[#D1CCE6]">/ year saved</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/10">
                <div className="text-2xl font-bold text-[#C4B5FD]">
                  {roiMetrics.monthlyHoursSaved} hrs
                </div>
                <div className="text-[11px] text-[#D1CCE6] mt-0.5">
                  Reclaimed every month
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10">
                <div className="text-2xl font-bold text-emerald-300">
                  ${roiMetrics.monthlySavingsUsd.toLocaleString()}
                </div>
                <div className="text-[11px] text-[#D1CCE6] mt-0.5">
                  Monthly ops value saved
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setContactForm((prev) => ({
                  ...prev,
                  inquiryType: "HubSpot CRM & RevOps Engine Build (1–2 Weeks)",
                  budgetOrTimeline: `Reclaiming ~${roiMetrics.monthlyHoursSaved} hrs/mo`,
                  message: `Hi Shivam, our team of ${teamMembers} spends ~${hoursPerWeek} hrs/week each on manual CRM/ops tasks. We'd like to scope an automation sprint to reclaim ~${roiMetrics.monthlyHoursSaved} hrs/month.`
                }));
                scrollToSection("contact");
              }}
              className="w-full py-3.5 px-5 rounded-full bg-[#C4B5FD] text-[#171326] text-xs font-bold hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <span>Lock In These Savings — Book a Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ===================================================================
            OFFICIAL HUBSPOT ACADEMY CERTIFICATIONS (Client Trust Credentials)
           =================================================================== */}
        <section
          id="certifications"
          className="rounded-[32px] p-7 sm:p-10 bg-gradient-to-br from-[#1F1B33] via-[#262040] to-[#191528] text-white border border-[#383059] shadow-xl space-y-8"
        >
          {/* Top Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF7A59]/20 border border-[#FF7A59]/40 text-xs font-semibold text-[#FFBCA8]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A59]" />
                <span>Verified HubSpot Partner Credentials · HubSpot Academy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                5× HubSpot Certified Specialist
              </h2>
              <p className="text-sm text-[#D1CCE6] leading-relaxed">
                When you hand over the keys to your CRM, you want verified expertise. Every certification below is officially issued by HubSpot Academy across Sales Hub Software, Reporting &amp; Analytics, Answer Engine Optimization (AEO), Frictionless Sales, and Inbound.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 text-white/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={certSearch}
                onChange={(e) => setCertSearch(e.target.value)}
                placeholder="Search by title, skill, or cert code..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/60 focus:outline-none focus:border-[#C4B5FD]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {certCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCertCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCertCategory === cat
                    ? "bg-white text-[#1F1B33]"
                    : "bg-white/10 text-white/80 hover:bg-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Official Certifications Grid with Real Certificate Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#C4B5FD]/70 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Official Certificate Image Preview */}
                  <div
                    onClick={() => setActiveCertModal(cert)}
                    className="relative bg-white p-3 cursor-pointer overflow-hidden border-b border-white/15"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-contain mx-auto group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1F1B33]/85 backdrop-blur-md text-white text-[10px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3 h-3 text-[#C4B5FD]" />
                      <span>View Certificate</span>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FF7A59]/25 text-[#FFBCA8] border border-[#FF7A59]/40">
                        {cert.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveCertModal(cert)}
                      className="text-lg font-serif text-white leading-snug cursor-pointer hover:text-[#C4B5FD] transition-colors"
                    >
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[#D1CCE6] leading-relaxed">
                      {cert.credentialNote}
                    </p>
                  </div>
                </div>

                {/* Validity Window & Certification Code Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/10 text-white/90"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-white/75">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C4B5FD]" />
                      <span>Valid: {cert.validFrom} – {cert.validUntil}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveCertModal(cert)}
                      className="text-[#C4B5FD] font-semibold hover:underline flex items-center gap-0.5"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-black/25 border border-white/10 text-[10px] font-mono text-white/80">
                    <span className="truncate">ID: {cert.certCode}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(cert.certCode, `${cert.title} Code`)}
                      className="text-[#C4B5FD] hover:text-white shrink-0 font-sans font-semibold"
                    >
                      Copy ID
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            THREE-COLUMN CLIENT DELIVERABLES, INTEGRATIONS & 3-STEP PROCESS
           =================================================================== */}
        <section id="skills" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Concrete Client Deliverables (Replaces Resume Skill Bars) */}
          <div className="lg:col-span-4 rounded-[28px] bg-white border border-[#E2DCF5] p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5B21B6]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>What Clients Receive</span>
              </div>
              <h3 className="text-2xl font-serif text-[#171326]">Core Deliverables</h3>
              <p className="text-xs text-[#5E567A]">
                Production-ready systems designed to increase deal velocity and eliminate manual errors.
              </p>
            </div>

            <div className="space-y-3">
              {portfolioData.clientDeliverables.map((item) => (
                <div
                  key={item.name}
                  className="p-3.5 rounded-2xl bg-[#F8F7FC] border border-[#E5E0F5] space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#1F1B33]">{item.name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EDE9FE] text-[#5B21B6] shrink-0">
                      {item.outcome}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5E567A] leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#F6F5F0] border border-[#E5E0F5] text-xs text-[#3F3859]">
              <strong className="text-[#171326] block mb-0.5">End-to-End Technical Execution</strong>
              From HubSpot Inbound &amp; AEO strategy to raw SQL/BigQuery queries and custom Python/JS code nodes.
            </div>
          </div>

          {/* Card 2: Tech Stack We Integrate */}
          <div className="lg:col-span-4 rounded-[28px] bg-white border border-[#E2DCF5] p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5B21B6]">
                <Database className="w-3.5 h-3.5" />
                <span>Stack Compatibility</span>
              </div>
              <h3 className="text-2xl font-serif text-[#171326]">Tools I Connect</h3>
              <p className="text-xs text-[#5E567A]">
                Your existing CRM, databases, ad platforms, and AI models unified into one cohesive pipeline.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {portfolioData.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3 rounded-2xl bg-[#F8F7FC] border border-[#E5E0F5] hover:border-[#C4B5FD] transition-all flex flex-col items-center text-center justify-center"
                >
                  <div
                    className={`w-9 h-9 rounded-xl border font-bold text-xs flex items-center justify-center mb-2 ${tech.accent}`}
                  >
                    {tech.badge}
                  </div>
                  <div className="text-[11px] font-bold text-[#171326] leading-tight">
                    {tech.name}
                  </div>
                  <div className="text-[9px] text-[#655E80] mt-0.5 leading-tight">
                    {tech.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#5E567A] pt-2 border-t border-[#F0EDF9]">
              <span>API Protocols: REST, GraphQL, Webhooks</span>
              <span className="font-semibold text-[#5B21B6]">JSON / SQL</span>
            </div>
          </div>

          {/* Card 3: 3-Step Client Onboarding & Delivery Process */}
          <div
            id="journey"
            className="lg:col-span-4 rounded-[28px] bg-gradient-to-b from-[#EDE9FE] via-[#E4DDFD] to-[#D6C9FF] border border-[#C4B5FD] p-7 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4C1D95]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Simple, Transparent Delivery</span>
              </div>
              <h3 className="text-2xl font-serif text-[#171326]">How Sprints Work</h3>
              <p className="text-xs text-[#3B2A78]">
                From initial workflow audit to live deployment inside your stack in 3 structured steps.
              </p>
            </div>

            <div className="space-y-4">
              {portfolioData.deliveryProcess.map((step) => (
                <div
                  key={step.phase}
                  className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-sm space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#5B21B6]">
                    <span>STEP {step.phase}</span>
                    <span>{step.period}</span>
                  </div>
                  <div className="text-sm font-bold text-[#171326]">{step.title}</div>
                  <p className="text-xs text-[#4B4466] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#1F1B33] text-white text-xs">
              <span>14-Day Post-Launch Hypercare Included</span>
              <span className="font-bold text-[#C4B5FD]">100% IP Yours</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            FREELANCE CLIENT FAQ ACCORDION
           =================================================================== */}
        <section id="faq" className="rounded-[32px] bg-white border border-[#E2DCF5] p-7 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5B21B6]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Client Questions Answered</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#171326]">
                Frequently Asked Questions
              </h2>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="text-xs font-semibold text-[#5B21B6] hover:text-[#171326] flex items-center gap-1"
            >
              <span>Have a custom stack question? Ask me directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.faqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#F6F5F0] border border-[#E5E0F5] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-3"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#171326]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5B21B6] shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#4B4466] leading-relaxed border-t border-[#E5E0F5]/80 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            CONTACT SECTION + FREELANCE PROJECT SCOPING FORM
           =================================================================== */}
        <section
          id="contact"
          className="rounded-[32px] bg-white border border-[#DCD4F7] p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Left Column: Direct Contact Info & Client Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#EDE9FE] text-[#5B21B6]">
                Book a Project Sprint or Free Audit
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#171326] leading-tight">
                Ready to put your CRM &amp; workflows on autopilot?
              </h2>
              <p className="text-sm text-[#4B4466] leading-relaxed">
                Tell me what manual workflow or HubSpot bottleneck is slowing your team down. I&apos;ll reply within 24 hours with a concrete architectural plan, timeline, and fixed-scope quote.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#F6F5F0] border border-[#E5E0F5] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1B33] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C4B5FD]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#655E80]">
                      Direct Client Email
                    </div>
                    <a
                      href={`mailto:${portfolioData.profile.email}`}
                      className="text-sm font-bold text-[#171326] hover:text-[#5B21B6] truncate block"
                    >
                      {portfolioData.profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(portfolioData.profile.email, "Work Email")}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#DCD4F7] text-xs font-semibold text-[#3F3859] hover:bg-[#EDE9FE] flex items-center gap-1 shrink-0"
                >
                  {copiedKey === "Work Email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#F6F5F0] border border-[#E5E0F5] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#655E80]">
                      Base &amp; Timezone
                    </div>
                    <div className="text-xs font-bold text-[#171326]">
                      {portfolioData.profile.location}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6F5F0] border border-[#E5E0F5] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#655E80]">
                      Official Studio
                    </div>
                    <a
                      href={`https://${portfolioData.profile.domain}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#171326] hover:text-[#5B21B6]"
                    >
                      {portfolioData.profile.domain}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Social & Freelance Links (LinkedIn, Threads, Fiverr, GitHub) */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#655E80] block">
                Verified Freelance Profiles &amp; Code
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { label: "Fiverr", url: portfolioData.profile.fiverrUrl, badge: "fi" },
                  { label: "LinkedIn", url: portfolioData.profile.linkedinUrl, badge: "in" },
                  { label: "GitHub", url: portfolioData.profile.githubUrl, badge: "gh" },
                  { label: "Threads", url: portfolioData.profile.threadsUrl, badge: "@" }
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2.5 rounded-2xl bg-[#F6F5F0] hover:bg-[#1F1B33] text-[#171326] hover:text-white border border-[#E5E0F5] transition-all flex items-center justify-between text-xs font-semibold group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-white/80 text-[#1F1B33] font-bold text-[10px] flex items-center justify-center">
                        {soc.badge}
                      </span>
                      <span>{soc.label}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Functional Netlify-Ready Project Scoping Form */}
          <div className="lg:col-span-7">
            <form
              name="shivam-portfolio-contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleContactSubmit}
              className="rounded-[26px] bg-[#F6F5F0] border border-[#E2DCF5] p-6 sm:p-8 space-y-5"
            >
              <input type="hidden" name="form-name" value="shivam-portfolio-contact" />

              <div className="flex items-center justify-between border-b border-[#E5E0F5] pb-4">
                <div>
                  <h3 className="text-lg font-serif text-[#171326]">Request a Project Quote or Audit</h3>
                  <p className="text-xs text-[#655E80]">
                    Scope a 3–5 day n8n workflow sprint, HubSpot RevOps build, or monthly retainer
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-800 border border-emerald-500/30">
                  Replies within 24h
                </span>
              </div>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-white border border-[#C4B5FD] space-y-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif text-[#171326]">
                      Thank you, {contactForm.name}!
                    </h4>
                    <p className="text-xs text-[#4B4466] max-w-md mx-auto leading-relaxed">
                      Your project inquiry for <strong>{contactForm.inquiryType}</strong> has been delivered to Shivam&apos;s inbox. You can also send a direct copy via your email client below.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(
                        `[Project Inquiry: ${contactForm.inquiryType}] from ${contactForm.name}`
                      )}&body=${encodeURIComponent(
                        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nPackage / Service: ${contactForm.inquiryType}\nTimeline / Scope: ${contactForm.budgetOrTimeline}\n\nProject Details:\n${contactForm.message}`
                      )}`}
                      className="px-5 py-2.5 rounded-full bg-[#1F1B33] text-white text-xs font-semibold hover:bg-[#312A4F] flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email ({portfolioData.profile.email})</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({
                          name: "",
                          email: "",
                          inquiryType: "HubSpot CRM & RevOps Engine Build (1–2 Weeks)",
                          budgetOrTimeline: "",
                          message: ""
                        });
                      }}
                      className="px-4 py-2.5 rounded-full bg-white border border-[#DCD4F7] text-xs font-semibold text-[#3F3859] hover:bg-[#EDE9FE]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#2A2344] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD4F7] text-xs text-[#171326] focus:outline-none focus:border-[#5B21B6]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#2A2344] block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD4F7] text-xs text-[#171326] focus:outline-none focus:border-[#5B21B6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#2A2344] block">
                        Service or Sprint Package
                      </label>
                      <select
                        name="inquiryType"
                        value={contactForm.inquiryType}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, inquiryType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD4F7] text-xs text-[#171326] focus:outline-none focus:border-[#5B21B6]"
                      >
                        <option value="HubSpot CRM & RevOps Engine Build (1–2 Weeks)">
                          HubSpot CRM &amp; RevOps Engine Build (1–2 Weeks)
                        </option>
                        <option value="Single n8n Workflow Sprint (3–5 Days)">
                          Single n8n Workflow Sprint (3–5 Days)
                        </option>
                        <option value="Dedicated Monthly Automation Retainer">
                          Dedicated Monthly Automation Retainer
                        </option>
                        <option value="SQL / BigQuery & Executive BI Reporting">
                          SQL / BigQuery &amp; Executive BI Reporting
                        </option>
                        <option value="Custom AI Agent / Support Triage Pipeline">
                          Custom AI Agent / Support Triage Pipeline
                        </option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#2A2344] block">
                        Target Timeline or Scope
                      </label>
                      <input
                        type="text"
                        name="budgetOrTimeline"
                        value={contactForm.budgetOrTimeline}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, budgetOrTimeline: e.target.value })
                        }
                        placeholder="e.g. Start this week · 3–5 Day Sprint"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD4F7] text-xs text-[#171326] focus:outline-none focus:border-[#5B21B6]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#2A2344] block">
                      What Would You Like to Automate? *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell me about your current tools (e.g. HubSpot, n8n, Meta Ads, Stripe, Supabase) and the manual workflow or pipeline bottleneck you want solved..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCD4F7] text-xs text-[#171326] focus:outline-none focus:border-[#5B21B6]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#1F1B33] hover:bg-[#312A4F] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#C4B5FD]" />
                    <span>Send Message to Shivam S.</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* =====================================================================
          CLEAN FOOTER
         ===================================================================== */}
      <footer className="border-t border-[#E5E0F5] bg-white/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#655E80]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#5B21B6]" />
            <span className="font-bold text-[#171326]">{portfolioData.profile.name}</span>
            <span>· Freelance HubSpot RevOps &amp; n8n Automation Partner · {portfolioData.profile.domain}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={portfolioData.profile.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#171326] font-medium"
            >
              Fiverr
            </a>
            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#171326] font-medium"
            >
              LinkedIn
            </a>
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#171326] font-medium"
            >
              GitHub
            </a>
            <a
              href={portfolioData.profile.threadsUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#171326] font-medium"
            >
              Threads
            </a>
            <span>© {new Date().getFullYear()} Shivam Saidane</span>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          WORKFLOW DIAGRAM LIGHTBOX & ARCHITECTURE INSPECTOR MODAL
         ===================================================================== */}
      {activeWorkflowModal && (
        <div className="fixed inset-0 z-50 bg-[#141122]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[28px] max-w-5xl w-full overflow-hidden shadow-2xl border border-[#C4B5FD] my-8">
            <div className="px-6 py-4 bg-[#1F1B33] text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#C4B5FD] text-[#171326] font-bold text-xs">
                  Case Study {activeWorkflowModal.number}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-serif text-white">
                    {activeWorkflowModal.title}
                  </h3>
                  <p className="text-[11px] text-[#D1CCE6]">
                    {activeWorkflowModal.category} · {activeWorkflowModal.metrics}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveWorkflowModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Close diagram modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* High-Resolution Workflow Canvas Image */}
            <div className="bg-[#0E0C17] p-4 sm:p-6 border-b border-[#2D2747]">
              <img
                src={activeWorkflowModal.image}
                alt={activeWorkflowModal.title}
                className="w-full max-h-[480px] object-contain mx-auto rounded-xl"
              />
            </div>

            {/* Stage-by-Stage Node Details */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[45vh] overflow-y-auto">
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#5B21B6]">
                  Architecture Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#3A3352] leading-relaxed">
                  {activeWorkflowModal.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeWorkflowModal.stages.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F6F5F0] border border-[#E2DCF5] space-y-1"
                  >
                    <div className="text-xs font-bold text-[#1F1B33]">{st.step}</div>
                    <p className="text-xs text-[#4B4466] leading-relaxed">{st.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E5E0F5]">
                <div className="flex flex-wrap gap-1.5">
                  {activeWorkflowModal.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#EDE9FE] text-[#4C1D95]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={portfolioData.profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#F6F5F0] border border-[#DCD4F7] text-[#171326] text-xs font-semibold hover:bg-[#EDE9FE] flex items-center gap-1.5"
                  >
                    <Code2 className="w-3.5 h-3.5 text-[#5B21B6]" />
                    <span>View JSON in GitHub Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const wfTitle = activeWorkflowModal.title;
                      setActiveWorkflowModal(null);
                      setContactForm((prev) => ({
                        ...prev,
                        inquiryType: "Single n8n Workflow Sprint (3–5 Days)",
                        budgetOrTimeline: "3–5 Day Custom Sprint",
                        message: `Hi Shivam, I inspected your "${wfTitle}" case study and want to deploy a similar workflow for our business.`
                      }));
                      scrollToSection("contact");
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#1F1B33] text-white text-xs font-semibold hover:bg-[#322B52]"
                  >
                    Deploy This Workflow for My Business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          OFFICIAL HUBSPOT CERTIFICATE LIGHTBOX MODAL
         ===================================================================== */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 bg-[#141122]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[28px] max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C4B5FD] my-8">
            <div className="px-6 py-4 bg-[#1F1B33] text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#FF7A59] text-white font-bold text-xs">
                  {activeCertModal.issuer}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-serif text-white">
                    {activeCertModal.title}
                  </h3>
                  <p className="text-[11px] text-[#D1CCE6]">
                    Valid: {activeCertModal.validFrom} – {activeCertModal.validUntil}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Close certificate modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#F6F5F0] p-4 sm:p-8 border-b border-[#E5E0F5]">
              <img
                src={activeCertModal.image}
                alt={activeCertModal.title}
                className="w-full max-h-[520px] object-contain mx-auto rounded-xl shadow-md bg-white p-2"
              />
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#171326]">
                  Official Certification Code: <span className="font-mono text-[#5B21B6]">{activeCertModal.certCode}</span>
                </div>
                <p className="text-xs text-[#4B4466]">{activeCertModal.credentialNote}</p>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(activeCertModal.certCode, "Certification Code")}
                className="px-4 py-2.5 rounded-full bg-[#1F1B33] text-white text-xs font-semibold hover:bg-[#312A4F] shrink-0 flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5 text-[#C4B5FD]" />
                <span>Copy Verification Code</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
