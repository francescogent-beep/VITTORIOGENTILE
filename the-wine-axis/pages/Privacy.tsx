
import React from 'react';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import CommonFaq from '../components/CommonFaq.tsx';
import BlogCarousel from '../components/BlogCarousel.tsx';

const Privacy: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto space-y-12 text-slate-300">
      <SEO 
        title={t({ it: "Privacy Policy", en: "Privacy Policy" })} 
        description="Vittorio Gentile Privacy Policy" 
        lang={lang} 
      />
      <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">Privacy <span className="text-amber-500">Policy.</span></h1>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">1. Introduction</h2>
        <p className="leading-relaxed">
          {t({
            it: "La vostra privacy è importante per noi. Questa politica spiega come raccogliamo e trattiamo i vostri dati personali.",
            en: "Your privacy is important to us. This policy explains how we collect and process your personal data."
          })}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">2. Data Collection</h2>
        <p className="leading-relaxed">
          {t({
            it: "Raccogliamo i dati forniti tramite il form di contatto, come nome, email e dettagli del progetto.",
            en: "We collect data provided through the contact form, such as name, email, and project details."
          })}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase italic">3. Use of Data</h2>
        <p className="leading-relaxed">
          {t({
            it: "Utilizziamo i vostri dati esclusivamente per rispondere alle vostre richieste e fornire i servizi professionali richiesti.",
            en: "We use your data exclusively to respond to your requests and provide the professional services requested."
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

export default Privacy;
