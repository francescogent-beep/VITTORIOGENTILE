
import React from 'react';
import { useLanguage } from './LanguageContext.tsx';

const CommonFaq: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: { it: "Come posso iniziare una collaborazione?", en: "How can I start a collaboration?" },
      a: { it: "Potete contattarmi tramite il modulo nella pagina contatti. Rispondo solitamente entro 24-48 ore per discutere le vostre esigenze specifiche e definire un progetto su misura.", en: "You can contact me via the form on the contact page. I usually respond within 24-48 hours to discuss your specific needs and define a bespoke project." }
    },
    {
      q: { it: "Operate solo in Italia?", en: "Do you operate only in Italy?" },
      a: { it: "No, gestisco progetti a livello internazionale con una presenza attiva a Londra, Roma e Dubai, gestendo progetti sia in loco che in remoto.", en: "No, I manage projects internationally with an active presence in London, Rome, and Dubai, handling both on-site and remote projects." }
    },
    {
      q: { it: "I servizi sono personalizzabili?", en: "Are services customizable?" },
      a: { it: "Assolutamente. Ogni intervento è sartoriale e progettato per rispondere agli obiettivi specifici del cliente, che si tratti di hospitality di lusso o di collezionisti privati.", en: "Absolutely. Every intervention is bespoke and designed to meet the client's specific goals, whether for luxury hospitality or private collectors." }
    }
  ];

  return (
    <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 border-t border-white/5 mt-10 lg:mt-20">
      <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-600 mb-8 lg:mb-12 border-l-2 border-amber-500 pl-6">
        {t({ it: "General FAQ", en: "General FAQ" })}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
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
  );
};

export default CommonFaq;
