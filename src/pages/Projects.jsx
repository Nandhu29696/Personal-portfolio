import { useState } from 'react';
import ContactCTA from '../components/ContactCTA';
import ProjectCard, { ProjectRow } from '../components/ProjectCard';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { projects } from '../data/projects';

const categories = ['All', ...new Set(projects.map((p) => p.category))];
const countFor = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length);

const Projects = () => {
  const [active, setActive] = useState('All');
  const featured = projects.filter((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);
  const filtered = projects.filter((p) => p.category === active);

  return (
    <>
      <section className="page pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Projects"
          title="Case studies"
          description="Generative AI projects and the enterprise platforms I have delivered. Each case study covers the business problem, the solution, the architecture and the results."
        />
        <div className="mb-10 flex flex-wrap gap-2 print:hidden" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${active === c
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                : 'border border-zinc-200 text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400'}`}
            >
              {c} <span className={active === c ? 'opacity-70' : 'text-zinc-500 dark:text-zinc-500'}>· {countFor(c)}</span>
            </button>
          ))}
        </div>

        {active === 'All' ? (
          <>
            <h2 className="sr-only">Featured projects</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>

            <Reveal as="h2" className="mb-4 mt-16 text-xl font-semibold tracking-tight">More projects</Reveal>
            <Reveal as="ul" className="card divide-y divide-zinc-200 overflow-hidden dark:divide-zinc-800">
              {rest.map((p) => <ProjectRow key={p.slug} project={p} />)}
            </Reveal>
          </>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        )}
      </section>
      <ContactCTA />
    </>
  );
};

export default Projects;
