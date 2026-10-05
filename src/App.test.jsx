import { render, screen } from '@testing-library/react';
import App from './App';
import { getMeta, SITE_URL } from './seo';

vi.mock('@vercel/analytics/react', () => ({ Analytics: () => null }));

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test.each([
  ['/', /Full Stack AI Engineer/],
  ['/projects', /Case studies/],
  ['/projects/ai-email-assistant', /AI Email Assistant/],
  ['/projects/mediance-healthcare-crm', /Mediance Healthcare CRM/],
  ['/projects/fleet-manager', /Fleet Manager/],
  ['/architecture', /How I design systems/],
  ['/experience', /Professional experience/],
  ['/contact', /Let’s talk about your team/],
  ['/does-not-exist', /Page not found/],
])('%s renders its main heading', (path, heading) => {
  renderAt(path);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
});

test('every page gets a preview image', () => {
  expect(getMeta('/projects/jobagent-ai').image).toBe(`${SITE_URL}/og-image.png`);
  expect(getMeta('/projects/healthcamp-platform').image).toBe(`${SITE_URL}/og-image.png`);
  expect(getMeta('/nope').noindex).toBe(true);
});

test('project pages set the browser tab title', () => {
  renderAt('/projects/jobagent-ai');
  expect(document.title).toBe('JobAgent AI | Nandhakumar M');
});
