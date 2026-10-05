# Nandhakumar M — Personal Portfolio Architecture

Live site: https://my-portfolio-henna-tau-11.vercel.app/

## Purpose

This portfolio positions Nandhakumar M as a **Full Stack AI Engineer** for opportunities in **Canada**, North America and remote international teams.

It demonstrates:

- Production software engineering experience
- Full-stack application development
- Generative AI expertise
- Retrieval-Augmented Generation (RAG)
- AI agent architectures
- Azure AI and cloud-native development
- Enterprise solution design

---

## Professional profile

### Target roles

- Full Stack AI Engineer
- Generative AI Engineer
- Applied AI Engineer
- Azure AI Engineer
- AI Solutions Engineer
- AI Platform Engineer

### Core technologies

| Area            | Technologies                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| AI & GenAI      | Azure OpenAI, LLMs, RAG, AI Agents, Prompt Engineering, Semantic Search, Vector Databases, LangChain, LangGraph |
| Backend         | Python, Node.js, Express.js, REST APIs, Microservices                                                          |
| Frontend        | React, TypeScript, JavaScript, HTML5, CSS3                                                                     |
| Cloud & DevOps  | Azure, AWS, Docker, Kubernetes, CI/CD, GitHub Actions                                                          |

---

## Portfolio objectives

The site should answer these questions within 10 seconds:

1. Who is Nandhakumar?
2. What business problems can he solve?
3. What AI solutions has he built?
4. What technologies does he specialize in?
5. Why should a recruiter contact him?

## Canada hiring focus

Canadian recruiters screen for a few things first. The site surfaces them in the hero and on the contact page (`canadaFacts` in `src/data/profile.js`):

| Fact                | Why it matters                                                         | Status        |
| ------------------- | ---------------------------------------------------------------------- | ------------- |
| Availability        | Confirms the candidate is actively looking in Canada                   | Set           |
| Work authorization  | Usually the first screening question (PR, work permit, needs sponsorship) | **To fill in** |
| Location/relocation | Shows willingness to relocate                                          | Set           |
| Remote hours        | Shows Eastern/Pacific time-zone overlap for remote roles               | Set           |
| Notice period       | Helps recruiters plan start dates                                      | **To fill in** |
| Languages           | English proficiency                                                    | Set           |

Other Canadian conventions the site follows:

- No personal photo, age or marital status, in line with Canadian resume norms that avoid details that could lead to bias.
- `lang="en-CA"` and dates formatted with the `en-CA` locale.
- Every metric comes from the resume and can be backed up in an interview.
- The contact form asks for opportunity type (full-time in Canada, remote, contract).

---

## Site architecture

```
/                       Home
├── Hero                name, headline, "Open to roles in Canada", CTAs
├── Professional summary + target roles
├── Key metrics
├── Featured AI project (with architecture diagram)
├── Technical expertise
├── Certifications & recognition
├── Experience highlights
└── Contact CTA

/projects               Projects (filter by category), all from github.com/Nandhu29696
└── /projects/:slug     Case study
    ├── Generative AI: AI Email Assistant ← featured, JobAgent AI, MCP Healthcare Appointment Agent,
    │                  PesuAI, Loan Document Extraction, Letscalm
    ├── Enterprise:    HealthCamp, Mediance Healthcare CRM, Fleet Manager, BCM Platform,
    │                  Enterprise Data Platform (Fabric), Investment Platform, POS Billing, Arboreal,
    │                  Hostel Management, Spend Analytics Dashboard
    └── Web:           Alumni Meet, Pyro Town Store, Business Websites, Real Estate API

/architecture           Architecture gallery: one diagram at a time via tabs, grouped into
                        "From my projects" and "Reference designs"; the URL hash selects the tab
├── #email-assistant    AI Email Assistant pipeline (built)
├── #mcp-agent          MCP tool-calling agent (built)
├── #rag                RAG architecture
├── #agents             AI agent architecture
├── #azure-ai           Azure AI platform
├── #event-driven       Event-driven architecture
└── #saas               Multi-tenant SaaS platform

/experience             Experience
├── Professional experience (timeline)
├── Business impact
├── Leadership highlights
└── Education

/blog                   Blog (hidden from navigation until a post exists)
/contact                Contact form + recruiter quick facts
*                       404
```

---

## Featured project strategy

The home page prominently shows one flagship project, chosen by `featured: true` in `src/data/projects.js`.

