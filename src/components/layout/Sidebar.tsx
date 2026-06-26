"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  CheckSquare,
  BookOpen,
  PieChart,
  Settings,
  Sparkles
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Analytics", href: "/analytics", icon: PieChart },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-50">
      <div className="flex flex-col flex-grow pt-6 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-6 mb-10">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mr-3">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200">UniPilot AI</span>
        </div>
        <div className="flex flex-col flex-grow px-4 mt-2">
          <nav className="flex-1 space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-semibold"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200 font-medium",
                    "group flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-200"
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300",
                      "flex-shrink-0 w-5 h-5 mr-3 transition-colors duration-200"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex flex-shrink-0 p-4 mb-2">
          <Link
            href="/settings"
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200"
          >
            <Settings className="w-5 h-5 mr-3 text-slate-400" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}
