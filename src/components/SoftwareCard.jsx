/* Hallmark · component: card · genre: architectural-utilitarian · theme: custom
 * states: default · hover · focus · active · disabled
 * contrast: pass (40–41)
 */

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
    <div className="bg-[var(--color-paper-2)] rounded-xl p-6 border border-[var(--color-rule)] hover:border-[var(--color-brand)] transition-all flex flex-col h-full relative group shadow-sm">
      
      {/* Top Header Row */}
      <div className="flex items-start justify-between mb-6">
        
        {/* Icon */}
        <div className="w-11 h-11 rounded-lg bg-[var(--color-brand-subtle)] border border-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)]">
          <Icon className="w-5 h-5 stroke-[1.75]" />
        </div>

        {/* Right Accents (Arrow & Pill) */}
        <div className="flex flex-col items-end gap-2">
          {isBatchflow ? (
            <span className="px-2 py-0.5 rounded bg-[var(--color-brand-subtle)] text-[var(--color-brand)] font-mono text-[10px] font-bold uppercase tracking-wider">
              Flagship Active
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[var(--color-paper-3)] border border-[var(--color-rule)] text-[10px] font-mono font-semibold text-[var(--color-ink-3)] tracking-wider uppercase">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2 tracking-tight">{title}</h3>
      <p className="text-xs text-[var(--color-ink-2)] leading-relaxed flex-grow">
        {description}
      </p>

      {/* Footer / Action */}
      <div className="mt-6 pt-4 border-t border-[var(--color-rule)]">
        {isBatchflow ? (
          <button 
            onClick={onBookDemo}
            className="w-full py-2.5 rounded-md bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-accent-ink)] font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Book BatchFlow Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div className="flex items-center justify-between w-full text-xs font-mono text-[var(--color-ink-3)]">
            <span>In Engineering Pipeline</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

    </div>
  );
}
