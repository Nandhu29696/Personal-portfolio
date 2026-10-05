import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
