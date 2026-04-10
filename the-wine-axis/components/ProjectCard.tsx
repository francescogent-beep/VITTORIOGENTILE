
import React from 'react';
import { Project } from '../types.ts';
import { useLanguage } from './LanguageContext.tsx';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <div className="group relative glass-effect rounded-[32px] lg:rounded-[50px] overflow-hidden hover:border-amber-500/20 transition-all duration-500 border border-white/5 shadow-2xl">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={t(project.title)} 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
      </div>
      <div className="p-8 lg:p-12 space-y-6 lg:space-y-8 relative z-10">
        <div className="flex flex-wrap gap-2 lg:gap-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[8px] lg:text-[9px] font-black uppercase tracking-widest border border-amber-500/20 text-amber-500 bg-amber-500/5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl lg:text-3xl font-black text-white italic uppercase tracking-tighter leading-none">
          {t(project.title)}
        </h3>
        <p className="text-slate-400 text-sm lg:text-base leading-relaxed font-light italic">
          {t(project.description)}
        </p>
        <div className="pt-2 lg:pt-4">
          <span className="text-[10px] font-black flex items-center gap-4 text-white uppercase tracking-widest group-hover:text-amber-500 transition-all cursor-pointer">
            Case Study Details
            <span className="w-8 h-[1px] bg-white group-hover:w-16 group-hover:bg-amber-500 transition-all"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
