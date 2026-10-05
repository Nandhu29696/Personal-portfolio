const Tag = ({ children, tone = 'neutral' }) => {
  const tones = {
    neutral: 'border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300',
    accent: 'border-maple-100 bg-maple-50 text-maple-700 dark:border-maple-700/40 dark:bg-maple-700/10 dark:text-maple-400',
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] ${tones[tone]}`}>
      {children}
    </span>
  );
};

export default Tag;
