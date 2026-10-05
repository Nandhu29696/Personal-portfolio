import { Link } from 'react-router';
import { canadaFacts, profile } from '../../data/profile';
import { Mail, socialIcon } from '../ui/Icons';

const Footer = () => (
  <footer className="mt-24 border-t print:hidden border-zinc-200 dark:border-zinc-800">
    <div className="page flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link to="/" className="text-lg font-semibold text-zinc-900 dark:text-white">
          {profile.name}<span className="text-maple-500">.</span>
        </Link>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {profile.headline} · {canadaFacts.availability}
        </p>
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            <Mail /> {profile.email}
          </a>
        </li>
        {profile.social.map(({ label, href }) => {
          const Icon = socialIcon[label];
          return (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                {Icon ? <Icon className="h-5 w-5" /> : label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    <p className="page pb-8 text-xs text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} {profile.name}
    </p>
  </footer>
);

export default Footer;
