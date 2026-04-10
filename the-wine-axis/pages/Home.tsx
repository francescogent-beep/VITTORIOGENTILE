
import React from 'react';
import SEO from '../components/SEO.tsx';
import { TAGLINE, SERVICES, BRAND_NAME } from '../constants.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import { Link } from 'react-router-dom';
import BlogCarousel from '../components/BlogCarousel.tsx';

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

      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] z-0 pl-24 lg:pl-0">
          <img 
            src="https://i.imgur.com/dpcfM4Z.jpeg" 
            className="w-full h-full object-cover object-left grayscale brightness-[0.85] lg:brightness-75 transition-all duration-1000" 
            alt={BRAND_NAME} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950/20 lg:via-slate-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl space-y-10 lg:space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[2.5px] bg-amber-500"></span>
                <span className="text-[9px] md:text-[11px] font-black tracking-[0.5em] uppercase text-amber-500">
                  OPERATIONAL PRECISION
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-white uppercase flex flex-col">
                <span>VITTORIO</span>
                <span className="text-slate-500 italic">GENTILE</span>
              </h1>
              
              <div className="text-[8px] md:text-[13px] font-black tracking-[0.3em] md:tracking-[0.4em] text-amber-500 uppercase">
                {t(TAGLINE)}
              </div>
            </div>

            <div className="border-l-2 border-amber-500 pl-8">
              <p className="text-lg lg:text-2xl text-white font-medium leading-relaxed italic max-w-2xl drop-shadow-sm">
                {t({
                  it: "Ottimizziamo programmi vino internazionali attraverso eccellenza operativa, sourcing esclusivo e servizi privati su misura per creare valore misurabile.",
                  en: "Optimizing international wine programs through operational excellence, exclusive sourcing, and bespoke private services to create measurable value."
                })}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Link to="/services" className="w-full sm:w-auto bg-white text-slate-950 px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-amber-500 hover:-translate-y-1 shadow-2xl text-center">
                AREE DI INTERVENTO
              </Link>
              <Link to="/contact" className="w-full sm:w-auto border border-white/20 px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.3em] text-white hover:bg-white/10 hover:-translate-y-1 transition-all text-center backdrop-blur-sm">
                BUSINESS INQUIRY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL PILLARS */}
      <section className="relative z-20 py-10 lg:py-14 border-y border-white/5 bg-slate-950/90 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 text-center md:text-left">
            {[
              { it: 'WSET Educator', en: 'WSET Educator' },
              { it: 'CMS Certified', en: 'CMS Certified' },
              { it: 'SSI Sake Sommelier', en: 'SSI Sake Sommelier' },
              { it: 'ROI Analysis', en: 'ROI Analysis' },
              { it: 'Fine Wine Sourcing', en: 'Fine Wine Sourcing' }
            ].map((pillar, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-amber-500/40 group-hover:bg-amber-500 group-hover:scale-125 transition-all"></div>
                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.35em] text-slate-500 group-hover:text-white transition-colors">{t(pillar)}</span>
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
              <Link to="/services?cat=business" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-3 group/link">
                Business Services <span className="w-4 h-[1px] bg-slate-400 group-hover/link:w-8 group-hover/link:bg-amber-500 transition-all"></span>
              </Link>
            </div>
          </div>

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
              <Link to="/services?cat=education" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-3 group/link">
                Academy Access <span className="w-4 h-[1px] bg-slate-400 group-hover/link:w-8 group-hover/link:bg-amber-500 transition-all"></span>
              </Link>
            </div>
          </div>

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
              <Link to="/services?cat=private" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-3 group/link">
                Private Inquiries <span className="w-4 h-[1px] bg-slate-400 group-hover/link:w-8 group-hover/link:bg-amber-500 transition-all"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED B2B STRATEGY */}
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

      {/* SECTION: ABOUT PREVIEW */}
      <section className="py-24 lg:py-40 bg-slate-950 overflow-hidden relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
           <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-amber-500/10 blur-[120px] rounded-full"></div>
              <img 
                src="https://i.imgur.com/Il1I7cg.jpeg" 
                className="rounded-[40px] relative z-10 border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Vittorio Gentile Profile"
              />
           </div>
           <div className="lg:col-span-7 space-y-8 lg:space-y-12 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-amber-500 font-black uppercase tracking-[0.4em] text-[10px]">
                  <span className="h-[1px] w-12 bg-amber-500"></span>
                  {t({ it: 'THE PROFILE', en: 'THE PROFILE' })}
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                  Vittorio <span className="text-amber-500">Gentile.</span>
                </h2>
              </div>
              <p className="text-lg lg:text-xl text-slate-400 font-light leading-relaxed italic border-l-2 border-amber-500 pl-8">
                {t({
                  it: "Originario della Puglia, attualmente Head of Wine per Zuma Italia. Unisco competenza operativa, visione strategica e passione per la formazione, promuovendo una cultura del vino e del sake come espressione di ospitalità autentica.",
                  en: "Originally from Puglia, currently Head of Wine for Zuma Italy. I combine operational expertise, strategic vision, and a passion for education, promoting a wine and sake culture as an expression of authentic hospitality."
                })}
              </p>
              <div className="pt-4">
                <Link to="/about" className="text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-amber-500 transition-all flex items-center gap-4 group">
                  {t({ it: 'Full Biography', en: 'Full Biography' })}
                  <span className="h-[1px] w-12 bg-white group-hover:w-24 group-hover:bg-amber-500 transition-all"></span>
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION Faqs */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 border-t border-white/5">
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

      {/* Blog Carousel */}
      <BlogCarousel />

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
