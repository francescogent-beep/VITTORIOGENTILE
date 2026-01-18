
import React from 'react';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import { Link } from 'react-router-dom';

const Faqs: React.FC = () => {
  const { lang, t } = useLanguage();

  const faqSections = [
    {
      title: { it: "Consulenza & Business (Home/Services)", en: "Consulting & Business (Home/Services)" },
      items: [
        {
          q: { it: "Come viene misurato il ROI di una consulenza enologica?", en: "How is the ROI of wine consulting measured?" },
          a: { 
            it: "L'impatto viene misurato attraverso l'ottimizzazione del 'Beverage Cost', l'incremento dell'inventory turnover e l'analisi del margine di contribuzione per singola etichetta. Tipicamente, i nostri partner riscontrano un aumento del margine lordo tra il 15% e il 25%.",
            en: "Impact is measured through 'Beverage Cost' optimization, increased inventory turnover, and contribution margin analysis per label. Typically, our partners see a gross margin increase between 15% and 25%."
          }
        },
        {
          q: { it: "Offrite servizi di sourcing per allocazioni rare?", en: "Do you offer sourcing services for rare allocations?" },
          a: { 
            it: "Sì. Grazie a una rete internazionale consolidata a Londra, Roma e Dubai, facilitiamo l'accesso a lotti esclusivi e allocazioni dirette da produttori iconici, garantendo autenticità e tracciabilità totale.",
            en: "Yes. Thanks to a consolidated international network in London, Rome, and Dubai, we facilitate access to exclusive lots and direct allocations from iconic producers, ensuring total authenticity and traceability."
          }
        },
        {
          q: { it: "È possibile richiedere un audit preliminare della cantina?", en: "Is it possible to request a preliminary cellar audit?" },
          a: { 
            it: "Certamente. Conduciamo audit operativi per identificare inefficienze nello stock e potenziali aree di crescita del profitto prima di definire una strategia a lungo termine.",
            en: "Certainly. We conduct operational audits to identify stock inefficiencies and potential profit growth areas before defining a long-term strategy."
          }
        }
      ]
    },
    {
      title: { it: "Accademia & Credenziali (About)", en: "Academy & Credentials (About)" },
      items: [
        {
          q: { it: "Quali certificazioni internazionali possiede Vittorio Gentile?", en: "What international certifications does Vittorio Gentile hold?" },
          a: { 
            it: "Vittorio è un professionista certificato WSET Diploma (Level 4) e Certified Sommelier presso la Court of Master Sommeliers (CMS). Questo garantisce uno standard tecnico riconosciuto globalmente.",
            en: "Vittorio is a certified WSET Diploma (Level 4) professional and a Certified Sommelier with the Court of Master Sommeliers (CMS). This ensures a globally recognized technical standard."
          }
        },
        {
          q: { it: "Il coaching per gli esami è disponibile anche online?", en: "Is exam coaching available online?" },
          a: { 
            it: "Sì, offriamo sessioni di coaching tecnico via Zoom/Meet focalizzate sulla teoria avanzata e sulla calibrazione della tecnica di degustazione SAT per candidati WSET e CMS.",
            en: "Yes, we offer technical coaching sessions via Zoom/Meet focused on advanced theory and SAT tasting technique calibration for WSET and CMS candidates."
          }
        },
        {
          q: { it: "Formate anche personale non specializzato?", en: "Do you also train non-specialized staff?" },
          a: { 
            it: "Il nostro focus è l'eccellenza. Formiamo team di sala partendo dalle basi del servizio lusso fino alla psicologia della vendita complessa, adattando il linguaggio al livello del team.",
            en: "Our focus is excellence. We train floor teams from basic luxury service foundations to complex sales psychology, adapting the language to the team's level."
          }
        }
      ]
    },
    {
      title: { it: "Processo & Logistica (Portfolio/Contact)", en: "Process & Logistics (Portfolio/Contact)" },
      items: [
        {
          q: { it: "Gestite progetti internazionali fuori dall'Italia?", en: "Do you manage international projects outside Italy?" },
          a: { 
            it: "Assolutamente. Operiamo regolarmente su scala internazionale, con particolare focus sui mercati di Londra e del Medio Oriente, sia in presenza che da remoto.",
            en: "Absolutely. We regularly operate on an international scale, with a particular focus on the London and Middle Eastern markets, both on-site and remotely."
          }
        },
        {
          q: { it: "Come posso consultare i casi studio precedenti?", en: "How can I view previous case studies?" },
          a: { 
            it: "Alcuni progetti selezionati sono visibili nella nostra sezione Portfolio. Per analisi più dettagliate e dati sensibili, è possibile richiedere un incontro conoscitivo protetto da NDA.",
            en: "Selected projects are visible in our Portfolio section. For more detailed analysis and sensitive data, you can request an introductory meeting protected by an NDA."
          }
        },
        {
          q: { it: "Quali sono i tempi medi di risposta per una nuova richiesta?", en: "What are the average response times for a new inquiry?" },
          a: { 
            it: "Garantiamo una risposta entro 24-48 ore lavorative per tutte le richieste strategiche pervenute tramite il form di contatto ufficiale.",
            en: "We guarantee a response within 24-48 business hours for all strategic inquiries received via the official contact form."
          }
        }
      ]
    }
  ];

  return (
    <div className="pb-40">
      <SEO 
        title={t({ it: "Domande Frequenti & FAQ", en: "Frequently Asked Questions & FAQ" })} 
        description={t({
          it: "Risposte approfondite su consulenza wine business, formazione professionale e logistica dei servizi di Vittorio Gentile.",
          en: "Deep insights on wine business consulting, professional training, and service logistics by Vittorio Gentile."
        })}
        lang={lang} 
      />

      {/* Hero Header */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-b border-white/5">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-amber-500"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-amber-500">Professional FAQ</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            Insights & <br /> <span className="text-amber-500">Knowledge.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light italic leading-relaxed">
            {t({
              it: "Chiarezza operativa e trasparenza tecnica. Tutto quello che devi sapere prima di iniziare un progetto di eccellenza.",
              en: "Operational clarity and technical transparency. Everything you need to know before starting a project of excellence."
            })}
          </p>
        </div>
      </section>

      {/* FAQ Accordion Sections */}
      <section className="py-24 max-w-5xl mx-auto px-4 space-y-32">
        {faqSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-12">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-600 border-l-2 border-amber-500 pl-6">
              {t(section.title)}
            </h2>
            
            <div className="space-y-6">
              {section.items.map((item, iIdx) => (
                <details key={iIdx} className="group glass-effect rounded-[40px] p-8 md:p-12 border border-white/5 hover:border-amber-500/10 transition-all cursor-pointer shadow-xl">
                  <summary className="list-none flex justify-between items-center gap-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase italic tracking-tight leading-tight">
                      {t(item.q)}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-amber-500 group-open:rotate-180 transition-transform flex-shrink-0">
                      ↓
                    </div>
                  </summary>
                  <div className="mt-10 pt-10 border-t border-white/5 text-slate-400 text-lg font-light leading-relaxed italic">
                    <p>{t(item.a)}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section - UPDATED TO WARM SLATE WHITE */}
      <section className="max-w-4xl mx-auto px-4 text-center py-24 bg-slate-50 rounded-[60px] text-slate-950 shadow-3xl border border-slate-950/5">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-slate-950">{t({ it: 'Hai altre domande?', en: 'More Questions?' })}</h2>
          <p className="text-xl text-slate-600 font-medium italic">
            {t({ 
              it: 'Siamo a disposizione per approfondimenti tecnici personalizzati.', 
              en: 'We are available for personalized technical insights.' 
            })}
          </p>
          <Link to="/contact" className="inline-block bg-amber-500 text-slate-950 px-16 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-950 hover:text-white transition-all shadow-2xl">
            {t({ it: 'Contattaci Ora', en: 'Connect Now' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
