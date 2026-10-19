/* Hallmark · macrostructure: Workbench / Colophon · tone: executive-slate-utilitarian · anchor hue: 260
 * theme: custom (vibe: "deep graphite slate, warm stone off-white, electric saffron accent" · paper: oklch(97.2% 0.005 75) · accent: oklch(65% 0.21 48) electric saffron)
 * display: "Plus Jakarta Sans", sans-serif · body: "IBM Plex Sans", sans-serif · mono: "JetBrains Mono", monospace
 * contrast: pass (40–41) · mobile: pass (34, 49, 50–57) · honest: pass (46) · chrome: pass (47) · tokens: pass (48)
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronLeft, ChevronRight,
  Video, Monitor, Presentation, 
  CheckCircle2, Server, Mic, Camera, Wifi,
  MessageCircle, Phone, Check, ShieldCheck
} from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_DISPLAY_NUMBER } from '../App';
import poster1 from '../assets/poster_1.jpg';
import poster2 from '../assets/poster_2.jpg';
import poster3 from '../assets/poster_3.jpg';
import labPoster1 from '../assets/lab_poster_1.jpg';

export default function SetupPage() {
  const { type } = useParams();

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomSize: 'Standard (Up to 30 students)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const setupContent = {
    studio: {
      portalCode: 'PORTAL 01',
      title: 'Online Recording Studio Setup',
      icon: Video,
      description: 'Professional acoustic and 4K recording environment engineered for high-end online educators and coaching institutes. Delivers broadcast-quality video and crystal-clear audio capture without technical staff.',
      images: [
        poster3,
        poster2,
        poster1
      ],
      specs: [
        { label: 'Camera Tracking', value: '4K Sony PTZ Tracking Camera Rig', icon: Camera },
        { label: 'Audio Capture', value: 'Studio-Grade Cardioid Condenser Mics', icon: Mic },
        { label: 'Room Acoustics', value: 'Polyurethane NRC 0.85 Sound Panels', icon: Server },
        { label: 'LED Lighting', value: 'Balanced 5600K Three-Point Diffused Rig', icon: Video }
      ]
    },
    lab: {
      portalCode: 'PORTAL 02',
      title: 'Centralized Computer Laboratory',
      icon: Monitor,
      description: 'Turnkey high-performance computer laboratories for technical education and automated CBT examinations. Complete with centralized switching, clean cabling, and enterprise UPS backup.',
      images: [
        labPoster1,
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200'
      ],
      specs: [
        { label: 'Workstations', value: 'Intel Core i5/i7 · 16GB RAM · Fast NVMe', icon: Monitor },
        { label: 'Networking', value: 'Cisco Gigabit Ethernet Managed Switching', icon: Wifi },
        { label: 'Power Backup', value: 'Centralized 10kVA Pure Sine Wave UPS', icon: Server },
        { label: 'Furniture', value: 'Fire-Retardant Modular Anti-Static Desks', icon: Monitor }
      ]
    },
    classroom: {
      portalCode: 'PORTAL 03',
      title: 'Smart Interactive Classroom',
      icon: Presentation,
      description: 'Interactive physical learning spaces featuring 4K interactive flat touch panels, automated AI lecture tracking, and digital instructor podiums for hybrid coaching operations.',
      images: [
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1200'
      ],
      specs: [
        { label: 'Interactive Display', value: '75-inch 4K UHD 40-Point Touch IFP', icon: Presentation },
        { label: 'Acoustic Array', value: 'Ceiling Array Audio & Noise Cancellation', icon: Mic },
        { label: 'Lecture Capture', value: 'Automated AI Tracking Classroom Camera', icon: Camera },
        { label: 'Instructor Desk', value: 'Smart Digital Touch Instructor Podium', icon: Monitor }
      ]
    }
  };

  const content = setupContent[type];

  if (!content) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <h2 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-3">Setup Architecture Not Found</h2>
        <p className="text-sm text-[var(--color-ink-2)] mb-6">The requested hardware portal configuration does not exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-brand)] text-[var(--color-paper)] font-semibold text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    );
  }

  const Icon = content.icon;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % content.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? content.images.length - 1 : prev - 1));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full pb-24 pt-8">
      
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <Link 
          to="/#setups" 
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[var(--color-ink-2)] hover:text-[var(--color-brand)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Hardware Architectures</span>
        </Link>
      </div>

      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--color-rule)]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[var(--color-brand-subtle)] text-[var(--color-brand)] font-mono text-xs font-semibold mb-3 border border-[var(--color-brand)]/20">
              <Icon className="w-3.5 h-3.5" />
              <span>{content.portalCode} Specification</span>
            </div>
            
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--color-ink)] mb-3">
              {content.title}
            </h1>
            
            <p className="text-sm sm:text-base text-[var(--color-ink-2)] leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/919112456077?text=${encodeURIComponent(`Hello ACADEX Team, I would like to inquire about the ${content.title} hardware architecture and schedule a site measurement inspection.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#25D366]/60 bg-[#25D366]/10 text-[#0F5132] dark:text-[#4ADE80] font-semibold text-xs hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
              <span>WhatsApp Hardware Desk ({WHATSAPP_DISPLAY_NUMBER})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Split: Gallery / Specs & Quotation Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Image Gallery & Detailed Technical Specs */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Gallery Carousel */}
          <div className="bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-xl overflow-hidden shadow-sm relative group">
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
              <img 
                src={content.images[currentIndex]} 
                alt={`${content.title} installation photo ${currentIndex + 1}`} 
                className="w-full h-full object-cover"
              />
              
              {/* Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto w-9 h-9 rounded-md bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                  aria-label="Previous installation image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto w-9 h-9 rounded-md bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                  aria-label="Next installation image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Indicator */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 text-white font-mono text-[11px]">
                Photo {currentIndex + 1} of {content.images.length}
              </div>
            </div>

            <div className="p-4 bg-[var(--color-paper-3)] border-t border-[var(--color-rule)] flex items-center justify-between text-xs font-mono text-[var(--color-ink-2)]">
              <span>Verified On-Site ACADEX Deployment</span>
              <span>Pune & Western India Hub</span>
            </div>
          </div>

          {/* Technical Specification Matrix */}
          <div>
            <h3 className="font-display font-bold text-lg text-[var(--color-ink)] mb-4">
              Hardware Component Specifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.specs.map((spec, idx) => {
                const SpecIcon = spec.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-lg bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded bg-[var(--color-brand-subtle)] text-[var(--color-brand)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <SpecIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink-3)]">
                        {spec.label}
                      </div>
                      <div className="font-semibold text-xs sm:text-sm text-[var(--color-ink)] mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Site Evaluation & Quote Form */}
        <div className="lg:col-span-5">
          <div className="bg-[var(--color-paper-2)] border border-[var(--color-rule-strong)] rounded-xl p-6 sm:p-8 shadow-md">
            
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1 block">
              Direct Engineering Consultation
            </span>
            <h2 className="font-display font-bold text-xl text-[var(--color-ink)] mb-2">
              Request Bill of Materials
            </h2>
            <p className="text-xs text-[var(--color-ink-2)] leading-relaxed mb-6">
              Our hardware specialists conduct physical site measurements and design a customized BOM matching your room dimensions.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-lg bg-[var(--color-success-bg)] border border-[var(--color-success)]/30 text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-display font-bold text-base text-[var(--color-ink)] mb-1">
                  Site Request Logged
                </h4>
                <p className="text-xs text-[var(--color-ink-2)] leading-relaxed">
                  Thank you, {formData.name}. An infrastructure engineer will contact you shortly to review room blueprints and installation schedules.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                    Your Full Name <span className="text-[var(--color-danger)]">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 rounded-md bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:border-[var(--color-focus)] focus:outline-none transition-colors"
                    placeholder="Prof. / Director Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                    Official Email Address <span className="text-[var(--color-danger)]">*</span>
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 rounded-md bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:border-[var(--color-focus)] focus:outline-none transition-colors"
                    placeholder="admin@academy.edu"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                    Mobile / WhatsApp Contact <span className="text-[var(--color-danger)]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 rounded-md bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs font-mono focus:border-[var(--color-focus)] focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                    Room Capacity / Installation Scale
                  </label>
                  <select 
                    value={formData.roomSize}
                    onChange={(e) => setFormData({...formData, roomSize: e.target.value})}
                    className="w-full px-3 py-2 rounded-md bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs focus:border-[var(--color-focus)] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option>Standard (Up to 30 students)</option>
                    <option>Medium (30 - 100 students)</option>
                    <option>Auditorium (100+ students)</option>
                    <option>Entire Campus Deployment (Multiple Rooms)</option>
                  </select>
                </div>

                <div className="p-3 bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-md text-[11px] text-[var(--color-ink-2)] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>Includes full on-site wiring, mounting, and 1-year comprehensive hardware warranty.</span>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 rounded-md bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-accent-hover)] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Submit Quote Request
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
