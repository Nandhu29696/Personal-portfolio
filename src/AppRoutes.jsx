import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import useTheme from './hooks/useTheme';
import Architecture from './pages/Architecture';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';

// Shared by the browser app (BrowserRouter) and the pre-renderer (StaticRouter).
export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Routes>
      <Route element={<Layout theme={theme} />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="experience" element={<Experience />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
