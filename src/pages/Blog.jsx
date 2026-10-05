import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { ArrowUpRight } from '../components/ui/Icons';
import { blogTopics, posts } from '../data/blog';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

const Blog = () => (
  <section className="page pt-16">
    <SectionHeading
      as="h1"
      eyebrow="Blog"
      title="Writing"
      description="Notes on Generative AI, RAG, AI agents, Azure AI and full-stack engineering."
    />
    <div className="mb-10 flex flex-wrap gap-2">
      {blogTopics.map((t) => <Tag key={t}>{t}</Tag>)}
    </div>
    {posts.length === 0 ? (
      <p className="text-zinc-500 dark:text-zinc-400">The first articles are on their way.</p>
    ) : (
      <ul className="card divide-y divide-zinc-200 dark:divide-zinc-800">
        {posts.map((post) => (
          <Reveal as="li" key={post.url}>
            <a href={post.url} target="_blank" rel="noreferrer" className="group block p-6">
              <p className="font-mono text-xs text-zinc-500">{post.topic} · {formatDate(post.date)}</p>
              <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold group-hover:text-maple-600">
                {post.title} <ArrowUpRight />
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.summary}</p>
            </a>
          </Reveal>
        ))}
      </ul>
    )}
  </section>
);

export default Blog;
