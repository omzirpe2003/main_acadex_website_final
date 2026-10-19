/* ACADEX Technologies · HomePage · Blue & White + Full Dark Mode · Icons-Rich */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';
import {
  CheckCircle2, MessageCircle, ArrowRight, Users, Calendar,
  FileText, Bell, Monitor, BarChart3, Clock, Zap, Shield,
  GraduationCap, BookOpen, Award, TrendingUp, Phone, Star,
  Fingerprint, ClipboardList, IndianRupee, Brain, LayoutTemplate,
  Download, Send, Megaphone, UserPlus, Share2, Lock,
  MapPin, Settings, Rocket, Wifi, Timer, School, WifiHigh,
  Presentation, Sparkles, Eye
} from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_DISPLAY_NUMBER } from '../App';
import poster1 from '../assets/poster_1.jpg';
import poster2 from '../assets/poster_2.jpg';
import labPoster1 from '../assets/lab_poster_1.jpg';
import logoUrl from '../assets/logo.jpg';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

// ─── Laptop Frame with Attractive Color Shot Stage ──────────────────────────
function LaptopMockup({ title, status, statusColor, children }) {
  return (
    <div className="relative group/laptop w-full max-w-[530px] mx-auto">
      {/* ── Attractive Color Shot Ambient Aura (Inspired by Reference) ── */}
      <div className="absolute -inset-2.5 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-sky-500/20 to-amber-500/20 dark:from-blue-600/35 dark:via-sky-400/25 dark:to-orange-500/20 blur-2xl opacity-75 group-hover/laptop:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* ── Tactile Backdrop Stage Frame with Micro-Grid ── */}
      <div className="relative rounded-2xl p-2.5 sm:p-4 bg-gradient-to-b from-slate-100/90 via-white/50 to-slate-100/70 dark:from-[#111C38]/90 dark:via-[#0E172E]/90 dark:to-[#0A1022]/90 border border-slate-200/90 dark:border-slate-700/60 shadow-xl backdrop-blur-sm overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.09] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)',
            backgroundSize: '16px 16px'
          }}
        />

        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className="relative mx-auto w-full group cursor-default"
          style={{ filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.18))' }}
        >
          {/* Laptop Screen Bezel */}
          <div className="bg-[#1E293B] border-[6px] border-[#0F172A] rounded-t-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#0F172A] h-7 flex items-center justify-between px-4 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <span className="font-mono text-[10px] text-slate-400 font-medium tracking-wide">{title}</span>
              <span className={`font-mono text-[10px] font-bold ${statusColor}`}>{status}</span>
            </div>
            {/* Screen Inner Dashboard (Clean in Light, Sleek in Dark) */}
            <div className="bg-white dark:bg-[#0B132B] min-h-[200px] transition-colors duration-200">{children}</div>
          </div>
          {/* Laptop Base Stand */}
          <div className="bg-[#1E293B] h-4 rounded-b-2xl w-[105%] -ml-[2.5%] shadow-lg">
            <div className="mx-auto w-24 h-1 bg-[#334155] rounded-b-lg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Feature Bullet ───────────────────────────────────────────────────────────
