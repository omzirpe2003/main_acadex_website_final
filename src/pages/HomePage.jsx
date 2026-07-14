import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { supabase } from '../supabaseClient';
import { 
  Users, LineChart, CalendarCheck, PieChart, 
  Sparkles, LayoutGrid, FileEdit, FileDown,
  UserPlus, PhoneCall, TrendingUp, CircleDollarSign,
  Waypoints, Cloud, ShieldCheck, User, MessageCircle, ClipboardList
} from 'lucide-react';
import logoUrl from '../assets/logo.jpg';
import poster1 from '../assets/poster_1.jpg';
import poster2 from '../assets/poster_2.jpg';
import poster3 from '../assets/poster_3.jpg';
import labPoster1 from '../assets/lab_poster_1.jpg';

function MagneticButton({ children, className, href }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: mouseX, y: mouseY }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
      <a href={href} className={className}>{children}</a>
    </motion.div>
  );
}

// Helper component for auto-scrolling laptop screens
function LaptopCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 bg-slate-900 dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover mix-blend-lighten opacity-80"
          alt="Dashboard Preview"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 dark:from-[#0B1120]/80 via-transparent to-transparent pointer-events-none transition-colors duration-300" />
    </div>
  );
}

export default function HomePage() {
  const [formData, setFormData] = useState({
    instituteName: '',
    fullName: '',
    email: '',
    mobile: '',
    institutionSize: '500 - 1,000 Students'
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (supabase) {
      try {
        const { error } = await supabase
          .from('demo_bookings')
          .insert([
            { 
              institute_name: formData.instituteName,
              full_name: formData.fullName,
              email: formData.email,
              mobile: formData.mobile,
              institution_size: formData.institutionSize
            }
          ]);
          
        if (error) throw error;
        
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          setFormData({
            instituteName: '',
            fullName: '',
            email: '',
            mobile: '',
            institutionSize: '500 - 1,000 Students'
          });
        }, 4000);
      } catch (error) {
        console.error("Error saving booking:", error.message);
        alert("Failed to book demo. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.warn("Supabase not configured. Simulating success.");
      setTimeout(() => {
        setIsSubmitting(false);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          setFormData({
            instituteName: '',
            fullName: '',
            email: '',
            mobile: '',
            institutionSize: '500 - 1,000 Students'
          });
        }, 4000);
      }, 1000);
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Placeholder Images for Laptops
  const batchflowImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200'
  ];
  
  const testlabImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200',
    'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200',
    'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200'
  ];

  const famflowImages = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200'
  ];

  return (
    <div className="w-full min-h-screen pb-32 overflow-hidden bg-transparent">
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated Logo Container */}
          <motion.div 
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-10"
          >
            {/* Continuous Floating/Glowing Animation */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  "0px 0px 40px rgba(59,130,246,0.3)", 
                  "0px 0px 80px rgba(59,130,246,0.7)", 
                  "0px 0px 40px rgba(59,130,246,0.3)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut" 
              }}
              className="w-full h-full bg-slate-900 dark:bg-white p-2 rounded-3xl flex items-center justify-center overflow-hidden transition-colors duration-300"
            >
              <img src={logoUrl} alt="Acadex Logo Big" className="w-full h-full object-contain transition-all duration-300" />
            </motion.div>
          </motion.div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6 transition-colors duration-300"
          >
            MAKE YOUR CLASSROOM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 animate-gradient-x">SMART WITH ACADEX</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-slate-600 dark:text-[#8BA4D8] text-base md:text-lg mb-10 max-w-2xl mx-auto font-medium transition-colors duration-300"
          >
            Next-generation educational infrastructure. Seamless automation for the modern learning environment.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <a href="#softwares" className="px-10 py-3.5 text-lg rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 font-bold tracking-wide hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-all duration-300 border border-blue-200 dark:border-blue-500/30 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Software
            </a>
            <a href="#services" className="px-10 py-3.5 text-lg rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Innovative Solutions (Software Detailed) */}
      <section id="softwares" className="py-10 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide transition-colors duration-300">
            Smarter Solutions. Stronger Institutes.
          </h2>
          <p className="text-[#3B82F6] font-semibold tracking-widest text-sm uppercase">
            One Company. Three Powerful Software.
          </p>
        </motion.div>

        {/* BatchFlow Row */}
        <div className="flex flex-col lg:flex-row items-center gap-16 py-16 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg shadow-blue-500/20">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">BatchFlow</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium transition-colors duration-300">Managing Institute Software</p>
              </div>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-3 gap-6 mt-12 mb-8"
            >
              {[
                { icon: Users, label: "Student\nManagement" },
                { icon: LineChart, label: "Fees &\nAccounts" },
                { icon: CalendarCheck, label: "Attendance &\nExams" },
                { icon: PieChart, label: "Reports &\nAnalytics" },
                { icon: MessageCircle, label: "WhatsApp\nMessaging" },
                { icon: ClipboardList, label: "Test\nManagement" },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={staggerItem} className="flex flex-col items-center text-center group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0], y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-full bg-white dark:bg-[#121A2F] border border-slate-200 dark:border-[#1E293B] flex items-center justify-center mb-3 group-hover:bg-slate-50 dark:group-hover:bg-[#1E293B] group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all"
                  >
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-pre-line group-hover:text-blue-600 dark:group-hover:text-white transition-colors">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8">
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-300">Simplify operations. Empower growth.</p>
              <MagneticButton 
                href="#demo-form" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#3B82F6] hover:bg-blue-500 text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                Book Demo
              </MagneticButton>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="w-full lg:w-1/2 perspective-[1000px]"
          >
            {/* Laptop Mockup with 3D Tilt */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5, z: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mx-auto w-full max-w-[600px] mt-8 lg:mt-0 cursor-pointer"
            >
              <div className="bg-slate-800 dark:bg-[#1E293B] border-[8px] border-slate-900 dark:border-[#0F172A] rounded-t-2xl rounded-b-sm aspect-[16/10] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-colors duration-300">
                <LaptopCarousel images={batchflowImages} />
              </div>
              <div className="bg-slate-700 dark:bg-[#334155] h-3 sm:h-4 rounded-b-2xl w-[112%] -ml-[6%] relative shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-slate-800 dark:bg-[#1E293B] rounded-b-md transition-colors duration-300"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* TestLab Row */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 py-16 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="w-full lg:w-1/2 pl-0 lg:pl-12"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">TestLab</h3>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(99,102,241,0.1)] dark:shadow-[0_0_10px_rgba(99,102,241,0.2)] transition-colors duration-300">Coming Soon</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium mt-1 transition-colors duration-300">AI-Powered Test Generator</p>
              </div>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-4 gap-4 mt-12 mb-8"
            >
              {[
                { icon: Sparkles, label: "AI Question\nGeneration" },
                { icon: LayoutGrid, label: "Multiple Question\nTypes" },
                { icon: FileEdit, label: "Custom Test\nCreation" },
                { icon: FileDown, label: "Instant Test\nExport" },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={staggerItem} className="flex flex-col items-center text-center group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 180, y: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-white dark:bg-[#121A2F] border border-slate-200 dark:border-[#1E293B] flex items-center justify-center mb-3 group-hover:bg-slate-50 dark:group-hover:bg-[#1E293B] group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all"
                  >
                    <feature.icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400 transition-colors" />
                  </motion.div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-pre-line group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">Smarter tests. Better results.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="w-full lg:w-1/2 perspective-[1000px]"
          >
            {/* Laptop Mockup with 3D Tilt */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, z: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mx-auto w-full max-w-[600px] mt-8 lg:mt-0 cursor-pointer"
            >
              <div className="bg-slate-800 dark:bg-[#1E293B] border-[8px] border-slate-900 dark:border-[#0F172A] rounded-t-2xl rounded-b-sm aspect-[16/10] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-colors duration-300">
                <LaptopCarousel images={testlabImages} />
              </div>
              <div className="bg-slate-700 dark:bg-[#334155] h-3 sm:h-4 rounded-b-2xl w-[112%] -ml-[6%] relative shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-slate-800 dark:bg-[#1E293B] rounded-b-md transition-colors duration-300"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FamFlow Row */}
        <div className="flex flex-col lg:flex-row items-center gap-16 py-16 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">FamFlow</h3>
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 dark:bg-teal-500/20 border border-teal-500/20 dark:border-teal-500/30 text-teal-600 dark:text-teal-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(45,212,191,0.1)] dark:shadow-[0_0_10px_rgba(45,212,191,0.2)] transition-colors duration-300">Coming Soon</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium mt-1 transition-colors duration-300">Coaching Institute Marketing Partners</p>
              </div>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-4 gap-4 mt-12 mb-8"
            >
              {[
                { icon: UserPlus, label: "Partner\nOnboarding" },
                { icon: PhoneCall, label: "Lead\nManagement" },
                { icon: TrendingUp, label: "Performance\nTracking" },
                { icon: CircleDollarSign, label: "Commission\nManagement" },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={staggerItem} className="flex flex-col items-center text-center group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: -15, y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-white dark:bg-[#121A2F] border border-slate-200 dark:border-[#1E293B] flex items-center justify-center mb-3 group-hover:bg-slate-50 dark:group-hover:bg-[#1E293B] group-hover:border-teal-500/50 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all"
                  >
                    <feature.icon className="w-6 h-6 text-teal-500 dark:text-teal-400 transition-colors" />
                  </motion.div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-pre-line group-hover:text-teal-600 dark:group-hover:text-white transition-colors">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 transition-colors duration-300">Expand your reach. Grow together.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="w-full lg:w-1/2 perspective-[1000px]"
          >
            {/* Laptop Mockup with 3D Tilt */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5, z: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative mx-auto w-full max-w-[600px] mt-8 lg:mt-0 cursor-pointer"
            >
              <div className="bg-slate-800 dark:bg-[#1E293B] border-[8px] border-slate-900 dark:border-[#0F172A] rounded-t-2xl rounded-b-sm aspect-[16/10] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-colors duration-300">
                <LaptopCarousel images={famflowImages} />
              </div>
              <div className="bg-slate-700 dark:bg-[#334155] h-3 sm:h-4 rounded-b-2xl w-[112%] -ml-[6%] relative shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-slate-800 dark:bg-[#1E293B] rounded-b-md transition-colors duration-300"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bento Box Pillars */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {/* Card 2 */}
          <motion.div variants={staggerItem} className="md:col-span-2 rounded-3xl bg-white/80 dark:bg-gradient-to-br dark:from-[#121A2F]/80 dark:to-[#0B1120]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
             <div className="absolute right-0 bottom-0 p-6 opacity-10 dark:opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all"><Cloud className="w-16 h-16 text-indigo-500" /></div>
             <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide mb-2 z-10 transition-colors">100% Cloud Native</h4>
             <p className="text-sm text-slate-600 dark:text-slate-400 z-10 relative pr-12 transition-colors">Access your entire campus infrastructure from anywhere, on any device, with zero local servers required.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={staggerItem} className="rounded-3xl bg-white/80 dark:bg-gradient-to-br dark:from-[#121A2F]/80 dark:to-[#0B1120]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 relative overflow-hidden group flex flex-col justify-between hover:border-teal-500/50 transition-colors">
             <ShieldCheck className="w-8 h-8 text-teal-500 dark:text-teal-400 mb-4 group-hover:scale-125 transition-transform" />
             <div>
               <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wide mb-1 transition-colors">Enterprise Security</h4>
               <p className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Bank-grade encryption.</p>
             </div>
          </motion.div>

          {/* Card 4 (Original) */}
          <motion.div variants={staggerItem} className="rounded-3xl bg-white/80 dark:bg-gradient-to-br dark:from-[#121A2F]/80 dark:to-[#0B1120]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 relative overflow-hidden group flex flex-col justify-between hover:border-amber-500/50 transition-colors">
             <TrendingUp className="w-8 h-8 text-amber-500 dark:text-amber-400 mb-4 group-hover:-translate-y-2 transition-transform" />
             <div>
               <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wide mb-1 transition-colors">Infinite Scale</h4>
               <p className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Built for massive growth.</p>
             </div>
          </motion.div>

          {/* Card 5 (AI Automation) */}
          <motion.div variants={staggerItem} className="md:col-span-2 rounded-3xl bg-white/80 dark:bg-gradient-to-br dark:from-[#121A2F]/80 dark:to-[#0B1120]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
             <div className="absolute right-0 bottom-0 p-6 opacity-10 dark:opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all"><Sparkles className="w-16 h-16 text-purple-500" /></div>
             <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide mb-2 z-10 transition-colors">AI Automation</h4>
             <p className="text-sm text-slate-600 dark:text-slate-400 z-10 relative pr-12 transition-colors">Automate routine administrative tasks and generate powerful insights with our built-in intelligence.</p>
          </motion.div>

          {/* Card 6 (Seamless Integration) */}
          <motion.div variants={staggerItem} className="md:col-span-2 rounded-3xl bg-white/80 dark:bg-gradient-to-br dark:from-[#121A2F]/80 dark:to-[#0B1120]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
             <div className="absolute right-0 bottom-0 p-6 opacity-10 dark:opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all"><Waypoints className="w-16 h-16 text-blue-500" /></div>
             <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wide mb-2 z-10 transition-colors">Seamless Integration</h4>
             <p className="text-sm text-slate-600 dark:text-slate-400 z-10 relative pr-12 transition-colors">Connect all your tools effortlessly through our open APIs and pre-built software bridges.</p>
          </motion.div>
        </motion.div>

      </section>

      {/* Architecture for Learning (Services) */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Architecture for Learning</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
            Turnkey infrastructure solutions for every educational scale.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { img: poster3, portal: "Portal 01", title: "Studio Setup", link: "/setup/studio" },
            { img: labPoster1, portal: "Portal 02", title: "Lab Setup", link: "/setup/lab" },
            { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800", portal: "Portal 03", title: "Classroom Setup", link: "/setup/classroom" }
          ].map((setup, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Link to={setup.link} className="group block relative h-[320px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${setup.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 dark:from-[#0B1120] dark:via-[#0B1120]/80 to-transparent transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B82F6] uppercase mb-2 block">{setup.portal}</span>
                  <h3 className="text-xl font-bold text-white">{setup.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Embedded Demo Form */}
      <section id="demo-form" className="py-20 px-6 max-w-[800px] mx-auto overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white dark:bg-[#121A2F] rounded-3xl p-10 md:p-14 border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-2xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">Book Your Batchflow Demo</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
              Experience the future of classroom automation. Schedule a personal walkthrough with our systems engineers.
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Institution Name</label>
              <input 
                type="text" 
                value={formData.instituteName}
                onChange={(e) => setFormData({...formData, instituteName: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="E.g. Greenfield Academy"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Dr. Julian Vance"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Institution Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="vance@academy.edu"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#121A2F] text-slate-600 dark:text-slate-400 text-sm font-semibold transition-colors">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="flex-1 w-full px-4 py-3 rounded-r-lg bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="98765 43210"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Institution Size</label>
                <div className="relative">
                  <select 
                    value={formData.institutionSize}
                    onChange={(e) => setFormData({...formData, institutionSize: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option>100 - 500 Students</option>
                    <option>500 - 1,000 Students</option>
                    <option>1,000 - 5,000 Students</option>
                    <option>5,000+ Students</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-bold tracking-wide transition-colors mt-4 shadow-[0_10px_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(59,130,246,0.4)] ${isSubmitting ? 'bg-slate-400 cursor-not-allowed opacity-80' : 'bg-[#3B82F6] hover:bg-blue-500 hover:shadow-[0_15px_25px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]'}`}
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
            </motion.button>
            
            <p className="text-[10px] text-slate-500 dark:text-slate-600 text-center font-mono mt-6 tracking-widest uppercase transition-colors">
              Secure Transmission via AcadexTech Protocol v2.4
            </p>
          </form>
        </motion.div>
      </section>

      {/* Booking Confirmation Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-[#121A2F] rounded-3xl p-8 max-w-sm w-full text-center border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">Demo Booked!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm relative z-10">
                Thank you, <strong className="text-slate-900 dark:text-slate-200">{formData.fullName}</strong>. Our team will contact you shortly to schedule the walkthrough.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function ChevronDown(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}
