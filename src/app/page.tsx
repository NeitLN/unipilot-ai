"use client"

import { motion } from "framer-motion"
import { Sparkles, Play, ArrowRight, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
      
      {/* Left Column: The Narrative (65%) */}
      <div className="lg:w-[65%] space-y-24">
        
        {/* The Brief */}
        <section className="space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-[11px] font-bold text-[var(--text-muted)] tracking-[0.25em] uppercase"
          >
            Friday, July 8
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] md:text-[56px] font-medium tracking-tight text-[var(--text-ink)] leading-[1.05] font-serif"
          >
            Good morning, Tien.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-2xl mt-6"
          >
            <div className="absolute -left-12 top-1.5 w-6 h-6 bg-[var(--academic-indigo-light)] rounded-full flex items-center justify-center shadow-inner-soft">
              <Sparkles className="w-3.5 h-3.5 text-[var(--academic-indigo)]" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[var(--academic-emerald)] rounded-full border-2 border-[var(--bg-canvas)]" />
            </div>
            <p className="text-[21px] md:text-[25px] leading-[1.5] text-[var(--text-muted)] font-light tracking-[-0.01em]">
              Your energy is <span className="text-[var(--academic-emerald)] font-medium">high</span> today, and your schedule is light. I&apos;ve placed your <span className="text-[var(--text-ink)] font-medium border-b border-[var(--border-subtle)] pb-[2px] cursor-pointer hover:border-[var(--text-ink)] transition-colors">Database Assignment</span> in the 2 PM slot to protect your evening for rest.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-[var(--text-ink)] text-white rounded-[12px] text-[14px] font-medium shadow-premium-soft hover:shadow-premium-hover transition-all"
              >
                Accept Day
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "var(--surface-elevated)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-transparent text-[var(--text-ink)] border-material rounded-[12px] text-[14px] font-medium transition-all shadow-sm"
              >
                Modify
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* The Mission */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative bg-[#111110] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row justify-between md:items-center gap-8 shadow-premium-hover cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold text-white/50 tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full" /> Priority
            </p>
            <h2 className="text-[28px] font-semibold tracking-tight mb-2">Database Assignment</h2>
            <p className="text-[15px] text-white/60 font-medium">Due tonight • 90 mins estimated</p>
          </div>
          <div className="relative z-10 shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
            >
              <Play className="w-5 h-5 fill-black ml-1" />
            </motion.button>
          </div>
        </motion.section>

        {/* The Flow (Timeline) */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-[11px] font-bold text-[var(--text-muted)] tracking-[0.2em] uppercase mb-12">
            Today&apos;s Flow
          </h3>
          
          <div className="relative pl-[42px] border-l border-[var(--border-subtle)] space-y-12">
            
            {/* Timeline Gradient Mask */}
            <div className="absolute left-[-1px] top-0 w-[1px] h-16 bg-gradient-to-b from-[var(--bg-canvas)] to-transparent" />
            
            {/* Item */}
            <div className="relative opacity-40 hover:opacity-60 transition-opacity cursor-default">
              <div className="absolute -left-[46px] top-1.5 w-2 h-2 rounded-full bg-[var(--text-muted)] ring-4 ring-[var(--bg-canvas)]" />
              <div className="flex gap-8 items-baseline">
                <span className="text-[13px] font-medium text-[var(--text-muted)] w-12 shrink-0">08:00</span>
                <div>
                  <h4 className="text-[16px] font-medium text-[var(--text-ink)] line-through decoration-1">Algorithms & Complexity</h4>
                </div>
              </div>
            </div>

            {/* Item - Current */}
            <div className="relative group cursor-pointer">
              <div className="absolute -left-[48px] top-1 w-[12px] h-[12px] rounded-full bg-[var(--academic-indigo)] ring-[6px] ring-[var(--bg-canvas)] shadow-[0_0_16px_rgba(90,87,216,0.6)]" />
              <div className="absolute -left-[48px] top-1 w-[12px] h-[12px] rounded-full bg-[var(--academic-indigo)] animate-ping opacity-40" />
              <div className="flex gap-8 items-baseline group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-[13px] font-semibold text-[var(--academic-indigo)] w-12 shrink-0">10:00</span>
                <div>
                  <h4 className="text-[18px] font-semibold text-[var(--text-ink)] tracking-tight">Requirements Engineering</h4>
                  <p className="text-[14px] text-[var(--text-muted)] mt-1 font-medium">Lab 2 • Active Session</p>
                </div>
              </div>
            </div>

            {/* Item - AI Block */}
            <div className="relative group cursor-pointer">
              <div className="absolute -left-[47px] top-1.5 w-2.5 h-2.5 rounded-full border-[2.5px] border-[var(--academic-indigo)] bg-[var(--bg-canvas)] ring-[6px] ring-[var(--bg-canvas)] group-hover:bg-[var(--academic-indigo-light)] transition-colors" />
              <div className="flex gap-8 items-baseline group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-[13px] font-medium text-[var(--text-muted)] w-12 shrink-0">14:00</span>
                <div className="bg-[var(--surface-elevated)] px-6 py-5 rounded-[20px] shadow-premium-soft border-material -mt-4 w-full max-w-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--academic-indigo)] to-[var(--academic-emerald)] opacity-50" />
                  <h4 className="text-[16px] font-semibold text-[var(--text-ink)] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--academic-indigo)]" /> Deep Work: Database
                  </h4>
                  <p className="text-[13px] text-[var(--text-muted)] mt-1.5 font-medium">90 mins scheduled by AI</p>
                </div>
              </div>
            </div>

            {/* Item - Rest */}
            <div className="relative group cursor-pointer">
              <div className="absolute -left-[47px] top-1.5 w-2.5 h-2.5 rounded-full bg-transparent border-2 border-[var(--academic-emerald)] ring-[6px] ring-[var(--bg-canvas)]" />
              <div className="flex gap-8 items-baseline group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-[13px] font-medium text-[var(--text-muted)] w-12 shrink-0">18:00</span>
                <div>
                  <h4 className="text-[16px] font-medium text-[var(--text-ink)]">Evening Rest</h4>
                  <p className="text-[14px] text-[var(--academic-emerald)] font-medium mt-1">Protected time</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

      </div>

      {/* Right Column: The Pulse (35%) */}
      <div className="lg:w-[35%] lg:pt-16 space-y-16">
        
        {/* Energy */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group cursor-default"
        >
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">State</h4>
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--academic-emerald)] shadow-[0_0_16px_rgba(52,199,89,0.5)]" />
            <span className="text-[36px] font-light text-[var(--text-ink)] tracking-tight">82% Energy</span>
          </div>
          <p className="text-[14px] text-[var(--text-muted)] mt-2 font-medium">Recovery is on track.</p>
        </motion.div>

        {/* Focus */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group cursor-default"
        >
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">Focus Today</h4>
          <div className="text-[36px] font-light text-[var(--text-ink)] tracking-tight">2h 15m</div>
          <div className="flex gap-1 mt-4 max-w-[220px]">
            {[1, 2, 3, 4].map((day) => (
              <div key={day} className="h-[3px] flex-1 rounded-full bg-[var(--text-ink)]" />
            ))}
            <div className="h-[3px] flex-1 rounded-full bg-[var(--border-subtle)]" />
          </div>
          <p className="text-[13px] text-[var(--text-muted)] mt-3 font-medium">🔥 4-day streak</p>
        </motion.div>

        {/* GPA Trajectory */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group cursor-pointer"
        >
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4 flex items-center gap-1.5 group-hover:text-[var(--text-ink)] transition-colors">
            Trajectory <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </h4>
          <div className="text-[36px] font-light text-[var(--text-ink)] tracking-tight">3.42 GPA</div>
          <p className="text-[14px] text-[var(--academic-indigo)] font-medium mt-2 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" /> On track for 3.50 target
          </p>
        </motion.div>

        {/* Upcoming Horizon */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6 flex justify-between items-center">
            Horizon
            <ArrowRight className="w-3.5 h-3.5 cursor-pointer hover:text-[var(--text-ink)] transition-colors" />
          </h4>
          <div className="space-y-6">
            <div className="group cursor-pointer border-l-2 border-[var(--academic-amber)] pl-4">
              <p className="text-[15px] font-medium text-[var(--text-ink)] group-hover:text-[var(--academic-indigo)] transition-colors">Calculus III Prob Set</p>
              <p className="text-[13px] text-[var(--academic-amber)] font-semibold mt-1">Tomorrow</p>
            </div>
            <div className="group cursor-pointer border-l-2 border-[var(--border-subtle)] pl-4">
              <p className="text-[15px] font-medium text-[var(--text-ink)] group-hover:text-[var(--academic-indigo)] transition-colors">Read Chapter 5</p>
              <p className="text-[13px] text-[var(--text-muted)] font-medium mt-1">In 3 days</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
