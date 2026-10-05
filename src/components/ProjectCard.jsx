import { Link } from 'react-router';
import { orderedTech } from '../data/projects';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { ArrowUpRight, Check } from './ui/Icons';

const LAYERS = ['Frontend', 'Backend', 'AI', 'Data', 'Cloud'];

const hasCaseStudy = (project) => Boolean(project.problem || project.solution);

// Where a card leads: its case study, otherwise its code or live site, otherwise nowhere.
const destination = (project) => {
  if (hasCaseStudy(project)) return { to: `/projects/${project.slug}`, label: 'Read case study' };
  const href = project.repo || project.links?.[0]?.href || project.demo;
  return href ? { href, label: project.demo === href ? 'Visit site' : 'View code' } : null;
};

// "Live" or "In production" says something; "Personal project" on every card doesn't.
export const StatusBadge = ({ project }) => {
  if (project.demo) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Live
      </span>
    );
  }
  if (project.status === 'In production') {
    return <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">In production</span>;
  }
  return null;
};

// Which layers of the stack the project covers: a quick visual of full-stack reach.
const StackStrip = ({ project }) => {
  const covered = LAYERS.filter((layer) => project.stack[layer]?.length);
  return (
    <div className="flex gap-1" aria-label={`Covers: ${covered.join(', ')}`} role="img">
      {LAYERS.map((layer) => {
        const on = covered.includes(layer);
        return (
          <span
            key={layer}
            aria-hidden="true"
            className={`flex-1 rounded-md px-1.5 py-1 text-center font-mono text-[10px] uppercase tracking-wide ${on
              ? layer === 'AI'
                ? 'bg-maple-600 text-white'
                : 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
              : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'}`}
          >
            {layer}
          </span>
        );
      })}
    </div>
  );
};

const CardLink = ({ target, className, children }) => {
  if (!target) return <div className={className}>{children}</div>;
  if (target.to) return <Link to={target.to} className={className}>{children}</Link>;
  return <a href={target.href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
};

const ProjectCard = ({ project }) => {
  const target = destination(project);
  const result = project.results[0];

  return (
    <Reveal className="h-full">
      <CardLink
        target={target}
        className={`card group flex h-full flex-col p-6 transition-colors ${target ? 'hover:border-zinc-400 dark:hover:border-zinc-600' : ''}`}
      >
        <StackStrip project={project} />
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="eyebrow">{project.category}</span>
          <StatusBadge project={project} />
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>
        {project.problem && (
          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.problem}</p>
        )}
        {result && (
          <p className="mt-4 flex gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" /> {result}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {orderedTech(project, 4).map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        {target && (
          <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-zinc-900 group-hover:text-maple-600 dark:text-white dark:group-hover:text-maple-400">
            {target.label} <ArrowUpRight />
          </span>
        )}
      </CardLink>
    </Reveal>
  );
};

// Compact one-line version for the "More projects" list.
export const ProjectRow = ({ project }) => {
  const target = destination(project);
  return (
    <li>
      <CardLink
        target={target}
        className="group grid gap-2 px-5 py-4 transition-colors hover:bg-zinc-50 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 dark:hover:bg-zinc-900"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold group-hover:text-maple-600 dark:group-hover:text-maple-400">{project.title}</h3>
            <StatusBadge project={project} />
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {orderedTech(project, 3).map((t) => <Tag key={t}>{t}</Tag>)}
          {target && <ArrowUpRight className="ml-1 hidden h-4 w-4 text-zinc-500 sm:block" />}
        </div>
      </CardLink>
    </li>
  );
};

export default ProjectCard;
