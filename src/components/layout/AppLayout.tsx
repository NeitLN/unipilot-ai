"use client"

import { Sidebar } from "./Sidebar"
import { TopNav } from "./TopNav"
import { BottomNav } from "./BottomNav"
import { AnimatePresence, motion } from "framer-motion"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-[var(--bg-canvas)] relative bg-mesh-glow">
      <div className="bg-noise" />
      <Sidebar />
      <div className="flex flex-col flex-1 w-full lg:pl-[240px] relative z-10">
        <TopNav />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-32 lg:pb-16 focus:outline-none">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
              className="py-10 mx-auto max-w-[1100px] px-6 lg:px-16"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
