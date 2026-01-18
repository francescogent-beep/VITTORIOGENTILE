
import React from 'react';
import SEO from '../components/SEO.tsx';
import { TAGLINE, SERVICES } from '../constants.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { lang, t } = useLanguage();

  // Featured Core Offer: Restaurant Consulting (B2B)
  const featuredOffer = SERVICES.find(s => s.slug === 'wine-consulting-restaurants');

  const homeFaqs = [
    {
      q: { it: "Come incide la vostra consulenza sul ROI della cantina?", en: "How does your consulting affect the cellar's ROI?" },
      a: { it: "Ottimizziamo i flussi di cassa e la rotazione dello stock. Tipicamente, i nostri interventi portano a un incremento del margine operativo lordo tra il 15% e il 25% già nel primo semestre.", en: "We optimize cash flows and stock turnover. Typically, our interventions lead to a 15% to 25% increase in gross operating margin within the first six months." }
    },
    {
      q: { it: "Operate a livello internazionale?", en: "Do you operate internationally?" },
      a: { it: "Assolutamente. Abbiamo una presenza attiva a Londra, Roma e Dubai, gestendo progetti sia in loco che attraverso auditing operativi remoti.", en: "Absolutely. We have an active presence in London, Rome, and Dubai, managing projects both on-site and through remote operational auditing." }
    },
    {
      q: { it: "Quali sono i settori di specializzazione?", en: "What are your areas of specialization?" },
      a: { it: "Ci focalizziamo esclusivamente sull'ospitalità di lusso: hotel 5 stelle, ristoranti fine-dining e collezionisti privati di alto profilo.", en: "We focus exclusively on luxury hospitality: 5-star hotels, fine-dining restaurants, and high-profile private collectors." }
    }
  ];

  return (
    <div className="pb-20 lg:pb-40">
      <SEO 
        title={t({ it: "Sommelier Internazionale e Wine Business Consultant", en: "International Sommelier & Wine Business Consultant" })} 
        description={t({
          it: "Vittorio Gentile: Strategia enologica, formazione professionale WSET/CMS e consulenza ROI per l'hospitality di lusso.",
          en: "Vittorio Gentile: Wine strategy, professional WSET/CMS education, and ROI consulting for luxury hospitality."
        })} 
        lang={lang} 
      />

      {/* SECTION 1: TECHNICAL & STRATEGIC HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-slate-950">
        {/* Vittorio Immersive Background Picture - Refined Size & Masking */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 overflow-hidden">
          <img 
            src="https://i.imgur.com/dpcfM4Z.jpeg" 
            className="w-full h-full object-cover grayscale brightness-[0.45] lg:brightness-[0.4] contrast-125 object-center" 
            alt="Vittorio Gentile" 
          />
          {/* Refined Gradients for Readability and Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent lg:via-slate-950/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            {/* Strategy Column */}
            <div className="lg:col-span-8 space-y-8 lg:space-y-12 animate-in opacity-0">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-amber-500"></span>
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase text-amber-500">
                    {t({ it: 'OPERATIONAL PRECISION', en: 'OPERATIONAL PRECISION' })}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-black tracking-tighter leading-none text-white uppercase drop-shadow-2xl">
                  Vittorio <span className="text-slate-400 font-light italic">Gentile.</span>
                </h1>
                
                <p className="text-[10px] md:text-xs lg:text-sm font-black tracking-[0.4em] text-amber-500/90 uppercase max-w-2xl">
                  {t({ 
                    it: 'Strategia • Formazione • Wine Club ', 
                    en: 'Strategy • Education • Wine Club ' 
                  })}
                </p>
              </div>

              <div className="max-w-2xl space-y-8 lg:space-y-12">
                <p className="text-lg lg:text-xl text-slate-100 font-light leading-relaxed italic border-l border-amber-500 pl-6 lg:pl-10 drop-shadow-md">
                  {t({
                    it: "Ottimizziamo programmi vino internazionali attraverso eccellenza operativa, sourcing esclusivo e servizi privati su misura per creare valore misurabile.",
                    en: "Optimizing international wine programs through operational excellence, exclusive sourcing, and bespoke private services to create measurable value."
                  })}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
                  <Link to="/services" className="w-full sm:w-auto bg-white text-slate-950 px-10 lg:px-14 py-5 lg:py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-amber-500 shadow-2xl text-center">
                    {t({ it: 'Aree di Intervento', en: 'Areas of Expertise' })}
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto border border-white/20 px-10 lg:px-14 py-5 lg:py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] text-white hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                    {t({ it: 'Business Inquiry', en: 'Business Inquiry' })}
                  </Link>
                </div>
              </div>
            </div>

            {/* Credential Deck */}
            <div className="lg:col-span-4 hidden lg:block animate-in [animation-delay:400ms] opacity-0">
              <div className="glass-effect rounded-[50px] p-12 border border-white/10 space-y-10 shadow-3xl backdrop-blur-md">
                <div className="space-y-3">
                  <p className="text-[9px] font-black text-amber-500 uppercase tracking-[0.4em]">Core Competency</p>
                  <p className="text-base font-bold text-white leading-tight uppercase tracking-tighter italic">Regional Wine Program ROI & <br /> Operational Audit</p>
                </div>
                <div className="h-[1px] w-full bg-white/5"></div>
                <div className="space-y-3">
                  <p className="text-[9px] font-black text-amber-500 uppercase tracking-[0.4em]">Professional Tenure</p>
                  <p className="text-base font-bold text-white leading-tight uppercase tracking-tighter italic">Head of Wine ITALY <br /> @ ZUMA Restaurants</p>
                </div>
                <div className="h-[1px] w-full bg-white/5"></div>
                <div className="space-y-3">
                  <p className="text-[9px] font-black text-amber-500 uppercase tracking-[0.4em]">Certifications</p>
                  <p className="text-base font-bold text-white leading-tight uppercase tracking-tighter italic">WSET Diploma, CMS & <br /> Sake Sommelier SSI</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL PILLARS */}
      <section className="relative z-20 py-8 lg:py-12 border-y border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8 text-center md:text-left">
            {[
              { it: 'WSET Educator', en: 'WSET Educator' },
              { it: 'CMS Certified', en: 'CMS Certified' },
              { it: 'SSI Sake Sommelier', en: 'SSI Sake Sommelier' },
              { it: 'ROI Analysis', en: 'ROI Analysis' },
              { it: 'Fine Wine Sourcing', en: 'Fine Wine Sourcing' }
            ].map((pillar, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors"></div>
                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">{t(pillar)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE PILLARS OF OPERATION */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-4 space-y-12 lg:space-y-24">
        <div className="max-w-3xl space-y-4 lg:space-y-6">
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-none italic uppercase">
            {t({ it: 'Ecosistema Professionale.', en: 'Professional Ecosystem.' })}
          </h2>
          <p className="text-base lg:text-lg text-slate-500 font-medium italic">
            {t({ 
              it: 'Tre verticali integrate per rispondere alle sfide del mercato moderno.', 
              en: 'Three integrated verticals to address modern market challenges.' 
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Path A: Businesses */}
          <div className="p-8 lg:p-12 glass-effect rounded-[40px] lg:rounded-[50px] border border-white/5 hover:border-amber-500/20 transition-all group flex flex-col justify-between shadow-2xl bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="space-y-6 lg:space-y-8">
              <div className="text-amber-500"><svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
              <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter italic">{t({ it: 'Business Path', en: 'Business Path' })}</h3>
              <p className="text-slate-500 leading-relaxed italic font-light text-sm">
                {t({ 
                  it: 'Consulenza per la ristorazione di lusso. Ingegneria della carta, ottimizzazione dei margini e auditing dei processi operativi.', 
                  en: 'Luxury hospitality consulting. Wine list engineering, margin optimization, and operational process auditing.' 
                })}
              </p>
            </div>
            <div className="pt-8 lg:pt-10 border-t border-white/5">
              <Link to="/services/wine-consulting-restaurants" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-3 group/link">
                Business Services <span className="w-4 h-[1px] bg-slate-400 group-hover/link:w-8 group-hover/link:bg-amber-500 transition-all"></span>
              </Link>
            </div>
          </div>

          {/* Path B: Education */}
          <div className="p-8 lg:p-12 glass-effect rounded-[40px] lg:rounded-[50px] border border-white/5 hover:border-amber-500/20 transition-all group flex flex-col justify-between shadow-2xl bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="space-y-6 lg:space-y-8">
              <div className="text-amber-500"><svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div>
              <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter italic">{t({ it: 'Academy Path', en: 'Academy Path' })}</h3>
              <p className="text-slate-500 leading-relaxed italic font-light text-sm">
                {t({ 
                  it: 'Coaching tecnico per aspiranti Master Sommelier e Diploma WSET. Programmi di studio rigorosi per professionisti d\'élite.', 
                  en: 'Technical coaching for aspiring Master Sommeliers and WSET Diploma. Rigorous study programs for elite professionals.' 
                })}
              </p>
            </div>
            <div className="pt-8 lg:pt-10 border-t border-white/5">
              <Link to="/services/certification-prep" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-3 group/link">
                Academy Access <span className="w-4 h-[1px] bg-slate-400 group-hover/link:w-8 group-hover/link:bg-amber-500 transition-all"></span>
              </Link>
            </div>
          </div>

          {/* Path C: Private */}
          <div className="p-8 lg:p-12 glass-effect rounded-[40px] lg:rounded-[50px] border border-white/5 hover:border-amber-500/20 transition-all group flex flex-col justify-between shadow-2xl bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="space-y-6 lg:space-y-8">
              <div className="text-amber-500"><svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
              <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter italic">{t({ it: 'Private Path', en: 'Private Path' })}</h3>
              <p className="text-slate-500 leading-relaxed italic font-light text-sm">
                {t({ 
                  it: 'Wine Concierge e gestione patrimoniale vinicola. Servizi esclusivi per collezionisti e amanti del lusso esperienziale.', 
                  en: 'Wine Concierge and wine asset management. Exclusive services for collectors and lovers of experiential luxury.' 
                })}
              </p>
            </div>
            <div className="pt-8 lg:pt-10 border-t border-white/5">
              <Link to="/services/private-sommelier" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-3 group/link">
                Private Inquiries <span className="w-4 h-[1px] bg-slate-400 group-hover/link:w-8 group-hover/link:bg-amber-500 transition-all"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED B2B STRATEGY - WARM SLATE WHITE */}
      {featuredOffer && (
        <section className="py-24 lg:py-40 bg-slate-50 text-slate-950 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className="space-y-8 lg:space-y-12 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 block">{t({ it: 'Strategic ROI', en: 'Strategic ROI' })}</span>
                <h2 className="text-3xl lg:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic text-slate-950">{t(featuredOffer.title)}</h2>
                <div className="space-y-6 text-base lg:text-lg font-medium text-slate-600 max-w-lg leading-relaxed italic border-l-4 border-amber-500 pl-6 lg:pl-8">
                  <p>{t(featuredOffer.shortDesc)}</p>
                  <ul className="space-y-4 pt-8 border-t border-slate-200">
                    <li className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-950">
                      <span className="w-6 h-[2.5px] bg-amber-500"></span>
                      {t({ it: 'Operational Efficiency', en: 'Operational Efficiency' })}
                    </li>
                    <li className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-950">
                      <span className="w-6 h-[2.5px] bg-amber-500"></span>
                      {t({ it: 'Brand Identity Sourcing', en: 'Brand Identity Sourcing' })}
                    </li>
                  </ul>
                </div>
                <Link to={`/services/${featuredOffer.slug}`} className="inline-block bg-slate-950 text-white px-10 lg:px-12 py-4 lg:py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-amber-500 transition-all shadow-3xl">
                   {t({ it: 'Approfondimento Tecnico', en: 'Technical Deep-dive' })}
                </Link>
             </div>
             <div className="relative z-10">
                <div className="aspect-video bg-slate-200 rounded-[30px] lg:rounded-[40px] overflow-hidden border border-slate-950/5 shadow-3xl transform rotate-1">
                   <img src={featuredOffer.imageUrl} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" alt="Operational Excellence" />
                </div>
             </div>
          </div>
        </section>
      )}

      {/* SECTION Faqs */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 border-t border-white/5 mt-10 lg:mt-20">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-600 mb-8 lg:mb-12 border-l-2 border-amber-500 pl-6">
          {t({ it: "Business FAQ", en: "Business FAQ" })}
        </h2>
        <div className="space-y-4">
          {homeFaqs.map((faq, i) => (
            <details key={i} className="group glass-effect rounded-[24px] lg:rounded-[30px] p-6 lg:p-8 border border-white/5 cursor-pointer">
              <summary className="list-none flex justify-between items-center text-base lg:text-lg font-bold text-white uppercase italic tracking-tight">
                {t(faq.q)}
                <span className="text-amber-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4">↓</span>
              </summary>
              <p className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-white/5 text-slate-400 font-light italic leading-relaxed text-sm lg:text-base">
                {t(faq.a)}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 7: FINAL CALL */}
      <section className="py-24 lg:pt-40 lg:pb-20 text-center space-y-8 lg:space-y-12 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">
          {t({ it: 'Precision in Excellence.', en: 'Precision in Excellence.' })}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
           <Link to="/contact" className="w-full sm:w-auto bg-amber-500 text-slate-950 px-12 lg:px-16 py-5 lg:py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-3xl">
             {t({ it: 'Inizia il Progetto', en: 'Consultation Request' })}
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
