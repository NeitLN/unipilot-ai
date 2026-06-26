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
    <div className="hidden md:flex md:w-[260px] md:flex-col md:fixed md:inset-y-0 z-50 p-6">
      <div className="flex flex-col flex-grow bg-white/60 backdrop-blur-3xl rounded-[32px] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.02)] overflow-hidden h-full">
        <div className="flex items-center flex-shrink-0 px-6 pt-8 pb-6">
          <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mr-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-[19px] font-bold tracking-tight text-slate-800">UniPilot</span>
        </div>
        
        <div className="flex flex-col flex-grow px-3 py-2 overflow-y-auto">
          <nav className="flex-1 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative flex items-center px-4 py-3 text-[14px] rounded-[18px] transition-all duration-300",
                    isActive
                      ? "text-indigo-900 font-semibold"
                      : "text-slate-500 hover:text-slate-800 font-medium hover:bg-white/50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-white shadow-sm border border-slate-100 rounded-[18px] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <item.icon
                    className={cn(
                      "flex-shrink-0 w-[18px] h-[18px] mr-3 transition-colors duration-300",
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

        <div className="flex flex-shrink-0 p-3 mb-2">
          <Link
            href="/settings"
            className="flex items-center w-full px-4 py-3 text-[14px] font-medium text-slate-500 rounded-[18px] hover:bg-white/80 hover:text-slate-800 transition-all duration-200"
          >
            <Settings className="w-[18px] h-[18px] mr-3 text-slate-400" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}
