import { Link } from 'react-router';
import { canadaFacts, profile } from '../data/profile';
import Reveal from './ui/Reveal';
import { ArrowRight, Download } from './ui/Icons';

const ContactCTA = () => (
  <section className="page mt-24 print:hidden">
    <Reveal className="overflow-hidden rounded-3xl bg-zinc-900 px-6 py-14 text-center sm:px-12 dark:bg-zinc-900 dark:ring-1 dark:ring-zinc-800">
      <p className="eyebrow !text-maple-400">{canadaFacts.availability}</p>
      <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight !text-white sm:text-4xl">
        Hiring for a full-stack or Generative AI role?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-zinc-400">
        I’m looking for roles with Canadian teams, on-site after relocation or remote with North American hours.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/contact" className="btn bg-white text-zinc-900 hover:bg-maple-400 hover:text-white">
          Get in touch <ArrowRight />
        </Link>
        <a href={profile.resumeUrl} download className="btn border border-zinc-700 text-white hover:border-zinc-400">
          Download resume <Download />
        </a>
      </div>
    </Reveal>
  </section>
);

export default ContactCTA;
