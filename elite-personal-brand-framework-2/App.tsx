import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import ServiceCategory from './pages/ServiceCategory.tsx';
import ServiceDetail from './pages/ServiceDetail.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Blog from './pages/Blog.tsx';
import Contact from './pages/Contact.tsx';
import Faqs from './pages/Faqs.tsx';
import Privacy from './pages/Privacy.tsx';
import Cookies from './pages/Cookies.tsx';
import Terms from './pages/Terms.tsx';

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
      <Layout>
        <Routes>
          {/* Landing Experience */}
          <Route path="/" element={<Home />} />
          
          {/* Utility redirect for index.html cleanup */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          
          {/* Main Navigation Nodes */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/category/:categorySlug" element={<ServiceCategory />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          
          {/* Compliance & Legal Hierarchy */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Intelligent Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </DynamicRouter>
  );
};

export default App;