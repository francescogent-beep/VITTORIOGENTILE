
import React from 'react';
import SEO from '../components/SEO.tsx';
import { PROJECTS } from '../constants.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import { useLanguage } from '../components/LanguageContext.tsx';

const Portfolio: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto space-y-16">
      <SEO 
        title={t({ it: "Esperienze & Progetti", en: "Experience & Projects" })} 
        description={t({ 
          it: "Una selezione di progetti e collaborazioni nel mondo dell'hospitality di lusso.", 
          en: "A selection of projects and collaborations in the world of luxury hospitality." 
        })}
        lang={lang}
      />
      
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">Works & <span className="text-amber-500">Experience.</span></h1>
        <p className="text-xl text-slate-400 font-light italic">
          {t({
            it: "Dalla direzione enologica in contesti internazionali alla formazione di team d'élite.",
            en: "From wine direction in international contexts to elite team training."
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
