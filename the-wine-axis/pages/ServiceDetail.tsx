
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import SEO from '../components/SEO.tsx';
import BlogCarousel from '../components/BlogCarousel.tsx';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <div className="py-40 text-center">Service not found.</div>;

  const relatedServices = SERVICES.filter(s => service.relatedSlugs?.includes(s.slug));

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

      {/* Simplified Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-white">{t(service.title)}</span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden mt-6">
        <img src={service.imageUrl} alt={t(service.title)} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[50%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 block mb-4">{service.category} — {service.tier} Tier</span>
           <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">{t(service.title)}</h1>
           <p className="text-xl text-amber-100/60 font-medium max-w-2xl mx-auto italic">{t(service.shortDesc)}</p>
        </div>
      </section>

      {/* Intro Sales Copy */}
      <section className="max-w-4xl mx-auto px-4 pt-24 space-y-12">
        <div className="text-center space-y-8">
           <h2 className="text-3xl font-black text-white italic uppercase tracking-tight">
             {t({ it: 'L\'Eccellenza come Standard.', en: 'Excellence as a Standard.' })}
           </h2>
           <div className="text-xl text-slate-400 leading-relaxed font-light italic space-y-8">
              {t(service.longDesc).split('\n').map((para, i) => (
                <p key={i} className="first-letter:text-4xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-2 first-letter:float-left">{para}</p>
              ))}
           </div>
        </div>
      </section>

      {/* The 3 Pillars / Features */}
      <section className="max-w-7xl mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.features.map((f, i) => (
            <div key={i} className="group p-10 bg-[#0f172a] rounded-[40px] border border-white/5 hover:border-amber-500/30 transition-all shadow-2xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <span className="font-black text-sm">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{t(f.title)}</h3>
              <p className="text-slate-500 text-sm leading-relaxed italic mb-8">{t(f.description)}</p>
              {f.cta && (
                <div className="mt-auto pt-6">
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all">
                    {t(f.cta)}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing Chapter & Primary CTA */}
      <section className="max-w-4xl mx-auto px-4 pt-32 text-center space-y-16">
        <div className="p-12 lg:p-20 bg-white rounded-[60px] text-slate-950 space-y-10 shadow-3xl shadow-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
           <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 block">
             {t({ it: 'L\'IMPATTO DEFINITIVO', en: 'THE ULTIMATE IMPACT' })}
           </span>
           <h3 className="text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter uppercase italic">
             {t({ it: 'OLTRE IL CALICE.', en: 'BEYOND THE GLASS.' })}
           </h3>
           <p className="text-xl font-bold text-slate-700 leading-relaxed italic max-w-2xl mx-auto">
             {t(service.closingChapter)}
           </p>
           <Link 
             to="/contact" 
             className="inline-block bg-slate-950 text-white px-16 py-7 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-amber-600 transition-all shadow-2xl"
           >
             {t(service.cta)}
           </Link>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pt-32 space-y-12">
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
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pt-32 space-y-12">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{t({ it: 'Ecosistema Correlato', en: 'Related Ecosystem' })}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedServices.map(s => (
              <Link key={s.id} to={`/services/${s.slug}`} className="block group glass-effect p-8 rounded-[40px] border border-white/5">
                <span className="text-[9px] font-black text-amber-500/50 uppercase tracking-widest mb-2 block">{s.category}</span>
                <h5 className="text-white font-bold text-lg group-hover:text-amber-500 transition-colors leading-tight mb-4">{t(s.title)}</h5>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-all flex items-center gap-2">
                  View <span className="w-4 h-[1px] bg-slate-500 group-hover:w-8 group-hover:bg-amber-500 transition-all"></span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Blog Carousel Integration */}
      <BlogCarousel />

      {/* Authoritative Entities Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-24 text-center space-y-6">
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Authoritative Domain</p>
         <div className="flex flex-wrap justify-center gap-3 opacity-30">
            {service.entities?.map(entity => (
              <span key={entity} className="text-[9px] font-black border border-white/10 px-3 py-1 rounded-full text-slate-400 bg-white/5 whitespace-nowrap">{entity}</span>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
