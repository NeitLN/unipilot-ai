"use client"

import { Sidebar } from "./Sidebar"
import { TopNav } from "./TopNav"
import { BottomNav } from "./BottomNav"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full md:pl-72">
        <TopNav />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-16 md:pb-0 focus:outline-none">
          <div className="py-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