### AI Email Assistant (current flagship)

- **Problem:** Teams lose hours reading, sorting and forwarding email; urgent messages get buried.
- **Solution:** Gmail/Outlook integration with LLM summaries and reply drafts, sentiment and emotion analysis, classification, priority and routing, plus real-time alerts.
- **Technologies:** Python, FastAPI, PostgreSQL, Redis, Next.js, OpenAI / Ollama, Docker.

### Planned flagship: Enterprise Knowledge Assistant

Not built yet. Once it has a public repository, add it to `projects.js` and consider making it the featured project.

- **Problem:** Organizations struggle to search and retrieve information from large volumes of internal documents.
- **Solution:** A retrieval-augmented generation platform built with Azure OpenAI, vector search and modern full-stack technologies.
- **Features:** document ingestion, semantic search, source citations, access control, conversation history.
- **Technologies:** Python, Azure OpenAI, React, PostgreSQL, Azure.

## AI project standards

Every case study follows the same structure, which maps directly to fields in `src/data/projects.js`. Empty fields are hidden, so a project can be published before every section is written.

| Section            | Field          |
| ------------------ | -------------- |
| Business problem   | `problem`      |
| Solution           | `solution`     |
| Key features       | `features`     |
| Architecture       | `architecture` (id of a diagram in `architectures.js`) |
| Technology stack   | `stack` (grouped: Frontend, Backend, AI, Data, Cloud) |
| Challenges         | `challenges`   |
| Results            | `results` (measurable outcomes) |
| Repository         | `repo`, plus `links` for extra repos (frontend, mobile) |
| Live demonstration | `demo`         |

---

## Recruiter-focused design principles

Emphasize:

- Business outcomes
- AI implementation experience
- Architecture thinking
- Cloud expertise
- Production readiness

Avoid:

- Generic skill lists
- Tutorial-style projects
- Technology-only descriptions
- Overemphasis on Java development

## GitHub strategy

Pinned repositories should highlight:

1. Enterprise RAG Platform
2. Multi-Agent AI System
3. AI Customer Support Platform
4. Resume Analyzer AI
5. Azure OpenAI Playground
6. Personal Portfolio

Each repository should contain architecture diagrams, setup instructions, screenshots, business context, technical decisions and a deployment guide.

## Success criteria

A recruiter visiting the portfolio should immediately identify Nandhakumar M as:

> An experienced Full Stack AI Engineer with production experience in AI applications, Azure AI, RAG systems, AI agents, and enterprise software development.

---

# Technical implementation

## Tech stack

| Concern       | Choice                                            |
| ------------- | ------------------------------------------------- |
| UI framework  | React 19                                          |
| Routing       | React Router 7 (`BrowserRouter` in the browser, `StaticRouter` at build time) |
| Build tooling | Vite 6, with every page pre-rendered to static HTML |
| Tests         | Vitest + Testing Library (jsdom)                  |
| Styling       | Tailwind CSS 3 with class-based dark mode         |
| Animation     | CSS only: load fade-ins and scroll-driven reveals (`animation-timeline: view()`) |
| Fonts         | Self-hosted with Fontsource (Outfit Variable, JetBrains Mono, Latin subset) |
| Contact form  | Web3Forms API                                     |
| Analytics     | `@vercel/analytics`                               |
| Hosting       | Vercel, static files with `cleanUrls` (`vercel.json`) |

## Source layout

