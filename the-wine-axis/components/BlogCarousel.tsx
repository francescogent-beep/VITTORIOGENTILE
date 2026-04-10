
import React from 'react';
import { Link } from 'react-router-dom';
import { POSTS } from '../constants.tsx';
import { useLanguage } from './LanguageContext.tsx';

const BlogCarousel: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-40 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 lg:mb-20">
        <div className="flex items-center gap-4 text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
          <span className="h-[1px] w-12 bg-amber-500"></span>
          {t({ it: 'LATEST INSIGHTS', en: 'LATEST INSIGHTS' })}
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
          {t({ it: 'Oltre l\'', en: 'Beyond the ' })}
          <span className="text-amber-500">{t({ it: 'Etichetta.', en: 'Label.' })}</span>
        </h2>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 lg:gap-10 px-4 lg:px-[calc((100vw-80rem)/2)] pb-12">
        {POSTS.map((post) => (
          <div 
            key={post.id} 
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center group"
          >
            <Link to="/blog" className="block h-full">
              <div className="glass-effect h-full p-8 md:p-12 rounded-[40px] border border-white/5 hover:border-amber-500/30 transition-all duration-500 shadow-2xl flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">
                      {t(post.category)}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-amber-500 transition-colors">
                    {t(post.title)}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed italic line-clamp-3">
                    {t(post.excerpt)}
                  </p>
                </div>
                
                <div className="pt-10 flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    {t({ it: 'APPROFONDIMENTO', en: 'DEEP-DIVE' })}
                  </span>
                  <span className="h-[1px] w-8 bg-slate-800 group-hover:w-16 group-hover:bg-amber-500 transition-all"></span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BlogCarousel;
