import { act, fireEvent, render, renderHook, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import useTheme from './hooks/useTheme';
import { getProject, orderedTech } from './data/projects';
import Architecture from './pages/Architecture';
import Projects from './pages/Projects';

vi.mock('@vercel/analytics/react', () => ({ Analytics: () => null }));

describe('orderedTech', () => {
  test('AI projects lead with their AI stack, not the UI framework', () => {
    expect(orderedTech(getProject('ai-email-assistant'), 2)).toEqual(['OpenAI GPT-4o-mini', 'Ollama']);
  });

  test('web projects lead with the frontend', () => {
    expect(orderedTech(getProject('pyro-town-store'), 1)).toEqual(['React']);
  });
});

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  test('cycles light → dark → system and saves only explicit choices', () => {
    localStorage.theme = 'light';
    const { result } = renderHook(() => useTheme());
    expect(result.current.pref).toBe('light');

    act(() => result.current.cycle());
    expect(result.current.pref).toBe('dark');
    expect(localStorage.theme).toBe('dark');
    expect(document.documentElement).toHaveClass('dark');

    act(() => result.current.cycle());
    expect(result.current.pref).toBe('system');
    expect(localStorage.theme).toBeUndefined();
  });
});

describe('Architecture tabs', () => {
  const renderAt = (hash = '') =>
    render(<MemoryRouter initialEntries={[`/architecture${hash}`]}><Architecture /></MemoryRouter>);

  test('shows one architecture and switches with a click', () => {
    renderAt();
    const panel = screen.getByRole('tabpanel');
    expect(within(panel).getByRole('heading', { level: 2 })).toHaveTextContent('AI Email Assistant');

    fireEvent.click(screen.getByRole('tab', { name: /Retrieval-Augmented Generation/ }));
    expect(within(screen.getByRole('tabpanel')).getByRole('heading', { level: 2 }))
      .toHaveTextContent('Retrieval-Augmented Generation');
  });

  test('opens the tab named in the URL hash', () => {
    renderAt('#mcp-agent');
    expect(screen.getByRole('tab', { name: /MCP Tool-Calling Agent/ })).toHaveAttribute('aria-selected', 'true');
  });

  test('arrow keys move between tabs', () => {
    renderAt();
    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: /MCP Tool-Calling Agent/ })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Projects page', () => {
  test('shows featured cards, a compact list, and category counts', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'More projects' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Generative AI · 6/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Web · 4/ }));
    expect(screen.queryByRole('heading', { name: 'More projects' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pyro Town Store' })).toBeInTheDocument();
  });
});
