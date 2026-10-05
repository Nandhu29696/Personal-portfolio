import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, description, action, as: Heading = 'h2' }) => (
  <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</Heading>
      {description && <p className="mt-4 text-zinc-600 dark:text-zinc-400">{description}</p>}
    </div>
    {action}
  </Reveal>
);

export default SectionHeading;
