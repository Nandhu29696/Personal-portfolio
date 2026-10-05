import { canadaFacts } from '../data/profile';
import { Badge, Briefcase, Chat, Clock, Globe, MapPin } from './ui/Icons';

// Recruiter-facing facts for Canadian hiring. Rows with empty values are hidden.
const rows = [
  { key: 'availability', label: 'Availability', icon: Briefcase },
  { key: 'workAuthorization', label: 'Work authorization', icon: Badge },
  { key: 'location', label: 'Location', icon: MapPin },
  { key: 'remote', label: 'Remote work', icon: Globe },
  { key: 'noticePeriod', label: 'Notice period', icon: Clock },
  { key: 'languages', label: 'Languages', icon: Chat },
];

const QuickFacts = () => (
  <dl className="card divide-y divide-zinc-200 dark:divide-zinc-800">
    {rows.filter((row) => canadaFacts[row.key]).map(({ key, label, icon: Icon }) => (
      <div key={key} className="flex gap-4 px-5 py-4">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-maple-500" />
        <div>
          <dt className="text-xs text-zinc-500 dark:text-zinc-400">{label}</dt>
          <dd className="mt-0.5 text-sm text-zinc-900 dark:text-zinc-100">{canadaFacts[key]}</dd>
        </div>
      </div>
    ))}
  </dl>
);

export default QuickFacts;
