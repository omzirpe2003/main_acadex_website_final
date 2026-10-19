/* ACADEX PPTFlow Demo Page · Class 11 & 12 Smart PPT Viewer
 * Browse subjects, preview unlocked chapter decks, locked chapters show "Connect Us" CTA
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Lock, Eye, Presentation,
  BookOpen, FlaskConical, Atom, Calculator, Dna, GraduationCap,
  MessageCircle, Sparkles, FileText, CheckCircle2, Lightbulb, Play,
  Download, ExternalLink
} from 'lucide-react';
import { PPT_CLASSES, PPT_SUBJECTS, PPT_CATALOG } from '../data/pptFlowData';
import { WHATSAPP_URL } from '../App';

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

// Icon mapping
const ICON_MAP = { FlaskConical, Atom, Calculator, Dna };

// ─── Slide Renderer ──────────────────────────────────────────────────────────
function SlideViewer({ slides, currentSlide, onPrev, onNext, totalSlides }) {
  const slide = slides[currentSlide];
  if (!slide) return null;

  return (
    <div className="bg-white dark:bg-[#0D1A36] rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-xl">
      {/* Slide Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-[#070D1E] dark:to-[#0A1226] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="font-mono text-[10px] text-slate-400 tracking-wide">PPTFlow · Slide {slide.slideNumber} / {totalSlides}</span>
        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold">{slide.tag}</span>
      </div>

      {/* Slide Content */}
      <div className="p-6 sm:p-8 min-h-[360px] flex flex-col">
        {/* Title */}
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-1 tracking-tight">
          {slide.title}
        </h3>
        {slide.subtitle && <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{slide.subtitle}</p>}
        {slide.extra && <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 italic">{slide.extra}</p>}

        {/* Dynamic Slide Body */}
        <div className="flex-grow">
          {/* Hero Type */}
          {slide.type === 'hero' && (
            <div className="flex items-center justify-center py-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg">
                <Presentation className="w-10 h-10 text-white" />
              </div>
            </div>
          )}

          {/* Grid/Chapter Map */}
          {slide.type === 'grid' && slide.items && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {slide.items.map((it) => (
                <div key={it.num} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-lg font-bold text-blue-200 dark:text-blue-900/80 leading-none mt-0.5">{it.num}</span>
                    <div>
                      <div className="font-bold text-sm text-slate-800 dark:text-slate-200">{it.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{it.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Table */}
          {(slide.type === 'table' || slide.type === 'table-3col') && slide.headers && (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    {slide.headers.map((h) => (
                      <th key={h} className="text-left py-2 px-3 bg-blue-50 dark:bg-blue-950/40 font-bold text-blue-700 dark:text-blue-300 border-b border-blue-100 dark:border-blue-900/50 first:rounded-tl-lg last:rounded-tr-lg">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.rows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <td className="py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">{row.col1}</td>
                      <td className="py-2 px-3 text-slate-600 dark:text-slate-400">{row.col2}</td>
                      {row.col3 && <td className="py-2 px-3 text-slate-600 dark:text-slate-400">{row.col3}</td>}
                      {row.col4 && <td className="py-2 px-3 text-slate-600 dark:text-slate-400">{row.col4}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
              {slide.note && <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 italic">{slide.note}</p>}
            </div>
          )}

          {/* Concept */}
          {slide.type === 'concept' && (
            <div className="mt-3 space-y-3">
              {slide.lead && <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{slide.lead}</p>}
              {slide.body && <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{slide.body}</p>}
            </div>
          )}

          {/* Concept Diagram */}
          {slide.type === 'concept-diagram' && (
            <div className="mt-3 space-y-3">
              {slide.lead && <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{slide.lead}</p>}
              {slide.highlight && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-300 text-xs font-medium flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 shrink-0" /> {slide.highlight}
                </div>
              )}
              {slide.flow && (
                <div className="flex items-center justify-center gap-3 py-4 font-mono text-xs text-slate-600 dark:text-slate-300">
                  {slide.flow.map((f, i) => (
                    <React.Fragment key={i}>
                      <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">{f}</span>
                      {i < slide.flow.length - 1 && <ArrowRight className="w-4 h-4 text-slate-400" />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Definition Split */}
          {slide.type === 'definition-split' && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <div className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">{slide.defTitle || 'Definition'}</div>
                <div className="font-mono text-sm text-slate-800 dark:text-slate-200 font-bold mb-1">{slide.formula}</div>
                {slide.defNote && <p className="text-[11px] text-slate-500 dark:text-slate-400">{slide.defNote}</p>}
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50">
                {slide.sideTitle && <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">{slide.sideTitle}</div>}
                {slide.points && (
                  <ul className="space-y-1.5">
                    {slide.points.map((p, i) => <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span>{p}</li>)}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* MCQ Interactive */}
          {slide.type === 'mcq-interactive' && slide.questions && (
            <div className="mt-3 space-y-3">
              {slide.questions.map((q, i) => (
                <MCQCard key={i} question={q} index={i} />
              ))}
              {slide.footer && <p className="text-[10px] text-slate-400 dark:text-slate-500 italic mt-2">{slide.footer}</p>}
            </div>
          )}

          {/* Three Columns */}
          {slide.type === 'three-columns' && (
            <div className="mt-3">
              {slide.lead && <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{slide.lead}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {slide.items.map((it) => (
                  <div key={it.title} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                    <div className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">{it.title}</div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Split Formula */}
          {slide.type === 'split-formula' && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-800/50">
                {slide.left.lead && <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{slide.left.lead}</p>}
                {slide.left.formula && <div className="font-mono text-base text-blue-700 dark:text-blue-300 font-bold mb-1">{slide.left.formula}</div>}
                {slide.left.formulas && slide.left.formulas.map((f, i) => <div key={i} className="font-mono text-sm text-blue-700 dark:text-blue-300 font-bold mb-1">{f}</div>)}
                {slide.left.note && <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{slide.left.note}</p>}
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50">
                {slide.right.badge && <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded mb-2">{slide.right.badge}</span>}
                {slide.right.formula && <div className="font-mono text-base text-slate-800 dark:text-slate-200 font-bold mb-1">{slide.right.formula}</div>}
                {slide.right.note && <p className="text-[11px] text-slate-500 dark:text-slate-400">{slide.right.note}</p>}
                {slide.right.points && (
                  <ul className="space-y-1">
                    {slide.right.points.map((p, i) => <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span>{p}</li>)}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Worked Example */}
          {slide.type === 'worked-example' && slide.grid && (
            <div className="mt-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {slide.grid.map((g) => (
                  <div key={g.label} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
                    <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">{g.label}</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300">{g.val}</div>
                  </div>
                ))}
              </div>
              {slide.footer && <p className="text-[10px] text-slate-400 dark:text-slate-500 italic mt-3">{slide.footer}</p>}
            </div>
          )}

          {/* Split Box */}
          {slide.type === 'split-box' && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[slide.box1, slide.box2].map((box, i) => (
                <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">{box.title}</div>
                  {box.desc && <p className="text-xs text-slate-500 dark:text-slate-400">{box.desc}</p>}
                  {box.formula && <div className="font-mono text-sm text-blue-700 dark:text-blue-300 font-bold mt-2">{box.formula}</div>}
                  {box.step && <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{box.step}</p>}
                  {box.eg && <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 italic">{box.eg}</p>}
                </div>
              ))}
              {slide.footer && <p className="col-span-full text-[10px] text-slate-400 dark:text-slate-500 italic mt-1">{slide.footer}</p>}
            </div>
          )}

          {/* Formula Card */}
          {slide.type === 'formula-card' && (
            <div className="mt-4 flex flex-col items-center text-center">
              {slide.lead && <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 max-w-md">{slide.lead}</p>}
              <div className="px-8 py-5 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-950/40 dark:to-sky-950/40 rounded-2xl border border-blue-200 dark:border-blue-800/50 shadow-sm">
                <div className="font-mono text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300">{slide.formula}</div>
                {slide.subtext && <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{slide.subtext}</p>}
              </div>
              {slide.stat && <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">{slide.stat}</p>}
            </div>
          )}

          {/* Formula Row */}
          {slide.type === 'formula-row' && slide.formulas && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {slide.formulas.map((f) => (
                <div key={f.label} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-800/50 text-center">
                  <div className="font-mono text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">{f.eq}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{f.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Bullet Focus */}
          {slide.type === 'bullet-focus' && slide.points && (
            <div className="mt-3 space-y-2">
              {slide.points.map((p, i) => (
                <div key={i} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> {p}
                </div>
              ))}
            </div>
          )}

          {/* Cards 3 */}
          {slide.type === 'cards-3' && slide.items && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {slide.items.map((it) => (
                <div key={it.title} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200 mb-1">{it.title}</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{it.status}</p>
                </div>
              ))}
            </div>
          )}

          {/* Cards Grid */}
          {slide.type === 'cards-grid' && slide.items && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {slide.items.map((it) => (
                <div key={it.title} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200 mb-1">{it.title}</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{it.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Quad Grid */}
          {slide.type === 'quad-grid' && slide.items && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {slide.items.map((it) => (
                <div key={it.title} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200 mb-1">{it.title}</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{it.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Water Equilibrium */}
          {slide.type === 'water-equilibrium' && (
            <div className="mt-4 space-y-3 text-center">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-800/50 font-mono text-sm text-blue-700 dark:text-blue-300 font-bold">{slide.simplified}</div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 font-mono text-sm text-slate-700 dark:text-slate-300">{slide.accurate}</div>
              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/50 font-mono text-sm text-amber-800 dark:text-amber-300 font-bold">{slide.constant}</div>
              {slide.condition && <p className="text-xs text-slate-500 dark:text-slate-400">{slide.condition}</p>}
            </div>
          )}

          {/* Dual Scale */}
          {slide.type === 'dual-scale' && (
            <div className="mt-3 grid grid-cols-2 gap-4">
              {[slide.left, slide.right].map((s, i) => (
                <div key={i} className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-800/50 text-center">
                  <div className="font-mono text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">{s.title}</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{s.desc}</p>
                </div>
              ))}
              {slide.footer && <p className="col-span-2 text-[10px] text-slate-400 dark:text-slate-500 italic text-center">{slide.footer}</p>}
            </div>
          )}

          {/* Orientation Arc */}
          {slide.type === 'orientation-arc' && (
            <div className="mt-3 space-y-4">
              {slide.lead && <p className="text-sm text-slate-600 dark:text-slate-300">{slide.lead}</p>}
              {slide.summary && <p className="text-xs text-slate-500 dark:text-slate-400">{slide.summary}</p>}
              {slide.steps && (
                <div className="flex items-center gap-2 flex-wrap">
                  {slide.steps.map((s, i) => (
                    <React.Fragment key={s.name}>
                      <div className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                        <div className="font-bold text-xs text-blue-700 dark:text-blue-300">{s.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{s.desc}</div>
                      </div>
                      {i < slide.steps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Split Boxes Numbered */}
          {slide.type === 'split-boxes-numbered' && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[slide.left, slide.right].map((side) => (
                <div key={side.num} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50">
                  <span className="font-mono text-2xl font-bold text-blue-100 dark:text-blue-900/80">{side.num}</span>
                  <div className="space-y-2 mt-2">
                    {side.items.map((it) => (
                      <div key={it.label}>
                        <span className="font-bold text-xs text-blue-600 dark:text-blue-400">{it.label}: </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400">{it.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Checklist Grid */}
          {slide.type === 'checklist-grid' && slide.items && (
            <div className="mt-3 space-y-2">
              {slide.items.map((item, i) => (
                <div key={i} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {item}
                </div>
              ))}
            </div>
          )}

          {/* Reference Note */}
          {slide.type === 'reference-note' && slide.points && (
            <div className="mt-3 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/40 space-y-2">
              {slide.points.map((p, i) => (
                <p key={i} className="text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                  <span className="text-amber-500">⚠</span> {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-[#0A1226] border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        {/* Slide Dots */}
        <div className="hidden sm:flex items-center gap-1 max-w-[300px] overflow-x-auto">
          {slides.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full shrink-0 transition-all ${i === currentSlide ? 'bg-blue-500 scale-125' : 'bg-slate-300 dark:bg-slate-600'}`} />
          ))}
        </div>
        <span className="sm:hidden text-xs font-mono text-slate-500">{currentSlide + 1} / {slides.length}</span>

        <button
          onClick={onNext}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── MCQ Card with reveal ────────────────────────────────────────────────────
function MCQCard({ question, index }) {
  const [showAns, setShowAns] = useState(false);
  return (
    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">{question.q}</p>
      {question.hint && <p className="text-[10px] text-slate-400 dark:text-slate-500 italic mb-2">Hint: {question.hint}</p>}
      {!showAns ? (
        <button onClick={() => setShowAns(true)} className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1">
          <Eye className="w-3 h-3" /> Show Answer
        </button>
      ) : (
        <div className="mt-1 p-2 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-100 dark:border-green-800/50 text-[11px] text-green-800 dark:text-green-300">
          {question.ans}
        </div>
      )}
    </div>
  );
}


// ─── Main PPTFlow Demo Page ──────────────────────────────────────────────────
export default function PPTFlowDemoPage() {
  const [selectedClass, setSelectedClass] = useState('11th');
  const [selectedSubject, setSelectedSubject] = useState('chemistry');
  const [viewingDeck, setViewingDeck] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'interactive'

  const chapters = useMemo(() => PPT_CATALOG[selectedSubject] || [], [selectedSubject]);

  const handleViewDeck = (deck) => {
    if (deck.isUnlocked && (deck.pdfUrl || deck.deckData)) {
      setViewingDeck(deck);
      setCurrentSlide(0);
      setViewMode(deck.pdfUrl ? 'pdf' : 'interactive');
    }
  };

  const SubjectIcon = ICON_MAP[PPT_SUBJECTS.find(s => s.id === selectedSubject)?.icon] || BookOpen;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D1E] transition-colors duration-200">

      {/* ── Breadcrumb + Hero ── */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-[#070D1E] dark:via-[#0C1528] dark:to-[#070D1E] pt-8 pb-14 overflow-hidden transition-colors duration-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link to="/#softwares" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Platform
          </Link>

          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-xs font-bold tracking-wide mb-4 border border-orange-200 dark:border-orange-900/50">
              <Presentation className="w-3.5 h-3.5" /> PPTFlow · Smart Presentations
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-3 tracking-tight leading-tight">
              Master Your Class with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Smart PPTs</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
              Chapter-wise presentations with structured slides, wall structure layout, formulas, MCQs &amp; board exam prep. Select your class and subject below.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ── Class Selector ── */}
      <section className="bg-white dark:bg-[#0B132B] border-b border-slate-100 dark:border-slate-800 sticky top-16 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-2">Select Class</span>
            {PPT_CLASSES.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelectedClass(cls.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer border ${
                  selectedClass === cls.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <GraduationCap className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                {cls.label}
                <span className="hidden sm:inline text-[10px] ml-1.5 opacity-60">({cls.badge})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* ── Subject Sidebar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-36">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Subjects</h3>
              <div className="space-y-1.5">
                {PPT_SUBJECTS.map((subj) => {
                  const Icon = ICON_MAP[subj.icon] || BookOpen;
                  const isActive = selectedSubject === subj.id;
                  return (
                    <button
                      key={subj.id}
                      onClick={() => { setSelectedSubject(subj.id); setViewingDeck(null); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer border ${
                        isActive
                          ? `${subj.activeBg} border shadow-sm`
                          : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5 shrink-0" />
                      {subj.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Chapter PPT Catalog ── */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {viewingDeck ? (
                /* ── Slide / PDF Viewer ── */
                <motion.div key="viewer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                    <button
                      onClick={() => setViewingDeck(null)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Chapters
                    </button>

                    {/* Format Switcher & Actions */}
                    <div className="flex items-center gap-2">
                      {viewingDeck.pdfUrl && viewingDeck.deckData && (
                        <div className="flex items-center bg-slate-200 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-semibold">
                          <button
                            onClick={() => setViewMode('pdf')}
                            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                              viewMode === 'pdf'
                                ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                            }`}
                          >
                            <FileText className="w-3.5 h-3.5 inline mr-1" />
                            Original PDF Deck
                          </button>
                          <button
                            onClick={() => setViewMode('interactive')}
                            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                              viewMode === 'interactive'
                                ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                            }`}
                          >
                            <Presentation className="w-3.5 h-3.5 inline mr-1" />
                            Smart Slide View
                          </button>
                        </div>
                      )}

                      {viewingDeck.pdfUrl && (
                        <a
                          href={viewingDeck.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-lg text-xs font-bold hover:bg-blue-100 flex items-center gap-1.5 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Full Screen</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        Chapter {viewingDeck.chapterNumber} · {PPT_SUBJECTS.find(s => s.id === selectedSubject)?.label}
                      </span>
                      {viewingDeck.pdfUrl && (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold font-mono">
                          Direct PDF Upload
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">{viewingDeck.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{viewingDeck.subtitle}</p>
                  </div>

                  {/* PDF Viewer */}
                  {viewMode === 'pdf' && viewingDeck.pdfUrl ? (
                    <div className="bg-white dark:bg-[#0D1A36] rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-2xl">
                      {/* PDF Header Toolbar */}
                      <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-[#070D1E] dark:to-[#0A1226] px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                          <span className="font-mono text-xs text-slate-300 ml-2 font-semibold">
                            {viewingDeck.title}.pdf · Complete Study Deck
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={viewingDeck.pdfUrl}
                            download
                            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold flex items-center gap-1 transition-colors"
                          >
                            <Download className="w-3 h-3" /> Download PDF
                          </a>
                        </div>
                      </div>

                      {/* Embedded PDF iframe */}
                      <div className="relative w-full h-[680px] sm:h-[780px] bg-slate-900">
                        <iframe
                          src={`${viewingDeck.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                          title={viewingDeck.title}
                          className="w-full h-full border-0"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Interactive Slide View */
                    <SlideViewer
                      slides={viewingDeck.deckData}
                      currentSlide={currentSlide}
                      onPrev={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                      onNext={() => setCurrentSlide(Math.min(viewingDeck.deckData.length - 1, currentSlide + 1))}
                      totalSlides={viewingDeck.slidesCount}
                    />
                  )}
                </motion.div>
              ) : (
                /* ── Chapter Grid ── */
                <motion.div key="catalog" initial="hidden" animate="visible" variants={stagger}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                        {PPT_SUBJECTS.find(s => s.id === selectedSubject)?.label} — {PPT_CLASSES.find(c => c.id === selectedClass)?.label}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{chapters.length} chapters · 6 decks per chapter · First 2 free</p>
                    </div>
                    <SubjectIcon className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {chapters.map((ch) => (
                      <motion.div
                        key={ch.id}
                        variants={fadeUp}
                        className={`relative rounded-2xl border p-5 transition-all duration-200 ${
                          ch.isUnlocked
                            ? 'bg-white dark:bg-[#111C38] border-slate-200 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg cursor-pointer group'
                            : 'bg-slate-100/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/60'
                        }`}
                        onClick={() => ch.isUnlocked && (ch.pdfUrl || ch.deckData) && handleViewDeck(ch)}
                      >
                        {/* Lock Overlay */}
                        {!ch.isUnlocked && (
                          <div className="absolute inset-0 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-[2px] rounded-2xl flex flex-col items-center justify-center z-10">
                            <Lock className="w-8 h-8 text-slate-400 dark:text-slate-500 mb-2" />
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Locked Deck</span>
                            <a
                              href={WHATSAPP_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-4 py-2 rounded-xl bg-green-500 text-white text-xs font-bold hover:bg-green-600 transition-colors flex items-center gap-1.5 shadow-md"
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> Connect Us to Unlock
                            </a>
                          </div>
                        )}

                        {/* Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            ch.isUnlocked
                              ? 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-500 border border-slate-300 dark:border-slate-700'
                          }`}>
                            {ch.badge}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">Ch {ch.chapterNumber}</span>
                        </div>

                        {/* Content */}
                        <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{ch.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{ch.subtitle}</p>

                        {/* Topics */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {ch.topics.slice(0, 4).map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">{t}</span>
                          ))}
                          {ch.topics.length > 4 && (
                            <span className="px-2 py-0.5 text-[10px] text-slate-400">+{ch.topics.length - 4} more</span>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{ch.slidesCount} slides · {ch.board}</span>
                          {ch.isUnlocked && (ch.pdfUrl || ch.deckData) && (
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                              <Play className="w-3 h-3" /> View {ch.pdfUrl ? 'PDF Deck' : 'Slides'}
                            </span>
                          )}
                          {ch.isUnlocked && !ch.pdfUrl && !ch.deckData && (
                            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Preview coming soon</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-[#0F1D38] dark:to-[#0A1224] dark:border-t dark:border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Sparkles className="w-10 h-10 text-white/80 dark:text-orange-400 mx-auto mb-4" />
          <h2 className="font-display font-extrabold text-3xl text-white dark:text-white mb-3">
            Want Full Access to All Chapters?
          </h2>
          <p className="text-white/80 dark:text-slate-400 mb-6 max-w-md mx-auto">
            Connect with ACADEX to unlock all PPT decks for your institute. Bulk licensing available for schools and coaching centers.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-orange-600 font-bold text-sm hover:bg-orange-50 transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp Us
            </a>
            <Link
              to="/#demo-form"
              className="px-6 py-3 rounded-xl bg-white/20 dark:bg-orange-500/20 text-white font-bold text-sm hover:bg-white/30 dark:hover:bg-orange-500/30 transition-all border border-white/30 dark:border-orange-500/30"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
