
import React from 'react';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import CommonFaq from '../components/CommonFaq.tsx';
import BlogCarousel from '../components/BlogCarousel.tsx';

const Terms: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto space-y-12 text-slate-300">
      <SEO 
        title={t({ it: "Termini e Condizioni", en: "Terms & Conditions" })} 
        description="Vittorio Gentile Terms and Conditions" 
        lang={lang} 
      />
      <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">Terms & <span className="text-amber-500">Conditions.</span></h1>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">1. Services</h2>
        <p className="leading-relaxed">
          {t({
            it: "Vittorio Gentile fornisce consulenza professionale nel settore del vino e dell'hospitality.",
            en: "Vittorio Gentile provides professional consulting in the wine and hospitality sector."
          })}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">2. Professionalism</h2>
        <p className="leading-relaxed">
          {t({
            it: "Ogni incarico è regolato da un contratto specifico che definisce obiettivi, costi e tempistiche.",
            en: "Every assignment is governed by a specific contract defining objectives, costs, and timelines."
          })}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">3. Intellectual Property</h2>
        <p className="leading-relaxed">
          {t({
            it: "Tutti i contenuti formativi e i materiali didattici sono protetti da copyright.",
            en: "All training content and educational materials are protected by copyright."
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

export default Terms;
