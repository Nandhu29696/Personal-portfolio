import { Link, useParams } from 'react-router';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ContactCTA from '../components/ContactCTA';
import { StatusBadge } from '../components/ProjectCard';
import Reveal from '../components/ui/Reveal';
import Tag from '../components/ui/Tag';
import { ArrowRight, ArrowUpRight, Github } from '../components/ui/Icons';
import { getArchitecture } from '../data/architectures';
import { getProject } from '../data/projects';
import NotFound from './NotFound';

const Block = ({ title, children }) => (
  <Reveal className="grid gap-4 border-t border-zinc-200 py-10 md:grid-cols-[1fr_3fr] dark:border-zinc-800">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="text-zinc-600 dark:text-zinc-400">{children}</div>
  </Reveal>
);

const List = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => <li key={item} className="flex gap-3"><span className="text-maple-500">—</span>{item}</li>)}
  </ul>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const architecture = getArchitecture(project.architecture);
  const stackGroups = Object.entries(project.stack);

  return (
    <>
      <article className="page pt-16">
        <Reveal load>
          <Link to="/projects" className="text-sm text-zinc-500 hover:text-zinc-900 print:hidden dark:text-zinc-400 dark:hover:text-white">← All projects</Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{project.category}</span>
            <StatusBadge project={project} />
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>
          {(project.repo || project.demo || project.links?.length > 0) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">Live site <ArrowUpRight /></a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="btn-secondary"><Github /> Source code</a>
              )}
              {project.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn-secondary"><Github /> {link.label}</a>
              ))}
            </div>
          )}
        </Reveal>

        {project.image && (
          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <img src={project.image} alt={`${project.title} screenshot`} className="w-full" />
          </Reveal>
        )}

        <div className="mt-12">
          {project.problem && <Block title="Business problem"><p className="leading-relaxed">{project.problem}</p></Block>}
          {project.solution && <Block title="Solution"><p className="leading-relaxed">{project.solution}</p></Block>}
          {project.features.length > 0 && <Block title="Key features"><List items={project.features} /></Block>}
          {architecture && (
            <Block title="Architecture">
              <div className="card p-5 sm:p-6"><ArchitectureDiagram architecture={architecture} /></div>
              <Link to={`/architecture#${architecture.id}`} className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-900 hover:text-maple-600 dark:text-white">
                Design decisions for this architecture <ArrowRight />
              </Link>
            </Block>
          )}
          {stackGroups.length > 0 && (
            <Block title="Technology stack">
              <dl className="grid gap-4 sm:grid-cols-2">
                {stackGroups.map(([group, items]) => (
                  <div key={group}>
                    <dt className="mb-2 text-sm font-medium text-zinc-900 dark:text-white">{group}</dt>
                    <dd className="flex flex-wrap gap-2">{items.map((t) => <Tag key={t}>{t}</Tag>)}</dd>
                  </div>
                ))}
              </dl>
            </Block>
          )}
          {project.challenges.length > 0 && <Block title="Challenges"><List items={project.challenges} /></Block>}
          {project.results.length > 0 && <Block title="Results"><List items={project.results} /></Block>}
        </div>
      </article>
      <ContactCTA />
    </>
  );
};

export default ProjectDetail;
