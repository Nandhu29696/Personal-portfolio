import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { getMeta } from '../../seo';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ theme }) => {
  const { pathname, hash } = useLocation();

  // Start each page at the top (instantly, not with smooth scrolling), unless the link points to a section.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    document.title = getMeta(pathname).title;
  }, [pathname, hash]);

  const skipToContent = (e) => {
    e.preventDefault();
    const main = document.getElementById('main');
    main.focus();
    main.scrollIntoView();
  };

  return (
    <>
      <a href="#main" onClick={skipToContent} className="print:hidden sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 dark:focus:bg-zinc-900">
        Skip to content
      </a>
      <Navbar theme={theme} />
      <main id="main" tabIndex={-1} className="pt-16 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
