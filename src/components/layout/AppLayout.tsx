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
    <div className="flex h-screen overflow-hidden bg-[#FCFBF9] relative selection:bg-indigo-100 selection:text-indigo-900">
      {/* Decorative ambient background blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50/40 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-50/40 blur-[120px] pointer-events-none" />
      
      <Sidebar />
      <div className="flex flex-col flex-1 w-full md:pl-[280px] relative z-10">
        <TopNav />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-24 md:pb-8 focus:outline-none scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0, damping: 25 }}
              className="py-8 mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-12"
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
