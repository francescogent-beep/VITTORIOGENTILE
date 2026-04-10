
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME, CONTACT_INFO } from '../constants.tsx';
import { useLanguage } from './LanguageContext.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Automatically scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: { it: 'Inizio', en: 'Home' } },
    { path: '/about', label: { it: 'Profilo', en: 'Profile' } },
    { path: '/services', label: { it: 'Servizi', en: 'Services' } },
    { path: '/portfolio', label: { it: 'Esperienze', en: 'Experience' } },
    { path: '/blog', label: { it: 'Insights', en: 'Blog' } },
    { path: '/contact', label: { it: 'Contatti', en: 'Contact' } },
    { path: '/faqs', label: { it: 'Domande', en: 'FAQs' } },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-amber-500/30">
      <header className="sticky top-0 z-50 glass-effect border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <span className="text-lg lg:text-xl font-bold tracking-[0.2em] uppercase text-white group-hover:text-amber-500 transition-colors">
              {BRAND_NAME.split(' ')[0]}<span className="text-amber-500"> {BRAND_NAME.split(' ')[1]}</span>
            </span>
            <span className="text-[8px] lg:text-[10px] font-black tracking-[0.5em] uppercase text-slate-500 mt-0.5">
              Sommellerie Excellence
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                  isActive(link.path) ? 'text-amber-500' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 border-l border-white/10 pl-6">
              <button 
                onClick={() => setLang('it')}
                className={`text-[10px] font-black p-1 transition-colors ${lang === 'it' ? 'text-white' : 'text-slate-600'}`}
                aria-label="Switch to Italian"
              >
                IT
              </button>
              <span className="text-slate-800 text-xs">|</span>
              <button 
                onClick={() => setLang('en')}
                className={`text-[10px] font-black p-1 transition-colors ${lang === 'en' ? 'text-white' : 'text-slate-600'}`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5 animate-in slide-in-from-top-4 duration-300 px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xs font-black uppercase tracking-[0.2em] transition-all ${
                    isActive(link.path) ? 'text-amber-500' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <button 
                  onClick={() => { setLang('it'); setIsMenuOpen(false); }}
                  className={`text-xs font-black transition-colors ${lang === 'it' ? 'text-amber-500' : 'text-slate-600'}`}
                >
                  ITALIANO
                </button>
                <button 
                  onClick={() => { setLang('en'); setIsMenuOpen(false); }}
                  className={`text-xs font-black transition-colors ${lang === 'en' ? 'text-amber-500' : 'text-slate-600'}`}
                >
                  ENGLISH
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-white/5 py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2 space-y-8">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">Vittorio Gentile</h3>
              <p className="text-slate-500 text-base leading-relaxed max-w-sm italic">
                {t({
                  it: 'Consulenza strategica e formazione tecnica per l\'hospitality di lusso. Soluzioni ROI-driven per il settore enologico internazionale.',
                  en: 'Strategic consulting and technical education for luxury hospitality. ROI-driven solutions for the international wine sector.'
                })}
              </p>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                {t(CONTACT_INFO.location)}
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">{t({ it: 'Menu', en: 'Menu' })}</h3>
              <ul className="space-y-3 text-sm text-slate-500 font-bold uppercase tracking-widest">
                {navLinks.map(l => (
                  <li key={l.path}><Link to={l.path} className="hover:text-amber-500 transition-colors">{t(l.label)}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">{t({ it: 'Legale', en: 'Legal' })}</h3>
              <ul className="space-y-3 text-sm text-slate-500 font-bold uppercase tracking-widest">
                <li><Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="hover:text-amber-500 transition-colors">Cookie Policy</Link></li>
                <li><Link to="/terms" className="hover:text-amber-500 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <p>© 2024 VITTORIO GENTILE. ALL RIGHTS RESERVED. P.IVA {CONTACT_INFO.piva}</p>
            <div className="flex space-x-8">
              <a href="https://linkedin.com/in/vittorio-gentile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://instagram.com/vittorio_gentile_wine" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
