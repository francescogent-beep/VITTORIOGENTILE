
import React from 'react';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import { Link } from 'react-router-dom';
import CommonFaq from '../components/CommonFaq.tsx';
import BlogCarousel from '../components/BlogCarousel.tsx';

const About: React.FC = () => {
  const { lang, t } = useLanguage();

  const bioText = {
    it: "Vittorio Gentile, originario della Puglia, è attualmente Head of Wine per Zuma Italia, dove guida i programmi dedicati a vino e sake per le sedi di Roma, Capri, Porto Cervo e Cortina.\n\nDopo molti anni a Londra, dove si è formato e ha consolidato la propria esperienza nel mondo del fine dining internazionale, ha fatto ritorno in Italia per sviluppare e coordinare il wine program di Zuma, tra i più innovativi e articolati del panorama contemporaneo.\n\nNel corso della sua carriera ha creato carte dei vini originali e pragmatiche, riconosciute da pubblicazioni come The World of Fine Wine (premio Most Original Wine List – London 2019).\n\nCertificato WSET e Court of Master Sommeliers, unisce competenza operativa, visione strategica e passione per la formazione, promuovendo una cultura del vino e del sake come espressione di ospitalità autentica.",
    en: "Vittorio Gentile, originally from Puglia, is currently Head of Wine for Zuma Italy, where he leads the wine and sake programs for the Rome, Capri, Porto Cervo, and Cortina locations.\n\nAfter many years in London, where he trained and consolidated his experience in the world of international fine dining, he returned to Italy to develop and coordinate Zuma's wine program, among the most innovative and complex in the contemporary scene.\n\nDuring his career, he has created original and pragmatic wine lists, recognized by publications such as The World of Fine Wine (Most Original Wine List award – London 2019).\n\nCertified by WSET and the Court of Master Sommeliers, he combines operational expertise, strategic vision, and a passion for education, promoting a culture of wine and sake as an expression of authentic hospitality."
  };

  return (
    <div className="pb-20 lg:pb-40">
      <SEO 
        title={t({ it: "Profilo Professionale", en: "Professional Profile" })} 
        description={t({
          it: "Vittorio Gentile: Head of Wine ITALY @ ZUMA. Consulente strategico e formatore internazionale.",
          en: "Vittorio Gentile: Head of Wine ITALY @ ZUMA. Strategic consultant and international educator."
        })}
        lang={lang} 
      />

      <section className="py-16 lg:py-32 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-7 space-y-8 lg:space-y-12 order-1 lg:order-2">
          <div className="space-y-4 lg:space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Head of Wine ITALY @ ZUMA Restaurants</span>
            <h1 className="text-4xl lg:text-8xl font-black text-white tracking-tighter leading-none italic uppercase">
              Vittorio <br /> <span className="text-amber-500">Gentile.</span>
            </h1>
          </div>
          
          <div className="text-lg lg:text-2xl text-slate-400 font-light leading-relaxed space-y-6 lg:space-y-8 italic border-l-2 border-white/5 pl-6 lg:pl-10">
            {t(bioText).split('\n\n').map((para, i) => (
              <p key={i} className={i === 0 ? "text-white/80 font-medium" : ""}>
                {para}
              </p>
            ))}
          </div>
          
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 border-t border-white/5">
             <div className="space-y-2 lg:space-y-4">
                <h3 className="text-amber-500 font-black text-[10px] uppercase tracking-widest">Global Experience</h3>
                <p className="text-slate-500 text-sm font-bold uppercase leading-tight italic">London • Rome • Porto Cervo • Capri • Cortina • Dubai.</p>
             </div>
             <div className="space-y-2 lg:space-y-4">
                <h3 className="text-amber-500 font-black text-[10px] uppercase tracking-widest">Credentials</h3>
                <p className="text-slate-500 text-sm font-bold uppercase leading-tight italic">WSET Diploma • CMS Certified • Sake Sommelier SSI.</p>
             </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 lg:order-1 order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500/5 blur-[100px] -z-10"></div>
            <img 
              src="https://i.imgur.com/Il1I7cg.jpeg" 
              className="rounded-[40px] lg:rounded-[60px] border-white/10 shadow-3xl transition-all duration-1000 grayscale hover:grayscale-0" 
              alt="Vittorio Gentile" 
            />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-slate-50 text-slate-950">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6 lg:space-y-8">
               <h2 className="text-3xl lg:text-4xl font-black italic uppercase tracking-tighter leading-none text-slate-950">Passioni & <br /> Visione.</h2>
               <p className="text-base lg:text-lg text-slate-600 font-medium italic leading-relaxed">
                 {t({
                   it: "Oltre il calice, trovo equilibrio e ispirazione nel Freediving e nella Fotografia — discipline che richiedono la stessa disciplina, focus e occhio per il dettaglio della sommellerie d'élite.",
                   en: "Beyond the glass, I find balance and inspiration in Freediving and Photography — disciplines that require the same discipline, focus, and eye for detail as elite sommellerie."
                 })}
               </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
               <div className="space-y-3 lg:space-y-4 border-l-2 border-amber-500 pl-6 lg:pl-8">
                  <h4 className="font-black uppercase tracking-widest text-[11px] text-amber-600">01 / Education</h4>
                  <p className="text-slate-800 font-bold italic leading-snug">
                    {t({
                      it: "Formatore d'élite, preparo team internazionali alle sfide dei massimi esami come WSET e Court of Master Sommeliers.",
                      en: "Elite educator, preparing international teams for the challenges of top exams like WSET and Court of Master Sommeliers."
                    })}
                  </p>
               </div>
               <div className="space-y-3 lg:space-y-4 border-l-2 border-amber-500 pl-6 lg:pl-8">
                  <h4 className="font-black uppercase tracking-widest text-[11px] text-amber-600">02 / Business</h4>
                  <p className="text-slate-800 font-bold italic leading-snug">
                    {t({
                      it: "Ottimizzo programmi enologici regionali per massimizzare il profitto, trasformando la cantina in un asset strategico misurabile.",
                      en: "I optimize regional wine programs to maximize profit, transforming the cellar into a measurable strategic asset."
                    })}
                  </p>
               </div>
            </div>
         </div>
      </section>

      <CommonFaq />
      <BlogCarousel />

      <section className="py-24 lg:py-40 max-w-4xl mx-auto px-4 text-center space-y-8 lg:space-y-12">
         <h2 className="text-3xl lg:text-6xl font-black text-white italic uppercase tracking-tighter leading-tight">Elevate Your Wine Strategy.</h2>
         <Link to="/contact" className="inline-block bg-amber-500 text-slate-950 px-12 lg:px-20 py-6 lg:py-8 rounded-full font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] hover:bg-white transition-all shadow-3xl">
           {t({ it: 'Richiedi Consulenza', en: 'Strategic Inquiry' })}
         </Link>
      </section>
    </div>
  );
};

export default About;
