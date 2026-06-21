import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Calendar, 
  GraduationCap, 
  MessageSquare, 
  Megaphone, 
  Smartphone, 
  TrendingUp, 
  Zap, 
  RefreshCw, 
  Shield, 
  HeartHandshake, 
  Menu, 
  X, 
  Check, 
  Loader2, 
  ChevronRight, 
  AlertCircle,
  ArrowRight,
  Sparkles,
  Download,
  Sun,
  Moon
} from 'lucide-react';
import { supabase } from './supabaseClient';
import logoUrl from './assets/logo.jpg';

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Load and apply dark mode
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    instituteName: '',
    studentRange: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Toast notifications state
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  // Detect scroll to style header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form input validation
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (!/^\d{10}$/.test(cleanPhone)) {
      errors.phone = 'Please enter a valid 10-digit number';
    }
    
    if (!formData.instituteName.trim()) {
      errors.instituteName = 'School/Institute Name is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submission handler
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      if (!supabase) {
        throw new Error('Supabase client is not initialized. Please verify VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY variables in your .env file.');
      }
      const { error } = await supabase
        .from('demo_bookings')
        .insert([
          {
            full_name: formData.fullName,
            phone: formData.phone,
            institute_name: formData.instituteName,
            student_range: formData.studentRange || null
          }
        ]);
        
      if (error) throw error;
      
      // Success flow
      showToast('success', 'Thanks! Our team will contact you shortly.');
      setFormData({
        fullName: '',
        phone: '',
        instituteName: '',
        studentRange: ''
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting booking:', error);
      showToast('error', error.message || 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toast trigger
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Reset form errors when fields change
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-brand-500 selection:text-white relative">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <div className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl border text-sm font-medium ${
            toast.type === 'success' 
              ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 text-emerald-800' 
              : 'bg-rose-50 dark:bg-rose-900/30 border-rose-200 text-rose-800'
          }`}>
            {toast.type === 'success' ? (
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            )}
            <div>
              <p className="font-semibold">{toast.type === 'success' ? 'Submission Successful' : 'Submission Failed'}</p>
              <p className="text-xs opacity-90">{toast.message}</p>
            </div>
            <button onClick={() => setToast(null)} className="ml-4 opacity-60 hover:opacity-100 transition-opacity">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4 border-b border-slate-100 dark:border-slate-800' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-md shadow-brand-500/10 overflow-hidden group-hover:scale-105 transition-transform duration-300 p-0.5">
              <img src={logoUrl} alt="Acadex Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:text-brand-400 transition-colors">ACADEX</span>
              <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase -mt-1">TECHNOLOGIES</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:text-brand-400 transition-colors">Features</a>
            <a href="#why-choose-us" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:text-brand-400 transition-colors">Why Choose Us</a>
            <a href="#mobile-app" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:text-brand-400 transition-colors">Mobile App</a>
            <a href="#testimonials" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:text-brand-400 transition-colors">Testimonials</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="https://drive.google.com/drive/folders/1ERdNRhCOgkrnXml_I1EbxH2pz1zZB7f2?pli=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:text-brand-400 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-500/10 hover:shadow-lg hover:shadow-brand-500/20 active:scale-95 transition-all"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-20 right-6 left-6 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-4 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:text-brand-400 py-2 border-b border-slate-50 dark:border-slate-800"
            >
              Features
            </a>
            <a 
              href="#why-choose-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:text-brand-400 py-2 border-b border-slate-50 dark:border-slate-800"
            >
              Why Choose Us
            </a>
            <a 
              href="#mobile-app" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:text-brand-400 py-2 border-b border-slate-50 dark:border-slate-800"
            >
              Mobile App
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:text-brand-400 py-2 border-b border-slate-50 dark:border-slate-800"
            >
              Testimonials
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1ERdNRhCOgkrnXml_I1EbxH2pz1zZB7f2?pli=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:text-brand-400 py-2 border-b border-slate-50 dark:border-slate-800 flex items-center gap-2"
            >
              <Download className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <span>Download Desktop App</span>
            </a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-between text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 py-2 border-b border-slate-50 dark:border-slate-800"
            >
              <span>Dark Mode</span>
              {darkMode ? <Sun className="w-5 h-5 text-brand-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-2 w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-center shadow-md active:scale-[0.98] transition-all"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:bg-slate-950">
        
        {/* Soft floating background blobs */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-300/20 to-indigo-300/25 blur-3xl -z-10 animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent-200/10 to-brand-200/20 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-brand-600/10" />
              <span>All-In-One School Suite</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              The Smartest Way to <br />
              <span className="text-gradient">Manage Your Classes</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
              Track attendance, coordinate lecture timetables, grade exams, and send instant WhatsApp alerts to parents—all in one secure, real-time analytics dashboard built for modern educational institutes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 active:scale-95 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>Book Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://drive.google.com/drive/folders/1ERdNRhCOgkrnXml_I1EbxH2pz1zZB7f2?pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-bold text-base border border-slate-200 dark:border-slate-700 hover:border-slate-300 shadow-sm active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                <span>Install Desktop App</span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="w-full border-t border-slate-200 dark:border-slate-700/80 pt-8 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">500+</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Institutes Trusted</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">Instant</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">WhatsApp Alerts</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">100%</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Secure & Synced</p>
              </div>
            </div>
          </div>

          {/* Right Vector Illustration Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-[460px] bg-slate-900 rounded-3xl p-3 shadow-2xl shadow-slate-900/40 border border-slate-800">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold font-mono uppercase tracking-wider">ACADEX OS v2.4</div>
                <div className="w-12" />
              </div>

              {/* Window Body Mockup */}
              <div className="bg-slate-950 rounded-2xl p-4 text-slate-300 font-sans text-xs">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/50">
                    <span className="text-[10px] font-semibold text-slate-400 block mb-0.5">Students Present Today</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-white">94.8%</span>
                      <span className="text-[9px] text-emerald-500 font-semibold">+1.2%</span>
                    </div>
                  </div>
                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/50">
                    <span className="text-[10px] font-semibold text-slate-400 block mb-0.5">Scheduled Lectures</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-white">18</span>
                      <span className="text-[9px] text-brand-400 font-semibold">4 Active</span>
                    </div>
                  </div>
                </div>

                {/* Main Graph area */}
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/40 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Weekly Attendance Trend</span>
                    <span className="text-[9px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full font-medium">This Month</span>
                  </div>
                  {/* Fake Chart bars */}
                  <div className="flex items-end justify-between h-20 px-2 pt-2">
                    {[35, 60, 50, 80, 75, 95, 90].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 w-7">
                        <div className="w-full bg-slate-800 rounded-t-sm h-full flex items-end">
                          <div 
                            style={{ height: `${height}%` }}
                            className={`w-full rounded-t-sm bg-gradient-to-t ${
                              i === 5 ? 'from-brand-600 to-brand-400' : 'from-indigo-900/80 to-indigo-700/80'
                            }`}
                          />
                        </div>
                        <span className="text-[8px] text-slate-500 dark:text-slate-400 font-semibold">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications Log */}
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">WhatsApp Delivery Queue</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] py-1 border-b border-slate-800/40">
                      <span className="text-slate-400 font-medium">Attendance Alert - Parent #9432</span>
                      <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full font-bold">SENT</span>
                    </div>
                    <div className="flex items-center justify-between text-[9px] py-1 border-b border-slate-800/40">
                      <span className="text-slate-400 font-medium">Math Marks Card - Roll #24</span>
                      <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full font-bold">SENT</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">Core Capabilities</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Powerful Features Designed for Modern Classrooms
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
              Unlock a seamless administrative experience with tools created to elevate attendance tracking, timetabling, examinations, and communication.
            </p>
          </div>

          {/* Grid Layout of 7 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 card-hover flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Student & Teacher Attendance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Mark, monitor, and audit daily attendance digitally. Auto-generate student and teacher summaries for monthly reports.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 card-hover flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Lecture Management</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Organize class timetables, map subject teachers, and manage schedule conflicts in real-time across departments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 card-hover flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-600 flex items-center justify-center mb-6 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Test & Exam Management</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Configure examinations, input raw marks, and auto-compile interactive student report cards within minutes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 card-hover flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">WhatsApp Notifications</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Deliver auto-triggered updates directly to parent and student WhatsApp numbers for attendance status, marks sheets, and emergencies.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 card-hover flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Event Management</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Coordinate academic events, configure parent-teacher association schedules, and push announcements instantly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 card-hover flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center mb-6 shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Student Mobile App</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Empower parents and pupils to inspect homework details, view syllabus timelines, download marks, and log leaves.
              </p>
            </div>

            {/* Feature 7 - Span 3 cols on large screen */}
            <div className="bg-gradient-to-br from-brand-900 to-indigo-950 text-white rounded-3xl p-8 lg:col-span-3 border border-slate-800 card-hover flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-1 bg-brand-500/25 text-brand-300 border border-brand-500/20 px-2.5 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wide">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Real-time Insights</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics Dashboard</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Consolidate all system information. Evaluate seasonal attendance fluctuations, track average performance metrics, pinpoint weak students, and review staff timetable balances inside interactive summary reports.
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold shadow-md shadow-brand-500/10 transition-all flex items-center gap-2 group whitespace-nowrap active:scale-[0.98]"
              >
                <span>Launch Analytics Demo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        
        {/* Decorative Grid Line Panel */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">Our Core Philosophy</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Designed for Simplicity, Built for Scale
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
              We focus on solving school administration challenges without the bloat. Discover why top institutes choose Acadex.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Prop 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Zero Setup Hassle</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Import current spreadsheets to migrate all student database profiles in a single click. No manual re-entry.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Real-time Sync</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Changes applied on desktop synchronize instantly with the parents' mobile app. Data is updated immediately.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Secure Cloud Storage</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Utilize automated daily database backups with banking-grade security protocols. Your school records remain secure.
              </p>
            </div>

            {/* Prop 4 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-start text-left">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Dedicated Support</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Access certified systems engineers via phone or WhatsApp for any custom training or setup questions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mobile App Highlight Section */}
      <section id="mobile-app" className="py-24 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Mockup Column */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            
            {/* Phone container mockup */}
            <div className="relative w-[280px] h-[560px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-[4px] border-slate-800 shadow-brand-500/10">
              
              {/* Ear Speaker & camera */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-slate-900 rounded-b-2xl z-10 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full mb-1" />
              </div>
              
              {/* Screen Area */}
              <div className="w-full h-full bg-slate-950 rounded-[30px] overflow-hidden text-white font-sans text-xs relative flex flex-col">
                
                {/* Status Bar */}
                <div className="h-6 px-5 pt-1.5 flex items-center justify-between text-[8px] font-bold text-slate-400">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <div className="w-4 h-2 bg-slate-500 rounded-xs" />
                  </div>
                </div>

                {/* App Header */}
                <div className="bg-brand-600 p-4 pb-6 rounded-b-[24px]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[10px] text-brand-100 font-semibold">Welcome Back,</p>
                      <p className="text-sm font-bold">Sharma Family</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-500 border border-brand-400 flex items-center justify-center font-bold">S</div>
                  </div>
                  <div className="bg-brand-700/50 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between border border-brand-500/20">
                    <span className="text-[9px] font-medium text-brand-100">Student: Aarav Sharma</span>
                    <span className="text-[8px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded-full uppercase">Class 10-A</span>
                  </div>
                </div>

                {/* App Scroll Area */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-4">
                  
                  {/* Attendance Card */}
                  <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-300">Attendance Meter</span>
                      <span className="text-[9px] text-emerald-400 font-bold">Excellect (96.4%)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[96.4%]" />
                    </div>
                  </div>

                  {/* Syllabus / Report list */}
                  <div className="space-y-2">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Recent Test Marks</span>
                    
                    <div className="bg-slate-900 rounded-lg p-2.5 border border-slate-800/80 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[10px]">Mathematics Quiz III</p>
                        <p className="text-[8px] text-slate-400">June 18, 2026</p>
                      </div>
                      <span className="text-xs font-bold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">23 / 25</span>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-2.5 border border-slate-800/80 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[10px]">Physics Term Midterm</p>
                        <p className="text-[8px] text-slate-400">June 12, 2026</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">94 / 100</span>
                    </div>
                  </div>

                  {/* Announcement Banner */}
                  <div className="bg-brand-900/40 rounded-xl p-3 border border-brand-800/50">
                    <div className="flex items-center gap-1.5 text-brand-300 mb-1">
                      <Megaphone className="w-3.5 h-3.5" />
                      <span className="font-bold text-[9px] uppercase tracking-wide">Notice Board</span>
                    </div>
                    <p className="text-[9px] text-slate-300 leading-normal">
                      Parent-Teacher Meeting scheduled for coming Saturday. Attendance is compulsory for all.
                    </p>
                  </div>

                </div>

                {/* Phone Bottom Line */}
                <div className="h-6 flex items-center justify-center bg-slate-950">
                  <div className="w-24 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>

            </div>

          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">Dedicated Portal</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Connect Parents & Students <br />to the Classroom in Real-time
            </h3>
            
            <p className="text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Our companion Mobile Application closes the feedback gap. Guardians receive automatic updates the moment attendance is registered or exam papers are finalized.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Real-time Gradebook Inspection</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Parents view comprehensive grade lists, test papers, and feedback instantly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Attendance Summary Graphs</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Log absent requests and track attendance logs through interactive visual graphs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Homework & Notice Logs</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Review current syllabus timelines, assignment criteria, and event calendars.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">Customer Stories</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Validated by Educators Worldwide
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
              Hear how administrators, tutors, and developers use Acadex Technologies to optimize their learning spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between text-left">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed mb-6">
                  "Our attendance tracking routine dropped from 15 minutes to less than 1. Pushing instant WhatsApp reports to parents decreased student absenteeism by 40% in our first semester."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 dark:text-brand-300 flex items-center justify-center font-extrabold">
                  AM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">Arjun Mehta</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Principal, Apex Career Academy</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between text-left">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed mb-6">
                  "Timetable mapping used to give our administrative staff headaches. With Acadex's conflict warning engine, planning the entire teacher roster takes only a few simple clicks."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 dark:text-brand-300 flex items-center justify-center font-extrabold">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">Sunita Kulkarni</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Dean, Stanford International School</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between text-left">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed mb-6">
                  "Setting up the Student Mobile App took no infrastructure configuration. Our parent-teacher relationship has never been this close. Best EdTech investment we have made."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 dark:text-brand-300 flex items-center justify-center font-extrabold">
                  DR
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">Dr. Rajan Sen</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Director, Sen Engineering Coaching Institute</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-900 to-indigo-950 text-white overflow-hidden p-12 md:p-16 border border-slate-800 shadow-2xl">
            
            {/* Glow dots */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
                Ready to Upgrade Your Academy?
              </h2>
              <p className="text-base md:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
                Connect your administrators, students, and parents under one unified platform. Get started in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-md shadow-brand-500/20 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Book Demo Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="https://drive.google.com/drive/folders/1ERdNRhCOgkrnXml_I1EbxH2pz1zZB7f2?pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-100 font-bold border border-slate-850 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5 text-slate-400" />
                  <span>Install Desktop App</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-left">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-md p-0.5 overflow-hidden">
                <img src={logoUrl} alt="Acadex Logo" className="w-full h-full object-contain rounded-md" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">ACADEX</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Modern school management tools and mobile suites built to synchronize classrooms and administration.
            </p>
            <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">
              ACADEX Technologies © {new Date().getFullYear()}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#mobile-app" className="hover:text-white transition-colors">Student Mobile App</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Support & Privacy</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setIsModalOpen(true)} className="hover:text-white transition-colors text-left">Book Demo</button></li>
              <li><a href="#features" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Get In Touch</h4>
            <p className="text-xs text-slate-400 mb-2 leading-relaxed">
              Interested in custom solutions? Email or message us directly.
            </p>
            <p className="text-xs font-semibold text-white">contact@acadextech.com</p>
            <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-1">Staging instance v1.0.4</p>
          </div>

        </div>
      </footer>

      {/* Book Demo Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="bg-brand-900/5 px-6 py-5 border-b border-slate-100 dark:border-slate-800 relative">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Book Acadex Free Demo</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Our EdTech engineers will schedule your walkthrough within 24 hours.</p>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="e.g. Professor Rajesh Sharma"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    formErrors.fullName 
                      ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/25 bg-rose-50 dark:bg-rose-900/30/20' 
                      : 'border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-brand-500/25'
                  } transition-all`}
                />
                {formErrors.fullName && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="e.g. 9876543210 (10 digit)"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    formErrors.phone 
                      ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/25 bg-rose-50 dark:bg-rose-900/30/20' 
                      : 'border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-brand-500/25'
                  } transition-all`}
                />
                {formErrors.phone ? (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.phone}</span>
                  </p>
                ) : (
                  <p className="text-[10px] text-slate-400 mt-1">We will send booking confirmations via SMS/WhatsApp.</p>
                )}
              </div>

              {/* Institute Name */}
              <div>
                <label htmlFor="instituteName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  School / Institute Name <span className="text-rose-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="instituteName" 
                  value={formData.instituteName}
                  onChange={(e) => handleInputChange('instituteName', e.target.value)}
                  placeholder="e.g. Apex High School"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    formErrors.instituteName 
                      ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/25 bg-rose-50 dark:bg-rose-900/30/20' 
                      : 'border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-brand-500/25'
                  } transition-all`}
                />
                {formErrors.instituteName && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.instituteName}</span>
                  </p>
                )}
              </div>

              {/* Student range */}
              <div>
                <label htmlFor="studentRange" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Number of Students <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <select 
                  id="studentRange" 
                  value={formData.studentRange}
                  onChange={(e) => handleInputChange('studentRange', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 bg-white dark:bg-slate-900 transition-all cursor-pointer"
                >
                  <option value="">Select range...</option>
                  <option value="<100">Less than 100 students</option>
                  <option value="100-500">100 - 500 students</option>
                  <option value="500-1000">500 - 1000 students</option>
                  <option value="1000+">More than 1000 students</option>
                </select>
              </div>

              {/* Form buttons */}
              <div className="pt-2 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-xl active:scale-95 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-500/10 active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Request Demo</span>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
