import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronLeft, ChevronRight,
  Video, Monitor, Presentation, 
  CheckCircle2, Server, Mic, Camera, Wifi
} from 'lucide-react';
import poster1 from '../assets/poster_1.jpg';
import poster2 from '../assets/poster_2.jpg';
import poster3 from '../assets/poster_3.jpg';
import labPoster1 from '../assets/lab_poster_1.jpg';

export default function SetupPage() {
  const { type } = useParams();

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomSize: 'Standard (Up to 30 students)'
  });

  const setupContent = {
    studio: {
      title: 'Studio Setup',
      icon: Video,
      color: 'text-indigo-600 dark:text-indigo-400',
      description: 'Professional recording environment designed for high-end online educators and content creators. Achieve broadcast-quality video and crystal-clear acoustics.',
      images: [
        poster3,
        poster2,
        poster1
      ],
      specs: [
        { label: 'Camera System', value: '4K PTZ Sony Tracking Camera', icon: Camera },
        { label: 'Audio', value: 'Studio-grade Condenser Microphones', icon: Mic },
        { label: 'Acoustics', value: 'Polyurethane Soundproofing Panels', icon: Server },
        { label: 'Lighting', value: 'Professional Three-point LED Rig', icon: Video }
      ]
    },
    lab: {
      title: 'Lab Setup',
      icon: Monitor,
      color: 'text-emerald-600 dark:text-emerald-400',
      description: 'Modern, high-performance computer laboratories for technical education. Equipped with centralized networking and ergonomic hardware.',
      images: [
        labPoster1,
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200'
      ],
      specs: [
        { label: 'Workstations', value: 'Intel Core i7 / 16GB RAM / 512GB SSD', icon: Monitor },
        { label: 'Networking', value: 'Cisco Gigabit Ethernet Switching', icon: Wifi },
        { label: 'Power', value: 'Centralized 10kVA UPS Backup', icon: Server },
        { label: 'Furniture', value: 'Ergonomic Modular Desks & Seating', icon: Monitor }
      ]
    },
    classroom: {
      title: 'Classroom Setup',
      icon: Presentation,
      color: 'text-blue-600 dark:text-brand-400',
      description: 'Interactive and engaging physical learning spaces featuring smart boards and automated lecture capture systems.',
      images: [
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1200'
      ],
      specs: [
        { label: 'Display', value: '75-inch Interactive Flat Panel (4K)', icon: Presentation },
        { label: 'Audio', value: 'Ceiling-mounted Array Speakers', icon: Mic },
        { label: 'Capture', value: 'Automated AI Lecture Tracking', icon: Camera },
        { label: 'Podium', value: 'Smart Digital Instructor Podium', icon: Monitor }
      ]
    }
  };

  const content = setupContent[type];

  if (!content) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 bg-transparent transition-colors duration-500">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Setup Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = content.icon;

  useEffect(() => {
    if (!content) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % content.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [content]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % content.images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? content.images.length - 1 : prev - 1));
  };

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert(`Quote requested for ${content.title} by ${formData.name}`);
  };

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-32 transition-colors duration-500">
      
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Architecture for Learning</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-[#121A2F] border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm dark:shadow-none transition-colors duration-300`}>
                <Icon className={`w-7 h-7 ${content.color} transition-colors duration-300`} />
              </div>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${content.color} transition-colors duration-300`}>Portal Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
              {content.title}
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg font-medium leading-relaxed transition-colors duration-300">
            {content.description}
          </p>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Carousel & Specs */}
        <div className="space-y-12">
          
          {/* Animated Carousel */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 dark:bg-[#121A2F] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl group transition-colors duration-300">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={content.images[currentIndex]}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute inset-0 w-full h-full object-contain"
                alt={`${content.title} slide ${currentIndex + 1}`}
              />
            </AnimatePresence>
            
            {/* Carousel Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between p-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {content.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/40'}`} 
                />
              ))}
            </div>
          </div>

          {/* Specs Grid */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.specs.map((spec, idx) => (
                <div key={idx} className="bg-white dark:bg-[#121A2F] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
                  <spec.icon className={`w-6 h-6 mb-4 ${content.color} transition-colors duration-300`} />
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{spec.label}</h4>
                  <p className="text-slate-900 dark:text-white font-medium transition-colors duration-300">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Sticky Quote Form */}
        <div>
          <div className="bg-white dark:bg-[#121A2F] rounded-3xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl sticky top-32 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Request an Installation Quote</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 transition-colors duration-300">
              Our engineering team will evaluate your physical infrastructure and provide a detailed bill of materials.
            </p>

            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@institute.edu"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#121A2F] text-slate-600 dark:text-slate-400 text-sm font-semibold transition-colors duration-300">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 w-full px-4 py-3.5 rounded-r-xl bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="98765 43210"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">Room / Institute Size</label>
                <div className="relative">
                  <select 
                    value={formData.roomSize}
                    onChange={(e) => setFormData({...formData, roomSize: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option>Standard (Up to 30 students)</option>
                    <option>Medium (30 - 100 students)</option>
                    <option>Auditorium (100+ students)</option>
                    <option>Entire Campus Deployment</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-start gap-3 mt-4 transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                  By requesting a quote, you agree to our initial site-visit evaluation protocol. A representative will contact you within 24 hours.
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-4 rounded-xl bg-[#3B82F6] hover:bg-blue-500 text-white font-bold tracking-wide transition-colors shadow-[0_10px_20px_rgba(59,130,246,0.2)] dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_25px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] mt-4"
              >
                Submit Request
              </motion.button>
            </form>
          </div>
        </div>

      </div>
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
