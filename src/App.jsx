/* ACADEX Technologies · Blue & White Theme · Clean Professional SaaS Navigation */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, MessageCircle, ExternalLink, Phone, ArrowUp } from 'lucide-react';
import logoUrl from './assets/logo.jpg';
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';
import PPTFlowDemoPage from './pages/PPTFlowDemoPage';

// ─── WhatsApp Config ──────────────────────────────────────────────────────────
export const WHATSAPP_DISPLAY_NUMBER = '+91 91124 56077';
export const WHATSAPP_URL =
  'https://wa.me/919112456077?text=' +
  encodeURIComponent(
    'Hello ACADEX Team, I would like to inquire about the ACADEX Smart Class & School Management System. Please share platform details and schedule a walkthrough demo for our institute.'
  );

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const s = localStorage.getItem('acadex_theme');
      if (s) return s === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('acadex_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemo = (e) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 160);
    } else {
      document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'Platform', href: '/#overview' },
    { label: 'Software', href: '/#softwares' },
    { label: 'PPTFlow Demo', href: '/pptflow-demo', isRoute: true },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Hardware', href: '/#setups' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#070D1E] text-[var(--color-ink)] flex flex-col font-body antialiased overflow-x-hidden transition-colors duration-200">
      <ScrollToTop />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0A0F1D]/95 backdrop-blur-md border-b border-[var(--color-rule)] dark:border-slate-800/80 shadow-sm transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img src={logoUrl} alt="ACADEX Logo" className="w-10 h-10 object-contain rounded-xl shadow-sm" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-base text-[#1D4ED8] dark:text-[#38BDF8] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
                ACADEX<span className="text-[#0284C7] dark:text-sky-400">TECH</span>
              </div>
              <div className="text-[10px] font-mono text-[var(--color-ink-3)] dark:text-slate-400 tracking-wide uppercase">
                School OS · India
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="px-3.5 py-2 text-sm font-semibold text-blue-600 dark:text-sky-400 hover:bg-[#EFF6FF] dark:hover:bg-slate-800/60 rounded-lg transition-all duration-150 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-3.5 py-2 text-sm font-medium text-[var(--color-ink-2)] dark:text-slate-300 hover:text-[#1D4ED8] dark:hover:text-[#38BDF8] hover:bg-[#EFF6FF] dark:hover:bg-slate-800/60 rounded-lg transition-all duration-150"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-rule)] dark:border-slate-700 bg-white dark:bg-slate-800/60 text-[var(--color-ink-3)] dark:text-slate-300 hover:text-[#1D4ED8] dark:hover:text-[#38BDF8] hover:border-[#BFDBFE] dark:hover:border-slate-600 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#DCFCE7] dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-300 hover:bg-[#BBF7D0] dark:hover:bg-emerald-900/60 transition-all border border-[#25D366]/30 dark:border-emerald-700/50"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp
            </a>

            {/* Portal Login */}
            <a
              href="https://acadextechnologies.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-lg border border-[var(--color-rule-strong)] dark:border-slate-700 text-[var(--color-ink)] dark:text-slate-200 hover:bg-[var(--color-paper-2)] dark:hover:bg-slate-800 transition-all"
            >
              Login <ExternalLink className="w-3 h-3 text-[var(--color-ink-3)] dark:text-slate-400" />
            </a>

            {/* Book Demo CTA */}
            <button
              onClick={scrollToDemo}
              className="inline-flex items-center px-4 py-2 text-xs font-bold rounded-lg bg-[#1D4ED8] dark:bg-blue-600 text-white hover:bg-[#1E40AF] dark:hover:bg-blue-500 transition-all shadow-md hover:shadow-[0_4px_14px_rgba(29,78,216,0.35)] cursor-pointer"
            >
              Book Demo
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-rule)] dark:border-slate-700 bg-white dark:bg-slate-800/60 text-[var(--color-ink)] dark:text-slate-200"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0A0F1D] border-t border-[var(--color-rule)] dark:border-slate-800 px-5 py-4 flex flex-col gap-1 shadow-xl">
            {navLinks.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-3 text-sm font-semibold text-blue-600 dark:text-sky-400 hover:bg-[#EFF6FF] dark:hover:bg-slate-800/60 rounded-lg transition-all flex items-center justify-between"
                >
                  <span>{l.label}</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">Live</span>
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-3 text-sm font-medium text-[var(--color-ink)] dark:text-slate-200 hover:text-[#1D4ED8] dark:hover:text-[#38BDF8] hover:bg-[#EFF6FF] dark:hover:bg-slate-800/60 rounded-lg transition-all"
                >
                  {l.label}
                </a>
              )
            )}
            <div className="h-px bg-[var(--color-rule)] dark:bg-slate-800 my-2" />
            <button
              onClick={scrollToDemo}
              className="py-3 px-3 text-sm font-bold text-[#1D4ED8] dark:text-[#38BDF8] text-left cursor-pointer"
            >
              📅 Book On-Site Demo
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 flex items-center gap-2 text-sm font-semibold text-[#166534] dark:text-emerald-300 bg-[#DCFCE7] dark:bg-emerald-950/50 rounded-lg border border-transparent dark:border-emerald-800/50"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ── MAIN ────────────────────────────────────────────────────────────── */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onScrollToDemo={scrollToDemo} />} />
          <Route path="/pptflow-demo" element={<PPTFlowDemoPage onScrollToDemo={scrollToDemo} />} />
          <Route path="/setup/:type" element={<SetupPage onScrollToDemo={scrollToDemo} />} />
        </Routes>
      </main>

      {/* ── STICKY FLOAT BAR ────────────────────────────────────────────────── */}
      <aside className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-30 flex items-center gap-2 p-1.5 bg-[#0F172A]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10">
        {showScrollTop && (
          <>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-blue-600 text-white font-bold text-xs transition-all duration-200 cursor-pointer group"
              title="Scroll to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden md:inline">Top</span>
            </button>
            <div className="h-5 w-px bg-white/20" />
          </>
        )}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-[#052e16] hover:bg-[#22C55E] font-bold text-xs transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
        <div className="hidden sm:block h-5 w-px bg-white/20" />
        <a
          href={`tel:+919112456077`}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 font-semibold text-xs transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">+91 91124 56077</span>
        </a>
        <button
          onClick={scrollToDemo}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold text-xs transition-all shadow cursor-pointer"
        >
          Book Demo
        </button>
      </aside>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0F172A] text-white pt-16 pb-8 mt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">

            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1">
                  <img src={logoUrl} alt="ACADEX Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg text-white">
                    ACADEX<span className="text-[#38BDF8]">TECH</span>
                  </div>
                  <div className="text-xs text-slate-400">Where Learning Meets Technology</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-5">
                India's fastest-growing Smart Class & School Management System. Attendance, timetables, exams & real-time WhatsApp parent alerts — all in one platform.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4ADE80] hover:underline font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  {WHATSAPP_DISPLAY_NUMBER}
                </a>
                <a href="mailto:info@acadextech.com" className="text-slate-400 hover:text-white transition-colors">
                  info@acadextech.com
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-4">Platform</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: 'BatchFlow ERP', href: '/#softwares' },
                  { label: 'TestLab AI', href: '/#softwares' },
                  { label: 'FamFlow CRM', href: '/#softwares' },
                  { label: 'PPTFlow Smart Decks', href: '/pptflow-demo', isRoute: true },
                  { label: 'How It Works', href: '/#how-it-works' },
                ].map((l) => (
                  <li key={l.label}>
                    {l.isRoute ? (
                      <Link to={l.href} className="text-[#38BDF8] hover:underline transition-colors flex items-center gap-1">
                        <span>{l.label}</span>
                        <span className="text-[9px] px-1 py-0.2 rounded bg-blue-900/60 text-sky-300">NEW</span>
                      </Link>
                    ) : (
                      <a href={l.href} className="text-slate-400 hover:text-white transition-colors">{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware Links */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-4">Hardware</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: 'Recording Studio', href: '/setup/studio' },
                  { label: 'Computer Lab', href: '/setup/lab' },
                  { label: 'Smart Classroom', href: '/setup/classroom' },
                  { label: 'Book a Demo', action: true },
                ].map((l) =>
                  l.action ? (
                    <li key={l.label}>
                      <button
                        onClick={scrollToDemo}
                        className="text-[#38BDF8] font-semibold hover:underline cursor-pointer"
                      >
                        {l.label}
                      </button>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link to={l.href} className="text-slate-400 hover:text-white transition-colors">{l.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Colophon */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <p>© {new Date().getFullYear()} ACADEX Technologies. All Rights Reserved. | Pune, Maharashtra, India</p>
            {/* Watermark */}
            <div className="flex items-center gap-2">
              <span className="opacity-40">Powered by</span>
              <span className="font-bold text-white/60 tracking-widest">ACADEXTECH</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
