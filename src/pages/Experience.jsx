import ContactCTA from '../components/ContactCTA';
import PromotedBadge from '../components/ui/PromotedBadge';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { Download } from '../components/ui/Icons';
import { businessImpact, education, experience, leadership } from '../data/experience';
import { profile } from '../data/profile';

const Experience = () => (
  <>
    <section className="page pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Experience"
        title="Professional experience"
        description="Five-plus years delivering enterprise software, from real-time dashboards to cloud data platforms."
        action={<a href={profile.resumeUrl} download className="btn-secondary shrink-0">Download resume <Download /></a>}
      />
      <ol className="relative flex flex-col gap-6 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
        {experience.map((job) => job.type === 'break' ? (
          <Reveal as="li" key={job.role + job.period} className="relative">
            <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-zinc-300 sm:-left-[37px] dark:bg-zinc-700" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-mono text-xs">{job.period}</span> · {job.summary}
            </p>
          </Reveal>
        ) : (
          <Reveal as="li" key={job.role + job.period} className="relative">
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-white bg-maple-500 sm:-left-[39px] dark:border-zinc-950" />
            <div className="card p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="flex flex-wrap items-center gap-2 text-xl font-semibold">
                  {job.role} {job.promoted && <PromotedBadge />}
                </h2>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{job.period}</p>
              </div>
              <p className="mt-1 text-sm">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{job.company}</span>
                <span className="text-zinc-500 dark:text-zinc-400"> · {job.location}</span>
              </p>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300">{job.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {job.highlights.map((h) => <li key={h} className="flex gap-3"><span className="text-maple-500">—</span>{h}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">{job.stack.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>

    <section className="page mt-24">
      <SectionHeading eyebrow="Business impact" title="Measured results" />
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 lg:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-800">
        {businessImpact.map((m) => (
          <div key={m.label} className="bg-white p-6 dark:bg-zinc-950">
            <dt className="sr-only">{m.label}</dt>
            <dd className="text-3xl font-semibold text-zinc-900 dark:text-white">{m.value}</dd>
            <dd className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{m.label}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="page mt-24 grid gap-6 lg:grid-cols-2">
      <Reveal className="card p-6 sm:p-8">
        <p className="eyebrow">Leadership</p>
        <h2 className="mt-3 text-2xl font-semibold">Leadership highlights</h2>
        <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          {leadership.map((l) => <li key={l} className="flex gap-3"><span className="text-maple-500">—</span>{l}</li>)}
        </ul>
      </Reveal>
      <Reveal delay={0.05} className="card p-6 sm:p-8">
        <p className="eyebrow">Education</p>
        <h2 className="mt-3 text-2xl font-semibold">Education</h2>
        <ul className="mt-5 space-y-5">
          {education.map((e) => (
            <li key={e.degree}>
              <p className="font-medium text-zinc-900 dark:text-white">{e.degree}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{e.school} · {e.period}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
    <ContactCTA />
  </>
);

export default Experience;
