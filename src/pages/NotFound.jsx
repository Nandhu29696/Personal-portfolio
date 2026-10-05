import { Link } from 'react-router';

const NotFound = () => (
  <section className="page flex min-h-[60vh] flex-col items-start justify-center">
    <p className="eyebrow">404</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
    <p className="mt-3 text-zinc-600 dark:text-zinc-400">The page you’re looking for doesn’t exist or has moved.</p>
    <Link to="/" className="btn-primary mt-8">Back to home</Link>
  </section>
);

export default NotFound;
