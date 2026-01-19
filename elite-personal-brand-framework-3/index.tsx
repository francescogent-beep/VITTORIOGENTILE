
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './components/LanguageContext.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  );
} catch (err) {
  console.error("Critical Application Error:", err);
  rootElement.innerHTML = `
    <div style="color: white; padding: 40px; text-align: center; font-family: sans-serif;">
      <h2 style="color: #f59e0b;">Initialization Error</h2>
      <p style="color: #94a3b8;">The application failed to start. This is usually due to a module loading issue.</p>
      <pre style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-top: 20px; font-size: 12px; text-align: left; overflow: auto;">${err instanceof Error ? err.stack || err.message : String(err)}</pre>
    </div>
  `;
}
