// Project case studies, taken from the public repositories at github.com/Nandhu29696.
// Each follows the same structure: problem → solution → architecture → stack → challenges → results → links.
// Empty fields ('' or []) are hidden on the page. `highlight` puts a project in the Projects page's
// featured grid; `featured` makes it the home page flagship.

const gh = (repo, branch) =>
  `https://github.com/Nandhu29696/${repo}${branch ? `/tree/${branch}` : ''}`;

export const projects = [
  // ------------------------------------------------------------ Generative AI
  {
    slug: 'ai-email-assistant',
    highlight: true,
    title: 'AI Email Assistant',
    subtitle: 'LLM inbox triage and automated document intake',
    category: 'Generative AI',
    status: 'Personal project',
    featured: true,
    problem:
      'Operations teams lose hours reading, sorting and answering email. Many messages carry documents that someone must open, check, convert and file by hand, while urgent messages sit next to newsletters and out-of-office replies.',
    solution:
      'A full-stack application that syncs Gmail and Outlook mailboxes and runs every email through one pipeline: an LLM with sentiment and emotion analysis classifies, prioritizes and summarizes it; sender checks reject forged or unknown domains; and attachments are validated, converted to PDF, merged into a single file and stored, with an automatic reply telling the sender what happened.',
    features: [
      'Gmail and Outlook mailbox sync through OAuth 2.0',
      'LLM summaries, category, priority, sentiment (VADER) and emotion for every email',
      'Sender checks: domain allow-list, SPF/DKIM/DMARC failures and auto-reply detection',
      'Document intake: rejects disallowed, oversized or password-protected files with a reply listing them',
      'Converts DOC and TIFF attachments to PDF and merges them with the email into one PDF',
      'Storage on Azure Blob Storage or local disk, with retention rules',
      'Admin console for mailboxes, intake rules and logs; multi-factor sign-in',
      'pytest suite covering the intake flow, NLP pipeline and security boundaries',
    ],
    architecture: 'email-assistant',
    stack: {
      Frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      Backend: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic'],
      AI: ['OpenAI GPT-4o-mini', 'Ollama', 'VADER sentiment'],
      Data: ['PostgreSQL', 'Redis'],
      Cloud: ['Azure Blob Storage', 'Docker'],
    },
    challenges: [
      'Keeping the API responsive while converting and merging large attachments: provider calls, LibreOffice conversion and PDF work run in worker threads.',
      'Telling sender mistakes apart from system failures, so a missing converter or storage outage ends as a reprocessable failure instead of rejecting the sender.',
    ],
    results: [],
    repo: gh('ai-email-assistant-api', 'master'),
    links: [{ label: 'Frontend code', href: gh('ai-email-assistant-ui', 'master') }],
    demo: '',
  },
  {
    slug: 'jobagent-ai',
    highlight: true,
    title: 'JobAgent AI',
    subtitle: 'AI career assistant for job seekers',
    category: 'Generative AI',
    status: 'Personal project',
    problem:
      'Job seekers apply to many roles and struggle to judge fit, tailor cover letters and keep track of where each application stands.',
    solution:
      'A web application with an LLM career agent that scores how well a resume matches a job description, explains the gaps, writes tailored cover letters and keeps every application in one tracker.',
    features: [
      'Resume-to-job match analysis with specific feedback',
      'Tailored cover letter generation',
      'Chat agent for interview preparation and resume review',
      'Job and application tracking dashboard',
      'JWT authentication and user profiles',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
      Backend: ['Python', 'FastAPI', 'SQLAlchemy'],
      AI: ['Ollama (local LLM)', 'OpenAI SDK'],
      Data: ['PostgreSQL', 'MySQL'],
      Cloud: ['Docker'],
    },
    challenges: [],
    results: [],
    repo: gh('Job-Agent-AI-backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('Job-Agent-AI-Frontend', 'master') }],
    demo: '',
  },
  {
    slug: 'mcp-healthcare-agent',
    highlight: true,
    title: 'MCP Healthcare Appointment Agent',
    subtitle: 'AI agent that books appointments through typed tools',
    category: 'Generative AI',
    status: 'Personal project',
    problem:
      'Booking a clinic appointment means searching for the patient, checking which doctors are free and filling in a form. Front-desk staff repeat these steps many times a day.',
    solution:
      'An agent following the Model Context Protocol pattern: an LLM reads a natural-language request such as "book a cardiologist for Ravi tomorrow", selects the right tool, and the engine executes typed database operations to search patients, check availability and book the appointment.',
    features: [
      'LLM tool selection with structured JSON output',
      'Tool registry: patient search, doctor availability by specialization, appointment booking',
      'Date and specialization extraction from free text',
      'REST APIs for patients, doctors, appointments and chat',
    ],
    architecture: 'mcp-agent',
    stack: {
      Backend: ['Node.js', 'Express', 'Sequelize'],
      AI: ['Ollama', 'Model Context Protocol'],
      Data: ['PostgreSQL'],
    },
    challenges: [],
    results: [],
    repo: gh('mcp-server', 'master'),
    demo: '',
  },
  {
    slug: 'pesuai',
    title: 'PesuAI',
    subtitle: 'Tamil, Tanglish and English communication assistant',
    category: 'Generative AI',
    status: 'Personal project',
    problem:
      'People switching between Tamil, Tanglish and English often want help phrasing a reply in the right tone, or understanding what a message really means.',
    solution:
      'A Django REST API that asks an LLM for three reply styles, a plain-language reading of a message’s meaning and emotion, or a translation, returned as structured JSON. The provider layer is swappable and the API runs serverless on Vercel.',
    features: [
      'Reply suggestions in several tones',
      'Meaning and emotion analysis with a confidence level',
      'Translation between Tamil, Tanglish and English',
      'Pluggable AI provider with a mock provider for development',
      'Privacy by design: input is not stored',
    ],
    architecture: '',
    stack: {
      Backend: ['Python', 'Django REST Framework'],
      AI: ['OpenAI-compatible API', 'JSON-mode prompting'],
      Data: ['MongoDB'],
      Cloud: ['Vercel serverless'],
    },
    challenges: [],
    results: [],
    repo: gh('pesuai-backend', 'app'),
    demo: '',
  },
  {
    slug: 'loan-document-extraction',
    title: 'Loan Document Extraction',
    subtitle: 'OCR data extraction from mortgage documents',
    category: 'Generative AI',
    status: 'Personal project',
    problem:
      'Loan processors re-type dozens of fields from mortgage applications, appraisals and loan estimates into their systems by hand, which is slow and error-prone.',
    solution:
      'A loan tracker that reads uploaded PDFs with PyMuPDF and Tesseract OCR, extracts dozens of named fields (property, loan amount, rate, term, borrower, charges) into structured data, and shows them next to the original document.',
    features: [
      'PDF text extraction with OCR fallback for scanned pages',
      'Field mapping for mortgage forms',
      'Side-by-side PDF viewer and extracted data',
      'Loan dashboard with charts',
      'JWT authentication with OTP verification',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'Redux Toolkit', 'PDF.js', 'Recharts', 'Tailwind CSS'],
      Backend: ['Python', 'Django REST Framework'],
      AI: ['Tesseract OCR', 'PyMuPDF'],
      Data: ['PostgreSQL'],
    },
    challenges: [],
    results: [],
    repo: gh('LoanTracker_backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('Loan_Tracker_UI', 'master') }],
    demo: '',
  },
  {
    slug: 'letscalm',
    title: 'Letscalm',
    subtitle: 'Voice journaling and relaxation mobile app',
    category: 'Generative AI',
    status: 'Personal project',
    problem:
      'People dealing with stress want a quick way to talk through how they feel and get calming content without typing.',
    solution:
      'A React Native app where users record voice notes that the Django backend transcribes with speech recognition and scores for sentiment, alongside guided relaxation audio and video.',
    features: [
      'Voice recording and upload',
      'Speech-to-text transcription',
      'Sentiment analysis of transcripts (NLTK VADER)',
      'Relaxation audio and video library',
      'History of past sessions',
    ],
    architecture: '',
    stack: {
      Frontend: ['React Native', 'Expo'],
      Backend: ['Python', 'Django REST Framework'],
      AI: ['SpeechRecognition', 'NLTK VADER'],
      Data: ['PostgreSQL'],
      Cloud: ['AWS S3'],
    },
    challenges: [],
    results: [],
    repo: gh('letscalm-backend', 'Letscalm'),
    links: [{ label: 'Mobile app code', href: gh('letsclam_frontend', 'Frontend') }],
    demo: '',
  },

  // ------------------------------------------------------------ Enterprise platforms
  {
    slug: 'healthcamp-platform',
    highlight: true,
    title: 'HealthCamp Management Platform',
    subtitle: 'Healthcare platform for an NGO',
    category: 'Enterprise',
    status: 'In production',
    problem:
      'An NGO running community health camps managed camp plans, patient details, reports, inventory and volunteers on paper and spreadsheets.',
    solution:
      'A full-stack platform for planning camps, registering patients (including bulk CSV and Excel import), storing medical reports in cloud storage, and managing inventory, volunteers and organization data.',
    features: [
      'Camp planning and activity tracking',
      'Patient records with bulk CSV and Excel import',
      'Medical report uploads to Azure Blob Storage and AWS S3',
      'Inventory and volunteer management',
      'Role-based access with JWT and OTP verification',
      'Excel and CSV exports',
    ],
    architecture: '',
    stack: {
      Backend: ['Node.js', 'Express', 'Sequelize', 'JWT'],
      Data: ['PostgreSQL', 'MySQL'],
      Cloud: ['Azure Blob Storage', 'AWS S3'],
    },
    challenges: [],
    results: ['Delivered full-cycle and on schedule as technical lead; in production for the NGO.'],
    repo: gh('healthcamp_merge', 'master'),
    demo: 'https://hms.nirmaan.org/dashboard',
  },
  {
    slug: 'mediance-healthcare-crm',
    highlight: true,
    title: 'Mediance Healthcare CRM',
    subtitle: 'Lead management, consultations and a patient portal',
    category: 'Enterprise',
    status: 'Client project',
    problem:
      'A healthcare products business needed one system to capture website enquiries, have its sales team follow up on every lead, let doctors run consultations, and give patients access to their own records.',
    solution:
      'A multilingual public website connected to a role-based CRM. Enquiries become numbered leads that sales teams move through a pipeline with campaigns and follow-ups; doctors manage consultations, prescriptions, lab reports and vitals; patients see everything in a My Health portal. Email, WhatsApp and SMS messages go out on key events.',
    features: [
      'Six roles with role-based access: super admin, admin, sales manager, sales executive, doctor and patient',
      'Lead pipeline with sequential lead numbers, priorities, campaigns and follow-ups',
      'Consultation booking (in person, video or phone), prescriptions, lab reports and vitals',
      'My Health patient portal with visits, documents and vitals',
      'Email, WhatsApp and SMS notifications triggered by events such as bookings and new reports',
      'English, Hindi and Tamil interface, with configurable branding and theme',
      'Audit log, reports, and automated tests with pytest and Vitest',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind CSS'],
      Backend: ['Python', 'Django REST Framework', 'JWT', 'Celery'],
      Data: ['MySQL', 'PostgreSQL', 'Redis'],
      Cloud: ['Vercel', 'Docker'],
    },
    challenges: [],
    results: [],
    repo: gh('medical-project-backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('medical-project-frontend', 'master') }],
    demo: '', // TODO: live URL once the client approves a public demo
  },
  {
    slug: 'fleet-manager',
    highlight: true,
    title: 'Fleet Manager',
    subtitle: 'Legacy PHP system rebuilt with Node.js and React',
    category: 'Enterprise',
    status: 'Personal project',
    // TODO: check the problem wording matches the real operator and its legacy system.
    problem:
      'A transport operator ran its vehicles, drivers, fuel, maintenance and salaries on a legacy PHP application, for its own fleet and for sub-vendor vehicles. Vehicle document renewals were easy to miss.',
    solution:
      'A phased rewrite into a React single-page app and an Express API that keeps the original business rules while adding validation, security hardening, expiry alerts and reports. Every screen works for both the own fleet and sub-vendor fleets from one codebase.',
    features: [
      'Vehicles, drivers, routes, daily logs, fuel, attendance and maintenance',
      'Own-fleet and sub-vendor views from one codebase',
      'Alerts for vehicle fitness, insurance and pollution certificates expired or due within 30 days',
      'Salaries, commitments, vendor charges, and quotations exported to PDF',
      'Financial, monthly, fuel and maintenance reports',
      'Session sign-in with CSRF protection, rate limiting, Helmet and Zod validation',
      'Structured logging with request IDs, and a command palette for fast navigation',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'Redux Toolkit', 'React Bootstrap', 'React Hook Form', 'Vite'],
      Backend: ['Node.js', 'Express', 'Sequelize', 'Zod', 'Winston'],
      Data: ['MySQL'],
      Cloud: ['Vercel serverless'],
    },
    challenges: [
      'Porting business rules from the legacy PHP pages without changing their behaviour, delivered in phases so each part could be checked against the old system.',
    ],
    results: [],
    repo: gh('fleet-manager-backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('fleet-manager-ui', 'master') }],
    demo: '', // TODO: live URL of the React app
  },
  {
    slug: 'bcm-platform',
    title: 'Business Continuity Management Platform',
    subtitle: 'Risk, crisis and continuity planning',
    category: 'Enterprise',
    status: 'Personal project',
    problem:
      'Organizations must plan for disruptions, assess risks and reach staff quickly in a crisis. That work often lives in documents that are out of date when they’re needed.',
    solution:
      'A modular platform covering continuity plans, risk assessments, questionnaires, crisis management, automated call trees, exercises and reporting, with SSO and role-based access.',
    features: [
      'Continuity plan editor with review cycles',
      'Risk assessments and questionnaires',
      'Crisis management and automated call trees',
      'SSO, role-based access and scoped data',
      'Reports exported to Word, PDF and Excel',
      'Web push notifications',
      'End-to-end tests with Playwright',
    ],
    architecture: 'saas',
    stack: {
      Frontend: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'TanStack Table', 'Zod'],
      Backend: ['Python', 'Django REST Framework', 'Celery'],
      Data: ['MySQL', 'Redis'],
      Cloud: ['Sentry', 'Gunicorn'],
    },
    challenges: [],
    results: [],
    repo: gh('bcm_backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('bcm_frontend', 'master') }],
    demo: '',
  },
  {
    slug: 'fabric-data-platform',
    title: 'Enterprise Data Platform',
    subtitle: 'Microsoft Fabric Lakehouse pipelines at Firstsource',
    category: 'Enterprise',
    status: 'In production',
    problem:
      'Large volumes of structured and semi-structured business data were slow to process and hard for business teams to access.',
    solution:
      'PySpark pipelines on Microsoft Fabric Lakehouse with Azure Data Lake Storage for ingestion and archival, feeding interactive analytics dashboards.',
    features: [
      'Lakehouse ingestion and transformation pipelines',
      'Azure Data Lake Storage integration',
      'Interactive analytics dashboards',
    ],
    architecture: '',
    stack: {
      Data: ['PySpark', 'Microsoft Fabric Lakehouse', 'Azure Data Lake Storage'],
      Cloud: ['Azure'],
    },
    challenges: [],
    results: [
      'ETL processing time reduced by 40%.',
      'Data accessibility and business insight improved by 35%.',
    ],
    repo: '',
    demo: '',
  },
  {
    slug: 'investment-platform',
    title: 'Investment Platform',
    subtitle: 'Mobile app connecting investors with projects',
    category: 'Enterprise',
    status: 'Personal project',
    problem:
      'Investors and project owners need a trusted way to find each other, verify identity and follow deals.',
    solution:
      'A React Native app and Django API with KYC document verification, project discovery, deal and interest tracking, messaging and notifications.',
    features: [
      'KYC upload, review and verification flow',
      'Project discovery, details and analytics',
      'Deals and investor interests',
      'Messaging and push notifications',
      'Role-based screens with OTP sign-in',
    ],
    architecture: '',
    stack: {
      Frontend: ['React Native', 'Expo Router', 'NativeWind', 'Redux Toolkit', 'TanStack Query'],
      Backend: ['Python', 'Django REST Framework', 'Celery', 'Channels'],
      Data: ['MySQL', 'Redis'],
    },
    challenges: [],
    results: [],
    repo: gh('Investment_app_backend', 'master'),
    links: [{ label: 'Mobile app code', href: gh('Investment_app_mobileUI', 'master') }],
    demo: '',
  },
  {
    slug: 'pos-billing-system',
    title: 'POS Billing System',
    subtitle: 'Point-of-sale, inventory and invoicing',
    category: 'Enterprise',
    status: 'Personal project',
    problem:
      'Small retailers need billing, stock and customer records in one place, with an audit trail for every change.',
    solution:
      'A Django API with audited billing, inventory, customers and configuration, and a React TypeScript front end for invoices, products and reports.',
    features: [
      'Invoicing and billing',
      'Products and inventory',
      'Customer management',
      'Reports',
      'Audit log, throttling and role permissions',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'TypeScript', 'Vite', 'Zustand', 'Vitest'],
      Backend: ['Python', 'Django REST Framework'],
    },
    challenges: [],
    results: [],
    repo: gh('POS_BillingSystem_api', 'master'),
    links: [{ label: 'Frontend code', href: gh('POS_BillingSystemUI', 'master') }],
    demo: '',
  },
  {
    slug: 'arboreal-platform',
    title: 'Arboreal Platform',
    subtitle: 'Tree plantation and green-project management',
    category: 'Enterprise',
    status: 'Personal project',
    problem:
      'Tree plantation programmes involve land, nurseries, vendors, NGOs and volunteers, and must track every tree planted, transplanted and maintained.',
    solution:
      'A web platform to manage projects, land resources, tree species, plantation, census, transplantation and maintenance, together with the vendors, consultants, NGOs and volunteers involved.',
    features: [
      'Project, land and daily update tracking',
      'Tree plantation, census and transplantation records',
      'Species catalogue',
      'Vendors, nurseries, consultants, NGOs and volunteers',
      'Dashboard with charts',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'React Hook Form', 'Recharts'],
      Backend: ['Node.js', 'Express', 'Sequelize', 'Helmet'],
      Data: ['PostgreSQL'],
    },
    challenges: [],
    results: [],
    repo: gh('arboreal-platform-backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('arboreal-platform-frontend', 'master') }],
    demo: '',
  },
  {
    slug: 'hostel-management-system',
    title: 'Hostel Management System',
    subtitle: 'Rooms, students, fees and attendance',
    category: 'Enterprise',
    status: 'Personal project',
    problem:
      'Hostel administrators track rooms, fees, attendance and complaints across registers and spreadsheets.',
    solution:
      'A Django API and React dashboard for students, room allocation, fee collection, attendance and complaints, with QR codes sent to students by SMS.',
    features: [
      'Student and room management',
      'Fee tracking',
      'Attendance with QR codes',
      'Complaint handling',
      'Dashboard charts',
    ],
    architecture: '',
    stack: {
      Frontend: ['React', 'Material UI', 'Redux', 'Chart.js'],
      Backend: ['Python', 'Django REST Framework'],
      Data: ['PostgreSQL'],
    },
    challenges: [],
    results: [],
    repo: gh('hostelmangsystem_backend', 'master'),
    links: [{ label: 'Frontend code', href: gh('hostelmangsystem_frontend', 'master') }],
    demo: '',
  },
  {
    slug: 'spend-analytics-dashboard',
    title: 'Spend Analytics Dashboard',
    subtitle: 'Procurement spend analysis from Excel uploads',
    category: 'Enterprise',
    status: 'Personal project',
    problem:
      'Procurement teams receive spend data as spreadsheets and need to see spend by supplier, category, region and month.',
    solution:
      'Users upload Excel files; an Express API stores spend, supplier and taxonomy data in PostgreSQL, and a Next.js dashboard charts it with filters.',
    features: [
      'Excel upload and parsing',
      'Spend by supplier, category, contract, region and month',
      'Filterable charts',
    ],
    architecture: '',
    stack: {
      Frontend: ['Next.js', 'TypeScript', 'Recharts'],
      Backend: ['Node.js', 'Express', 'Sequelize'],
      Data: ['PostgreSQL'],
      Cloud: ['Vercel'],
    },
    challenges: [],
    results: [],
    repo: gh('vercel-dashboard', 'master'),
    links: [{ label: 'API code', href: gh('vercelapp-backend', 'master') }],
    demo: '',
  },

  // ------------------------------------------------------------ Web
  {
    slug: 'alumni-meet',
    title: 'Alumni Meet',
    subtitle: 'Alumni directory and event check-in',
    category: 'Web',
    status: 'Live',
    problem: 'Alumni associations need a directory, event registration and fast check-in on the day.',
    solution:
      'A Next.js app with an alumni directory, events and QR-code check-in, backed by a Django REST API on MongoDB.',
    features: ['Alumni directory and profiles', 'Event registration', 'QR code check-in', 'Admin screen'],
    architecture: '',
    stack: {
      Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Vitest'],
      Backend: ['Python', 'Django REST Framework'],
      Data: ['MongoDB'],
      Cloud: ['Docker', 'Vercel'],
    },
    challenges: [],
    results: [],
    repo: gh('alumni_meet'),
    links: [{ label: 'API code', href: gh('alumni_backend', 'master') }],
    demo: 'https://alumnimeet-black.vercel.app',
  },
  {
    slug: 'pyro-town-store',
    title: 'Pyro Town Store',
    subtitle: 'E-commerce store with admin panel',
    category: 'Web',
    status: 'Live',
    problem: 'A seasonal retailer needed an online price list, cart and order management they could update themselves.',
    solution:
      'A React storefront with cart, estimate and demo checkout that produces a PDF invoice, plus a protected admin panel to manage products, banners, content and orders through an Express API.',
    features: ['Product catalogue and cart', 'PDF invoice at checkout', 'Admin panel with JWT login', 'Editable banners and content'],
    architecture: '',
    stack: {
      Frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express'],
      Cloud: ['Vercel'],
    },
    challenges: [],
    results: [],
    repo: gh('crackers_app'),
    demo: 'https://crackersapp.vercel.app',
  },
  {
    slug: 'client-websites',
    title: 'Business Websites',
    subtitle: 'Company and product websites',
    category: 'Web',
    status: 'Live',
    problem: 'Small businesses need fast, responsive websites with working enquiry forms.',
    solution:
      'Responsive websites built with Next.js 15, React 19 and TypeScript. They include a manufacturer site with an Express forms API (reCAPTCHA, rate limiting, email delivery) and a loan-services site with an EMI calculator on Supabase.',
    features: [
      'Next.js App Router and React + Vite builds',
      'Content kept separate from layout',
      'Enquiry forms with spam protection and email delivery',
      'EMI calculator',
    ],
    architecture: '',
    stack: {
      Frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express', 'Supabase'],
      Cloud: ['Vercel'],
    },
    challenges: [],
    results: [],
    repo: '',
    links: [
      { label: 'Zevora AI Tech code', href: gh('zevoraaitech_frontend') },
      { label: 'Manufacturer site code', href: gh('comune_dhamo') },
      { label: 'Loanlyf code', href: gh('loanlyf', 'master') },
    ],
    demo: 'https://zevoraaitech-frontend.vercel.app',
  },
  {
    slug: 'estate-api',
    title: 'Real Estate API',
    subtitle: 'Spring Boot REST API',
    category: 'Web',
    status: 'Personal project',
    problem: 'A real estate application needed a backend for its listings and related data.',
    solution: 'A Spring Boot REST API with JPA entities, validation and MySQL persistence.',
    features: ['CRUD REST endpoints', 'Bean validation', 'JPA / Hibernate persistence'],
    architecture: '',
    stack: {
      Backend: ['Java', 'Spring Boot', 'Spring Data JPA'],
      Data: ['MySQL'],
    },
    challenges: [],
    results: [],
    repo: gh('Estate_Backend_API'),
    demo: '',
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);

// Stack layers in the order that matters most for each kind of project,
// so AI projects lead with their AI and backend tech rather than the UI framework.
const layerOrder = {
  'Generative AI': ['AI', 'Backend', 'Data', 'Frontend', 'Cloud'],
  Enterprise: ['Backend', 'Frontend', 'Data', 'Cloud', 'AI'],
  Web: ['Frontend', 'Backend', 'Data', 'Cloud', 'AI'],
};

export const orderedTech = (project, limit = Infinity) =>
  (layerOrder[project.category] || Object.keys(project.stack))
    .flatMap((layer) => project.stack[layer] || [])
    .slice(0, limit);
