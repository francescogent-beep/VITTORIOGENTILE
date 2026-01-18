
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.tsx';
import SEO from '../components/SEO.tsx';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  const doors = [
    { 
      slug: 'business', 
      key: 'B2B', 
      title: { it: 'BUSINESS & HOSPITALITY', en: 'BUSINESS & HOSPITALITY' }, 
      desc: { it: 'Consulenza strategica, ROI analysis e hospitality excellence per hotel e ristoranti di lusso.', en: 'Strategic consulting, ROI analysis, and hospitality excellence for luxury hotels and restaurants.' },
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200'
    },
    { 
      slug: 'education', 
      key: 'Education', 
      title: { it: 'ACCADEMIA & FORMAZIONE', en: 'ACADEMY & EDUCATION' }, 
      desc: { it: 'Percorsi tecnici certificati, coaching WSET/CMS e accademia digitale professionale.', en: 'Certified technical paths, WSET/CMS coaching, and professional digital academy.' },
      img: 'https://images.unsplash.com/photo-1553122912-3da9832af78a?q=80&w=1200'
    },
    { 
      slug: 'private', 
      key: 'B2C', 
      title: { it: 'ESPERIENZE PRIVATE', en: 'PRIVATE EXPERIENCES' }, 
      desc: { it: 'Wine concierge, gestione cantina personale e degustazioni d\'élite a domicilio.', en: 'Wine concierge, personal cellar management, and elite at-home tastings.' },
      img: 'https://images.unsplash.com/photo-1543412849-fd47250680ca?q=80&w=1200'
    },
  ];

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

      <div className="max-w-4xl space-y-6 lg:space-y-8">
        <div className="flex items-center gap-4 text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">
          <span className="h-[1px] w-12 bg-amber-500"></span>
          {t({ it: 'Professional Ecosystem', en: 'Professional Ecosystem' })}
        </div>
        <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {doors.map((door) => (
          <Link 
            key={door.slug}
            to={`/services/category/${door.slug}`}
            className="group relative h-[500px] lg:h-[700px] flex flex-col justify-end p-8 lg:p-12 rounded-[40px] lg:rounded-[60px] overflow-hidden border border-white/5 hover:border-amber-500/20 transition-all duration-700 shadow-2xl"
          >
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000">
              <img src={door.img} alt={t(door.title)} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10 space-y-4 lg:space-y-6 transform lg:group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-amber-500 font-black text-[10px] tracking-[0.4em] uppercase">{t({ it: 'Path', en: 'Path' })} — 0{doors.indexOf(door) + 1}</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">{t(door.title)}</h2>
              <p className="text-slate-400 font-medium italic leading-relaxed opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 lg:h-0 lg:group-hover:h-auto overflow-hidden text-sm lg:text-base">
                {t(door.desc)}
              </p>
              <div className="pt-4 lg:pt-6">
                <span className="inline-flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-widest border-b-2 border-amber-500 pb-2 lg:group-hover:text-amber-500 transition-colors">
                  {t({ it: 'Esplora Servizi', en: 'Explore Services' })}
                  <span className="w-4 h-[1px] bg-white lg:group-hover:w-8 lg:group-hover:bg-amber-500 transition-all"></span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
