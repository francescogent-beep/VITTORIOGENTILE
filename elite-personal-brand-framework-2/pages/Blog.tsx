import React from 'react';
import SEO from '../components/SEO.tsx';
import { POSTS } from '../constants.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';

const Blog: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 px-4 max-w-4xl mx-auto space-y-16">
      <SEO 
        title={t({ it: "Insights & Visione", en: "Insights & Vision" })} 
        description={t({ 
          it: "Articoli su wine business, sommellerie moderna e hospitality strategy.", 
          en: "Articles on wine business, modern sommellerie, and hospitality strategy." 
        })}
        lang={lang}
        type="Blog"
      />
      
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Insights.</h1>
        <p className="text-xl text-slate-400 font-light italic">{t({ it: "Visioni dal cuore dell'hospitality.", en: "Visions from the heart of hospitality." })}</p>
      </div>

      <div className="space-y-24">
        {POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer border-b border-white/5 pb-16">
            <div className="flex items-center gap-4 text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-6">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span>{t(post.category)}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 group-hover:text-amber-500 transition-colors leading-[0.9] tracking-tighter uppercase italic">
              {t(post.title)}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light italic">
              {t(post.excerpt)}
            </p>
            <button className="text-[10px] font-black border-b-2 border-amber-500 pb-2 uppercase tracking-widest hover:text-amber-500 transition-all">
              {t({ it: 'Leggi Articolo', en: 'Read Full Post' })}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;