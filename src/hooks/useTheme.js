import { useEffect, useState } from 'react';

export const THEME_ORDER = ['light', 'dark', 'system'];

const query = () => window.matchMedia('(prefers-color-scheme: dark)');

const readSaved = () => {
  try {
    return localStorage.theme === 'dark' || localStorage.theme === 'light' ? localStorage.theme : 'system';
  } catch (e) {
    return 'system'; // Storage can be blocked (private mode).
  }
};

const save = (pref) => {
  try {
    if (pref === 'system') localStorage.removeItem('theme');
    else localStorage.theme = pref;
  } catch (e) {
    // Ignore: the theme still applies for this visit.
  }
};

// Theme preference: 'light', 'dark' or 'system' (follow the OS).
// `pref` is null until mounted, so the pre-rendered HTML and the first browser render match;
// the inline script in index.html has already applied the right class before that.
export default function useTheme() {
  const [pref, setPref] = useState(null);

  useEffect(() => setPref(readSaved()), []);

  useEffect(() => {
    if (!pref) return undefined;
    const media = query();
    const apply = () =>
      document.documentElement.classList.toggle('dark', pref === 'dark' || (pref === 'system' && media.matches));
    // Printouts are always light.
    const beforePrint = () => document.documentElement.classList.remove('dark');

    apply();
    media.addEventListener('change', apply);
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', apply);
    return () => {
      media.removeEventListener('change', apply);
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', apply);
    };
  }, [pref]);

  const cycle = () => {
    const current = pref ?? readSaved();
    const next = THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
    save(next);
    setPref(next);
  };

  return { pref, cycle };
}
