import { Link } from 'react-router';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ContactCTA from '../components/ContactCTA';
import PromotedBadge from '../components/ui/PromotedBadge';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { ArrowRight, ArrowUpRight, Download, MapPin } from '../components/ui/Icons';
import { getArchitecture } from '../data/architectures';
import { experience } from '../data/experience';
import { featuredProject, orderedTech } from '../data/projects';
import {
  canadaFacts, certifications, expertise, metrics, profile, recognition, targetRoles,
} from '../data/profile';

const Hero = () => (
  <section className="page pb-20 pt-16 sm:pt-24">
    <Reveal load>
      <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maple-500 opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-maple-500" />
        </span>
        {canadaFacts.availability}
      </span>
    </Reveal>
    <Reveal load delay={0.05}>
      <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
        {profile.name}
        <span className="block text-zinc-500 dark:text-zinc-400">{profile.headline}</span>
      </h1>
    </Reveal>
    <Reveal load delay={0.1}>
      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-maple-700 dark:text-maple-400" aria-label="Focus areas">
        {profile.focus.map((item, i) => (
          <li key={item} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">/</span>}
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>
    </Reveal>
    <Reveal load delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link to="/projects" className="btn-primary">View projects <ArrowRight /></Link>
      <Link to="/contact" className="btn-secondary">Contact me</Link>
      <a href={profile.resumeUrl} download className="btn-secondary">Download resume <Download /></a>
    </Reveal>
    <Reveal load delay={0.2} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
      <span className="flex items-center gap-1.5"><MapPin /> {canadaFacts.location}</span>
      {canadaFacts.workAuthorization && <span>{canadaFacts.workAuthorization}</span>}
    </Reveal>
  </section>
);

const Summary = () => (
  <section className="page grid gap-10 border-t border-zinc-200 py-20 lg:grid-cols-[1fr_2fr] dark:border-zinc-800">
    <Reveal>
      <p className="eyebrow">Professional summary</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">Enterprise engineering, applied to AI</h2>
    </Reveal>
    <Reveal>
      {profile.summary.map((p) => (
        <p key={p} className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{p}</p>
      ))}
      <p className="mb-3 mt-6 text-sm font-medium text-zinc-900 dark:text-white">Roles I’m targeting</p>
      <div className="flex flex-wrap gap-2">
        {targetRoles.map((role) => <Tag key={role} tone="accent">{role}</Tag>)}
      </div>
    </Reveal>
  </section>
);

// The grid reveals as one block: the 1px gaps are the grid's background colour, so hiding
// cells individually would flash grey blocks.
const Metrics = () => (
  <Reveal as="section" className="page">
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 lg:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-800">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse justify-end bg-white p-6 sm:p-8 dark:bg-zinc-950">
          <dt className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{m.label}</dt>
          <dd className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">{m.value}</dd>
        </div>
      ))}
    </dl>
  </Reveal>
);

const FeaturedProject = () => {
  const p = featuredProject;
  if (!p) return null;
  const architecture = getArchitecture(p.architecture);

  return (
    <section className="page mt-24">
      <SectionHeading
        eyebrow="Featured AI project"
        title={p.title}
        description={p.solution}
        action={
          <Link to={`/projects/${p.slug}`} className="btn-secondary shrink-0">
            Full case study <ArrowUpRight />
          </Link>
        }
      />
      <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
        {architecture && (
          <Reveal className="card p-6 sm:p-8">
            <ArchitectureDiagram architecture={architecture} />
            <ul className="mt-8 space-y-2 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              {architecture.decisions.map((d) => (
                <li key={d} className="flex gap-3"><span className="text-maple-500">—</span>{d}</li>
              ))}
            </ul>
          </Reveal>
        )}
        <Reveal className="card flex flex-col gap-6 p-6 sm:p-8">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.problem}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-white">Key features</p>
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-maple-500">—</span>{f}</li>)}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {orderedTech(p).map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// The first group (AI & GenAI, the longest) spans two columns so five groups fill the grid evenly.
const Expertise = () => (
  <section className="page mt-24">
    <SectionHeading eyebrow="Technical expertise" title="What I work with" />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {expertise.map((group, i) => (
        <Reveal key={group.group} className={`card p-6 ${i === 0 ? 'sm:col-span-2' : ''}`}>
          <h3 className="text-base font-semibold">{group.group}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => <Tag key={item}>{item}</Tag>)}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const Credentials = () => {
  const items = [
    ...certifications.map((c) => ({ ...c, kind: c.kind || 'Certification' })),
    ...recognition.map((r) => ({ ...r, title: r.name, kind: 'Award' })),
  ];

  return (
    <section className="page mt-24">
      <SectionHeading
        eyebrow={certifications.length ? 'Certifications & recognition' : 'Recognition'}
        title="Credentials"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Reveal key={item.title} className="card p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">{item.kind} · {item.issuer}</p>
            <h3 className="mt-2 text-lg font-semibold">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-maple-600">
                  {item.title} <ArrowUpRight />
                </a>
              ) : item.title}
            </h3>
            {(item.code || item.validity) && (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {[item.code, item.validity && `Valid ${item.validity}`].filter(Boolean).join(' · ')}
              </p>
            )}
            {item.detail && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>}
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const ExperienceHighlights = () => (
  <section className="page mt-24">
    <SectionHeading
      eyebrow="Experience"
      title="Recent roles"
      action={<Link to="/experience" className="btn-secondary shrink-0">Full experience <ArrowUpRight /></Link>}
    />
    <ol className="card divide-y divide-zinc-200 dark:divide-zinc-800">
      {experience.filter((job) => job.type !== 'break').slice(0, 3).map((job) => (
        <li key={job.role + job.period} className="grid gap-2 p-6 sm:grid-cols-[1fr_auto] sm:gap-6">
          <div>
            <h3 className="flex flex-wrap items-center gap-2 font-semibold">
              {job.role} {job.promoted && <PromotedBadge />}
            </h3>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{job.company}</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{job.highlights[0]}</p>
          </div>
          <p className="font-mono text-xs text-zinc-500 sm:text-right dark:text-zinc-400">{job.period}</p>
        </li>
      ))}
    </ol>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <Summary />
    <Metrics />
    <FeaturedProject />
    <Expertise />
    <Credentials />
    <ExperienceHighlights />
    <ContactCTA />
  </>
);

export default Home;