```
index.html                      HTML template: fonts, theme script, <!--seo--> and <!--app-html--> slots
vite.config.js                  Build (output: build/) and Vitest config
scripts/prerender.mjs           Writes one HTML file per route, plus 404.html
src/
├── main.jsx                    Browser entry: hydrates pre-rendered HTML (or renders, in dev)
├── entry-server.jsx            Build-time entry: renders a route to an HTML string
├── App.jsx                     BrowserRouter + analytics
├── AppRoutes.jsx               Route table shared by browser and pre-renderer
├── seo.js                      Per-page title, description, canonical URL and preview image
├── index.css                   Tailwind layers + shared classes (.page, .card, .btn-*, .field, .eyebrow)
├── hooks/
│   └── useTheme.js             Light / dark / system preference, persisted in localStorage
├── data/                       All content lives here, not in components
│   ├── profile.js              Identity, canadaFacts, target roles, metrics, expertise, certifications, recognition
│   ├── projects.js             Case studies
│   ├── architectures.js        Diagram definitions + design decisions
│   ├── experience.js           Roles, business impact, leadership, education
│   └── blog.js                 Topics and posts
├── components/
│   ├── layout/                 Layout (scroll reset, page titles, skip link), Navbar, Footer
│   ├── ui/                     Icons, Reveal, SectionHeading, Tag, PromotedBadge
│   ├── ArchitectureDiagram.jsx Renders lanes of connected steps from data
│   ├── ProjectCard.jsx
│   ├── ContactForm.jsx
│   ├── ContactCTA.jsx
│   └── QuickFacts.jsx          Recruiter facts; empty values are hidden
└── pages/                      Home, Projects, ProjectDetail, Architecture, Experience, Blog, Contact, NotFound
public/
├── og-image.png                1200×630 link preview for LinkedIn and other sites
├── favicon.ico, logo192/512    "N." monogram icons
└── Nandhakumar_M_Resume.pdf    Generated, see below
scripts/resume/
├── content.json                Single source for resume and cover letter text
└── build_resume.py             Builds the PDF and Word resume and the cover letter template
career/                         Word resume, cover letter template, tailoring guide
src/setupTests.js, *.test.jsx   Vitest tests: routing, page titles, preview metadata, contact form validation
```

## Pre-rendering

`npm run build` runs three steps:

1. `vite build` builds the browser bundle into `build/`.
2. `vite build --ssr src/entry-server.jsx` builds a Node version of the app into `build-ssr/`.
3. `scripts/prerender.mjs` renders every route in `prerenderRoutes` (`src/seo.js`) with `StaticRouter`, fills the `<!--seo-->` block with that page's title, description, canonical URL and Open Graph tags, and writes `build/<route>/index.html`. It also writes `build/404.html`, then deletes `build-ssr/`.

In the browser, `main.jsx` hydrates the existing HTML. The pre-rendered HTML must match the browser's first render, so:

- `useTheme` starts with no preference (`null`) and reads localStorage after mounting. Until then the theme button picks its icon with CSS (`dark:` classes), and the inline script in `index.html` has already applied the right theme.
- `Reveal` is a plain element with a CSS class, so there is no animation state to mismatch.
- The Architecture page renders its first tab, then switches to the tab named in the URL hash after mounting.

Vercel serves the files as they are: `/projects` → `projects/index.html` (via `cleanUrls`), and any unknown path gets `404.html` with a real 404 status. There is no SPA fallback, so a new route must be added to `prerenderRoutes` in `src/seo.js`.

## Resume and cover letter

