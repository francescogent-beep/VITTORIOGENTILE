
import React from 'react';
import { motion } from 'motion/react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Atmospheric background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-700/10 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        <span className="text-amber-500 font-mono text-xs tracking-[0.5em] uppercase mb-8 block opacity-80">
          The Wine Axis
        </span>
        
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
          Refining the <br /> 
          <span className="italic font-serif">Future of Wine</span>
        </h1>
        
        <div className="w-12 h-[1px] bg-amber-500/30 mx-auto mb-8" />
        
        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md mx-auto">
          A new dimension of wine expertise and business consulting is maturing. 
          The Wine Axis will be unveiled soon.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <div className="px-6 py-3 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-white/60 text-sm tracking-widest uppercase">Coming Soon</span>
          </div>
        </div>
      </motion.div>
      
      {/* Subtle footer */}
      <div className="absolute bottom-12 left-0 w-full text-center opacity-30">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white">
          &copy; {new Date().getFullYear()} The Wine Axis
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
