
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.tsx';
import SEO from '../components/SEO.tsx';
import CommonFaq from '../components/CommonFaq.tsx';
import { SERVICES } from '../constants.tsx';
import { Link } from 'react-router-dom';
import BlogCarousel from '../components/BlogCarousel.tsx';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string | null>('business');

  // Handle deep linking via search params (e.g. /services?cat=education)
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && ['business', 'education', 'private'].includes(cat)) {
      setActiveCategory(cat);
      // Optional: scroll to the top or to the element if needed
    }
  }, [searchParams]);

  const categories = [
    { 
      slug: 'business', 
      key: 'B2B', 
      title: { it: 'BUSINESS & HOSPITALITY', en: 'BUSINESS & HOSPITALITY' }, 
      desc: { it: 'Consulenza strategica, ROI analysis e hospitality excellence per hotel e ristoranti di lusso.', en: 'Strategic consulting, ROI analysis, and hospitality excellence for luxury hotels and restaurants.' },
    },
    { 
      slug: 'education', 
      key: 'Education', 
      title: { it: 'ACCADEMIA & FORMAZIONE', en: 'ACADEMY & EDUCATION' }, 
      desc: { it: 'Percorsi tecnici certificati, coaching WSET/CMS e accademia digitale professionale.', en: 'Certified technical paths, WSET/CMS coaching, and professional digital academy.' },
    },
    { 
      slug: 'private', 
      key: 'B2C', 
      title: { it: 'ESPERIENZE PRIVATE', en: 'PRIVATE EXPERIENCES' }, 
      desc: { it: 'Wine concierge, gestione cantina personale e degustazioni d\'élite a domicilio.', en: 'Wine concierge, personal cellar management, and elite at-home tastings.' },
    },
  ];

  const toggleCategory = (slug: string) => {
    setActiveCategory(activeCategory === slug ? null : slug);
  };

  return (
    <div className="py-16 lg:py-24 px-4 max-w-7xl mx-auto space-y-16 lg:space-y-24">
      <SEO 
        title={t({ it: 'Servizi Sommelier e Wine Business', en: 'Sommelier Services & Wine Business Consulting' })}
        description={t({ 
          it: 'Seleziona il percorso più adatto alle tue esigenze: Business, Academy o Private Experiences.', 
          en: 'Select the path that best suits your needs: Business, Academy, or Private Experiences.' 
        })}
        lang={lang}
      />

      {/* Header Section */}
      <div className="max-w-4xl space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">
          <span className="h-[1px] w-12 bg-amber-500"></span>
          {t({ it: 'Professional Ecosystem', en: 'Professional Ecosystem' })}
        </div>
        <h1 className="text-4xl lg:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
          {t({ it: 'Scegli la tua ', en: 'Choose your ' })}
          <span className="text-amber-500 italic">{t({ it: 'Direzione.', en: 'Direction.' })}</span>
        </h1>
        <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl font-light italic">
          {t({ 
            it: 'Tre canali specializzati progettati per massimizzare il valore e l\'eccellenza in ogni ambito del mondo del vino.', 
            en: 'Three specialized channels designed to maximize value and excellence in every area of the wine world.' 
          })}
        </p>
      </div>

      {/* Accordion Categories Section */}
      <div className="space-y-4 lg:space-y-8">
        {categories.map((cat, index) => {
          const subServices = SERVICES.filter(s => s.category === cat.key);
          const isOpen = activeCategory === cat.slug;

          return (
            <div 
              key={cat.slug} 
              id={cat.slug}
              className={`glass-effect rounded-[28px] lg:rounded-[50px] overflow-hidden border transition-all duration-700 bg-white/[0.03] ${
                isOpen 
                  ? 'border-amber-500/40' 
                  : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
              }`}
            >
              <button 
                onClick={() => toggleCategory(cat.slug)}
                className="w-full text-left py-6 md:py-12 px-6 md:px-12 flex flex-row items-center justify-between gap-4 md:gap-8 group transition-all duration-500"
              >
                <div className="flex-1 space-y-2 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 transition-colors duration-500 ${isOpen ? 'text-amber-500' : 'text-slate-500'}`}>
                      <span className="text-[9px] lg:text-[11px] font-black tracking-tighter">0{index + 1}</span>
                      <span className="w-1 h-1 rounded-full bg-current opacity-30"></span>
                      <span className="text-[7px] lg:text-[10px] font-black tracking-[0.4em] uppercase">PATHWAY</span>
                    </div>
                    <span className={`h-[1px] transition-all duration-700 ${isOpen ? 'bg-amber-500 w-12 md:w-16' : 'bg-slate-800 w-6 group-hover:w-10 group-hover:bg-slate-700'}`}></span>
                  </div>
                  
                  <h2 className={`text-xl md:text-4xl lg:text-5xl font-black italic uppercase tracking-tighter transition-all duration-700 leading-tight md:leading-none ${
                    isOpen ? 'text-white scale-[1.01] origin-left' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {t(cat.title)}
                  </h2>
                  
                  <div className={`overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-40 opacity-100 mt-2 md:mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs md:text-base font-medium italic text-slate-400 leading-relaxed pr-4">
                      {t(cat.desc)}
                    </p>
                  </div>
                </div>
                
                <div className={`relative flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full border transition-all duration-700 flex items-center justify-center ${
                  isOpen 
                    ? 'rotate-180 bg-amber-500 text-slate-950 border-amber-500 shadow-xl shadow-amber-500/20' 
                    : 'border-white/10 text-slate-500 group-hover:border-amber-500 group-hover:text-amber-500 group-hover:scale-110'
                }`}>
                  <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div 
                className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 pb-10 md:pb-16' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                  {subServices.map((service) => (
                    <Link 
                      key={service.id} 
                      to={`/services/${service.slug}`}
                      className="group/item relative p-6 md:p-10 bg-slate-950/40 rounded-[24px] md:rounded-[35px] border border-white/5 hover:border-amber-500/40 transition-all shadow-2xl flex flex-col justify-between h-full"
                    >
                      <div className="space-y-4 md:space-y-6">
                         <div className="flex justify-between items-start">
                            <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] text-amber-500/80 bg-amber-500/5 px-2.5 md:px-4 py-1.5 rounded-full border border-amber-500/10">
                              {service.tier}
                            </span>
                            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-white/5 flex items-center justify-center text-white/40 group-hover/item:text-amber-500 group-hover/item:border-amber-500/30 transition-all group-hover/item:bg-amber-500/5">
                               <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                               </svg>
                            </div>
                         </div>
                         <h3 className="text-lg md:text-2xl font-black text-white group-hover/item:text-amber-500 transition-colors uppercase italic tracking-tighter leading-[1.1]">
                           {t(service.title)}
                         </h3>
                         <p className="text-xs md:text-sm text-slate-500 font-light italic leading-relaxed line-clamp-2 md:line-clamp-3">
                           {t(service.shortDesc)}
                         </p>
                      </div>
                      <div className="pt-6 md:pt-8 mt-auto flex items-center gap-3 md:gap-4">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-hover/item:text-white transition-all">
                          {t({ it: 'DETTAGLI', en: 'DETAILS' })}
                        </span>
                        <span className="h-[1px] w-4 md:w-8 bg-slate-800 group-hover/item:w-10 md:group-hover/item:w-16 group-hover/item:bg-amber-500 transition-all"></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CommonFaq />
      <BlogCarousel />
    </div>
  );
};

export default Services;
