import ContactForm from '../components/ContactForm';
import QuickFacts from '../components/QuickFacts';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { Download, Mail, socialIcon } from '../components/ui/Icons';
import { profile } from '../data/profile';

const Contact = () => (
  <section className="page pt-16">
    <SectionHeading
      as="h1"
      eyebrow="Contact"
      title="Let’s talk about your team"
      description="I’m looking for full-stack and Generative AI engineering roles in Canada, either on-site after relocation or remote with North American hours. Recruiters and hiring managers are welcome to reach out."
    />
    <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
      <Reveal><ContactForm /></Reveal>
      <Reveal delay={0.05} className="flex flex-col gap-6">
        <QuickFacts />
        <div className="card flex flex-col gap-3 p-5">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm hover:text-maple-600">
            <Mail className="h-4 w-4 text-zinc-500 dark:text-zinc-400" /> {profile.email}
          </a>
          {profile.social.map(({ label, href }) => {
            const Icon = socialIcon[label];
            return (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-maple-600">
                {Icon && <Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />} {label}
              </a>
            );
          })}
          <a href={profile.resumeUrl} download className="flex items-center gap-3 text-sm hover:text-maple-600">
            <Download className="h-4 w-4 text-zinc-500 dark:text-zinc-400" /> Resume (PDF)
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
