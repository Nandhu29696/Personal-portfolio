# Second Portfolio Architecture

## Purpose

Build a second professional portfolio using the current portfolio as the technical and visual reference, while giving the new site its own identity, content, and primary accent colour.

The site should communicate the person's value within the first 10 seconds:

1. Who they are
2. What they build
3. Which problems they solve
4. What evidence proves their experience
5. How to contact them

This is a portfolio and case-study site, not a generic landing page. The first screen should be the usable portfolio experience, with a clear introduction and direct routes to work, experience, and contact.

## Design direction

Use the existing portfolio's calm, technical visual language as the baseline:

- Neutral zinc or charcoal surfaces with strong contrast
- One restrained accent colour for links, highlights, active states, and key metrics
- Expressive self-hosted display font for headings
- Monospace font for labels, technologies, metadata, and architecture annotations
- Compact navigation with a clear mobile menu
- Structured case-study cards instead of decorative marketing cards
- Light, dark, and system theme modes
- Subtle page-load and scroll-reveal motion
- Reduced-motion and print-friendly fallbacks
- No stock-photo-heavy hero section or oversized marketing copy

### Theme tokens

Define all visual decisions in one place so the second portfolio can be rebranded without changing component markup:

| Token | Purpose | Example |
| --- | --- | --- |
| `--surface` | Main page background | zinc or warm gray |
| `--surface-raised` | Cards and panels | white or charcoal |
| `--text` | Primary text | near-black or white |
| `--text-muted` | Supporting text | gray scale |
| `--accent` | Links and emphasis | teal, amber, red, or green |
| `--border` | Dividers and card borders | low-contrast gray |
| `--max-page` | Content width | 72rem |

The second site should use a different accent colour from the current maple red while preserving the same restrained one-accent rule.

## Recommended positioning

Replace these placeholders before implementation:

- **Name:** `[Person name]`
- **Headline:** `[Primary role]`
- **Audience:** `[Recruiters, founders, clients, hiring managers, or collaborators]`
- **Location or market:** `[City, country, or remote region]`
- **Primary promise:** `[What the person reliably helps teams achieve]`
- **Main proof:** `[Projects, measurable outcomes, publications, products, or clients]`
- **Primary call to action:** `[View selected work / Start a conversation / Download resume]`

The headline should describe the person's actual work. Avoid broad claims such as “passionate developer” unless they are supported by specific examples below the fold.

## Site architecture

```text
/                       Home
├── Hero                name, role, positioning statement, primary CTA
├── Selected work       two to four strongest case studies
├── Capability summary  areas of expertise and tools
├── Proof               metrics, testimonials, awards, or outcomes
├── Experience preview  latest roles or milestones
└── Contact CTA         direct next step

/projects               Project index with category filters
└── /projects/:slug     Case study detail
    ├── Context and problem
    ├── Role and responsibilities
    ├── Solution overview
    ├── Architecture or workflow
    ├── Technology stack
    ├── Key decisions and trade-offs
    ├── Results and lessons
    └── Repository or live demo links

/architecture           Architecture gallery or technical deep dives
/experience             Full experience, education, awards, and timeline
/about                  Optional personal approach, values, and working style
/blog                   Optional articles; hide from navigation until content exists
/contact                Contact form, email, social links, and availability
*                       404 page
```

Only include routes that have meaningful content. A smaller portfolio with three excellent case studies is stronger than a large site with empty pages.

## Content architecture

Keep content in data modules instead of embedding long text inside page components.

```text
src/
├── data/
│   ├── profile.js          identity, headline, summary, social links
│   ├── projects.js         case studies and project metadata
│   ├── architectures.js    diagrams, flows, and technical decisions
│   ├── experience.js       roles, outcomes, education, recognition
│   ├── testimonials.js     optional quotes and attribution
│   └── blog.js             optional articles
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Architecture.jsx
│   ├── Experience.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── components/
│   ├── layout/
│   ├── ui/
│   ├── ProjectCard.jsx
│   ├── ArchitectureDiagram.jsx
│   ├── ContactForm.jsx
│   └── ProofBlock.jsx
├── hooks/
│   └── useTheme.js
├── seo.js
├── App.jsx
├── AppRoutes.jsx
└── index.css
```

## Data contracts

### Profile

```js
{
  name,
  shortName,
  headline,
  tagline,
  summary,
  focus: [],
  location,
  availability,
  email,
  resumeUrl,
  social: []
}
```

### Project

```js
{
  slug,
  title,
  subtitle,
  category,
  featured,
  status,
  year,
  role,
  problem,
  solution,
  features: [],
  architecture,
  stack: {
    frontend: [],
    backend: [],
    data: [],
    cloud: []
  },
  decisions: [],
  challenges: [],
  results: [],
  image,
  repo,
  demo
}
```

Every published case study should include a real problem, the person's contribution, and an outcome. Technologies should support the story rather than become the story.

### Architecture diagram

Represent diagrams as structured data so they stay responsive and accessible:

```js
{
  id,
  title,
  summary,
  lanes: [
    {
      label,
      steps: [
        { title, detail, kind, key }
      ]
    }
  ],
  decisions: []
}
```

Render diagrams as semantic sections that stack vertically on small screens. Do not depend on a diagram image for essential information.

