# Shivam Saidane (Shivam S.) — Marketing Automation & CRM Portfolio

Built with **React 18 + Vite + Tailwind CSS**, styled in a signature **BloomFi** aesthetic featuring your **6 production n8n workflow architectures** (linked to your GitHub JSON repository) and your **5 official HubSpot Academy certificates**.

## Quick Local Start

```bash
npm install
npm run dev
```

## How Only You Can Edit & Add New Certs or Workflows

Visitors to your live website see a clean, read-only portfolio with **zero** edit buttons.
Whenever you earn a new HubSpot certification or build a new n8n workflow:

1. Drop the new certificate screenshot into `public/certs/` (or workflow screenshot into `public/workflows/`).
2. Open `src/App.jsx` in GitHub, VS Code, or Google Antigravity, and add a new item to `PORTFOLIO_DATA.certifications` or `PORTFOLIO_DATA.workflows` at the top of the file.
3. Commit and push to your GitHub repository — **Netlify automatically rebuilds and updates `shivamsaidane.online` in ~30 seconds**.
