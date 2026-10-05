import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ContactCTA from '../components/ContactCTA';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { ArrowRight } from '../components/ui/Icons';
import { architectures } from '../data/architectures';
import { getProject } from '../data/projects';

const groups = [
  { label: 'From my projects', items: architectures.filter((a) => a.projectSlug) },
  { label: 'Reference designs', items: architectures.filter((a) => !a.projectSlug) },
];
const ids = architectures.map((a) => a.id);

// One architecture at a time, chosen with tabs. The URL hash (#rag, #mcp-agent…) selects a tab,
// so links from case studies open the right diagram.
const Architecture = () => {
  const { hash } = useLocation();
  const [activeId, setActiveId] = useState(ids[0]);
  const tabsRef = useRef(null);

  useEffect(() => {
    const id = hash.slice(1);
    if (ids.includes(id)) {
      setActiveId(id);
      tabsRef.current?.scrollIntoView({ block: 'start' });
    }
  }, [hash]);

  const select = (id, focus = false) => {
    setActiveId(id);
    window.history.replaceState(null, '', `#${id}`);
    if (focus) document.getElementById(`tab-${id}`)?.focus();
  };

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (e) => {
    const i = ids.indexOf(activeId);
    const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: ids.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(ids[(next + ids.length) % ids.length], true);
  };

  const a = architectures.find((x) => x.id === activeId);
  const project = a.projectSlug && getProject(a.projectSlug);

  return (
    <>
      <section className="page pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Architecture gallery"
          title="How I design systems"
          description="Architectures from my own projects, plus the reference designs I use for AI and cloud-native applications, each with the decisions behind it."
        />

        <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
          {/* Tabs: a sticky side list on desktop, a horizontal scroller on phones. */}
          <div ref={tabsRef} className="min-w-0 scroll-mt-20 lg:sticky lg:top-24 lg:self-start print:hidden">
            <div role="tablist" aria-label="Architectures" onKeyDown={onKeyDown}
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-6 lg:overflow-visible lg:px-0">
              {groups.map((group) => (
                <div key={group.label} role="presentation" className="flex shrink-0 gap-2 lg:flex-col lg:gap-1">
                  <p aria-hidden="true" className="hidden px-3 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 lg:block dark:text-zinc-400">
                    {group.label}
                  </p>
                  {group.items.map((item) => {
                    const selected = item.id === activeId;
                    return (
                      <button
                        key={item.id}
                        id={`tab-${item.id}`}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        aria-controls="architecture-panel"
                        tabIndex={selected ? 0 : -1}
                        onClick={() => select(item.id)}
                        className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-left text-sm transition-colors lg:rounded-lg lg:px-3 ${selected
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                          : 'border border-zinc-200 text-zinc-600 hover:border-zinc-400 lg:border-transparent lg:hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:lg:hover:bg-zinc-900'}`}
                      >
                        {item.title}
                        {item.projectSlug && <span className="ml-1.5 lg:hidden" aria-hidden="true">·&nbsp;built</span>}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <section id="architecture-panel" role="tabpanel" aria-labelledby={`tab-${a.id}`} className="card min-w-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">{a.title}</h2>
              <Tag tone={project ? 'accent' : 'neutral'}>{project ? 'Built' : 'Reference design'}</Tag>
            </div>
            <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">{a.summary}</p>
            <div className="mt-8"><ArchitectureDiagram architecture={a} /></div>
            <p className="mt-4 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-block h-3 w-5 rounded border border-maple-500/70" aria-hidden="true" /> Key step
            </p>
            <h3 className="mt-8 text-sm font-medium">Key design decisions</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {a.decisions.map((d) => <li key={d} className="flex gap-3"><span className="text-maple-500">—</span>{d}</li>)}
            </ul>
            {project && (
              <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-maple-600 dark:text-white dark:hover:text-maple-400">
                Read the {project.title} case study <ArrowRight />
              </Link>
            )}
          </section>
        </div>
      </section>
      <ContactCTA />
    </>
  );
};

export default Architecture;
