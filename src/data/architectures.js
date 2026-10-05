// Reference architectures rendered by <ArchitectureDiagram />.
// Each lane is drawn as a left-to-right flow (top-to-bottom on small screens).

export const architectures = [
  {
    id: 'email-assistant',
    title: 'AI Email Assistant',
    projectSlug: 'ai-email-assistant',
    summary:
      'The pipeline every email goes through in one of my projects: analysed by an LLM, checked, its documents turned into a single PDF, and answered automatically.',
    lanes: [
      {
        name: 'Ingest & analyze',
        steps: [
          { label: 'Gmail / Outlook', detail: 'OAuth 2.0 mailbox sync' },
          { label: 'Preprocess', detail: 'Parse HTML, drop auto-replies' },
          { label: 'Analyze', detail: 'Sentiment, emotion, category, priority' },
          { key: true, label: 'LLM', detail: 'Summary and reply draft' },
        ],
      },
      {
        name: 'Document intake',
        steps: [
          { label: 'Sender checks', detail: 'Domain allow-list, SPF / DKIM / DMARC' },
          { label: 'Validate files', detail: 'Type, size, password or encryption' },
          { label: 'Convert & merge', detail: 'DOC / TIFF to PDF, one merged PDF' },
          { label: 'Store & reply', detail: 'Azure Blob, status email to sender' },
        ],
      },
    ],
    decisions: [
      'Sentiment scoring uses VADER, a fast rule-based model, so the LLM is reserved for summaries and replies.',
      'Every outcome is explicit: rejected emails get a reply that lists the problem files, while system failures end as reprocessable instead of blaming the sender.',
      'Slow work (provider APIs, LibreOffice conversion, PDF merging) runs in worker threads, so the API stays responsive.',
    ],
  },
  {
    id: 'mcp-agent',
    title: 'MCP Tool-Calling Agent',
    projectSlug: 'mcp-healthcare-agent',
    summary:
      'From my healthcare appointment agent: the LLM only chooses a tool and its arguments, and typed, deterministic code does the work.',
    lanes: [
      {
        name: 'Flow',
        steps: [
          { label: 'User request', detail: '"Book a cardiologist for Ravi tomorrow"' },
          { key: true, label: 'Tool selector', detail: 'LLM returns tool name + JSON arguments' },
          { label: 'Engine', detail: 'Validates, resolves dates and names' },
          { label: 'Tool registry', detail: 'searchPatient, getDoctorAvailability, bookAppointment' },
        ],
      },
    ],
    decisions: [
      'The model never writes to the database directly; it can only call registered tools.',
      'LLM output is parsed defensively as JSON, with rule-based fallbacks for dates and specializations.',
      'Tools map to plain Sequelize queries, so each one can be unit-tested without the LLM.',
    ],
  },
  {
    id: 'rag',
    title: 'Retrieval-Augmented Generation',
    summary:
      'Grounds LLM answers in an organization’s own documents, with citations and access control so answers can be trusted and audited.',
    lanes: [
      {
        name: 'Ingestion',
        steps: [
          { label: 'Sources', detail: 'SharePoint, PDFs, databases' },
          { label: 'Parse & chunk', detail: 'Layout-aware splitting' },
          { label: 'Embed', detail: 'Azure OpenAI embeddings' },
          { label: 'Index', detail: 'Vector + keyword index with ACL metadata' },
        ],
      },
      {
        name: 'Query',
        steps: [
          { label: 'User question', detail: 'React chat UI' },
          { key: true, label: 'Hybrid retrieval', detail: 'Vector + BM25, filtered by user permissions' },
          { label: 'Re-rank', detail: 'Top-k passages' },
          { label: 'Generate', detail: 'LLM answer with source citations' },
        ],
      },
    ],
    decisions: [
      'Security trimming happens at retrieval time, so the model never sees documents the user cannot open.',
      'Hybrid search handles exact terms such as product codes that pure vector search misses.',
      'Every answer returns its source passages, so users can verify it.',
    ],
  },
  {
    id: 'agents',
    title: 'AI Agent Architecture',
    summary:
      'An orchestrator plans multi-step tasks and delegates to specialised agents that call tools and APIs, with a human approval step for actions.',
    lanes: [
      {
        name: 'Orchestration',
        steps: [
          { label: 'Request', detail: 'User goal or event' },
          { key: true, label: 'Planner', detail: 'LangGraph state machine' },
          { label: 'Specialist agents', detail: 'Research, data, action' },
          { label: 'Tools', detail: 'APIs, SQL, search, email' },
        ],
      },
      {
        name: 'Control',
        steps: [
          { label: 'Memory', detail: 'Conversation + task state' },
          { label: 'Guardrails', detail: 'Input/output checks, allow-listed tools' },
          { label: 'Human approval', detail: 'Required before side effects' },
          { label: 'Tracing', detail: 'Step-level logs and cost' },
        ],
      },
    ],
    decisions: [
      'Explicit graph state instead of free-running loops keeps agent behaviour predictable and testable.',
      'Tools are allow-listed and typed; write actions need human approval.',
      'Every step is traced for debugging, evaluation and cost control.',
    ],
  },
  {
    id: 'azure-ai',
    title: 'Azure AI Platform',
    summary:
      'An enterprise landing zone for GenAI workloads on Azure: private networking, managed identity and centralised model access.',
    lanes: [
      {
        name: 'Request path',
        steps: [
          { label: 'Client', detail: 'React SPA, Entra ID sign-in' },
          { label: 'API Management', detail: 'Auth, quotas, routing' },
          { label: 'App service', detail: 'Python / Node.js on Container Apps' },
          { key: true, label: 'Azure OpenAI', detail: 'Private endpoint' },
        ],
      },
      {
        name: 'Platform',
        steps: [
          { label: 'AI Search', detail: 'Vector index' },
          { label: 'Storage', detail: 'Blob / Data Lake' },
          { label: 'Key Vault', detail: 'Managed identity, no secrets in code' },
          { label: 'Monitor', detail: 'App Insights, token usage' },
        ],
      },
    ],
    decisions: [
      'Managed identity everywhere, so no API keys in application configuration.',
      'API Management in front of the models enforces per-team quotas and logs usage.',
      'Private endpoints keep model and data traffic off the public internet.',
    ],
  },
  {
    id: 'event-driven',
    title: 'Event-Driven Architecture',
    summary:
      'Decoupled services communicate through events, so each part scales and fails independently, and long AI jobs run asynchronously.',
    lanes: [
      {
        name: 'Flow',
        steps: [
          { label: 'Producers', detail: 'APIs, uploads, schedulers' },
          { key: true, label: 'Event bus', detail: 'Service Bus / Event Grid' },
          { label: 'Consumers', detail: 'Workers: ingest, enrich, notify' },
          { label: 'Stores', detail: 'PostgreSQL, Data Lake, cache' },
        ],
      },
    ],
    decisions: [
      'Idempotent consumers and dead-letter queues make retries safe.',
      'Long-running jobs such as document embedding never block user requests.',
      'Events are versioned so producers and consumers deploy independently.',
    ],
  },
  {
    id: 'saas',
    title: 'Multi-Tenant SaaS Platform',
    summary:
      'A shared platform serving many customer organizations, with tenant isolation, role-based access and automated delivery.',
    lanes: [
      {
        name: 'Application',
        steps: [
          { label: 'Web app', detail: 'React + TypeScript' },
          { key: true, label: 'API gateway', detail: 'Tenant resolution, auth' },
          { label: 'Services', detail: 'Billing, users, core domain' },
          { label: 'Data', detail: 'PostgreSQL with row-level security' },
        ],
      },
      {
        name: 'Delivery',
        steps: [
          { label: 'GitHub', detail: 'Pull requests, reviews' },
          { label: 'CI', detail: 'Tests, lint, image build' },
          { label: 'CD', detail: 'Staged rollout to Kubernetes' },
          { label: 'Observe', detail: 'Metrics, logs, alerts' },
        ],
      },
    ],
    decisions: [
      'Row-level security enforces tenant isolation in the database, not only in application code.',
      'Infrastructure and deployments are automated end to end through CI/CD.',
      'Per-tenant metrics make noisy neighbours and usage-based billing visible.',
    ],
  },
];

export const getArchitecture = (id) => architectures.find((a) => a.id === id);
