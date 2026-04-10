
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import SEO from '../components/SEO.tsx';

const categoryMap: Record<string, string> = {
  business: 'B2B',
  education: 'Education',
  private: 'B2C'
};

const categoryTitles: Record<string, any> = {
  business: { it: 'Business & Hospitality', en: 'Business & Hospitality' },
  education: { it: 'Accademia & Formazione', en: 'Academy & Education' },
  private: { it: 'Esperienze Private', en: 'Private Experiences' }
};

const categoryDescs: Record<string, any> = {
  business: { it: 'Consulenza strategica per hotel e ristoranti di lusso.', en: 'Strategic consulting for luxury hotels and restaurants.' },
  education: { it: 'Percorsi di studio professionali e masterclass tecniche.', en: 'Professional study paths and technical masterclasses.' },
  private: { it: 'Servizi esclusivi per amanti del vino e collezionisti.', en: 'Exclusive services for wine lovers and collectors.' }
};

const ServiceCategory: React.FC = () => {
  const { categorySlug } = useParams();
  const { lang, t } = useLanguage();
  
  const categoryKey = categorySlug ? categoryMap[categorySlug] : '';
  const filteredServices = SERVICES.filter(s => s.category === categoryKey);
  const title = categoryTitles[categorySlug || ''] || { it: 'Servizi', en: 'Services' };
  const description = categoryDescs[categorySlug || ''] || { it: '', en: '' };

  const categoryFaqs: Record<string, any[]> = {
    business: [
      { q: { it: "Come incide la consulenza sul bilancio aziendale?", en: "How does consulting affect the corporate balance sheet?" }, a: { it: "Ottimizziamo i processi di acquisto e la gestione dello stock, portando a una riduzione sensibile del beverage cost e a un aumento dei margini operativi.", en: "We optimize purchasing processes and stock management, leading to a significant reduction in beverage costs and an increase in operating margins." } },
      { q: { it: "È possibile formare lo staff da remoto?", en: "Is it possible to train staff remotely?" }, a: { it: "Sì, offriamo moduli digitali interattivi, anche se consigliamo sessioni on-site per il perfezionamento della tecnica di servizio.", en: "Yes, we offer interactive digital modules, although we recommend on-site sessions for refining service technique." } },
      { q: { it: "Quanto tempo occorre per vedere i primi risultati?", en: "How long does it take to see the first results?" }, a: { it: "Solitamente i primi miglioramenti operativi e di margine sono misurabili entro i primi 3 mesi dall'implementazione della strategia.", en: "Usually, the first operational and margin improvements are measurable within the first 3 months of strategy implementation." } }
    ],
    education: [
      { q: { it: "Quali sono i prerequisiti per i corsi avanzati?", en: "What are the prerequisites for advanced courses?" }, a: { it: "I corsi avanzati sono pensati per chi ha già basi solide (WSET 2 o equivalente) o esperienza nel settore.", en: "Advanced courses are designed for those with solid foundations (WSET 2 or equivalent) or industry experience." } },
      { q: { it: "I corsi rilasciano crediti formativi?", en: "Do the courses provide educational credits?" }, a: { it: "Forniamo attestati di eccellenza tecnica che sono altamente riconosciuti nell'industria dell'hospitality di lusso.", en: "We provide technical excellence certificates that are highly recognized in the luxury hospitality industry." } },
      { q: { it: "È possibile personalizzare il programma di studio?", en: "Is it possible to customize the study program?" }, a: { it: "Sì, offriamo sessioni di tutoraggio 1-to-1 per focalizzarsi su specifiche aree di debolezza del candidato.", en: "Yes, we offer 1-to-1 tutoring sessions to focus on specific candidate weak areas." } }
    ],
    private: [
      { q: { it: "Gestite anche l'acquisto fisico delle bottiglie?", en: "Do you also manage the physical purchase of bottles?" }, a: { it: "Sì, agiamo come wine concierge facilitando l'acquisto diretto da distributori certificati e broker internazionali.", en: "Yes, we act as a wine concierge by facilitating direct purchases from certified distributors and international brokers." } },
      { q: { it: "Organizzate degustazioni fuori dall'Europa?", en: "Do you organize tastings outside Europe?" }, a: { it: "Sì, siamo disponibili per eventi internazionali, con particolare focus su Dubai e il Medio Oriente.", en: "Yes, we are available for international events, with a particular focus on Dubai and the Middle East." } },
      { q: { it: "La gestione cantina include l'assicurazione?", en: "Does cellar management include insurance?" }, a: { it: "Forniamo consulenza specialistica sulla protezione del patrimonio vinicolo, collaborando con i migliori broker assicurativi del settore.", en: "We provide specialist advice on the protection of wine assets, collaborating with the best insurance brokers in the sector." } }
    ]
  };

  const currentFaqs = categoryFaqs[categorySlug || ''] || [];

  if (!categoryKey) return <div className="py-40 text-center">Category not found.</div>;

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto space-y-24">
      <SEO 
        title={t(title)}
        description={t(description)}
        lang={lang}
      />

      <div className="space-y-8">
        <nav className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-12">
          <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{t(title)}</span>
        </nav>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none italic uppercase">
            {t(title)}
          </h1>
          <p className="text-xl text-slate-500 font-medium italic">
            {t(description)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredServices.map((s) => (
          <Link 
            key={s.id} 
            to={`/services/${s.slug}`}
            className="group relative flex flex-col bg-[#0f172a] rounded-[50px] overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 p-3 shadow-2xl"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[40px]">
              <img src={s.imageUrl} alt={t(s.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-full">{s.tier}</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  →
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-amber-500 transition-colors leading-none tracking-tight">{t(s.title)}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow italic">{t(s.shortDesc)}</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-all">
                  {t({ it: 'Vedi Dettagli Strategici', en: 'View Strategic Details' })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SECTION Category Faqs */}
      <section className="py-24 max-w-4xl mx-auto px-4 border-t border-white/5">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-600 mb-12 border-l-2 border-amber-500 pl-6">
          {t({ it: "Category FAQ", en: "Category FAQ" })}
        </h2>
        <div className="space-y-4">
          {currentFaqs.map((faq, i) => (
            <details key={i} className="group glass-effect rounded-[30px] p-8 border border-white/5 cursor-pointer">
              <summary className="list-none flex justify-between items-center text-lg font-bold text-white uppercase italic tracking-tight">
                {t(faq.q)}
                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-6 pt-6 border-t border-white/5 text-slate-400 font-light italic leading-relaxed">
                {t(faq.a)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceCategory;
