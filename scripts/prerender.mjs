// Turns the client build into one static HTML file per page, each with its own <head>.
// Runs after `vite build` (client) and `vite build --ssr` (server entry); see "build" in package.json.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'build');
const ssrDir = join(root, 'build-ssr');

const { render, getMeta, prerenderRoutes } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
);
const template = await readFile(join(outDir, 'index.html'), 'utf8');

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const headFor = (meta) => [
  `<title>${escape(meta.title)}</title>`,
  `<meta name="description" content="${escape(meta.description)}" />`,
  `<link rel="canonical" href="${escape(meta.url)}" />`,
  `<meta property="og:title" content="${escape(meta.title)}" />`,
  `<meta property="og:description" content="${escape(meta.description)}" />`,
  `<meta property="og:url" content="${escape(meta.url)}" />`,
  `<meta property="og:image" content="${escape(meta.image)}" />`,
  meta.noindex ? '<meta name="robots" content="noindex" />' : '',
].filter(Boolean).join('\n  ');

const page = (url) =>
  template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headFor(getMeta(url)))
    .replace('<!--app-html-->', render(url));

// "/projects" → build/projects/index.html, which Vercel serves at /projects.
for (const url of prerenderRoutes) {
  const file = url === '/' ? join(outDir, 'index.html') : join(outDir, url, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(url));
}

// Vercel serves 404.html with a real 404 status for any unknown path.
await writeFile(join(outDir, '404.html'), page('/__not-found__'));

// Sitemap for search engines, listing every pre-rendered page.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes.map((url) => `  <url><loc>${escape(getMeta(url).url)}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(outDir, 'sitemap.xml'), sitemap);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${prerenderRoutes.length} pages + 404.html`);
