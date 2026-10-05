import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { profile } from '../../data/profile';
import { posts } from '../../data/blog';
import { Close, Menu, Monitor, Moon, Sun } from '../ui/Icons';

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/architecture', label: 'Architecture' },
  { to: '/experience', label: 'Experience' },
  ...(posts.length ? [{ to: '/blog', label: 'Blog' }] : []),
];

const linkClass = ({ isActive }) =>
  `text-sm transition-colors ${isActive
    ? 'text-zinc-900 dark:text-white'
    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'}`;

const themeLabels = { light: 'Light', dark: 'Dark', system: 'System' };
const themeIcons = { light: Sun, dark: Moon, system: Monitor };

const ThemeButton = ({ theme }) => {
  const { pref, cycle } = theme;
  const Icon = pref && themeIcons[pref];
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={pref ? `Theme: ${themeLabels[pref]}. Change theme` : 'Change theme'}
      title={pref ? `Theme: ${themeLabels[pref]}` : 'Change theme'}
      className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
    >
      {Icon ? (
        <Icon className="h-5 w-5" />
      ) : (
        // Before the saved preference is read, the icon follows the applied theme via CSS,
        // so the pre-rendered HTML matches the first browser render.
        <>
          <Moon className="hidden h-5 w-5 dark:block" />
          <Sun className="h-5 w-5 dark:hidden" />
        </>
      )}
    </button>
  );
};

const Navbar = ({ theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  // While the mobile menu is open: the page behind doesn't scroll, Escape closes the menu,
  // and Tab cycles through the header only (focus trap).
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = [...headerRef.current.querySelectorAll('a[href], button')].filter((el) => el.offsetParent);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors print:hidden ${isScrolled || isOpen
        ? 'border-b border-zinc-200/80 bg-white/80 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/80'
        : 'border-b border-transparent'}`}
    >
      <nav className="page flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
          {profile.shortName}<span className="text-maple-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeButton theme={theme} />
          <Link to="/contact" className="btn-primary hidden !px-5 !py-2 md:inline-flex">
            Contact
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {isOpen ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="menu-panel page flex flex-col gap-1 pb-6 md:hidden">
          {[...links, { to: '/contact', label: 'Contact' }].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base ${isActive
                  ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
