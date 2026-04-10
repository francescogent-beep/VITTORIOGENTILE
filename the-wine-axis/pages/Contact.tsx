
import React from 'react';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';
import { CONTACT_INFO } from '../constants.tsx';
import CommonFaq from '../components/CommonFaq.tsx';
import BlogCarousel from '../components/BlogCarousel.tsx';

const Contact: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto space-y-24">
      <SEO 
        title={t({ it: "Contatti & Booking", en: "Contact & Booking" })} 
        description={t({ 
          it: "Inizia una collaborazione professionale per consulenza, formazione o eventi privati.", 
          en: "Start a professional collaboration for consulting, training, or private events." 
        })}
        lang={lang}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
            Let's <span className="text-amber-500">Connect.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light italic">
            {t({
              it: "Per consulenze aziendali, sessioni di coaching o richieste di wine concierge, sono a vostra disposizione per definire un progetto su misura.",
              en: "For corporate consulting, coaching sessions, or wine concierge inquiries, I am available to define a tailor-made project."
            })}
          </p>
          
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="font-black text-[10px] uppercase tracking-[0.3em]">{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span className="font-black text-[10px] uppercase tracking-[0.3em]">{t(CONTACT_INFO.location)}</span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-[60px] p-10 md:p-16 border border-white/5 shadow-3xl">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t({ it: 'Nome', en: 'Name' })}</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white placeholder-slate-700" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white placeholder-slate-700" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t({ it: 'Oggetto', en: 'Subject' })}</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white placeholder-slate-700" placeholder={t({ it: 'Consulenza B2B', en: 'B2B Consulting' })} />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 h-40 resize-none text-white placeholder-slate-700" placeholder={t({ it: 'Descrivi il tuo progetto...', en: 'Describe your project...' })}></textarea>
            </div>
            <button className="w-full bg-white text-slate-950 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-amber-500 transition-all shadow-2xl">
              {t({ it: 'Invia Messaggio', en: 'Send Message' })}
            </button>
          </form>
        </div>
      </div>

      <CommonFaq />
      <BlogCarousel />
    </div>
  );
};

export default Contact;
