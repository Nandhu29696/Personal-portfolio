import { Fragment } from 'react';
import { ArrowDown, ArrowRight } from './ui/Icons';

// Draws each lane of an architecture as a row of connected steps.
// Rows run left to right on wide screens and top to bottom on phones.
const ArchitectureDiagram = ({ architecture, compact = false }) => (
  <div className="flex flex-col gap-6" role="img" aria-label={`${architecture.title} diagram`}>
    {architecture.lanes.map((lane) => (
      <div key={lane.name}>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {lane.name}
        </p>
        <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
          {lane.steps.map((step, i) => (
            <Fragment key={step.label}>
              <div
                className={`flex-1 rounded-xl border bg-white px-4 dark:bg-zinc-950 ${compact ? 'py-3' : 'py-4'} ${step.key
                  ? 'border-maple-500/70 ring-1 ring-maple-500/20'
                  : 'border-zinc-200 dark:border-zinc-800'}`}
              >
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  {step.label}
                  {step.key && <span className="sr-only"> (key step)</span>}
                </p>
                {!compact && <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{step.detail}</p>}
              </div>
              {i < lane.steps.length - 1 && (
                <span className="flex justify-center text-zinc-500 dark:text-zinc-500">
                  <ArrowDown className="h-4 w-4 md:hidden" />
                  <ArrowRight className="hidden h-4 w-4 md:block" />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ArchitectureDiagram;
