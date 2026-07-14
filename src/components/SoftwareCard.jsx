import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function SoftwareCard({ 
  title, 
  description, 
  icon: Icon, 
  isBatchflow, 
  onBookDemo 
}) {
  return (
    <div className="bg-[#121A2F] rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col h-full relative group">
      
      {/* Top Header Row */}
      <div className="flex items-start justify-between mb-8">
        
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#1A2540] border border-slate-700/50 flex items-center justify-center text-slate-300">
          <Icon className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Right Accents (Arrow & Pill) */}
        <div className="flex flex-col items-end gap-2">
          {isBatchflow ? (
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-semibold text-slate-400 tracking-wider">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Footer / Action */}
      <div className="mt-8 pt-4">
        {isBatchflow ? (
          <button 
            onClick={onBookDemo}
            className="w-full py-3.5 rounded-xl bg-[#3B82F6] hover:bg-blue-500 text-white font-bold text-xs tracking-wider uppercase transition-colors"
          >
            Book Demo
          </button>
        ) : (
          <div className="flex justify-center w-full pb-2">
            <ChevronDown className="w-4 h-4 text-slate-600" />
          </div>
        )}
      </div>

    </div>
  );
}
