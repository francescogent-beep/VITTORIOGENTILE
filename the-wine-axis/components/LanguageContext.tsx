
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types.ts';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (localized: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('vittorio_lang');
    return (saved as Language) || 'it';
  });

  useEffect(() => {
    localStorage.setItem('vittorio_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (localized: any) => {
    if (!localized) return '';
    return localized[lang] || localized['it'];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
