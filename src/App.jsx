import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Globe, Share2, Clock, Hash, Briefcase, Video, Camera, ArrowRight, Sun, Moon, Menu, X } from 'lucide-react';
import logoUrl from './assets/logo.jpg';

// Pages
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] mix-blend-exclusion bg-blue-500/10 flex items-center justify-center"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.1 }}
    >
      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
    </motion.div>
  );
}

function MagneticButton({ children, className, href, target, rel }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // 30% pull strength
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    </motion.div>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-800 dark:text-slate-200 selection:bg-blue-500 selection:text-white flex flex-col font-sans relative overflow-x-hidden transition-colors duration-500">
      
      {/* Background Layer (Parallax Grid + Glowing Orbs) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-100 dark:bg-[#070B14] transition-colors duration-500">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02] mix-blend-multiply dark:mix-blend-normal" 
          style={{ 
            backgroundImage: 'linear-gradient(var(--tw-gradient-stops)), linear-gradient(90deg, var(--tw-gradient-stops))', 
            backgroundSize: '50px 50px',
            '--tw-gradient-from': 'currentcolor 1px',
            '--tw-gradient-to': 'transparent 1px'
          }} 
        />
        
        {/* Massive Floating Orbs */}
        <motion.div 
          animate={{ x: [0, 80, -40, 0], y: [0, -80, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
        />
        <motion.div 
          animate={{ x: [0, -60, 60, 0], y: [0, 80, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        {/* Global Custom Cursor */}
        <CustomCursor />

        {/* Header - Glassmorphism */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-[#0B1120]/40 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 py-4 transition-all duration-300">
          <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
            
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 dark:bg-white flex items-center justify-center p-0.5 rounded-sm transition-colors duration-300">
                <img src={logoUrl} alt="Acadex Logo" className="w-full h-full object-contain filter invert dark:invert-0 transition-all duration-300" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white transition-colors duration-300">AcadexTech</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/#softwares" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">Software</a>
              <a href="/#services" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">Services</a>
              <a href="/" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">About</a>
            </nav>

            <div className="flex items-center gap-4">
              
              {/* Day/Night Toggle */}
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-[#1E293B] hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-inner"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <MagneticButton 
                href="https://acadextechnologies.netlify.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block text-xs font-bold text-white bg-[#3B82F6] hover:bg-blue-400 transition-colors px-6 py-2.5 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              >
                Login
              </MagneticButton>

              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-white/5 shadow-2xl py-6 px-6 flex flex-col gap-6 z-50 transition-colors duration-300"
              >
                <nav className="flex flex-col gap-4">
                  <a href="/#softwares" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 dark:text-white transition-colors">Software</a>
                  <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 dark:text-white transition-colors">Services</a>
                  <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 dark:text-white transition-colors">About</a>
                </nav>
                <a 
                  href="https://acadextechnologies.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-bold text-white bg-[#3B82F6] hover:bg-blue-400 transition-colors px-6 py-4 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  Login to Portal
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/setup/:type" element={<SetupPage />} />
          </Routes>
        </main>

        {/* Mega Footer */}
        <footer className="relative bg-white/50 dark:bg-[#070B14]/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 overflow-hidden mt-20 transition-colors duration-500">
          
          {/* Giant Watermark Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-900/5 dark:text-white/5 pointer-events-none select-none tracking-tighter w-full text-center mix-blend-overlay transition-colors duration-500">
            ACADEXTECH
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Brand & Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-900 dark:bg-white flex items-center justify-center p-0.5 rounded-sm transition-colors duration-300">
                  <img src={logoUrl} alt="Acadex Logo" className="w-full h-full object-contain filter invert dark:invert-0 transition-all duration-300" />
                </div>
                <span className="font-black text-xl text-slate-900 dark:text-white tracking-tight transition-colors duration-300">ACADEXTECH</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-8 transition-colors duration-300">
                Building the digital foundations of next-generation education. We provide turnkey software and hardware infrastructure for ambitious institutes.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6 transition-colors duration-300">Platform</h4>
              <ul className="space-y-4">
                <li><a href="/#softwares" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">BatchFlow CRM</a></li>
                <li><a href="/#softwares" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">TestLab AI</a></li>
                <li><a href="/#softwares" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">FamFlow Partner</a></li>
                <li><a href="/#services" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Hardware Setups</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6 transition-colors duration-300">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter Form */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-6 transition-colors duration-300">Stay Updated</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 transition-colors duration-300">
                Subscribe to our engineering newsletter for updates on new infrastructure rollouts.
              </p>
              <div className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="director@institute.edu"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-[#121A2F]/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex-shrink-0 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 border-t border-slate-200 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
            <p className="text-xs font-medium text-slate-500">
              © {new Date().getFullYear()} Acadex Technologies. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Hash, link: "#" },
                { icon: Briefcase, link: "#" },
                { icon: Video, link: "#" },
                { icon: Camera, link: "#" }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.link}
                  whileHover={{ y: -3, scale: 1.1, color: '#60A5FA' }}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#121A2F]/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
