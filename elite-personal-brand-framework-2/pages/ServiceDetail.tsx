import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import SEO from '../components/SEO.tsx';

const categoryMapInverse: Record<string, string> = {
  'B2B': 'business',
  'Education': 'education',
  'B2C': 'private'
};

const categoryTitles: Record<string, any> = {
  business: { it: 'Business & Hospitality', en: 'Business & Hospitality' },
  education: { it: 'Accademia & Formazione', en: 'Academy & Education' },
  private: { it: 'Esperienze Private', en: 'Private Experiences' }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <div className="py-40 text-center">Service not found.</div>;

  const relatedServices = SERVICES.filter(s => service.relatedSlugs?.includes(s.slug));
  const categorySlug = categoryMapInverse[service.category];

  return (
    <div className="pb-40">
      <SEO 
        title={t(service.metaTitle)} 
        description={t(service.metaDesc)} 
        keywords={t(service.keywords)} 
        lang={lang}
        type="Service"
        slug={slug}
        category={service.category}
        serviceData={{
          title: t(service.title),
          description: t(service.longDesc),
          features: service.features.map(f => ({ title: t(f.title) })),
          faqs: service.faqs.map(f => ({ question: t(f.question), answer: t(f.answer) }))
        }}
      />

      {/* Breadcrumb for SEO & UX */}
      <nav className="max-w-7xl mx-auto px-4 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link>
        <span className="mx-2">/</span>
        <Link to={`/services/category/${categorySlug}`} className="hover:text-amber-500 transition-colors">{t(categoryTitles[categorySlug])}</Link>
        <span className="mx-2">/</span>
        <span className="text-white">{t(service.title)}</span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden mt-6">
        <img src={service.imageUrl} alt={t(service.title)} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[50%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 block mb-4">{service.category} — {service.tier} Tier</span>
           <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">{t(service.title)}</h1>
           <p className="text-xl text-amber-100/60 font-medium max-w-2xl mx-auto italic">{t(service.shortDesc)}</p>
        </div>
      </section>

      {/* Structured Content Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-24 pt-24">
        <div className="lg:col-span-8 space-y-24">
          <div className="space-y-12">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tight border-b border-white/5 pb-8">
              {t({ it: 'Il Metodo & La Visione', en: 'Methodology & Vision' })}
            </h2>
            <div className="text-xl text-slate-400 leading-relaxed font-light space-y-8">
               {t(service.longDesc).split('\n').map((para, i) => (
                 <p key={i} className="first-letter:text-4xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-2 first-letter:float-left">{para}</p>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((f, i) => (
              <div key={i} className="group p-10 bg-[#0f172a] rounded-[40px] border border-white/5 hover:border-amber-500/30 transition-all shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <span className="font-black text-sm">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{t(f.title)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed italic">{t(f.description)}</p>
              </div>
            ))}
          </div>

          {/* FAQ Section: Crucial for Search Dominance */}
          {service.faqs.length > 0 && (
            <div className="space-y-12 pt-24 border-t border-white/5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Professional FAQ</span>
                <h2 className="text-4xl font-black text-white mt-4 italic uppercase tracking-tighter">Insights Strategici.</h2>
              </div>
              <div className="space-y-6">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="group glass-effect rounded-[32px] p-10 cursor-pointer border border-white/5 hover:border-amber-500/20 transition-all shadow-xl">
                    <summary className="list-none flex justify-between items-center text-xl font-bold text-white leading-tight">
                      {t(faq.question)}
                      <span className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 transition-transform group-open:rotate-180">↓</span>
                    </summary>
                    <p className="mt-8 text-slate-400 leading-relaxed pt-8 border-t border-white/10 italic text-lg">
                      {t(faq.answer)}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Semantic Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <div className="sticky top-32 space-y-12">
            <div className="p-12 bg-white rounded-[50px] text-slate-950 space-y-8 shadow-3xl shadow-white/10 transform -rotate-1">
               <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 block">Exclusive Availability</span>
               <h3 className="text-4xl font-black leading-[0.9] tracking-tighter uppercase italic">{t({ it: 'Prenota Consulenza', en: 'Secure Strategy Call' })}</h3>
               <p className="font-bold text-slate-600 leading-relaxed italic border-l-2 border-amber-500 pl-4">
                 {t({ 
                   it: 'Trasforma la complessità vinicola in vantaggio competitivo. Parliamo del tuo progetto.', 
                   en: 'Transform wine complexity into competitive advantage. Let\'s discuss your project.' 
                 })}
               </p>
               <Link 
                 to="/contact" 
                 className="block w-full text-center bg-slate-950 text-white py-7 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-amber-600 transition-all shadow-2xl"
               >
                 {t(service.cta)}
               </Link>
            </div>
            
            {relatedServices.length > 0 && (
              <div className="p-10 glass-effect rounded-[40px] border border-white/5 shadow-inner">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-10">{t({ it: 'Ecosistema Correlato', en: 'Related Ecosystem' })}</h4>
                <div className="space-y-10">
                  {relatedServices.map(s => (
                    <Link key={s.id} to={`/services/${s.slug}`} className="block group border-b border-white/5 pb-8 last:border-0">
                      <span className="text-[9px] font-black text-amber-500/50 uppercase tracking-widest mb-2 block">{s.category}</span>
                      <h5 className="text-white font-bold text-xl group-hover:text-amber-500 transition-colors leading-tight mb-4">{t(s.title)}</h5>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-all flex items-center gap-2">
                        View Details <span className="w-4 h-[1px] bg-slate-500 group-hover:w-8 group-hover:bg-amber-500 transition-all"></span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Entity Reinforcement Block */}
            <div className="px-8 text-center space-y-6">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Authoritative Entities</p>
               <div className="flex flex-wrap justify-center gap-3 opacity-30 group-hover:opacity-100 transition-all">
                  {service.entities?.map(entity => (
                    <span key={entity} className="text-[9px] font-black border border-white/10 px-3 py-1 rounded-full text-slate-400 bg-white/5 whitespace-nowrap">{entity}</span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;