
import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon.tsx';

/**
 * DynamicRouter intelligently switches between HashRouter (for restricted environments
 * like Google AI Studio / WebContainers) and BrowserRouter (for Production / Custom Domains).
 */
const DynamicRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Enhanced detection for iframe/preview environments
  const isHashPreferred = 
    window.self !== window.top || // Frame detection (AI Studio)
    window.location.hostname.includes('googleusercontent.com') || 
    window.location.hostname.includes('webcontainer.io') ||
    window.location.protocol === 'file:' ||
    window.location.pathname.includes('index.html') ||
    window.location.hash.startsWith('#/');

  // Use HashRouter for visibility in AI Studio, BrowserRouter for clean URLs elsewhere
  const RouterComponent = isHashPreferred ? HashRouter : BrowserRouter;
  
  return <RouterComponent>{children}</RouterComponent>;
};

const App: React.FC = () => {
  return (
    <DynamicRouter>
      <Routes>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </DynamicRouter>
  );
};

export default App;