## Technical stack

| Concern | Recommendation |
| --- | --- |
| UI framework | React 19 |
| Routing | React Router 7 |
| Build tool | Vite |
| Styling | Tailwind CSS with shared design tokens |
| Tests | Vitest and Testing Library |
| Rendering | Static prerendering for every public route |
| Fonts | Fontsource or another self-hosted font package |
| Contact | Web3Forms, Formspree, or a small serverless endpoint |
| Analytics | Privacy-conscious analytics such as Vercel Analytics |
| Hosting | Vercel or another static hosting provider |

Use the same browser and server route table. The browser should use `BrowserRouter`; the build-time renderer should use `StaticRouter`.

## SEO and static rendering

Each public route needs:

- A unique title
- A unique meta description
- A canonical URL
- Open Graph title, description, image, and URL
- Twitter card metadata
- A meaningful `lang` attribute
- Sitemap coverage
- A real `404.html` response for unknown routes

Keep the deployed site URL in one environment-aware configuration value. Do not hard-code a temporary preview domain into multiple files.

The production build should:

1. Build the browser bundle.
2. Build the server entry.
3. Render every route in a route list.
4. Write `build/<route>/index.html` files.
5. Generate `sitemap.xml`.
6. Generate `404.html`.
7. Remove temporary server build output.

When a route is added, update both the router and the prerender route list.

## Accessibility requirements

- Provide a keyboard-accessible skip link.
- Use semantic headings in a logical order.
- Give every form field a visible label.
- Connect validation text with `aria-describedby`.
- Announce form success and failure with a live region.
- Use WAI-ARIA tabs only where tabs are the right interaction model.
- Keep focus visible in both themes.
- Support keyboard navigation for the mobile menu.
- Close the mobile menu with Escape and return focus to its trigger.
- Respect `prefers-reduced-motion`.
- Check color contrast against WCAG AA targets.
- Make all project links and external links descriptive.

## Contact flow

1. Visitor enters name, email, optional company, opportunity type, and message.
2. Client-side validation reports errors beside the relevant fields.
3. The form disables submission while sending.
4. The service returns a success or failure result.
5. A live status message confirms the outcome.
6. The page provides a direct email fallback if the form service is unavailable.

The public form key is not a secret when using a provider designed for browser submissions. Rate limiting, spam filtering, and provider quotas still need to be reviewed before launch.

## Testing strategy

### Unit and component tests

Cover:

- Main route headings
- Unknown route behavior
- Project filtering
- Project detail fallback
- Theme preference cycling
- Architecture tab selection and keyboard controls
- Contact validation
- Successful contact submission
- Contact service failure
- Disabled submit state
- Metadata generation for regular, project, and not-found routes

### Build checks

```text
npm test
npm run build
npm run preview
```

The build check must confirm that every public route has an `index.html`, the sitemap is generated, and the 404 page is present.

### Manual browser checks

Check at minimum:

- Desktop and mobile navigation
- Light, dark, and system themes
- Keyboard-only navigation
- Reduced-motion mode
- Contact form success and failure states
- Printed case study output
- Social preview image and metadata
- Direct loading of nested project URLs

## Suggested implementation phases

### Phase 1: Foundation

- Copy the route and component structure from the existing portfolio.
- Rename the identity and create new theme tokens.
- Configure fonts, Tailwind, Vite, and test setup.
- Add the base layout, navigation, footer, and theme switcher.

### Phase 2: Content model

- Create the profile, project, experience, and architecture data modules.
- Add at least three complete case studies.
- Add real outcomes, links, screenshots, and contact details.

### Phase 3: Pages

- Build the home page first.
- Add project filtering and project detail pages.
- Add experience and architecture pages.
- Add contact and not-found pages.

### Phase 4: Quality

- Add route, component, form, and metadata tests.
- Add static prerendering and verify nested URLs.
- Check responsive behavior and accessibility.
- Audit the production dependency tree.

### Phase 5: Launch

- Replace preview URLs with the production domain.
- Add the final social preview image and favicon.
- Verify analytics and contact delivery.
- Deploy the static build.
- Test the deployed site from a fresh browser session.

## Definition of done

- [ ] The new portfolio has a distinct name, positioning, accent colour, and content.
- [ ] The first screen communicates the role and strongest proof clearly.
- [ ] At least three case studies explain problem, contribution, solution, and result.
- [ ] All navigation routes work on direct load and client-side navigation.
- [ ] Every public route has unique SEO metadata.
- [ ] Light, dark, and system themes work without a visible flash.
- [ ] The site is usable with keyboard navigation and reduced motion.
- [ ] Contact delivery and fallback email are verified.
- [ ] Tests pass and the production build succeeds.
- [ ] The deployed site has a valid sitemap, robots file, favicon, and social preview.

## Reuse boundary

Reuse the existing portfolio's technical patterns:

- Data-driven page content
- Shared layout and UI primitives
- Static prerendering
- Theme handling
- Architecture diagrams as data
- Testing conventions

Rewrite these parts for the second portfolio:

- Identity and positioning
- Accent colour and visual tokens
- Project content and screenshots
- Experience and proof points
- SEO copy and social preview image
- Contact details and deployment domain

The result should feel like a related portfolio system, not a duplicate website with the name changed.
