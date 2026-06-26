"use client"

import { Search, Command } from "lucide-react"
import { motion } from "framer-motion"

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 lg:px-16 pt-8 pb-4 bg-[var(--bg-canvas)]/40 backdrop-blur-2xl border-b border-transparent">
      <div className="flex items-center lg:hidden">
        <span className="text-[16px] font-bold text-[var(--text-ink)] tracking-tight">UniPilot</span>
      </div>
      
      <div className="flex-1 flex justify-end">
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text-ink)] transition-colors px-3 py-1.5 rounded-[12px] bg-[var(--surface-elevated)] border-material shadow-premium-soft hover:shadow-premium-hover"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="text-[13px] font-medium hidden sm:inline-block">Search</span>
          <div className="hidden sm:flex items-center gap-0.5 bg-[var(--surface-dimmed)] px-1.5 py-0.5 rounded-[6px] border-material ml-2">
            <Command className="w-[10px] h-[10px] text-[var(--text-muted)]" />
            <span className="text-[10px] font-bold text-[var(--text-muted)]">K</span>
          </div>
        </motion.button>
      </div>
    </header>
  )
}