function Bullet({ icon: Icon, title, desc, iconColor = 'text-blue-600 dark:text-blue-400', bgColor = 'bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900' }) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3.5">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${bgColor}`}>
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} />
      </div>
      <div>
        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{title}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ badge, icon: Icon, title, subtitle }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
      <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide mb-3 border border-blue-100 dark:border-blue-900/60">
        {Icon && <Icon className="w-3.5 h-3.5" />} {badge}
      </motion.div>
      <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-3">{title}</motion.h2>
      {subtitle && <motion.p variants={fadeUp} className="text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">{subtitle}</motion.p>}
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function HomePage({ onScrollToDemo }) {
  const [form, setForm] = useState({ instituteName: '', fullName: '', email: '', mobile: '', institutionSize: '100–500 Students' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const digits = form.mobile.replace(/\D/g, '');
    if (digits.length < 10) { setError('Enter a valid 10-digit mobile number.'); setSubmitting(false); return; }
    if (supabase) {
      try {
        const { error: err } = await supabase.from('demo_bookings').insert([{
          institute_name: form.instituteName.trim(),
          full_name: form.fullName.trim(),
          email: form.email.trim(),
          mobile: digits,
          institution_size: form.institutionSize
        }]);
        if (err) throw err;
        setSubmitted(true);
        setForm({ instituteName: '', fullName: '', email: '', mobile: '', institutionSize: '100–500 Students' });
      } catch (err) {
        setError(err.message || 'Failed to submit. Please WhatsApp us directly.');
      } finally { setSubmitting(false); }
    } else {
      setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 600);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════════════ */}
      <section id="overview" className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-[#070D1E] dark:via-[#0A1226] dark:to-[#070D1E] pt-16 pb-20 overflow-hidden transition-colors duration-200">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide mb-6 border border-blue-200 dark:border-blue-900">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Smart Class &amp; School Management System
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] text-slate-900 dark:text-white mb-5 tracking-tight">
                Make Your School<br />
                <span className="text-blue-600 dark:text-sky-400">Run Itself.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-lg">
                Automated attendance · Real-time WhatsApp alerts · Smart timetables · AI exam papers. One platform. Every school need.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={onScrollToDemo}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold text-base hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-[0_6px_24px_rgba(37,99,235,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  Book Free Demo <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-green-50 dark:bg-emerald-950/50 text-green-700 dark:text-emerald-300 font-bold text-base hover:bg-green-100 dark:hover:bg-emerald-900/50 transition-all border border-green-200 dark:border-emerald-800/60 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  WhatsApp Us
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={stagger} className="flex flex-wrap gap-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                {[
                  { icon: Timer, num: '< 30s', label: 'Attendance speed' },
                  { icon: Wifi, num: '100%', label: 'WhatsApp delivery' },
                  { icon: Rocket, num: '24 hrs', label: 'Go-live time' },
                ].map((s) => (
                  <motion.div key={s.num} variants={fadeUp} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <div className="text-xl font-display font-extrabold text-blue-600 dark:text-sky-400 leading-none">{s.num}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Laptop */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <LaptopMockup title="ACADEX OS · Institute Dashboard" status="● Live" statusColor="text-green-400">
                <div className="p-4 text-xs">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5"><School className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" /> Apex Academy</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Campus · Live Sync Active</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold">2026-27</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: 'Students', val: '1,248', color: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40', icon: Users },
                      { label: 'Present', val: '1,186', color: 'bg-green-50 text-green-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-green-100 dark:border-emerald-900/40', icon: CheckCircle2 },
                      { label: 'Fee Collected', val: '₹8.4L', color: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-100 dark:border-purple-900/40', icon: IndianRupee },
                    ].map((k) => (
                      <div key={k.label} className={`${k.color} rounded-lg p-2`}>
                        <k.icon className="w-3 h-3 mb-1 opacity-70" />
                        <div className="text-sm font-bold font-mono">{k.val}</div>
                        <div className="text-[9px] font-medium">{k.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: 'Aryan Sharma · 10-A', status: 'Present', ok: true },
                      { name: 'Diya Patil · 10-A', status: 'Absent', ok: false },
                      { name: 'Rohan Joshi · 10-A', status: 'Present', ok: true },
                    ].map((r) => (
                      <div key={r.name} className={`flex items-center justify-between p-2 rounded-lg border ${r.ok ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-100 dark:border-slate-700/60' : 'bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900/50'}`}>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{r.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${r.ok ? 'bg-green-100 dark:bg-emerald-950/80 text-green-700 dark:text-emerald-300' : 'bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300'}`}>
                          {r.ok ? <CheckCircle2 className="w-2.5 h-2.5" /> : <Bell className="w-2.5 h-2.5" />}
                          {r.status} · WA ✓
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </LaptopMockup>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          FEATURES STRIP (Crisp Royal Blue in light, Sleek Slate Navy in dark)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-blue-600 dark:bg-[#0A0F1D] py-12 dark:border-y dark:border-slate-800/80 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Fingerprint, label: 'Biometric Attendance' },
              { icon: MessageCircle, label: 'Parent WhatsApp Alerts' },
              { icon: Calendar, label: 'Smart Timetables' },
              { icon: Brain, label: 'AI Exam Papers' },
            ].map((f) => (
              <motion.div key={f.label} variants={fadeUp} className="flex flex-col items-center text-center gap-2 group">
                <div className="w-11 h-11 rounded-xl bg-white/15 dark:bg-slate-800/80 dark:border dark:border-slate-700/60 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform duration-200">
                  <f.icon className="w-5 h-5 text-white dark:text-sky-400" />
                </div>
                <span className="text-sm font-semibold text-white dark:text-slate-200">{f.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          SOFTWARE MODULES
          ══════════════════════════════════════════════════════════════════ */}
      <section id="softwares" className="py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader badge="Four Powerful Platforms" icon={Monitor} title="Everything Your School & College Needs" subtitle="BatchFlow, TestLab AI, FamFlow & PPTFlow — from ERP & AI exam papers to structured smart classroom slides." />

          {/* ── BatchFlow ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 pb-20 border-b border-slate-100 dark:border-slate-800">
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-xs font-bold mb-3 border border-green-200 dark:border-green-900/50">
                <ClipboardList className="w-3 h-3" /> Flagship ERP — Active
              </motion.div>
              <motion.h3 variants={fadeUp} className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">BatchFlow ERP</motion.h3>
              <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Your complete institute OS — from admission to result card, all in one place.</motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-7">
                <Bullet icon={Fingerprint} title="Biometric + Mobile Attendance — Instant WhatsApp" desc="Mark 40 students in 30 seconds. Parents notified the moment attendance is taken." />
                <Bullet icon={Calendar} title="Smart Timetable + Substitute Alerts" desc="Auto-detect clashes. Find and assign substitute teachers in one click." />
                <Bullet icon={IndianRupee} title="Fee Collection, GST Receipts &amp; Due Reminders" desc="Track installments, send WhatsApp reminders, generate receipts automatically." />
                <Bullet icon={BarChart3} title="Student Progress Reports &amp; Analytics" desc="Attendance history, test scores, fee records — all in one student card." />
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <button onClick={onScrollToDemo} className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md cursor-pointer">
                  Schedule Demo
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                  Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <LaptopMockup title="BatchFlow v4.2 · Management Console" status="Active" statusColor="text-green-400">
                <div className="p-4 text-xs">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      <span className="font-bold text-sm text-slate-900 dark:text-white">Attendance — Class 10-A</span>
                    </div>
                    <span className="text-blue-600 dark:text-sky-400 font-mono text-[10px] font-bold">Science Batch</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Aryan Sharma (Roll #14)', fee: '₹45,000 ✓ Paid', status: 'Present', ok: true },
                      { name: 'Diya Patil (Roll #15)', fee: '₹12,500 Due ⚠', status: 'Absent', ok: false },
                      { name: 'Rohan Joshi (Roll #16)', fee: '₹45,000 ✓ Paid', status: 'Present', ok: true },
                    ].map((r) => (
                      <div key={r.name} className={`p-2.5 rounded-lg border flex items-center justify-between ${r.ok ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-100 dark:border-slate-700/60' : 'bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900/50'}`}>
                        <div>
                          <div className={`font-semibold text-xs ${r.ok ? 'text-slate-800 dark:text-slate-200' : 'text-red-700 dark:text-red-300'}`}>{r.name}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">{r.fee}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${r.ok ? 'bg-green-100 dark:bg-emerald-950/80 text-green-700 dark:text-emerald-300' : 'bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300'}`}>
                          {r.status} · WA ✓
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </LaptopMockup>
            </motion.div>
          </motion.div>

          {/* ── TestLab AI ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 pb-20 border-b border-slate-100 dark:border-slate-800">
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <LaptopMockup title="TestLab AI · Exam Suite" status="AI Active" statusColor="text-sky-400">
                <div className="p-4 text-xs">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white"><Brain className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" /> CBSE Class 10 — Physics</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">80 Marks · 3 Hours · 34 Questions</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold">Blueprint ✓</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Section A: MCQs', marks: '16 Marks', icon: CheckCircle2 },
                      { label: 'Section B: Short Answer', marks: '24 Marks', icon: FileText },
                      { label: 'Section C: Long / Derivation', marks: '40 Marks', icon: BookOpen },
                    ].map((s) => (
                      <div key={s.label} className="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <s.icon className="w-3 h-3 text-blue-500 dark:text-sky-400" />
                          <div>
                            <div className="font-semibold text-slate-800 dark:text-slate-200">{s.label}</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{s.marks}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-blue-600 dark:text-sky-400">Generated ✓</span>
                      </div>
                    ))}
                    <div className="p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 rounded-lg flex items-center justify-between font-mono text-[10px]">
                      <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300"><Download className="w-3 h-3 text-blue-600 dark:text-sky-400" /> Answer Key + Marking Scheme</span>
                      <span className="font-bold text-blue-600 dark:text-sky-400">1-Click PDF →</span>
                    </div>
                  </div>
                </div>
              </LaptopMockup>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 text-xs font-bold mb-3 border border-sky-200 dark:border-sky-900/50">
                <Brain className="w-3 h-3" /> AI-Powered Exam Creation
              </motion.div>
              <motion.h3 variants={fadeUp} className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">TestLab AI</motion.h3>
              <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Stop spending nights writing question papers. TestLab AI builds them in minutes.</motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-7">
                <Bullet icon={LayoutTemplate} title="Curriculum-Aligned Question Paper Generator" desc="CBSE, ICSE, or State board. Select chapters, marks, difficulty — get a ready paper." iconColor="text-sky-600 dark:text-sky-400" bgColor="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900/50" />
                <Bullet icon={BookOpen} title="MCQs, Case Studies &amp; Assertion-Reasoning" desc="All formats with step-marking answer keys ready to print." iconColor="text-sky-600 dark:text-sky-400" bgColor="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900/50" />
                <Bullet icon={Award} title="Branded PDF Export with Your Logo" desc="Print-ready papers with institute logo, watermark, and exam instructions." iconColor="text-sky-600 dark:text-sky-400" bgColor="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900/50" />
                <Bullet icon={Send} title="WhatsApp Report Cards to Every Parent" desc="Upload marks → parents get PDF scorecards instantly on WhatsApp." iconColor="text-sky-600 dark:text-sky-400" bgColor="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900/50" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <button onClick={onScrollToDemo} className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md cursor-pointer">
                  Request Access
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* ── FamFlow ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 pb-20 border-b border-slate-100 dark:border-slate-800">
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 text-xs font-bold mb-3 border border-violet-200 dark:border-violet-900/50">
                <Users className="w-3 h-3" /> Parent &amp; Admissions CRM
              </motion.div>
              <motion.h3 variants={fadeUp} className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">FamFlow</motion.h3>
              <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Stronger parent trust. More admissions. Better referrals — all through WhatsApp.</motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-7">
                <Bullet icon={Megaphone} title="Parent WhatsApp Portal — Zero App Install" desc="Holidays, notices, emergency alerts straight to parents' WhatsApp. No download." iconColor="text-violet-600 dark:text-violet-400" bgColor="bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900/50" />
                <Bullet icon={UserPlus} title="Admissions Pipeline &amp; Lead Tracking" desc="Log walk-ins, track follow-ups, convert inquiries to enrollments faster." iconColor="text-violet-600 dark:text-violet-400" bgColor="bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900/50" />
                <Bullet icon={Share2} title="Referral &amp; Partner Affiliate Tracking" desc="Give counselors tracking links. Automate commission records." iconColor="text-violet-600 dark:text-violet-400" bgColor="bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900/50" />
                <Bullet icon={Lock} title="Controlled Parent-Teacher Messaging" desc="Let parents contact teachers without exposing personal phone numbers." iconColor="text-violet-600 dark:text-violet-400" bgColor="bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900/50" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <button onClick={onScrollToDemo} className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md cursor-pointer">
                  Join Early Access
                </button>
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <LaptopMockup title="FamFlow · Admissions CRM" status="Live Sync" statusColor="text-teal-400">
                <div className="p-4 text-xs">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">Admissions — 2026-27</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">342 Inquiries · 63.7% Conversion</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">+18% ↑</span>
                  </div>
                  <div className="space-y-2 font-mono">
                    {[
                      { name: 'Priya Mehta — Walk-In', stage: 'Demo Scheduled', color: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300' },
                      { name: 'Kiran Shah — Referral', stage: 'Form Filled', color: 'bg-yellow-50 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-300' },
                      { name: 'Ravi Nair — Online', stage: 'Enrolled ✓', color: 'bg-green-50 dark:bg-emerald-950/50 text-green-700 dark:text-emerald-300' },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-700/60">
                        <span className="text-slate-800 dark:text-slate-200 font-medium">{r.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${r.color}`}>{r.stage}</span>
                      </div>
                    ))}
                    <div className="p-2 bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-900/50 rounded-lg text-center flex items-center justify-center gap-1.5 text-green-700 dark:text-emerald-300 font-semibold">
                      <MessageCircle className="w-3 h-3 text-green-500" /> WhatsApp follow-ups sent automatically ✓
                    </div>
                  </div>
                </div>
              </LaptopMockup>
            </motion.div>
          </motion.div>

          {/* ── PPTFlow ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <LaptopMockup title="PPTFlow · Smart Presentation Studio" status="Interactive PPTs" statusColor="text-amber-400">
                <div className="p-4 text-xs">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white">
                        <Presentation className="w-3.5 h-3.5 text-amber-500" /> Class 11th &amp; 12th · Smart PPTs
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Chapter-Wise Structured Decks · State Board &amp; CBSE</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-mono text-[10px] font-bold">2 Free / Ch</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { chapter: '1. Ionic Equilibrium', sub: 'Chemistry · 6 PPT Decks', unlocked: '2 Decks Free', locked: '4 Locked', state: 'unlocked' },
                      { chapter: '2. Rotational Dynamics', sub: 'Physics · 6 PPT Decks', unlocked: '2 Decks Free', locked: '4 Locked', state: 'unlocked' },
                      { chapter: '3. Chemical Thermodynamics', sub: 'Chemistry · 6 PPT Decks', unlocked: '0 Decks', locked: '6 Locked', state: 'locked' },
                    ].map((c) => (
                      <div key={c.chapter} className="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            {c.chapter}
                            {c.state === 'unlocked' ? (
                              <span className="px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[9px] rounded font-mono font-bold">Preview Ready</span>
                            ) : (
                              <Lock className="w-2.5 h-2.5 text-slate-400" />
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">{c.sub}</div>
                        </div>
                        <div className="text-right font-mono text-[10px]">
                          <span className="font-bold text-amber-600 dark:text-amber-400">{c.unlocked}</span>
                          <span className="text-slate-400 block text-[9px]">{c.locked}</span>
                        </div>
                      </div>
                    ))}
                    <Link
                      to="/pptflow-demo"
                      className="p-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg flex items-center justify-between font-mono text-[10px] hover:border-amber-400 transition-colors group"
                    >
                      <span className="flex items-center gap-1.5 text-amber-900 dark:text-amber-200 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} />
                        Explore Class 11 &amp; 12 Curriculum Decks
                      </span>
                      <span className="font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                        Launch Demo →
                      </span>
                    </Link>
                  </div>
                </div>
              </LaptopMockup>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-bold mb-3 border border-amber-200 dark:border-amber-900/50">
                <Presentation className="w-3.5 h-3.5" /> Smart Classroom Content Engine
              </motion.div>
              <motion.h3 variants={fadeUp} className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
                PPTFlow
              </motion.h3>
              <motion.p variants={fadeUp} className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">
                Make Your Class Smarter with Smart PPTs
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Turn standard classroom walls into immersive smart learning boards with structured, chapter-wise presentation decks designed specifically for Maharashtra State Board &amp; CBSE curricula.
              </motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-7">
                <Bullet
                  icon={Presentation}
                  title="Make Your Class Smarter with Smart PPTs"
                  desc="Interactive, visual teaching decks crafted to help teachers deliver high-retention lectures effortlessly."
                  iconColor="text-amber-600 dark:text-amber-400"
                  bgColor="bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/50"
                />
                <Bullet
                  icon={BookOpen}
                  title="Chapter-Wise Structured Decks"
                  desc="6 curated PPT modules per chapter across Class 11th &amp; 12th — covering theory, concepts, formulas, derivations and MCQs."
                  iconColor="text-amber-600 dark:text-amber-400"
                  bgColor="bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/50"
                />
                <Bullet
                  icon={LayoutTemplate}
                  title="Well-Structured Wall-Projectable Slides"
                  desc="High-contrast typography, crisp scientific diagrams, and step-by-step problem breakdown engineered for smart panels and wall projectors."
                  iconColor="text-amber-600 dark:text-amber-400"
                  bgColor="bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/50"
                />
                <Bullet
                  icon={Sparkles}
                  title="2 Free Decks per Chapter · Full Access on Connect"
                  desc="First 2 PPT decks unlocked for preview (including Ionic Equilibrium &amp; Rotational Dynamics). Unlock all 6 decks by connecting with us."
                  iconColor="text-amber-600 dark:text-amber-400"
                  bgColor="bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/50"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <Link
                  to="/pptflow-demo"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm hover:from-amber-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" /> See Demos &amp; Curriculum Decks
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" /> Connect Us for Full Access
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-[#070D1E] transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader badge="Simple Setup" icon={Zap} title="Up &amp; Running in 24 Hours" subtitle="No IT team needed. Our engineers handle everything on-site." />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', icon: Phone, title: 'Book a Demo', desc: 'Call, WhatsApp, or fill our form. Our team visits your institute within 24 hours.' },
              { step: '02', icon: MapPin, title: 'Site Assessment', desc: 'We evaluate your institute size, class count, and hardware needs in person.' },
              { step: '03', icon: Settings, title: 'Same-Day Setup', desc: 'Software installed. Staff trained. Hardware configured on-site by our engineers.' },
              { step: '04', icon: Rocket, title: 'Go Live!', desc: 'Students enrolled. Parents connected. School runs on autopilot from day one.' },
            ].map((s) => (
              <motion.div key={s.step} variants={fadeUp}
                className="bg-white dark:bg-[#111C38] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-lg dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.1)] transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono font-bold text-2xl text-blue-100 dark:text-blue-900">{s.step}</span>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          SMART HARDWARE
          ══════════════════════════════════════════════════════════════════ */}
      <section id="setups" className="py-20 bg-white dark:bg-[#070D1E] transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader badge="Turnkey Hardware" icon={Monitor} title="Smart Classroom Hardware" subtitle="We supply, install &amp; configure — from biometric devices to full smart classroom setups." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: '/setup/studio', img: poster1, badge: 'STUDIO SETUP', title: 'Online Recording Studio', desc: '4K PTZ cameras, acoustic panels, studio-grade mics and professional lighting for high-end online educators.', tags: ['4K PTZ Camera', 'NRC 0.85 Acoustics', 'Broadcast Audio'] },
              { href: '/setup/lab', img: labPoster1, badge: 'COMPUTER LAB', title: 'Computer Lab Setup', desc: 'High-performance workstations, gigabit networking, enterprise UPS, and CBT-ready infrastructure.', tags: ['i5/i7 Workstations', 'Cisco Gigabit', '10kVA UPS'] },
              { href: '/setup/classroom', img: poster2, badge: 'SMART CLASS', title: 'Smart Classroom', desc: '75-inch 4K interactive flat panels, ceiling audio arrays, AI tracking cameras, and digital podiums.', tags: ['75" 4K IFP', 'AI Track Camera', 'Smart Podium'] },
            ].map((card) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4 }} whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)] transition-all duration-200 group bg-white dark:bg-[#111C38]">
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">{card.badge}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{card.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-[10px] font-bold border border-blue-100 dark:border-blue-900/50">{t}</span>
                    ))}
                  </div>
                  <Link to={card.href} className="text-sm font-semibold text-blue-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                    View Full Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          TRUST STATS (Clean Blue in Light, Sleek Slate Navy in Dark)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-blue-50 dark:bg-[#0A0F1D] border-y border-blue-100 dark:border-slate-800/80 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { icon: GraduationCap, val: '500+', label: 'Institutes Onboarded' },
              { icon: Users, val: '1 Lakh+', label: 'Students Managed' },
              { icon: MessageCircle, val: '99.8%', label: 'WhatsApp Delivery Rate' },
              { icon: Clock, val: '24 hrs', label: 'Go-Live Guarantee' },
            ].map((s) => (
              <motion.div key={s.val} variants={fadeUp} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111C38] shadow-sm flex items-center justify-center border border-blue-100 dark:border-slate-800">
                  <s.icon className="w-6 h-6 text-blue-600 dark:text-sky-400" />
                </div>
                <div className="font-display font-extrabold text-2xl text-blue-600 dark:text-sky-400">{s.val}</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          DEMO FORM
          ══════════════════════════════════════════════════════════════════ */}
      <section id="demo-form" className="py-20 bg-white dark:bg-[#070D1E] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="bg-gradient-to-br from-blue-600 to-sky-500 dark:from-[#0F1D38] dark:to-[#0A1224] dark:border dark:border-sky-500/30 dark:shadow-[0_0_50px_rgba(56,189,248,0.12)] rounded-3xl p-8 sm:p-12 text-white text-center mb-10 transition-all duration-200">
            <motion.div variants={fadeUp} className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden p-1 shadow-md">
                <img src={logoUrl} alt="ACADEX" className="w-full h-full object-contain" />
              </div>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl sm:text-4xl mb-3 text-white">Book a Free On-Site Demo</motion.h2>
            <motion.p variants={fadeUp} className="text-blue-100 dark:text-slate-300 text-base max-w-lg mx-auto">Our engineer visits your institute, shows a live walkthrough, and customises ACADEX — no commitment required.</motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
            className="bg-white dark:bg-[#111C38] border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-xl dark:shadow-[0_8px_48px_rgba(0,0,0,0.4)]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">Demo Booked!</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">Our team will reach you within 24 hours to confirm the visit.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 font-bold hover:bg-green-100 dark:hover:bg-green-900/50 transition-all border border-green-200 dark:border-green-900">
                  <MessageCircle className="w-4 h-4 text-green-500" /> Also chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: 'instituteName', label: 'Institute / School Name', placeholder: 'Apex Academy, Pune', type: 'text', icon: GraduationCap },
                  { id: 'fullName', label: 'Your Full Name', placeholder: 'Prof. / Director Name', type: 'text', icon: Users },
                  { id: 'email', label: 'Official Email', placeholder: 'admin@school.edu', type: 'email', icon: Send },
                  { id: 'mobile', label: 'WhatsApp / Mobile Number', placeholder: '+91 91124 56077', type: 'tel', icon: Phone },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      <f.icon className="w-3.5 h-3.5 text-blue-500" /> {f.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={f.type}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D1A3A] text-slate-900 dark:text-white text-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-500" /> Institute Size
                  </label>
                  <select
                    value={form.institutionSize}
                    onChange={(e) => setForm({ ...form, institutionSize: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D1A3A] text-slate-900 dark:text-white text-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all"
                  >
                    <option>Under 100 Students</option>
                    <option>100–500 Students</option>
                    <option>500–2,000 Students</option>
                    <option>2,000+ Students (Multi-Branch)</option>
                  </select>
                </div>
                {error && (
                  <div className="sm:col-span-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-sm">{error}</div>
                )}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-bold text-base hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? 'Booking your demo…' : '🎓 Book My Free Demo'}
                  </button>
                  <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
                    Or WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">{WHATSAPP_DISPLAY_NUMBER}</a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
