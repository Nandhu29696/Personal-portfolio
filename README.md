# Nandhakumar M — Portfolio

Personal portfolio for Nandhakumar M, Full Stack AI Engineer, aimed at roles in Canada.

Live site: https://my-portfolio-henna-tau-11.vercel.app/

## Run locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # Vitest
npm run build    # pre-rendered static site in build/
npm run preview  # serve the production build
```

## Editing content

All text lives in `src/data/`:

| File                  | What it holds                                                    |
| --------------------- | ---------------------------------------------------------------- |
| `profile.js`          | Headline, summary, Canada facts, metrics, skills, certifications |
| `projects.js`         | Project case studies                                             |
| `architectures.js`    | Architecture diagrams and design decisions                       |
| `experience.js`       | Work history, business impact, education                         |
| `blog.js`             | Blog posts (the Blog link appears once a post exists)            |

Page titles and link-preview descriptions are in `src/seo.js`.

## Resume and cover letter

`scripts/resume/content.json` is the single source for the PDF resume, the Word resume and the cover letter
template. They follow the [Job Bank resume guidance](https://www.jobbank.gc.ca/findajob/resources/write-good-resume).

```bash
pip install reportlab python-docx
python scripts/resume/build_resume.py
```

See [career/README.md](career/README.md) for how to tailor them for each application.

## Documentation

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the positioning strategy, site structure and technical design.