The resume and cover letter are generated by `scripts/resume/build_resume.py` from `content.json`, so their content is version-controlled next to the site. The script writes the PDF resume (ReportLab), a Word resume and a Word cover letter template with highlighted `[placeholders]` (python-docx). They follow the [Job Bank resume guidance](https://www.jobbank.gc.ca/findajob/resources/write-good-resume):

- Two pages at most, with contact details at the top.
- Accomplishments start with action verbs and include numbers, at most 5–7 bullets per section.
- No photo, age, marital status, Social Insurance Number, references, hobbies or personal pronouns.
- Plain language and a single-column layout that applicant tracking systems can read.
- The COVID-19 career break (Jun 2020 – Feb 2021) is stated in one line, without reasons for leaving.

## Key design decisions

- **Content is data.** Pages only lay out what's in `src/data/`. Adding a project, certification or blog post means adding an object, not writing JSX.
- **Diagrams are data too.** Architecture diagrams are rendered from `lanes → steps`, so they stay sharp, work in both themes, stack vertically on phones and need no image files.
- **Empty means hidden.** Unknown values (work authorization, notice period, repo links, results) are left empty and don't render, so the site never shows placeholder text.
- **Dark mode without a flash.** A small script in `index.html` applies the saved theme before React loads. The theme button cycles Light → Dark → System; "System" follows the OS and removes the saved choice.
- **Content never waits for JavaScript.** Everything is visible in the pre-rendered HTML. Animations are CSS only: the hero fades in on load, and other sections reveal on scroll where the browser supports scroll-driven animations. Browsers without that support, print, and reduced-motion visitors see static content.
- **Accessible by default.** The site has:
  - a skip link and visible focus rings
  - labelled form fields with `aria-invalid` and error text, and a live status region on the form
  - WAI-ARIA tabs with arrow-key support on the Architecture page
  - a focus trap and Escape-to-close on the mobile menu
  - reduced-motion support and a per-page `document.title`
  - text contrast of at least 4.5:1 (WCAG AA) in both themes
- **Print-friendly.** In print, the navigation, footer, contact prompt and filters are hidden, the page is forced to light, and external links print their URL.
- **Recruiter-first project list.** The Projects page shows four featured cards, then a compact list of the rest. Each card has a coverage strip (Frontend / Backend / AI / Data / Cloud), shows its first result, and orders its tags by what matters for its category (`orderedTech`). Status is shown only when it says something ("Live", "In production").
- **One source for metadata.** `src/seo.js` feeds both the pre-rendered `<head>` and the tab title after client-side navigation.

## Visual design

- Neutral zinc palette with one accent, `maple` (Canadian flag red), used for emphasis only.
- Outfit for text; JetBrains Mono for labels and tech tags (both self-hosted).
- Diagrams highlight one key step per architecture (`key: true` in `architectures.js`), explained by a legend.
- Content width capped at `max-w-page` (72rem), with 20–32px side padding.

## Contact form flow

1. The visitor fills in name, email, company (optional), opportunity type and message.
2. Client-side validation shows errors inline under each field.
3. The form posts JSON to `https://api.web3forms.com/submit` with a descriptive subject, e.g. "Portfolio: Full-time (Canada) enquiry from …".
4. A hidden `botcheck` checkbox filters simple spam bots.
5. The success or error message is announced in a live region.

## Build and deploy

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # Vitest
npm run build   # pre-rendered site in build/
npm run preview # serve build/ locally
```

`vercel.json` sets the framework to Vite, the build command to `npm run build` and the output directory to `build`. This overrides the old Create React App preset in the Vercel project settings.

---

## Content checklist (owner)

- [ ] Add **work authorization** status and **notice period** in `canadaFacts`.
- [x] Add all real projects from GitHub to `projects.js`.
- [ ] Add measurable **results** and **challenges** to each project case study.
- [ ] Add live demo links for the AI projects (deploy at least the AI Email Assistant), Mediance and Fleet Manager.
- [x] Add certifications (GH-300T00-A, AI-103T00-A).
- [x] Full name of AI-103T00-A: "Develop AI apps and agents on Azure" (a course).
- [ ] Add the Microsoft Learn credential link (`url`) for each certification or course.
- [ ] Add real screenshots for projects (`image` in `projects.js`); the old stock photos were removed.
- [x] Regenerate the resume: Canadian format, AI projects, same email as the site.
- [ ] Clean up the public GitHub repositories (see below) before recruiters look at them.
- [ ] Build and publish the Enterprise Knowledge Assistant (RAG).
- [ ] Publish the first blog post; the Blog link then appears in the navigation.
- [ ] Pin the six repositories listed under GitHub strategy.

### GitHub clean-up

These files are committed to public repositories and should be removed from the history and, where they are secrets, rotated:

- `.env` files in several repositories (crackers_backend, LoanTracker_backend, hostelmangsystem_backend, alumni_backend, POS_BillingSystemUI, loanlyf, sugas_aitech_website, zevoraaitech_frontend)
- `cert.key` and a database dump in letscalm-backend; a commented-out API key in `voicezone/utils.py`
- A database dump in hostelmangsystem_backend
- 134 uploaded loan PDFs in `LoanTracker_backend/media/documents`
- A committed Python virtual environment (`authenv/`) in Job-Agent-AI-backend
- A database backup (`ai_email_db_backup_20261003.sql`) in ai-email-assistant-api, which may contain real email data

Other clean-up:

- Most repositories have code only on `master` while `main` holds just a README. Make the code branch the default so visitors see code.
- Add a README to each repository with a description, screenshots and setup steps.

## Technical roadmap

- [x] Move from Create React App to Vite; upgrade to React Router 7 and Vitest 5 (`npm audit`: 0 vulnerabilities).
- [x] Pre-render pages so each has its own meta tags, and missing pages return a real HTTP 404.
- [x] Add tests for contact form validation, routing and page metadata.
- [x] Delete unused images left over from the previous design.
- [x] Word resume and cover letter template.
- [ ] Add ESLint (removed along with Create React App's built-in config).
- [x] Generate `sitemap.xml` from `prerenderRoutes` and reference it in `robots.txt`.
- [ ] Per-project preview images (screenshots) for link previews.
