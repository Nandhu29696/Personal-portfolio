// Page titles, descriptions and preview images. Used by the pre-renderer to write each page's
// <head>, and in the browser to update the tab title on client-side navigation.
import { getProject, projects } from './data/projects';
import { posts } from './data/blog';

export const SITE_URL = 'https://my-portfolio-henna-tau-11.vercel.app';
const NAME = 'Nandhakumar M';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const pages = {
  '/': {
    title: `${NAME} | Full Stack AI Engineer`,
    description:
      'Nandhakumar M, Full Stack AI Engineer with 5+ years building enterprise applications and Generative AI solutions with React, Python, Node.js, Azure and AWS. Open to roles in Canada.',
  },
  '/projects': {
    title: `Projects | ${NAME}`,
    description:
      'Case studies: LLM email triage, AI agents with the Model Context Protocol, OCR document extraction, and enterprise platforms for healthcare, business continuity and analytics.',
  },
  '/architecture': {
    title: `Architecture | ${NAME}`,
    description:
      'System designs for AI and cloud-native applications: LLM pipelines, tool-calling agents, RAG, Azure AI, event-driven and multi-tenant SaaS architectures.',
  },
  '/experience': {
    title: `Experience | ${NAME}`,
    description:
      'Professional experience at Firstsource Solutions, Invicious Technologies and Smartway Industrial Automation, with measured business impact.',
  },
  '/blog': {
    title: `Blog | ${NAME}`,
    description: 'Notes on Generative AI, RAG, AI agents, Azure AI and full-stack engineering.',
  },
  '/contact': {
    title: `Contact | ${NAME}`,
    description:
      'Get in touch about full-stack and Generative AI engineering roles in Canada or remote with North American teams.',
  },
};

const notFound = {
  title: `Page not found | ${NAME}`,
  description: 'The page you’re looking for doesn’t exist or has moved.',
  noindex: true,
};

export function getMeta(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  let meta = pages[path];

  const match = path.match(/^\/projects\/([^/]+)$/);
  if (!meta && match) {
    const project = getProject(match[1]);
    if (project) {
      meta = {
        title: `${project.title} | ${NAME}`,
        description: `${project.subtitle}. ${project.solution || project.problem}`.slice(0, 300),
        ...(project.image && { image: `${SITE_URL}${project.image}` }),
      };
    }
  }

  meta = meta || notFound;
  return { image: DEFAULT_IMAGE, url: `${SITE_URL}${path === '/' ? '/' : path}`, ...meta };
}

// Every URL the pre-renderer writes to disk.
export const prerenderRoutes = [
  ...Object.keys(pages).filter((path) => path !== '/blog' || posts.length > 0),
  ...projects.filter((p) => p.problem || p.solution).map((p) => `/projects/${p.slug}`),
];
