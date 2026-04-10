
import React from 'react';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import CommonFaq from '../components/CommonFaq.tsx';
import BlogCarousel from '../components/BlogCarousel.tsx';

const Cookies: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto space-y-12 text-slate-300">
      <SEO 
        title={t({ it: "Cookie Policy", en: "Cookie Policy" })} 
        description="Vittorio Gentile Cookie Policy" 
        lang={lang} 
      />
      <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">Cookie <span className="text-amber-500">Policy.</span></h1>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">Essential Cookies</h2>
        <p className="leading-relaxed">
          {t({
            it: "Utilizziamo cookie tecnici essenziali per il funzionamento del sito e per ricordare la vostra preferenza linguistica.",
            en: "We use essential technical cookies for the website's functionality and to remember your language preference."
          })}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">Analytics</h2>
        <p className="leading-relaxed">
          {t({
            it: "Potremmo utilizzare cookie analitici per capire come gli utenti interagiscono con il sito e migliorarne l'esperienza.",
            en: "We may use analytical cookies to understand how users interact with the site and improve their experience."
          })}
        </p>
      </section>

      <p className="text-sm italic text-slate-500 pt-12 border-t border-white/5 pb-12">
        Last updated: January 2025. Vittorio Gentile.
      </p>

      <CommonFaq />
      <BlogCarousel />
    </div>
  );
};

export default Cookies;
