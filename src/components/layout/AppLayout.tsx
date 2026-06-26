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
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full md:pl-72 relative">
        <TopNav />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-24 md:pb-8 focus:outline-none scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0 }}
              className="py-8 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12"
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
