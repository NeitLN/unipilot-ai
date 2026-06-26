"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  Layout,
  CheckCircle,
  BrainCircuit,
  Calendar,
  Focus,
  Activity,
  HeartPulse,
  Settings,
  Sparkles
} from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Layout },
  { name: "Assignments", href: "/assignments", icon: CheckCircle },
  { name: "AI Planner", href: "/ai-planner", icon: BrainCircuit },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Focus", href: "/focus", icon: Focus },
  { name: "GPA", href: "/gpa", icon: Activity },
  { name: "Burnout", href: "/burnout", icon: HeartPulse },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-50">
      <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-3xl border-r border-slate-200/50 shadow-[4px_0_24px_rgba(15,23,42,0.02)] overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-8 pt-10 pb-8">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center mr-3 shadow-sm border border-indigo-100/50">
            <Sparkles className="w-5 h-5 text-indigo-500" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">UniPilot AI</span>
        </div>
        <div className="flex flex-col flex-grow px-4 mt-2">
          <nav className="flex-1 space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative flex items-center px-4 py-3 text-[15px] rounded-2xl transition-all duration-300",
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-500 hover:text-slate-900 font-medium hover:bg-slate-50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-indigo-50/80 rounded-2xl -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon
                    className={cn(
                      "flex-shrink-0 w-[1.125rem] h-[1.125rem] mr-3 transition-colors duration-300",
                      isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex flex-shrink-0 p-4 mb-4">
          <Link
            href="/settings"
            className="flex items-center w-full px-4 py-3 text-[15px] font-medium text-slate-500 rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
          >
            <Settings className="w-[1.125rem] h-[1.125rem] mr-3 text-slate-400" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}
